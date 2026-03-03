"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--ink)] border-b-2 border-[var(--amber)]">
      {/* Parchment-style texture lines */}
      <div className="absolute inset-0 bg-cover-texture pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-[72px] py-20 lg:py-24 text-center">
        {/* Eyebrow: DM Mono, amber, § before */}
        <div
          className={`font-mono text-[10px] tracking-[0.22em] text-[var(--amber)] uppercase mb-7 flex items-center justify-center gap-3 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-serif text-sm" aria-hidden>§</span>
          LawBey — Bahamian Legal Research AI
        </div>

        {/* Headline: Cormorant, white + italic amber */}
        <h1
          className={`font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[0.92] text-balance transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--white)]">Simple, reliable answers</span>
          <br />
          <em className="font-normal italic text-[var(--amber-light)]">about law in The Bahamas</em>
        </h1>

        {/* Descriptor: DM Mono, muted */}
        <div
          className={`font-mono text-[11px] text-white/30 tracking-[0.08em] mt-6 leading-[2] max-w-xl mx-auto transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Lawbey.com · The Commonwealth of The Bahamas
          <br />
          Retrieval-grounded · Accessible · Sovereign
        </div>

        {/* Subtitle */}
        <p
          className={`mt-6 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed text-pretty font-sans transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Get clear explanations of Bahamian law in plain English. Ask questions in
          everyday language, and LawBey retrieves real cases and legal texts, then
          explains them so you can act with confidence.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[600ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="https://beta.lawbey.com"
            className="group flex items-center gap-2 px-8 py-3.5 bg-[var(--amber)] text-[var(--ink)] font-medium rounded-md hover:bg-[var(--amber-light)] transition-all duration-300 text-sm"
          >
            Ask LawBey a Question, Free
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#how-it-works"
            className="group flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 text-sm"
          >
            See How It Works
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-20 transition-all duration-1000 delay-[800ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-white/20 relative overflow-hidden">
              <div className="w-px h-4 bg-[var(--amber)] animate-[slideDown_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
