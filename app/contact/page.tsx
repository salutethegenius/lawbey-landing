import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the LawBey team for support and inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 px-4 py-6">
        <Link href="/" className="text-xl font-bold text-primary-700">
          LawBey
        </Link>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-neutral-900">Contact</h1>
        <p className="mt-4 text-neutral-600">
          Get in touch with the LawBey team. We&apos;re here to help with legal research and product
          questions.
        </p>
        <Link href="/" className="mt-8 inline-block text-primary-600 hover:text-primary-700">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
