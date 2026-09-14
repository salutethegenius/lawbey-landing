import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HomeNav } from "@/components/home-nav"
import { HomeFooter } from "@/components/home-footer"

const BETA_URL = "https://beta.lawbey.com"
const KEMIS_URL = "https://thekemisgroup.com"
const KENNETH_URL = "https://kennethmoncur.com"

const pillars = [
  {
    kicker: "01",
    title: "Law in every hand",
    body: "The rules that shape tenancy, work, business, and citizenship are public. Understanding them should not depend on who you know, or what you can pay for an hour.",
  },
  {
    kicker: "02",
    title: "Built on the ground",
    body: "Software for The Bahamas should come from people who live with the gaps — developers here, who see where public information, legal research, and everyday tools fall short.",
  },
  {
    kicker: "03",
    title: "Trusted, and built to last",
    body: "LawBey retrieves real Bahamian statutes and cases before it explains them. The work is to close those gaps with technology you can inspect, return to, and rely on.",
  },
]

export function AboutPage() {
  return (
    <main className="min-h-screen bg-parchment text-ink flex flex-col">
      <HomeNav />

      <article className="flex-1">
        <header className="px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-4xl leading-[1.08]">
              Put Bahamian law in every Bahamian hand.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl text-pretty">
              LawBey exists so you can ask about the law that governs this
              country — in plain English — and meet the statute itself, not a
              guess from somewhere else.
            </p>
          </div>
        </header>

        <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />

        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] gap-12 lg:gap-20 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
                Why we built it
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                The law was already public. Access was not.
              </h2>
              <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-ink/70 max-w-xl">
                <p>
                  A tenancy dispute, a new shop, a question about the
                  Constitution — these are ordinary Bahamian problems. The
                  answers sit in statutes and judgments most people never
                  open. LawBey was created to close that distance: ask in
                  everyday language, retrieve the real text, then explain it.
                </p>
                <p>
                  It is also a bet on where software for this country should
                  come from. Too much of what we use is adapted from somewhere
                  else. LawBey is built by developers on the ground, who know
                  the real gaps in tech here, and who are aiming to close them
                  with tools that can be trusted and built to last.
                </p>
                <p>
                  This is not a lawyer. It is research infrastructure for The
                  Bahamas — for citizens first, and for the professionals who
                  serve them.
                </p>
              </div>
            </div>

            <figure className="order-1 lg:order-2 lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-2xl bg-ink/5 aspect-[4/5]">
                <Image
                  src="/about/kenneth-c-moncur.jpg"
                  alt="Kenneth C. Moncur, founder of LawBey, seated in a studio portrait."
                  width={819}
                  height={1024}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-1 max-w-md">
                <span className="font-serif text-xl font-semibold tracking-tight">
                  Kenneth C. Moncur
                </span>
                <span className="text-sm text-ink/50 leading-relaxed">
                  Founder, LawBey
                </span>
                <span className="text-sm text-ink/50 leading-relaxed">
                  Group Managing Director, Kemis Group of Companies Inc
                </span>
                <span className="text-xs tracking-[0.14em] uppercase text-ink/40 font-mono mt-1">
                  Freeport, Grand Bahama
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />

        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-10">
              How we work
            </p>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {pillars.map((pillar) => (
                <div key={pillar.kicker}>
                  <p className="text-xs tracking-[0.18em] uppercase text-amber font-mono mb-3">
                    {pillar.kicker}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />

        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
              From Freeport
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              A KGC product, built for The Bahamas.
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-ink/70">
              <p>
                Kenneth C. Moncur is doing that work as founder of LawBey and
                Group Managing Director of Kemis Group of Companies Inc. LawBey
                is a product of KGC — made for Bahamian law, from Freeport,
                Grand Bahama.
              </p>
              <p>
                KGC builds digital infrastructure for governments, firms, and
                citizens who need information they can actually use. LawBey is
                the legal research piece of that: retrieval-grounded answers,
                written so a person without a law library still has a way in.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={BETA_URL}
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-parchment hover:bg-ink/90 transition-colors"
              >
                Ask LawBey
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <Outbound href={KEMIS_URL}>The Kemis Group</Outbound>
              <Outbound href={KENNETH_URL}>kennethmoncur.com</Outbound>
              <Link
                href="/desk"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-ink/15 bg-white/50 px-5 py-2.5 text-sm font-medium text-ink/80 hover:text-ink hover:border-ink/30 transition-colors"
              >
                Research Desk
              </Link>
            </div>
          </div>
        </section>
      </article>

      <HomeFooter />
    </main>
  )
}

function Outbound({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-1.5 rounded-md border border-ink/15 bg-white/50 px-5 py-2.5 text-sm font-medium text-ink/80 hover:text-ink hover:border-ink/30 transition-colors"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  )
}
