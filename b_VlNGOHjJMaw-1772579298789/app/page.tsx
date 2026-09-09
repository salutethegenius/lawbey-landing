import Link from "next/link"
import { HomeNav } from "@/components/home-nav"
import { HomeComposer } from "@/components/home-composer"

export default function Page() {
  return (
    <main className="min-h-screen bg-parchment text-ink flex flex-col">
      <HomeNav />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <div className="w-full max-w-2xl">
          <HomeComposer />

          <p className="mt-10 text-xs text-ink/40 leading-relaxed max-w-lg mx-auto text-center">
            LawBey provides general information about Bahamian law for
            educational purposes only. This is not legal advice. For specific
            legal matters, always consult a qualified Bahamian attorney.
          </p>
        </div>
      </div>

      <footer className="px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/40">
        <p>© 2026 LawBey LLC. All rights reserved.</p>
        <Link href="/about" className="hover:text-ink/70 transition-colors">
          About LawBey
        </Link>
      </footer>
    </main>
  )
}
