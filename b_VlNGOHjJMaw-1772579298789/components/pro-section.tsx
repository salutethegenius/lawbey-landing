"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

const proFeatures = [
  "Unlimited document uploads",
  "Unlimited queries with no throttles",
  "Full Bahamian research database",
  "Priority responses for faster processing",
  "Early access to new features",
  "Secure collaboration for firm teams",
]

export function ProSection() {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section
      id="pro"
      className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--ink)]"
    >
      {/* Amber rule echoing logo-system sections */}
      <div className="mx-auto max-w-5xl mb-6 h-px bg-[var(--amber)]/35" />
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-2xl border border-[var(--rule-amber)] bg-[var(--ink-mid)] p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--amber)]/12 blur-[110px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Eyebrow styled from logo-system .eyebrow */}
              <div className="mb-5 flex items-center gap-2.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--amber)]">
                <span className="font-serif text-[14px] leading-none text-[var(--amber)]">§</span>
                <span>LawBey Pro</span>
              </div>

              {/* LawBey wordmark + PRO badge, echoing logo-system Pro variant */}
              <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-2">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                  Law
                </h2>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal italic tracking-tight text-[var(--amber-light)]">
                  Bey
                </h2>
                <div className="inline-flex h-8 items-center rounded-md px-3 bg-[var(--amber)]">
                  <span className="font-mono text-xs font-medium tracking-[0.1em] text-white">
                    PRO
                  </span>
                </div>
              </div>
              <p className="mb-6 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                Professional legal research · $39/mo
              </p>
              <p className="text-white/60 leading-relaxed mb-6 font-sans">
                Professional legal research and document workflows, built for
                Bahamian firms and attorneys. Compress hours of research into
                minutes.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">$39</span>
                <span className="text-white/50 text-sm font-sans">/ month</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--amber)] px-6 py-3 font-sans text-sm font-medium text-[var(--ink)] transition-all duration-300 cursor-default"
                  disabled
                >
                  Coming soon
                </button>
                <Link
                  href="https://beta.lawbey.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  Start forever free account
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm font-medium text-white/40 uppercase tracking-wide mb-2">
                Everything in Pro
              </p>
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--amber)]/15 ring-1 ring-[var(--amber)]/40">
                    <Check className="h-3 w-3 text-[var(--amber-light)]" strokeWidth={2.4} />
                  </div>
                  <span className="text-sm text-white/85 font-sans">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
