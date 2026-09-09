"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/logo"

const BETA_URL = "https://beta.lawbey.com"

export function HomeNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5 lg:px-8">
        <Logo variant="light" compact href="/" />

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-ink/60 hover:text-ink transition-colors duration-300"
          >
            About
          </Link>
          <a
            href={BETA_URL}
            className="text-sm text-ink/60 hover:text-ink transition-colors duration-300"
          >
            Log in
          </a>
          <a
            href={BETA_URL}
            className="group flex items-center gap-1.5 px-5 py-2.5 bg-ink text-parchment text-sm font-medium rounded-md hover:bg-ink/90 transition-all duration-300"
          >
            Ask LawBey
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-ink"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mb-4 px-5 py-5 bg-white/90 backdrop-blur-xl border border-ink/10 rounded-xl flex flex-col gap-4">
          <Link
            href="/about"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm text-ink/70 hover:text-ink transition-colors"
          >
            About
          </Link>
          <a
            href={BETA_URL}
            className="text-sm text-ink/70 hover:text-ink transition-colors"
          >
            Log in
          </a>
          <a
            href={BETA_URL}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-ink text-parchment text-sm font-medium rounded-md"
          >
            Ask LawBey
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
