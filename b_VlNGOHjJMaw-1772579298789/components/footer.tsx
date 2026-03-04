import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--rule-amber)] py-10 px-6 lg:px-[72px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand: full lockup + tagline */}
          <div className="md:col-span-1">
            <Logo href="/" variant="dark" compact className="mb-4" />
            <p className="font-mono text-[10px] text-white/20 leading-[2.1] tracking-[0.09em]">
              LawBey — Bahamian Legal Research AI
              <br />
              Bahamas, The Bahamas
              <br />
              Retrieval-grounded · Law in every hand
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] text-white/25 uppercase tracking-[0.15em] mb-4">
              Product
            </p>
            <div className="flex flex-col gap-3">
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pro">LawBey Pro</FooterLink>
              <FooterLink href="/desk">Research Desk</FooterLink>
              <FooterLink href="https://beta.lawbey.com">Try Free</FooterLink>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] text-white/25 uppercase tracking-[0.15em] mb-4">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <FooterLink href="#mission">Mission</FooterLink>
              <FooterLink href="mailto:hello@lawbey.com">Contact</FooterLink>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-start">
            <span className="font-serif text-[13px] italic text-[var(--amber)] tracking-[0.04em] opacity-80">
              beta.lawbey.com
            </span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="font-sans text-xs text-white/40 leading-relaxed max-w-3xl">
            LawBey provides general information about Bahamian law for
            educational purposes only. This is not legal advice. For specific
            legal matters, always consult a qualified Bahamian attorney.
          </p>
          <p className="mt-4 font-mono text-[10px] text-white/20">
            © 2026 LawBey LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 font-sans"
    >
      {children}
    </Link>
  )
}
