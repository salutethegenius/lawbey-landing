import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const META_PIXEL_ID = '1703223410819890';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lawbey.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LawBey | AI for Bahamian Law',
    template: '%s | LawBey',
  },
  description:
    'Accurate, RAG-driven legal answers in plain English. Trained on Bahamian law with no hallucinations. Chat assistant, document search, and RAG research for Bahamian legal professionals.',
  keywords: ['LawBey', 'Bahamian law', 'legal AI', 'legal research', 'Bahamas', 'RAG', 'legal assistant'],
  authors: [{ name: 'LawBey' }],
  creator: 'LawBey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'LawBey',
    title: 'LawBey | AI for Bahamian Law',
    description:
      'Accurate, RAG-driven legal answers in plain English. Trained on Bahamian law with no hallucinations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LawBey | AI for Bahamian Law',
    description:
      'Accurate, RAG-driven legal answers in plain English. Trained on Bahamian law with no hallucinations.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LawBey',
    description: 'AI for Bahamian Law. Accurate, RAG-driven legal answers in plain English.',
    url: siteUrl,
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* Meta Pixel noscript fallback; must be a plain img (no next/image in noscript). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
