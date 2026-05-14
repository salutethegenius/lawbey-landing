import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import ForProfessionals from '@/components/ForProfessionals';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <ForProfessionals />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
