import { HomeNav } from "@/components/home-nav"
import { HomeComposer } from "@/components/home-composer"
import { HomeProductTour } from "@/components/home-product-tour"
import { HomePricing } from "@/components/home-pricing"
import { HomeApi } from "@/components/home-api"
import { HomeFaq } from "@/components/home-faq"
import { HomeFooter } from "@/components/home-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-parchment text-ink flex flex-col">
      <HomeNav />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 min-h-screen">
        <section id="ask" className="w-full max-w-2xl scroll-mt-28">
          <HomeComposer />

          <p className="mt-10 text-xs text-ink/40 leading-relaxed max-w-lg mx-auto text-center">
            LawBey provides general information about Bahamian law for
            educational purposes only. This is not legal advice. For specific
            legal matters, always consult a qualified Bahamian attorney.
          </p>
        </section>
      </div>

      <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />
      <HomeProductTour />
      <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />
      <HomePricing />
      <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />
      <HomeApi />
      <div className="h-px w-full max-w-7xl mx-auto bg-ink/10" />
      <HomeFaq />
      <HomeFooter />
    </main>
  )
}
