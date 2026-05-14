import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'LawBey privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 px-4 py-6">
        <Link href="/" className="text-xl font-bold text-primary-700">
          LawBey
        </Link>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-neutral-900">Privacy Policy</h1>
        <p className="mt-4 text-neutral-600">
          This page will contain LawBey&apos;s privacy policy. Contact us for more information.
        </p>
        <Link href="/" className="mt-8 inline-block text-primary-600 hover:text-primary-700">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
