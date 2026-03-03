"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import { SectionEyebrow } from "./section-eyebrow"

const trustPoints = [
  "Retrieval first, then AI explains the retrieved material",
  "Answers are traceable, citable, and easier to verify",
  "Real Bahamian cases and statutes, not pattern guessing",
  "Trust matters in law. Grounded answers earn trust.",
]

const disclaimers = [
  "Not legal advice; talk to a lawyer for decisions that matter.",
  "Not a courtroom representative; you still need a lawyer for hearings.",
  "Limited to Bahamian law; does not provide reliable answers for other jurisdictions.",
  "Not perfect; AI can err, so double-check important points with official sources.",
]

export function Trust() {
  const [leftRef, leftVisible] = useAnimateIn<HTMLDivElement>()
  const [rightRef, rightVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--amber-wash)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SectionEyebrow>Grounded AI</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-balance text-[var(--ink)]">
              Why grounded AI matters
            </h2>
            <p className="text-[var(--ink-light)] leading-relaxed mb-8 font-sans">
              Most legal AI tools guess from patterns, which can produce
              persuasive but incorrect results. LawBey uses retrieval first, then
              AI to explain the retrieved material.
            </p>

            <div className="flex flex-col gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-sm font-sans">
                  <CheckCircle2 className="h-4 w-4 text-[var(--amber)] mt-0.5 shrink-0" />
                  <span className="text-[var(--ink)]/90">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 ${
              rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SectionEyebrow>Transparency</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-balance text-[var(--ink)]">
              What LawBey is not
            </h2>
            <p className="text-[var(--ink-light)] leading-relaxed mb-8 font-sans">
              We believe in clarity about what this tool can and cannot do. Here
              is what you should know.
            </p>

            <div className="flex flex-col gap-4">
              {disclaimers.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm font-sans">
                  <AlertTriangle className="h-4 w-4 text-[var(--stone)] mt-0.5 shrink-0" />
                  <span className="text-[var(--ink)]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
