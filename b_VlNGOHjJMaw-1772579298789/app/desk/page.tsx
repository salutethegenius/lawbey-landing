import type { Metadata } from "next"
import { DeskRedirect } from "./desk-redirect"

export const metadata: Metadata = {
  title: "LawBey Research Desk",
  robots: { index: false, follow: true },
}

export default function DeskPage() {
  return <DeskRedirect />
}
