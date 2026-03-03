"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import { User, Building, GraduationCap, Gavel } from "lucide-react"
import { SectionEyebrow } from "./section-eyebrow"

const personas = [
  {
    icon: User,
    label: "Individuals",
    description: "Curious people who want to understand their rights under Bahamian law.",
  },
  {
    icon: Building,
    label: "Small Business Owners",
    description: "Entrepreneurs who need quick legal clarity before consulting a lawyer.",
  },
  {
    icon: Gavel,
    label: "Paralegals & Lawyers",
    description: "Legal professionals who want faster, citation-backed research.",
  },
  {
    icon: GraduationCap,
    label: "Students & Researchers",
    description: "Anyone learning or writing about Bahamian law and legal systems.",
  },
]

export function WhoUses() {
  const [headerRef, headerVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section id="who-uses" className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--parchment)]">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-14 md:mb-20 text-center transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow>For Everyone</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-balance text-[var(--ink)] pb-6 border-b border-[var(--rule)]">
            Who uses LawBey
          </h2>
          <p className="mt-4 text-[var(--ink-light)] text-lg max-w-xl mx-auto leading-relaxed font-sans">
            Start free, upgrade if you need professional features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, i) => (
            <PersonaCard key={persona.label} persona={persona} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PersonaCard({
  persona,
  index,
}: {
  persona: (typeof personas)[number]
  index: number
}) {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()
  const Icon = persona.icon

  return (
    <div
      ref={ref}
      className={`group text-center p-8 rounded-lg border border-[var(--rule)] bg-white/70 hover:bg-white transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-[var(--ink)]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--amber)]/10 group-hover:scale-110">
        <Icon className="h-5 w-5 text-[var(--ink-light)] transition-colors duration-300 group-hover:text-[var(--amber)]" />
      </div>
      <h3 className="font-semibold mb-2 text-[var(--ink)]">{persona.label}</h3>
      <p className="text-sm text-[var(--ink-light)] leading-relaxed font-sans">
        {persona.description}
      </p>
    </div>
  )
}
