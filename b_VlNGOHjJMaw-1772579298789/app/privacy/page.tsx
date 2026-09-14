import type { Metadata } from "next"
import Link from "next/link"
import { LegalLayout, LegalSection } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy — LawBey",
  description:
    "How LawBey stores accounts and chat history, how the LLM processes prompts, and how to request deletion.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy">
      <LegalSection title="Who this covers">
        <p>
          This policy describes how LawBey LLC (“LawBey,” “we,” “us”) handles
          information on lawbey.com (this marketing site and the homepage ask)
          and on the registered product at beta.lawbey.com.
        </p>
        <p>
          LawBey provides general information about Bahamian law for educational
          purposes only. It is not legal advice. For a specific matter, consult
          a qualified Bahamian attorney.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and chat history">
        <p>
          If you create an account, LawBey stores your registered account and
          chat history on LawBey’s own Open WebUI / Postgres stack so you can
          return to your threads. That stack runs on LawBey’s servers in AWS
          East. Conversations persist across sessions. We do not sell
          conversation content.
        </p>
        <p>
          There is no published automated purge and no published erasure SLA.
          Chats remain until you delete them in the product or an operator
          deletes them on request. Email{" "}
          <a
            href="mailto:support@lawbey.com"
            className="underline underline-offset-2 text-ink"
          >
            support@lawbey.com
          </a>{" "}
          for access or deletion requests.
        </p>
        <p>
          The public beta is not a private on-premises server. Do not assume
          that data stays in The Bahamas.
        </p>
      </LegalSection>

      <LegalSection title="How answers are generated">
        <p>
          Answers are generated using a LLM. The text of a question and the
          retrieved statute context are processed by that provider to produce a
          reply. Prompts leave LawBey’s application environment for that step.
        </p>
      </LegalSection>

      <LegalSection title="Homepage questions">
        <p>
          On lawbey.com you can ask one question without an account. That
          question is sent along the same generation path described above. We
          set an httpOnly cookie named{" "}
          <code className="font-mono text-[13px] whitespace-nowrap">
            lb_free_ask
          </code>{" "}
          (about 24 hours) and a browser localStorage timestamp so the free ask
          cannot be repeated on the same device during that window. Those flags
          store that you used the free question, not the text of the question
          itself.
        </p>
      </LegalSection>

      <LegalSection title="Analytics and marketing">
        <p>
          This website uses Vercel Analytics for aggregated traffic. In
          production it also uses PostHog in cookieless mode to measure the
          public conversion funnel (for example: a sample prompt was clicked, a
          question was submitted, an answer finished or failed, an account
          prompt was shown, or a signup or waitlist control was clicked).
        </p>
        <p>
          PostHog is initialized without person profiles, without autocapture,
          and without session recording. Event properties are limited to
          placement, sample-chip category, success or failure, a duration
          bucket, source count, and destination. We do not send the text of
          prompts, answers, emails, source titles, or other legal-research
          content to PostHog.
        </p>
      </LegalSection>

      <LegalSection title="What we do not claim">
        <p>
          We do not claim that chats are never stored, that a lawyer reviews
          every answer, or that your data never leaves The Bahamas. The product
          is a retrieval-backed research tool with the limits set out in our{" "}
          <Link href="/terms" className="underline underline-offset-2 text-ink">
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy as the product changes. The effective date
          at the top of this page is the current version.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Privacy, access, and deletion:{" "}
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
