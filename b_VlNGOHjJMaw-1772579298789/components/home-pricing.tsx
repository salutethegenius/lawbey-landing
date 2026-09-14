"use client"

import { Check } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { BETA_SIGNUP_URL, PRO_WAITLIST_MAILTO } from "@/lib/constants"

const freeFeatures = [
  "One homepage question without an account",
  "Free account to save research and keep asking in the full app",
  "Grounded answers from retrieved Bahamian statutes and cases",
  "Sources shown when the retrieval model returns them",
]

const proFeatures = [
  "Unlimited queries with no throttle",
  "Unlimited document uploads",
  "Full corpus access — all collections",
  "Priority response speed",
  "Secure firm workspace",
  "Early access to new features",
]

export function HomePricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4 text-center">
          Pricing
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center text-balance">
          Start free. Grow when you need more.
        </h2>
        <p className="mt-4 text-ink/55 text-center max-w-xl mx-auto leading-relaxed">
          Free is one homepage question, then a free account for ongoing
          research. Pro is the paid workspace for firms — not available yet.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-ink/10 bg-white p-8 md:p-10 shadow-[0_8px_40px_rgba(17,24,39,0.04)]">
            <p className="text-xs font-medium tracking-wide uppercase text-ink/45">
              Free
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-semibold tracking-tight">
                $0
              </span>
            </div>
            <p className="mt-3 text-sm text-ink/55 leading-relaxed">
              Ask once on this page with no account. Create a free account to
              save that research and continue in the full app. Homepage asks
              reset after 24 hours on the same browser.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15">
                    <Check className="h-3 w-3 text-amber" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={BETA_SIGNUP_URL}
              onClick={() =>
                trackEvent("signup_cta_clicked", {
                  placement: "pricing",
                  destination: "beta",
                })
              }
              className="mt-10 inline-flex w-full items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-medium text-parchment hover:bg-ink/90 transition-colors"
            >
              Create a free account
            </a>
          </article>

          <article className="rounded-2xl border border-ink/10 bg-white p-8 md:p-10 shadow-[0_8px_40px_rgba(17,24,39,0.04)] relative overflow-hidden">
            <div className="absolute top-6 right-6 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-amber">
              Coming soon
            </div>
            <p className="text-xs font-medium tracking-wide uppercase text-ink/45">
              LawBey Pro
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-semibold tracking-tight">
                $39
              </span>
              <span className="text-sm text-ink/45">/ month</span>
            </div>
            <p className="mt-3 text-sm text-ink/55 leading-relaxed">
              Unlimited research and document workflows for Bahamian firms,
              attorneys, and serious operators. Join the waitlist and we will
              write when it opens.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15">
                    <Check className="h-3 w-3 text-amber" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={PRO_WAITLIST_MAILTO}
              onClick={() =>
                trackEvent("pro_waitlist_clicked", { placement: "pricing" })
              }
              className="mt-10 inline-flex w-full items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-medium text-ink hover:border-ink/30 transition-colors"
            >
              Join the Pro waitlist
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
