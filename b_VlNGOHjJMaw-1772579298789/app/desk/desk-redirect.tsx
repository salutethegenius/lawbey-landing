"use client"

import { useEffect } from "react"

export function DeskRedirect() {
  useEffect(() => {
    window.location.replace("/#product")
  }, [])

  return (
    <main className="min-h-screen bg-parchment text-ink flex items-center justify-center px-6">
      <p className="text-sm text-ink/50">
        Redirecting to the product walkthrough…
      </p>
    </main>
  )
}
