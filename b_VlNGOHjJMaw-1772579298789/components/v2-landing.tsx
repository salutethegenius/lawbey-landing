"use client"

import { useEffect } from "react"
import { WhyLawBey } from "./why-lawbey"

export function V2Landing() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Simple nav shadow on scroll
    const nav = document.getElementById("mainNav")
    const onScroll = () => {
      if (!nav) return
      nav.classList.toggle("scrolled", window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll)

    // Basic ticker items (static clone of v2.html list)
    const TICKER_ITEMS = [
      {
        text: "Govt's $357m claim against GBPA dismissed in full by Arbitration Tribunal",
        url: "https://www.tribune242.com/news/2026/mar/03/govts-357m-claim-against-gbpa-dismissed-in-full/",
        source: "Tribune242",
      },
      {
        text: 'AG calls Tribunal ruling "monumental win", pushes back on GBPA statement',
        url: "https://www.tribune242.com/news/2026/mar/03/ag-calls-tribunal-ruling-monumental-win-pushes-back-on-gbpa-statement/",
        source: "Tribune242",
      },
      {
        text: "Declaration of Intended Acquisition Under Acquisition of Land Act (Grand Bahama) — Gazette 2026",
        url: "https://laws.bahamas.gov.bs/cms/gazettes/gazettes-by-year.html",
        source: "Bahamas Gazette",
      },
      {
        text: "The Smuggling of Migrants Bill — focuses on law enforcement and national security",
        url: "https://laws.bahamas.gov.bs/cms/legislation/tabled-in-parliament/tabled-in-house-of-assembly.html",
        source: "Parliament",
      },
      {
        text: "New Civil Procedure Rules 2022 now in effect — courts.bs",
        url: "https://courts.bs/new-civil-procedure-rules-2022",
        source: "Courts Bahamas",
      },
      {
        text: "Pair held over fraudulent passport and voter ID scheme",
        url: "https://www.tribune242.com/news/2026/mar/03/pair-held-over-fraudulent-passport-and-voter-id-scheme/",
        source: "Tribune242",
      },
      {
        text: "eDocument Delivery and eAppointment now available — Bahamas Judiciary",
        url: "https://courts.bs/edocument-delivery/",
        source: "Courts Bahamas",
      },
      {
        text: "Bills and Regulations tabled in Parliament — updated list available",
        url: "https://laws.bahamas.gov.bs/cms/legislation/tabled-in-parliament/tabled-in-house-of-assembly.html",
        source: "Bahamas Laws",
      },
    ]

    const track = document.getElementById("tickerTrack")
    if (track && track.childElementCount === 0) {
      for (let pass = 0; pass < 2; pass++) {
        TICKER_ITEMS.forEach((item) => {
          const el = document.createElement("span")
          el.className = "ticker-item"
          el.innerHTML = `
            <span class="ticker-dot"></span>
            <a href="${item.url}" target="_blank" rel="noopener">${item.text}</a>
            <span style="font-family:'DM Mono',monospace;font-size:8.5px;color:rgba(255,255,255,0.2);letter-spacing:0.1em;margin-left:-8px;">${item.source}</span>
          `
          track.appendChild(el)
        })
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      {/* Ticker */}
      <div className="ticker-bar">
        <div className="ticker-label">
          <span>§</span> Bahamas Legal Feed
        </div>
        <div className="ticker-scroll" id="tickerTrack" />
      </div>

      {/* Nav */}
      <nav className="nav" id="mainNav">
        <a href="#" className="nav-logo">
          <svg
            width="42"
            height="42"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8"
              y1="14"
              x2="68"
              y2="14"
              stroke="#111827"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.15"
            />
            <line
              x1="8"
              y1="24"
              x2="72"
              y2="24"
              stroke="#111827"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.15"
            />
            <line
              x1="8"
              y1="34"
              x2="76"
              y2="34"
              stroke="#C8922A"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="76" cy="34" r="4" fill="#C8922A" />
            <circle
              cx="76"
              cy="34"
              r="7"
              fill="none"
              stroke="#C8922A"
              strokeWidth="1"
              opacity="0.35"
            />
            <line
              x1="8"
              y1="44"
              x2="60"
              y2="44"
              stroke="#111827"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.15"
            />
            <line
              x1="8"
              y1="54"
              x2="66"
              y2="54"
              stroke="#111827"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.1"
            />
            <line
              x1="8"
              y1="64"
              x2="52"
              y2="64"
              stroke="#111827"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.07"
            />
          </svg>
          <div className="nav-wordmark">
            <span className="nav-sub">Bahamian Legal Research</span>
            <span className="nav-name">
              Law<em>Bey</em>
            </span>
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#corpus">Corpus</a>
          </li>
          <li>
            <a href="#pro">Pro</a>
          </li>
          <li>
            <div className="corpus-pill">
              <div className="corpus-pulse" />
              <span id="corpusPillText">5 collections · live</span>
            </div>
          </li>
          <li>
            <a href="#pro" className="nav-cta">
              Get Pro — $39/mo
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero + Chat (static layout; chat wiring can be added later) */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Bahamian Legal Research AI · Bahamas</div>

          <h1 className="hero-headline">
            The law is there.
            <br />
            <em>Now you can find it.</em>
          </h1>

          <p className="hero-sub">
            Ask any question about Bahamian law. LawBey retrieves real cases, statutes, and gazette
            notices — then explains what they mean for you. Grounded answers, not generated
            guesses.
          </p>

          <div className="hero-tiles">
            <button className="tile">
              <div className="tile-icon">⚖️</div>
              <div className="tile-label">Crime &amp; Courts</div>
              <div className="tile-sub">LawBey Crime Data</div>
            </button>
            <button className="tile">
              <div className="tile-icon">📜</div>
              <div className="tile-label">Laws &amp; Constitution</div>
              <div className="tile-sub">Bahamas Laws Index</div>
            </button>
            <button className="tile">
              <div className="tile-icon">🏛️</div>
              <div className="tile-label">Inland Revenue</div>
              <div className="tile-sub">Revenue Help Desk</div>
            </button>
            <button className="tile">
              <div className="tile-icon">📋</div>
              <div className="tile-label">Consent Orders</div>
              <div className="tile-sub">Court Templates</div>
            </button>
            <button className="tile">
              <div className="tile-icon">🗞️</div>
              <div className="tile-label">Bahamas Pulse</div>
              <div className="tile-sub">Current Affairs</div>
            </button>
            <button className="tile">
              <div className="tile-icon">🏠</div>
              <div className="tile-label">Property &amp; Land</div>
              <div className="tile-sub">Ask anything</div>
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-amber">§</span> Retrieval-first — answers grounded in real
              Bahamian statutes
            </div>
            <div className="trust-item">
              <span className="trust-amber">§</span> RAG-powered · not hallucinated · sources shown
              with every answer
            </div>
            <div className="trust-item">
              <span className="trust-amber">§</span> Free to ask · Pro for unlimited research and
              document workflows
            </div>
          </div>
        </div>

        <div className="chat-panel" id="chatPanel">
          <div className="chat-header">
            <div className="chat-title-block">
              <span className="chat-eyebrow">LawBey Legal AI · Beta</span>
              <span className="chat-name">Ask about Bahamian law</span>
            </div>
            <div className="chat-status">
              <div className="status-dot" />
              RAG connected
            </div>
          </div>

          <div className="retrieval-stage" id="retrievalStage">
            <div className="retrieval-label">
              <div className="retrieval-spinner" id="retrievalSpinner" />
              <span id="retrievalLabelText">Searching corpus…</span>
            </div>
            <div className="source-cards" id="sourceCards" />
          </div>

          <div className="chat-messages" id="chatMessages">
            <div className="msg ai">
              <div className="msg-av">§</div>
              <div className="msg-bub">
                Good day. I'm LawBey — ask me anything about Bahamian law. I'll retrieve real
                statutes, cases, and gazette references before I answer.{" "}
                <strong>What would you like to understand?</strong>
              </div>
            </div>
          </div>

          <div className="quick-prompts" id="quickPrompts">
            <button className="qp">What are the penalties for possession?</button>
            <button className="qp">Legal requirements for starting a business</button>
            <button className="qp">Tenant rights in the Bahamas</button>
            <button className="qp">What is the Smuggling of Migrants Bill?</button>
          </div>

          <div className="chat-input-row">
            <textarea
              className="chat-input"
              id="chatInput"
              placeholder="Ask about Bahamian law…" 
              rows={1}
            />
            <button className="chat-send" id="chatSend">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          <div className="chat-disclaimer">
            LawBey provides legal information, not legal advice. For specific legal matters, consult
            a qualified Bahamian attorney.
          </div>
        </div>
      </section>

      {/* Why LawBey */}
      <WhyLawBey />

      {/* How it works */}
      <section className="how" id="how">
        <div className="section-eyebrow">How LawBey Works</div>
        <div className="section-title">
          Retrieval first. Explanation second.
          <br />
          That's the difference.
        </div>

        <div className="how-steps">
          <div className="how-step">
            <div className="step-num">01</div>
            <div className="step-title">You ask in plain English</div>
            <div className="step-desc">
              No legal training required. Ask exactly as you would ask a knowledgeable friend —
              LawBey understands context and intent, not just keywords.
            </div>
          </div>
          <div className="step-arrow" />
          <div className="how-step">
            <div className="step-num">02</div>
            <div className="step-title">LawBey retrieves from the corpus</div>
            <div className="step-desc">
              Before generating a single word, LawBey searches the indexed Bahamian corpus —
              statutes, cases, gazettes, revenue guidance. Source cards appear showing exactly what
              was retrieved.
            </div>
          </div>
          <div className="step-arrow" />
          <div className="how-step">
            <div className="step-num">03</div>
            <div className="step-title">Answers with citations you can verify</div>
            <div className="step-desc">
              The explanation cites the retrieved sources inline <span className="cite">1</span> so
              you can trace every statement back to real Bahamian law. Nothing is invented.
              Everything is verifiable.
            </div>
          </div>
        </div>
      </section>

      {/* Corpus */}
      <section className="corpus" id="corpus">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-eyebrow" style={{ color: "var(--amber-l)" }}>
            The Knowledge Base
          </div>
          <div className="section-title" style={{ color: "white", marginBottom: 0 }}>
            Five indexed collections.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--amber-l)" }}>
              All Bahamian. All retrievable.
            </em>
          </div>
        </div>
        <div className="corpus-grid" id="corpusGrid" />
      </section>

      {/* Audience */}
      <section className="audience" id="about">
        <div className="section-eyebrow">Who LawBey Is For</div>
        <div className="section-title">
          Built for people who need
          <br />
          answers, not access barriers.
        </div>
        <div className="audience-grid">
          <div className="aud-card">
            <div className="aud-icon">🧑‍💼</div>
            <div className="aud-title">Business Owners</div>
            <div className="aud-desc">
              Registration, licensing, employment law, VAT compliance — get fast answers on the
              rules that govern your operation.
            </div>
            <div className="aud-detail">
              COMPANY ACT · BUSINESS LICENCE ACT
              <br />
              EMPLOYMENT ACT · VAT ACT
            </div>
          </div>
          <div className="aud-card">
            <div className="aud-icon">👤</div>
            <div className="aud-title">Individuals</div>
            <div className="aud-desc">
              Know your rights in any situation — as a tenant, an employee, a consumer, or someone
              interacting with the justice system.
            </div>
            <div className="aud-detail">
              PENAL CODE · RENT CONTROL ACT
              <br />
              CONSUMER PROTECTION · CONSTITUTION
            </div>
          </div>
          <div className="aud-card">
            <div className="aud-icon">🎓</div>
            <div className="aud-title">Students &amp; Researchers</div>
            <div className="aud-desc">
              Explore case law, constitutional provisions, and statutory interpretation with sources
              cited in every answer.
            </div>
            <div className="aud-detail">
              SUPREME COURT JUDGMENTS
              <br />
              COURT OF APPEAL · PRIVY COUNCIL
            </div>
          </div>
          <div className="aud-card">
            <div className="aud-icon">⚖️</div>
            <div className="aud-title">Legal Professionals</div>
            <div className="aud-desc">
              Faster precedent search, consent order drafting, statutory cross-referencing. Pro tier
              built for firm workflows.
            </div>
            <div className="aud-detail">
              CONSENT ORDER TEMPLATES
              <br />
              UNLIMITED QUERIES · DOCUMENT UPLOAD
            </div>
          </div>
        </div>
      </section>

      {/* Pro CTA */}
      <section className="pro-cta" id="pro">
        <div>
          <div className="pro-eyebrow">LawBey Pro</div>
          <h2>
            Research without limits.
            <br />
            <em>From $39 a month.</em>
          </h2>
          <p>
            LawBey Free gives you clarity. Pro turns clarity into capability — for lawyers,
            paralegals, and serious business owners who need depth, speed, and document workflows.
          </p>
        </div>
        <div className="pro-box">
          <div className="pro-price">
            $
            <em>39</em>
          </div>
          <div className="pro-period">per month · cancel anytime</div>
          <ul className="pro-features">
            <li>Unlimited queries — no throttle</li>
            <li>Unlimited document uploads</li>
            <li>Full corpus access — all 5 collections</li>
            <li>Priority response speed</li>
            <li>Secure firm workspace</li>
            <li>Early access to new features</li>
          </ul>
          <a href="https://beta.lawbey.com" target="_blank" className="btn-amber">
            Start with Pro →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">
              Law<em>Bey</em>
            </div>
            <p>
              Bahamian legal research, powered by retrieval-augmented AI. Real statutes. Real cases.
              Real answers. Built in Bahamas.
            </p>
            <div className="footer-legal">
              LawBey provides general information about Bahamian law for educational and research
              purposes only. This is not legal advice. For specific legal matters, consult a
              qualified Bahamian attorney.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Research</div>
            <ul className="footer-links">
              <li>
                <a href="#">Crime &amp; Courts</a>
              </li>
              <li>
                <a href="#">Laws &amp; Constitution</a>
              </li>
              <li>
                <a href="#">Inland Revenue</a>
              </li>
              <li>
                <a href="#">Consent Orders</a>
              </li>
              <li>
                <a href="#">Bahamas Pulse</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Pro Plan</a>
              </li>
              <li>
                <a href="#">For Law Firms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Sources</div>
            <div className="footer-contact-row">
              <strong>Legislation</strong>
              <a
                href="https://laws.bahamas.gov.bs"
                target="_blank"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                laws.bahamas.gov.bs
              </a>
            </div>
            <div className="footer-contact-row">
              <strong>Courts</strong>
              <a
                href="https://courts.bs"
                target="_blank"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                courts.bs
              </a>
            </div>
            <div className="footer-contact-row">
              <strong>News</strong>
              <a
                href="https://tribune242.com"
                target="_blank"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                Tribune242
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://theBahamasguardian.com"
                target="_blank"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                Bahamas Guardian
              </a>
            </div>
            <div className="footer-contact-row">
              <strong>Built by</strong>
              <a
                href="https://kemisdigital.com"
                target="_blank"
                style={{ color: "var(--amber-l)", textDecoration: "none" }}
              >
                KemisDigital
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LawBey LLC. All rights reserved. Bahamas, The Bahamas.</p>
          <p>
            Powered by{" "}
            <a
              href="https://kemisdigital.com"
              style={{ color: "var(--amber-l)", textDecoration: "none" }}
            >
              KemisDigital
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

