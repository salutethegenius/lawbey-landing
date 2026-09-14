"use client"

import Link from "next/link"
import { BETA_SIGNUP_URL } from "@/lib/constants"
import { trackEvent } from "@/lib/analytics"

export function HomeCloseCta({
  placement,
  eyebrow,
  title,
  body,
}: {
  placement: "tour" | "faq"
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="mt-14 rounded-2xl border border-ink/10 bg-white px-6 py-8 text-center shadow-[0_8px_40px_rgba(17,24,39,0.04)]">
      <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-3">
        {eyebrow}
      </p>
      <h3 className="font-serif text-2xl font-semibold tracking-tight text-balance">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink/55 leading-relaxed max-w-lg mx-auto">
        {body}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/#ask"
          className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-parchment hover:bg-ink/90 transition-colors"
        >
          Ask a free question
        </Link>
        <a
          href={BETA_SIGNUP_URL}
          onClick={() =>
            trackEvent("signup_cta_clicked", {
              placement,
              destination: "beta",
            })
          }
          className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink/80 hover:text-ink hover:border-ink/30 transition-colors"
        >
          Create a free account
        </a>
      </div>
    </div>
  )
}
