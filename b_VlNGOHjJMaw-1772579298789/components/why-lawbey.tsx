"use client"

import { useEffect } from "react"
import Link from "next/link"

// WhyLawBey section: explains how LawBey differs from standard AI tools.
// Ported from the standalone HTML snippet into a React/Next.js component.

export function WhyLawBey() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const animatedIds = [
      "be1",
      "bh1",
      "br1",
      "bc1",
      "bc2",
      "bc3",
      "re1",
      "rh1",
      "rs1",
      "ragCompare",
      "ragAnalogy",
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.12 }
    )

    animatedIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* PART A — The Before */}
      <section className="before-section" id="why-lawbey">
        <div className="before-inner">
          <div className="before-statement">
            {/* Left: headline */}
            <div>
              <div className="before-eyebrow" id="be1">
                For most Bahamians
              </div>
              <h2 className="before-headline" id="bh1">
                The law was
                <br />
                always <em>there.</em>
                <br />
                The access
                <br />
                was <em>not.</em>
              </h2>
            </div>

            {/* Right: body copy */}
            <div className="before-right" id="br1">
              <p className="before-body">
                Before LawBey, finding a clear answer to a legal question in the Bahamas meant one
                thing:{" "}
                <strong>paying a lawyer to ask it for you.</strong> Not because the law was secret —
                but because it was scattered across PDFs on government websites, buried in gazette
                notices, and indexed in systems built for professionals, not people.
              </p>
              <p className="before-body" style={{ marginTop: 18 }}>
                There was no search. No plain-language explanation. No tool that could look at a
                Bahamian statute and tell you — in clear terms — what it meant for your situation.
              </p>
              <div className="before-note">
                LawBey is the first AI research tool built specifically for Bahamian law. Not
                adapted from a foreign platform. Not trained on US or UK statutes. Built here, for
                here.
              </div>
            </div>
          </div>

          {/* Before cards — the three old realities */}
          <div className="before-cards">
            <div className="before-card" id="bc1" style={{ transitionDelay: "0s" }}>
              <div className="before-card-num">Before · 01</div>
              <div className="before-card-title">Call a lawyer</div>
              <div className="before-card-desc">
                The most reliable way to get a legal answer was to pay for professional time — for
                questions that often had clear statutory answers that should have been freely
                accessible.
              </div>
              <div className="before-card-cost">
                $200–$400 per hour · For a question with a known answer
              </div>
            </div>

            <div className="before-card" id="bc2" style={{ transitionDelay: "0.12s" }}>
              <div className="before-card-num">Before · 02</div>
              <div className="before-card-title">Search the government site</div>
              <div className="before-card-desc">
                laws.bahamas.gov.bs exists — but navigating hundreds of Acts across dozens of
                categories, in PDF format, without full-text search, is a skill in itself. Hours
                spent. Often fruitless.
              </div>
              <div className="before-card-cost">
                Hours of searching · Technical vocabulary required
              </div>
            </div>

            <div className="before-card" id="bc3" style={{ transitionDelay: "0.24s" }}>
              <div className="before-card-num">Before · 03</div>
              <div className="before-card-title">Use a general AI</div>
              <div className="before-card-desc">
                Tools like ChatGPT will answer confidently — but they were not trained on Bahamian
                statutes. They generate plausible-sounding responses with no citations and no
                grounding in the actual law of this country.
              </div>
              <div className="before-card-cost">
                Confident · Unverifiable · Often wrong on Bahamian specifics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition strip */}
      <div className="transition-strip">
        <span className="transition-label">LawBey changes this</span>
        <span className="transition-arrow">→</span>
        <span className="transition-right">
          Retrieval-grounded · Bahamian corpus · Citations included
        </span>
      </div>

      {/* PART B — AI vs RAG */}
      <section className="rag-section">
        <div className="rag-inner">
          <div className="rag-header">
            <div className="rag-eyebrow" id="re1">
              Why it matters how the answer is found
            </div>
            <h2 className="rag-headline" id="rh1">
              Not all AI answers
              <br />
              are <em>built the same way.</em>
            </h2>
            <p className="rag-sub" id="rs1">
              Most AI tools generate answers from patterns in training data — text from across the
              internet. LawBey works differently. It retrieves from a specific, indexed corpus of
              Bahamian law before it generates anything. That difference determines whether the
              answer can be trusted.
            </p>
          </div>

          {/* Side-by-side comparison */}
          <div className="rag-compare" id="ragCompare">
            {/* LEFT: Standard AI */}
            <div className="rag-col rag-col-ai">
              <div className="rag-col-header">
                <div className="rag-col-label">Standard AI — e.g. ChatGPT</div>
                <div className="rag-col-title">Generate, then answer</div>
              </div>

              <div className="rag-flow">
                <div className="flow-step">
                  <div className="flow-icon">💬</div>
                  <div className="flow-content">
                    <div className="flow-title">You ask a question</div>
                    <div className="flow-desc">
                      &quot;What are the penalties for possession of marijuana in the Bahamas?&quot;
                    </div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-icon">🌐</div>
                  <div className="flow-content">
                    <div className="flow-title">Model draws from training data</div>
                    <div className="flow-desc">
                      The model was trained on billions of internet documents — mostly US and UK
                      law, legal blogs, Wikipedia. Bahamian statutes were a small fraction of that,
                      if present at all.
                    </div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-icon">✍️</div>
                  <div className="flow-content">
                    <div className="flow-title">An answer is generated</div>
                    <div className="flow-desc">
                      The model writes a confident-sounding response based on pattern-matching to
                      similar legal concepts. No document was opened. Nothing was retrieved.
                    </div>
                  </div>
                </div>

                <div className="flow-step" style={{ borderBottom: "none" }}>
                  <div className="flow-icon">⚠️</div>
                  <div className="flow-content">
                    <div className="flow-title">You receive an answer</div>
                    <div className="flow-desc">
                      No citation. No statute referenced. No way to verify. And if the training
                      data was outdated or lacked Bahamian coverage — the answer may simply be
                      wrong.
                    </div>
                  </div>
                </div>

                <div className="flow-result">
                  <div className="result-item">
                    <div className="result-icon">✗</div>
                    <div className="result-text">No source documents shown</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✗</div>
                    <div className="result-text">May not reflect Bahamian law</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✗</div>
                    <div className="result-text">Cannot be verified or traced</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✗</div>
                    <div className="result-text">Confident even when incorrect</div>
                  </div>
                </div>
              </div>
            </div>

            {/* VS */}
            <div className="rag-vs">
              <div className="rag-vs-line" />
              <div className="rag-vs-label">VS</div>
              <div className="rag-vs-line bottom" />
            </div>

            {/* RIGHT: LawBey RAG */}
            <div className="rag-col rag-col-rag">
              <div className="rag-col-header">
                <div className="rag-col-label">LawBey — Retrieval-Augmented AI</div>
                <div className="rag-col-title">Retrieve first. Answer second.</div>
              </div>

              <div className="rag-flow">
                <div className="flow-step">
                  <div className="flow-icon">💬</div>
                  <div className="flow-content">
                    <div className="flow-title">You ask the same question</div>
                    <div className="flow-desc">
                      &quot;What are the penalties for possession of marijuana in the Bahamas?&quot;
                    </div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-icon">🔍</div>
                  <div className="flow-content">
                    <div className="flow-title">LawBey searches the Bahamian corpus</div>
                    <div className="flow-desc">
                      Before writing a word, LawBey searches its indexed collections — the Penal
                      Code, Dangerous Drugs Act, court judgments, gazette notices. Real documents.
                      Real Bahamian law.
                    </div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-icon">📑</div>
                  <div className="flow-content">
                    <div className="flow-title">Source documents are retrieved</div>
                    <div className="flow-desc">
                      The most relevant statutes and cases surface as cards — you can see exactly
                      what LawBey found before the answer is written. The retrieval is transparent.
                    </div>
                  </div>
                </div>

                <div className="flow-step" style={{ borderBottom: "none" }}>
                  <div className="flow-icon">✅</div>
                  <div className="flow-content">
                    <div className="flow-title">Answer grounded in those documents</div>
                    <div className="flow-desc">
                      The explanation is generated using the retrieved statutes as its foundation.
                      Every claim traces back to a real document. Citations are shown inline{" "}
                      <span className="cite">1</span> so you can verify the source yourself.
                    </div>
                  </div>
                </div>

                <div className="flow-result">
                  <div className="result-item">
                    <div className="result-icon">✓</div>
                    <div className="result-text">Source documents shown before the answer</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✓</div>
                    <div className="result-text">Grounded in Bahamian statutes only</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✓</div>
                    <div className="result-text">Every claim is traceable and verifiable</div>
                  </div>
                  <div className="result-item">
                    <div className="result-icon">✓</div>
                    <div className="result-text">
                      If the law isn&apos;t in the corpus, LawBey says so
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analogy callout */}
          <div className="rag-analogy" id="ragAnalogy">
            <div className="analogy-mark">"</div>
            <div className="analogy-body">
              <div className="analogy-label">The simplest way to understand it</div>
              <div className="analogy-quote">
                A standard AI is like asking a <strong>very confident friend</strong> who has read a
                lot. LawBey is like asking a{" "}
                <strong>librarian who pulls the actual book</strong> and reads you the page.
              </div>
              <div className="analogy-explain">
                The confident friend might be right. But when it comes to your legal situation —
                your business, your rights, your family — you need to know <em>which page</em> the
                answer came from. That is what RAG provides. Not a better guess. A grounded answer
                from a real document, in the law of your country.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge CTA */}
      <div className="bridge">
        <div className="bridge-left">
          <div className="bridge-headline">
            Now ask LawBey
            <br />
            your <em>actual question.</em>
          </div>
          <p className="bridge-sub">
            Free to use. No account required for your first search. See the retrieval happen —
            sources first, answer second.
          </p>
        </div>
        <div className="bridge-btns">
          <Link href="https://beta.lawbey.com" className="btn-ink">
            Ask LawBey →
          </Link>
          <Link href="#pro" className="btn-ghost">
            See Pro plan
          </Link>
        </div>
      </div>
    </>
  )
}

