import type { Metadata } from "next"
import { DeskFrame } from "@/components/desk-frame"

export const metadata: Metadata = {
  title: "LawBey Research Desk — Bahamian Legal Research AI",
  alternates: { canonical: "/desk" },
  openGraph: { url: "/desk" },
}

export default function DeskPage() {
  return <DeskFrame />
}
