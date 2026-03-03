"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import { Search, BookOpen, MessageSquare, ArrowRight } from "lucide-react"
import { SectionEyebrow } from "./section-eyebrow"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Ask in plain English",
    description:
      "Type your legal question the way you would ask a friend. No legal jargon required.",
  },
  {
    number: "02",
    icon: Search,
    title: "LawBey searches trusted sources",
    description:
      "Our RAG system retrieves relevant Bahamian cases, statutes, and legal texts in real time.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Get a clear explanation",
    description:
      "LawBey explains the relevant law with citations and follow-up links you can verify.",
  },
  {
    number: "04",
    icon: ArrowRight,
    title: "Follow up until you understand",
    description:
      "Keep asking until you know your practical next steps. No limits on conversation.",
  },
]

export function HowItWorks() {
  const [headerRef, headerVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section id="how-it-works" className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-[var(--parchment)]">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-14 md:mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow>Process</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-balance text-[var(--ink)] pb-6 border-b border-[var(--rule)]">
            How LawBey works
          </h2>
          <p className="mt-4 text-[var(--ink-light)] text-lg max-w-xl leading-relaxed font-sans">
            Our retrieval-augmented system ensures the AI reasons on retrieved
            law, rather than making it up. That is how we reduce hallucinations
            and build trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()
  const Icon = step.icon

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-lg border border-[var(--rule)] bg-white/80 hover:bg-white hover:border-[var(--amber)]/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="text-5xl font-bold text-[var(--ink)]/20 font-mono absolute top-6 right-6 transition-colors duration-300 group-hover:text-[var(--amber)]/20">
        {step.number}
      </span>
      <div className="mb-6 h-10 w-10 rounded-md bg-[var(--ink)]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--amber)]/10">
        <Icon className="h-5 w-5 text-[var(--ink-light)] transition-colors duration-300 group-hover:text-[var(--amber)]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 tracking-tight text-[var(--ink)]">{step.title}</h3>
      <p className="text-sm text-[var(--ink-light)] leading-relaxed font-sans">
        {step.description}
      </p>
    </div>
  )
}
