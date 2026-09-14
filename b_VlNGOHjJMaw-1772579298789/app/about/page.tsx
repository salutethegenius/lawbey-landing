import type { Metadata } from "next"
import { AboutPage } from "@/components/about-page"

const title = "About LawBey — Built in Freeport for Bahamian law"
const description =
  "LawBey puts Bahamian law in every Bahamian hand. Founded by Kenneth C. Moncur and built by Kemis Group of Companies from Freeport, Grand Bahama."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: "https://lawbey.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "LawBey",
    url: "https://lawbey.com",
    foundingLocation: {
      "@type": "Place",
      name: "Freeport, Grand Bahama, The Bahamas",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Kemis Group of Companies Inc",
      url: "https://thekemisgroup.com",
    },
    founder: {
      "@type": "Person",
      name: "Kenneth C. Moncur",
      jobTitle:
        "Founder, LawBey; Group Managing Director, Kemis Group of Companies Inc",
      image: "https://lawbey.com/about/kenneth-c-moncur.jpg",
      url: "https://kennethmoncur.com",
      homeLocation: {
        "@type": "Place",
        name: "Freeport, Grand Bahama, The Bahamas",
      },
    },
  },
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  )
}
