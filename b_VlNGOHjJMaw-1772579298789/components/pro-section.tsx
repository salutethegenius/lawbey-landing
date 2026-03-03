"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import Link from "next/link"
import { ArrowUpRight, Check, Zap } from "lucide-react"

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
    <section id="pro" className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--ink)]">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-2xl border border-[var(--rule-amber)] bg-[var(--ink-mid)] p-10 md:p-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--amber)]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--amber)]/30 bg-[var(--amber)]/10">
                <Zap className="h-3 w-3 text-[var(--amber-light)]" />
                <span className="font-mono text-xs font-medium text-[var(--amber-light)] tracking-wide">
                  Pro
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-balance text-white">
                LawBey Pro
              </h2>
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
                <Link
                  href="https://beta.lawbey.com"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--amber)] text-[var(--ink)] font-medium rounded-md hover:bg-[var(--amber-light)] transition-all duration-300 text-sm font-sans"
                >
                  Choose Pro
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="https://beta.lawbey.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 text-sm font-sans"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm font-medium text-white/40 uppercase tracking-wide mb-2">
                Everything in Pro
              </p>
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-[var(--amber)]/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-[var(--amber-light)]" />
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
