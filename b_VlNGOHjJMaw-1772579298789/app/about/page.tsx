import type { Metadata } from "next"
import { DeskFrame } from "@/components/desk-frame"

export const metadata: Metadata = {
  title: "LawBey Research Desk — Bahamian Legal Research AI",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
}

export default function AboutPage() {
  return <DeskFrame />
}
