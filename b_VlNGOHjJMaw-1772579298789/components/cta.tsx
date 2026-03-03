"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionEyebrow } from "./section-eyebrow"

export function CTA() {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--ink)]">
      <div className="mx-auto max-w-4xl text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow dark>Get Started</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-balance text-white">
            Get started today
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans">
            No signup required for the free layer. No credit card needed. For
            firms and professionals, LawBey Pro brings faster research and
            document workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://beta.lawbey.com"
              className="group flex items-center gap-2 px-8 py-3.5 bg-[var(--amber)] text-[var(--ink)] font-medium rounded-md hover:bg-[var(--amber-light)] transition-all duration-300 text-sm font-sans"
            >
              Start Chatting
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#pro"
              className="flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 text-sm font-sans"
            >
              See Pro Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
