"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

const BETA_URL = "https://beta.lawbey.com"
const FREE_USED_KEY = "lawbey_free_used"

const chips = [
  {
    label: "Tenant rights",
    prompt: "What are my rights as a tenant or landlord in the Bahamas?",
  },
  {
    label: "Starting a business",
    prompt: "What are the legal requirements for starting a business in the Bahamas?",
  },
  {
    label: "Constitution",
    prompt: "Explain the Bahamian Constitution and key citizen rights",
  },
  {
    label: "Crime and courts",
    prompt: "What are the criminal penalties under Bahamian law?",
  },
]

type Turn = {
  role: "user" | "assistant"
  content: string
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

  const hasThread = turns.length > 0 || gated

  useEffect(() => {
    try {
      if (localStorage.getItem(FREE_USED_KEY) === "1") {
        setUsedFree(true)
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight })
  }, [turns, gated, isStreaming])

  function applyDelta(snapshot: string) {
    setTurns((prev) => {
      const next = [...prev]
      const last = next[next.length - 1]
      if (last?.role === "assistant") {
        next[next.length - 1] = { role: "assistant", content: snapshot }
      }
      return next
    })
  }

  function consumeSse(chunk: string, onDelta: (text: string) => void): string {
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
        if (delta) onDelta(delta)
      } catch {
        // ignore malformed SSE chunks
      }
    }
    return rest
  }

  async function ask(question: string) {
    const trimmed = question.trim()
    if (!trimmed || isStreaming || gated) return

    setPrompt("")
    setError(null)
    setTurns((prev) => [...prev, { role: "user", content: trimmed }])

    if (usedFree) {
      setGated(true)
      return
    }

    setIsStreaming(true)
    setTurns((prev) => [...prev, { role: "assistant", content: "" }])

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: trimmed }],
        }),
      })

      if (res.status === 403) {
        setTurns((prev) =>
          prev.filter((turn, i) => !(i === prev.length - 1 && turn.role === "assistant" && !turn.content)),
        )
        setGated(true)
        setUsedFree(true)
        try {
          localStorage.setItem(FREE_USED_KEY, "1")
        } catch {
          // ignore
        }
        return
      }

      if (!res.ok || !res.body) {
        throw new Error("unavailable")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let full = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        buffer = consumeSse(buffer, (delta) => {
          full += delta
          applyDelta(full)
        })
      }
      consumeSse(`${buffer}\n`, (delta) => {
        full += delta
        applyDelta(full)
      })

      if (!full.trim()) {
        throw new Error("unavailable")
      }

      try {
        localStorage.setItem(FREE_USED_KEY, "1")
      } catch {
        // ignore
      }
      setUsedFree(true)
    } catch {
      setTurns((prev) =>
        prev.filter((turn, i) => !(i === prev.length - 1 && turn.role === "assistant" && !turn.content)),
      )
      setError(
        "LawBey could not reach the knowledge base just now. Try the full app, or ask again in a moment.",
      )
    } finally {
      setIsStreaming(false)
    }
  }

  function handleChip(value: string) {
    if (hasThread) return
    void ask(value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    void ask(prompt)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void ask(prompt)
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
                </div>
              )}
            </div>
          ))}

          {gated && (
            <div className="rounded-2xl border border-ink/10 bg-white px-5 py-6 text-center shadow-[0_8px_40px_rgba(17,24,39,0.06)]">
              <p className="font-serif text-xl font-semibold tracking-tight">
                Create an account to keep going
              </p>
              <p className="mt-2 text-sm text-ink/55 leading-relaxed">
                You’ve seen how LawBey works. Sign in for unlimited questions
                and the full research workspace.
              </p>
              <a
                href={BETA_URL}
                className="mt-5 inline-flex items-center justify-center px-5 py-2.5 bg-ink text-parchment text-sm font-medium rounded-md hover:bg-ink/90 transition-colors"
              >
                Continue to LawBey
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
          <a href={BETA_URL} className="underline underline-offset-2 text-ink">
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
              onClick={() => handleChip(chip.prompt)}
              className="px-3.5 py-1.5 rounded-full border border-ink/10 bg-white/70 text-sm text-ink/70 hover:text-ink hover:border-ink/20 hover:bg-white transition-all duration-300"
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}
    </div>
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
