"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { durationBucket, trackEvent } from "@/lib/analytics"
import {
  mergeSources,
  sourcesFromSsePayload,
  type AnswerSource,
} from "@/lib/ask-sources"
import { BETA_AUTH_URL, BETA_SIGNUP_URL } from "@/lib/constants"
import { markFreeAskUsed, readFreeAskUsed } from "@/lib/free-ask"

const chips = [
  {
    category: "tenant",
    label: "Tenant rights",
    prompt: "What are my rights as a tenant or landlord in the Bahamas?",
  },
  {
    category: "business",
    label: "Starting a business",
    prompt: "What are the legal requirements for starting a business in the Bahamas?",
  },
  {
    category: "constitution",
    label: "Constitution",
    prompt: "Explain the Bahamian Constitution and key citizen rights",
  },
  {
    category: "crime",
    label: "Crime and courts",
    prompt: "What are the criminal penalties under Bahamian law?",
  },
]

type Turn = {
  role: "user" | "assistant"
  content: string
  sources?: AnswerSource[]
  sourcesReady?: boolean
}

export function HomeComposer() {
  const [prompt, setPrompt] = useState("")
  const [turns, setTurns] = useState<Turn[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [gated, setGated] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usedFree, setUsedFree] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const threadRef = useRef<HTMLDivElement>(null)
  const accountPromptTracked = useRef(false)

  const hasThread = turns.length > 0 || gated
  const hasAnswer = turns.some(
    (turn) => turn.role === "assistant" && turn.content.trim(),
  )

  useEffect(() => {
    if (readFreeAskUsed()) setUsedFree(true)
  }, [])

  useEffect(() => {
    const focusAsk = () => {
      if (window.location.hash !== "#ask") return
      textareaRef.current?.focus()
    }
    focusAsk()
    window.addEventListener("hashchange", focusAsk)
    return () => window.removeEventListener("hashchange", focusAsk)
  }, [])

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight })
  }, [turns, gated, isStreaming])

  useEffect(() => {
    if (!gated || accountPromptTracked.current) return
    accountPromptTracked.current = true
    trackEvent("account_prompt_viewed", { placement: "composer" })
  }, [gated])

  function applyAssistant(
    updater: (turn: Turn) => Turn,
  ) {
    setTurns((prev) => {
      const next = [...prev]
      const last = next[next.length - 1]
      if (last?.role === "assistant") {
        next[next.length - 1] = updater(last)
      }
      return next
    })
  }

  function consumeSse(
    chunk: string,
    onDelta: (text: string) => void,
    onSources: (sources: AnswerSource[]) => void,
  ): string {
    const lines = chunk.split("\n")
    const rest = lines.pop() ?? ""
    for (const line of lines) {
      const payload = line.trim()
      if (!payload.startsWith("data:")) continue
      const data = payload.slice(5).trim()
      if (!data || data === "[DONE]") continue
      try {
        const parsed = JSON.parse(data)
        const delta = parsed.choices?.[0]?.delta?.content ?? ""
        if (typeof delta === "string" && delta) onDelta(delta)
        const sources = sourcesFromSsePayload(parsed)
        if (sources.length > 0) onSources(sources)
      } catch {
        // ignore malformed SSE chunks
      }
    }
    return rest
  }

  function dropEmptyAssistant() {
    setTurns((prev) =>
      prev.filter(
        (turn, i) =>
          !(
            i === prev.length - 1 &&
            turn.role === "assistant" &&
            !turn.content
          ),
      ),
    )
  }

  function openGate() {
    markFreeAskUsed()
    setUsedFree(true)
    setGated(true)
  }

  async function ask(question: string, placement: "chip" | "composer") {
    const trimmed = question.trim()
    if (!trimmed || isStreaming || gated) return

    setPrompt("")
    setError(null)
    setTurns((prev) => [...prev, { role: "user", content: trimmed }])
    trackEvent("ask_submitted", { placement })

    if (usedFree) {
      trackEvent("answer_failed", { reason: "gate" })
      openGate()
      return
    }

    setIsStreaming(true)
    setTurns((prev) => [
      ...prev,
      { role: "assistant", content: "", sources: [] },
    ])

    const startedAt = Date.now()
    let collected: AnswerSource[] = []

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: trimmed }],
        }),
      })

      if (res.status === 403) {
        dropEmptyAssistant()
        trackEvent("answer_failed", { reason: "gate" })
        openGate()
        return
      }

      if (!res.ok || !res.body) {
        throw new Error("unavailable")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let full = ""

      const handleSources = (incoming: AnswerSource[]) => {
        collected = mergeSources(collected, incoming)
        applyAssistant((turn) => ({ ...turn, sources: collected }))
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        buffer = consumeSse(
          buffer,
          (delta) => {
            full += delta
            applyAssistant((turn) => ({ ...turn, content: full }))
          },
          handleSources,
        )
      }
      consumeSse(
        `${buffer}\n`,
        (delta) => {
          full += delta
          applyAssistant((turn) => ({ ...turn, content: full }))
        },
        handleSources,
      )

      if (!full.trim()) {
        throw new Error("unavailable")
      }

      applyAssistant((turn) => ({
        ...turn,
        content: full,
        sources: collected,
        sourcesReady: true,
      }))
      trackEvent("answer_completed", {
        duration_bucket: durationBucket(Date.now() - startedAt),
        source_count: collected.length,
      })
      openGate()
    } catch {
      dropEmptyAssistant()
      trackEvent("answer_failed", { reason: "unavailable" })
      setError(
        "LawBey could not reach the knowledge base just now. Try the full app, or ask again in a moment.",
      )
    } finally {
      setIsStreaming(false)
    }
  }

  function handleChip(chip: (typeof chips)[number]) {
    if (hasThread) return
    trackEvent("sample_prompt_clicked", { category: chip.category })
    void ask(chip.prompt, "chip")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    void ask(prompt, "composer")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void ask(prompt, "composer")
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`text-center transition-all duration-500 ${
          hasThread ? "mb-6" : "mb-10"
        }`}
      >
        <h1
          className={`font-serif font-semibold tracking-tight leading-[1.15] text-balance transition-all duration-500 ${
            hasThread
              ? "text-2xl sm:text-3xl"
              : "text-4xl sm:text-5xl md:text-[3.25rem]"
          }`}
        >
          Ask anything about Bahamian law.
        </h1>
        {!hasThread && (
          <p className="mt-5 text-lg text-ink/55 leading-relaxed">
            LawBey retrieves real statutes and cases, then explains them.
          </p>
        )}
      </div>

      {hasThread && (
        <div
          ref={threadRef}
          className="w-full max-h-[min(52vh,28rem)] overflow-y-auto mb-6 space-y-5 text-left"
        >
          {turns.map((turn, i) => (
            <div key={`${turn.role}-${i}`}>
              {turn.role === "user" ? (
                <p className="ml-auto max-w-[90%] w-fit rounded-2xl bg-ink text-parchment px-4 py-2.5 text-sm leading-relaxed">
                  {turn.content}
                </p>
              ) : (
                <div className="text-[15px] leading-relaxed text-ink/85">
                  {turn.content ? (
                    <AnswerText text={turn.content} />
                  ) : (
                    <p className="text-ink/45 text-sm">Searching Bahamian law…</p>
                  )}
                  {turn.sourcesReady ? (
                    <SourcesDisclosure sources={turn.sources ?? []} />
                  ) : null}
                </div>
              )}
            </div>
          ))}

          {gated && (
            <div className="rounded-2xl border border-ink/10 bg-white px-5 py-6 text-center shadow-[0_8px_40px_rgba(17,24,39,0.06)]">
              <p className="font-serif text-xl font-semibold tracking-tight">
                {hasAnswer
                  ? "Save this research"
                  : "Create a free account to continue"}
              </p>
              <p className="mt-2 text-sm text-ink/55 leading-relaxed">
                {hasAnswer
                  ? "Create a free account to save this research and continue."
                  : "This device already used its free homepage question. Create a free account to keep researching in the full app."}
              </p>
              <a
                href={BETA_SIGNUP_URL}
                onClick={() =>
                  trackEvent("signup_cta_clicked", {
                    placement: "composer",
                    destination: "beta",
                  })
                }
                className="mt-5 inline-flex items-center justify-center px-5 py-2.5 bg-ink text-parchment text-sm font-medium rounded-md hover:bg-ink/90 transition-colors"
              >
                Create a free account
              </a>
            </div>
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative w-full rounded-2xl border border-ink/10 bg-white shadow-[0_8px_40px_rgba(17,24,39,0.06)] focus-within:border-amber/40 focus-within:shadow-[0_8px_40px_rgba(200,146,42,0.12)] transition-all duration-300"
      >
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            gated
              ? "Continue in the full app…"
              : hasThread
                ? "Ask a follow-up…"
                : "Ask about Bahamian law…"
          }
          rows={hasThread ? 2 : 3}
          disabled={isStreaming || gated}
          className="w-full resize-none bg-transparent px-5 pt-4 pb-14 text-base text-ink placeholder:text-ink/35 outline-none leading-relaxed disabled:opacity-60"
          aria-label="Ask about Bahamian law"
        />
        <button
          type="submit"
          disabled={isStreaming || gated}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber text-ink hover:bg-amber-light transition-colors duration-300 disabled:opacity-50"
          aria-label="Ask LawBey"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-ink/60 leading-relaxed">
          {error}{" "}
          <a href={BETA_AUTH_URL} className="underline underline-offset-2 text-ink">
            Open LawBey
          </a>
        </p>
      )}

      {!hasThread && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => handleChip(chip)}
              className="px-3.5 py-1.5 rounded-full border border-ink/10 bg-white/70 text-sm text-ink/70 hover:text-ink hover:border-ink/20 hover:bg-white transition-all duration-300"
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}

      <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-ink/40">
        <span>Built in Freeport</span>
        <span>Retrieved Bahamian sources</span>
        <span>One question without an account</span>
        <Link href="/privacy" className="underline underline-offset-2 hover:text-ink/60">
          Privacy
        </Link>
        <Link href="/terms" className="underline underline-offset-2 hover:text-ink/60">
          Terms
        </Link>
      </p>
    </div>
  )
}

function SourcesDisclosure({ sources }: { sources: AnswerSource[] }) {
  return (
    <details className="mt-4 rounded-xl border border-ink/10 bg-white/70 px-4 py-3">
      <summary className="cursor-pointer text-sm font-medium text-ink/70">
        {sources.length > 0
          ? `Sources (${sources.length})`
          : "Sources"}
      </summary>
      {sources.length === 0 ? (
        <p className="mt-3 text-sm text-ink/50 leading-relaxed">
          No sources were returned for this answer. Treat it as unverified
          until you can check the law yourself.
        </p>
      ) : (
        <ul className="mt-3 space-y-3">
          {sources.map((source) => (
            <li key={source.name} className="text-sm text-ink/70 leading-relaxed">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  {source.name}
                </a>
              ) : (
                <span className="font-medium text-ink">{source.name}</span>
              )}
              {source.excerpt ? (
                <p className="mt-1 text-ink/50">{source.excerpt}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </details>
  )
}

function AnswerText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <p className="whitespace-pre-wrap">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}
