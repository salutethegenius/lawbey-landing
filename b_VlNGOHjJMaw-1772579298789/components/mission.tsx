"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import { SectionEyebrow } from "./section-eyebrow"

export function Mission() {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section id="mission" className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow>Our Mission</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-balance leading-tight text-[var(--ink)]">
            Put Bahamian law in the hands of every Bahamian
          </h2>
          <p className="text-[var(--ink-light)] text-lg leading-relaxed text-pretty font-sans">
            The law shapes daily life, but most people never see the actual rules
            that affect them. LawBey exists so people make choices with clarity,
            not confusion. Built locally, grown with the country.
          </p>
        </div>
      </div>
    </section>
  )
}
