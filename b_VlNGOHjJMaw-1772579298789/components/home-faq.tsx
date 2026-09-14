"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HomeCloseCta } from "@/components/home-close-cta"

const items = [
  {
    q: "What is LawBey?",
    a: "LawBey is an AI research tool built for Bahamian law. You ask in plain English. LawBey retrieves real statutes, cases, and legal texts, then explains them so you can act with more clarity.",
  },
  {
    q: "Is this legal advice?",
    a: "No. LawBey provides general information about Bahamian law for educational and research purposes only. It is not a lawyer and does not represent you. For decisions that matter, consult a qualified Bahamian attorney.",
  },
  {
    q: "What law does LawBey cover?",
    a: "Bahamian law. Retrieval is grounded in indexed collections such as statutes, the Constitution, court material, revenue guidance, and related Bahamian sources. It is not built to answer reliably for other jurisdictions.",
  },
  {
    q: "How does a free question work?",
    a: "On this homepage you can ask one question without an account and see a grounded answer with sources when retrieval returns them. After that answer, you are asked to create a free account to save the research and continue. The same browser is limited to one homepage question every 24 hours. The full app at beta.lawbey.com is the free account workspace — not LawBey Pro.",
  },
  {
    q: "What is LawBey Pro?",
    a: "Pro is a coming paid plan for firms, attorneys, and operators who need unlimited queries, document uploads, full corpus access, faster responses, and a secure workspace. It is listed at $39/month and is not for sale yet. Use Join the Pro waitlist on this page to tell us you want it. A free account is separate from Pro.",
  },
  {
    q: "How do answers stay grounded?",
    a: "Retrieval first, then explanation. LawBey searches the indexed Bahamian corpus before it writes. When the retrieval model returns sources, they are shown with the answer. If no sources arrive, the answer says so — it is not implied to be cited.",
  },
  {
    q: "Can I use LawBey in my own product / via API?",
    a: "Yes, by request. Programmatic access is offered through MCP for agents, firms, and products. Use Request access in the API section to get in touch.",
  },
  {
    q: "Who is it for?",
    a: "Individuals who need to understand their rights, small business owners, students and researchers, and legal professionals who want faster, citation-backed Bahamian research.",
  },
]

export function HomeFaq() {
  return (
    <section id="faq" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-amber font-mono mb-4 text-center">
          FAQ
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center text-balance">
          Questions, answered.
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-12 border-t border-ink/10"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="border-ink/10"
            >
              <AccordionTrigger className="text-base font-medium text-ink hover:no-underline py-5 [&[data-state=open]]:text-ink [&_svg]:text-ink/40">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/60 leading-relaxed text-[15px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <HomeCloseCta
          placement="faq"
          eyebrow="Keep going"
          title="Ask a free question, then save the research."
          body="One homepage question needs no account. Create a free account after the answer to continue in the full app."
        />
      </div>
    </section>
  )
}
