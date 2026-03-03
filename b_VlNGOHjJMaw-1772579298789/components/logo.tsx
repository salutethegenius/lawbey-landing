"use client"

import Link from "next/link"
import { StatuteLinesMark } from "./statute-lines-mark"
import { Wordmark } from "./wordmark"

/**
 * Full lockup: Statute Lines mark + wordmark (+ optional subline).
 * For navbar, hero, footer. Always paired per identity.
 */
export function Logo({
  variant = "dark",
  showSubline = false,
  href = "/",
  compact = false,
  className,
}: {
  variant?: "light" | "dark"
  showSubline?: boolean
  href?: string
  compact?: boolean
  className?: string
}) {
  const markSize = compact ? 32 : 40
  const wordmarkSize = compact ? "sm" : "md"

  const content = (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <StatuteLinesMark variant={variant} size={markSize} />
      <Wordmark variant={variant} showSubline={showSubline} size={wordmarkSize} />
    </span>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
        {content}
      </Link>
    )
  }

  return content
}
