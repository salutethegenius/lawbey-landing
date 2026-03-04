"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--ink)]/90 backdrop-blur-xl border-b border-[var(--rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3.5 flex-shrink-0 no-underline">
          <svg width="42" height="42" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <line x1="8" y1="14" x2="68" y2="14" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.15" />
            <line x1="8" y1="24" x2="72" y2="24" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.15" />
            <line x1="8" y1="34" x2="76" y2="34" stroke="#C8922A" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="76" cy="34" r="4" fill="#C8922A" />
            <circle cx="76" cy="34" r="7" fill="none" stroke="#C8922A" strokeWidth="1" opacity="0.35" />
            <line x1="8" y1="44" x2="60" y2="44" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.15" />
            <line x1="8" y1="54" x2="66" y2="54" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.1" />
            <line x1="8" y1="64" x2="52" y2="64" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.07" />
          </svg>
          <div className="flex flex-col" style={{ lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "8px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.45)",
                textTransform: "uppercase",
              }}
            >
              Bahamian Legal Research
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.3px",
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: "white" }}>Law</span>
              <em style={{ fontStyle: "italic", color: "#C8922A" }}>Bey</em>
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#who-uses">Who Uses LawBey</NavLink>
          <NavLink href="#pro">Pro</NavLink>
          <NavLink href="/desk" amber>Research Desk</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://beta.lawbey.com"
            className="font-mono px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Log in
          </Link>
          <Link
            href="https://beta.lawbey.com"
            className="group flex items-center gap-1.5 px-5 py-2.5 bg-[var(--amber)] text-[var(--ink)] text-sm font-medium rounded-md hover:bg-[var(--amber-light)] transition-all duration-300 font-sans"
          >
            Ask LawBey
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[var(--ink)]/95 backdrop-blur-xl border-b border-[var(--rule)] flex flex-col gap-4">
          <MobileNavLink href="#how-it-works" onClick={() => setIsMobileOpen(false)}>
            How It Works
          </MobileNavLink>
          <MobileNavLink href="#features" onClick={() => setIsMobileOpen(false)}>
            Features
          </MobileNavLink>
          <MobileNavLink href="#who-uses" onClick={() => setIsMobileOpen(false)}>
            Who Uses LawBey
          </MobileNavLink>
          <MobileNavLink href="#pro" onClick={() => setIsMobileOpen(false)}>
            Pro
          </MobileNavLink>
          <MobileNavLink href="/desk" onClick={() => setIsMobileOpen(false)} amber>
            Research Desk
          </MobileNavLink>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <Link
              href="https://beta.lawbey.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <Link
              href="https://beta.lawbey.com"
              className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[var(--amber)] text-[var(--ink)] text-sm font-medium rounded-md"
            >
              Ask LawBey
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, amber }: { href: string; children: React.ReactNode; amber?: boolean }) {
  return (
    <Link
      href={href}
      className={`relative font-mono text-sm transition-colors duration-300 group ${
        amber
          ? "text-[var(--amber)] hover:text-[var(--amber-light)]"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--amber)] transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  amber,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
  amber?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm transition-colors font-sans ${
        amber
          ? "text-[var(--amber)] hover:text-[var(--amber-light)] font-medium"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  )
}
