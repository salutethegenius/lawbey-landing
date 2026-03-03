"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import {
  Shield,
  Scale,
  Building2,
  Home,
  Users,
  Briefcase,
} from "lucide-react"
import { SectionEyebrow } from "./section-eyebrow"

const features = [
  {
    icon: Shield,
    title: "Your rights",
    description:
      "Consumer protections, criminal procedure, and civil claims explained clearly.",
  },
  {
    icon: Scale,
    title: "Court process",
    description:
      "What to expect if a case goes to court, step by step.",
  },
  {
    icon: Building2,
    title: "Starting a business",
    description:
      "Registration, licensing basics, and common compliance steps.",
  },
  {
    icon: Home,
    title: "Property and leases",
    description:
      "Buying, selling, renting, and landlord obligations in The Bahamas.",
  },
  {
    icon: Users,
    title: "Family law",
    description:
      "Marriage, separation, and child custody basics under Bahamian law.",
  },
  {
    icon: Briefcase,
    title: "Work questions",
    description:
      "Employment rights, termination, contracts, NIB and labor basics.",
  },
]

export function Features() {
  const [headerRef, headerVisible] = useAnimateIn<HTMLDivElement>()

  return (
    <section id="features" className="relative py-20 lg:py-[80px] px-6 lg:px-[72px] bg-white">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-14 md:mb-20 text-center transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow>Capabilities</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-balance text-[var(--ink)] pb-6 border-b border-[var(--rule)]">
            What LawBey can help you with
          </h2>
          <p className="mt-4 text-[var(--ink-light)] text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            If it is about Bahamian law, LawBey can usually point you in the
            right direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  const [ref, isVisible] = useAnimateIn<HTMLDivElement>()
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-lg border border-[var(--rule)] bg-[var(--parchment)]/50 hover:bg-[var(--parchment)] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-5 h-10 w-10 rounded-md bg-[var(--ink)]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--amber)]/10 group-hover:scale-105">
        <Icon className="h-5 w-5 text-[var(--ink-light)] transition-colors duration-300 group-hover:text-[var(--amber)]" />
      </div>
      <h3 className="text-base font-semibold mb-2 tracking-tight text-[var(--ink)]">
        {feature.title}
      </h3>
      <p className="text-sm text-[var(--ink-light)] leading-relaxed font-sans">
        {feature.description}
      </p>
    </div>
  )
}
