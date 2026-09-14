import type { Metadata } from "next"
import Link from "next/link"
import { LegalLayout, LegalSection } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service — LawBey",
  description:
    "Terms for using LawBey: educational information only, retrieval limits, and how to correct an answer.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service">
      <LegalSection title="Agreement">
        <p>
          These terms govern your use of lawbey.com and the product at
          beta.lawbey.com, operated by LawBey LLC. By using LawBey you agree to
          them. If you do not agree, do not use the service.
        </p>
      </LegalSection>

      <LegalSection title="Not legal advice">
        <p>
          LawBey is an AI research tool for Bahamian law. It is not a law firm,
          not a lawyer, and not a substitute for professional legal services.
          Answers are general information for educational and research purposes
          only. They are not legal advice and do not create an attorney–client
          relationship. For a specific matter, consult a qualified Bahamian
          attorney.
        </p>
      </LegalSection>

      <LegalSection title="How LawBey answers">
        <p>
          Public models retrieve from LawBey’s Bahamian statute library (the
          LawBey Library) and are instructed to prefer those sources and cite
          them. If the library does not cover the question, the model should say
          so before using general knowledge. That is a product policy of soft
          grounding, not a guarantee that every citation pinpoints the correct
          subsection.
        </p>
        <p>
          Internal checks measure whether the right Bahamian Act was retrieved
          and shown as a source. They are not a published accuracy score and
          are not a warranty of completeness or correctness.
        </p>
      </LegalSection>

      <LegalSection title="What the library covers">
        <p>
          The library is a curated collection of official Bahamas statute and
          guidance text. It is not a complete statement of Bahamian law. Some
          subjects — including planning, short-term rental, and real property
          tax — are not in the current public cut.
        </p>
        <p>
          The library is updated by ingesting official text. It is not an
          automated daily gazette feed. The current public cut was taken on 13
          September 2026.
        </p>
      </LegalSection>

      <LegalSection title="No lawyer signs each reply">
        <p>
          There is no lawyer reviewing every answer before it is shown. If
          something looks wrong, you can open the cited source in the same
          chat, rate the answer (thumbs up or down), ask a follow-up, or email{" "}
          <a
            href="mailto:support@lawbey.com"
            className="underline underline-offset-2 text-ink"
          >
            support@lawbey.com
          </a>
          . Operators also run periodic retrieval and chat checks and correct
          the library when a gap or conflict is found.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and acceptable use">
        <p>
          You may use LawBey for lawful research. You must not attempt to
          overload, scrape, or disrupt the service; use it to provide legal
          services as if you were LawBey; or submit content you do not have the
          right to send. We may suspend access if these terms are abused.
        </p>
        <p>
          You are responsible for keeping account credentials confidential.
          Questions you submit are processed as described in our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 text-ink"
          >
            Privacy Policy
          </Link>
          , including generation via OpenAI.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The LawBey name, interface, and software are owned by LawBey LLC.
          Official statutes and public legal texts remain subject to their
          public status. You may use answers for your own research; you may not
          copy the product as a competing service.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer and liability">
        <p>
          LawBey is provided as-is. We do not warrant uninterrupted access,
          error-free retrieval, or that an answer is current, complete, or fit
          for a particular decision. To the fullest extent permitted by law,
          LawBey LLC is not liable for indirect, incidental, or consequential
          loss arising from use of the service, including reliance on an
          answer. You remain responsible for verifying sources and for any
          action you take.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of the Commonwealth of The
          Bahamas. Disputes will be resolved in the courts of The Bahamas,
          unless applicable law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms as the product changes. The effective date
          at the top of this page is the current version. Continued use after a
          change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Support:{" "}
          <a
            href="mailto:support@lawbey.com"
            className="underline underline-offset-2 text-ink"
          >
            support@lawbey.com
          </a>
          . General inquiries:{" "}
          <a
            href="mailto:hello@lawbey.com"
            className="underline underline-offset-2 text-ink"
          >
            hello@lawbey.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
