"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

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
        <Logo href="/" variant="dark" compact showSubline className="flex-shrink-0" />

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#who-uses">Who Uses LawBey</NavLink>
          <NavLink href="#pro">Pro</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
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
          className="md:hidden p-2 text-foreground"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
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
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  )
}
