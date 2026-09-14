import { HomeNav } from "@/components/home-nav"
import { HomeFooter } from "@/components/home-footer"

export const LEGAL_EFFECTIVE_DATE = "14 September 2026"

export function LegalLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-parchment text-ink flex flex-col">
      <HomeNav />
      <article className="flex-1 px-6 pt-28 pb-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink/45">
            Effective {LEGAL_EFFECTIVE_DATE}
          </p>
          <div className="mt-12 flex flex-col gap-10">{children}</div>
        </div>
      </article>
      <HomeFooter />
    </main>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-ink/75">
        {children}
      </div>
    </section>
  )
}
