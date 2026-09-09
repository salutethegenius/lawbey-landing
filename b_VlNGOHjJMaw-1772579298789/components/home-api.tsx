const REQUEST_MAILTO =
  "mailto:hello@lawbey.com?subject=LawBey%20API%20/%20MCP%20access"

export function HomeApi() {
  return (
    <section id="api" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4">
          API Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-balance">
          LawBey in your own products.
        </h2>
        <p className="mt-5 text-ink/55 leading-relaxed text-pretty">
          Programmatic Bahamian legal research for agents, firms, and
          applications — via MCP. Access is by request, not a public key
          dump.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href={REQUEST_MAILTO}
            className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-parchment hover:bg-ink/90 transition-colors"
          >
            Request access
          </a>
        </div>
      </div>
    </section>
  )
}
