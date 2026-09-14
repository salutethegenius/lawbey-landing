import Link from "next/link"
import { Logo } from "@/components/logo"
import { BETA_AUTH_URL } from "@/lib/constants"

export function HomeFooter() {
  return (
    <footer className="border-t border-ink/10 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" compact href="/" />
            <p className="mt-4 text-sm text-ink/50 leading-relaxed">
              AI legal research
              <br />
              for The Bahamas.
            </p>
          </div>

          <FooterCol title="Product">
            <FooterLink href="/#ask">Ask</FooterLink>
            <FooterLink href="/#product">Product</FooterLink>
            <FooterLink href="/#pricing">Pricing</FooterLink>
            <FooterLink href="/#api">API</FooterLink>
          </FooterCol>

          <FooterCol title="Resources">
            <FooterLink href="/#faq">FAQ</FooterLink>
            <FooterLink href={BETA_AUTH_URL} external>
              Log in
            </FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="mailto:hello@lawbey.com">Contact</FooterLink>
            <FooterLink href="https://thekemisgroup.com" external>
              The Kemis Group
            </FooterLink>
            <FooterLink href="https://kennethmoncur.com" external>
              Kenneth Moncur
            </FooterLink>
            <FooterLink href="https://kemisdigital.com" external>
              KemisDigital
            </FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </FooterCol>
        </div>

        <div className="border-t border-ink/10 pt-8">
          <p className="text-xs text-ink/40 leading-relaxed max-w-3xl">
            LawBey provides general information about Bahamian law for
            educational purposes only. This is not legal advice. For specific
            legal matters, always consult a qualified Bahamian attorney.
          </p>
          <p className="mt-4 text-xs text-ink/35">
            © 2026 LawBey LLC. Freeport, Grand Bahama, The Bahamas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-xs font-medium text-ink/40 uppercase tracking-wide mb-4">
        {title}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const className =
    "text-sm text-ink/55 hover:text-ink transition-colors duration-300"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
