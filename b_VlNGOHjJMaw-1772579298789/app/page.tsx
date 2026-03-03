import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Trust } from "@/components/trust"
import { WhoUses } from "@/components/who-uses"
import { ProSection } from "@/components/pro-section"
import { Mission } from "@/components/mission"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--ink)]">
      <Navbar />
      <Hero />
      <div className="amber-rule" />
      <HowItWorks />
      <div className="amber-rule" />
      <Features />
      <div className="amber-rule" />
      <Trust />
      <div className="amber-rule" />
      <WhoUses />
      <div className="amber-rule" />
      <ProSection />
      <div className="amber-rule" />
      <Mission />
      <div className="amber-rule" />
      <CTA />
      <div className="amber-rule" />
      <Footer />
    </main>
  )
}
