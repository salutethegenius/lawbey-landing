"use client"

/**
 * Statute Lines Mark (Concept 01) — light or dark background variant.
 * Six lines of statute text; the third line is the "retrieved" line (amber) with cursor circle.
 */
export function StatuteLinesMark({
  variant = "dark",
  className,
  size = 48,
}: {
  variant?: "light" | "dark"
  className?: string
  size?: number
}) {
  const isDark = variant === "dark"
  const lineColor = isDark ? "white" : "#111827"
  const amberColor = isDark ? "#E0AE52" : "#C8922A"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <line x1="8" y1="14" x2="68" y2="14" stroke={lineColor} strokeWidth={3.5} strokeLinecap="round" opacity={isDark ? 0.15 : 0.15} />
      <line x1="8" y1="24" x2="72" y2="24" stroke={lineColor} strokeWidth={3.5} strokeLinecap="round" opacity={isDark ? 0.15 : 0.15} />
      <line x1="8" y1="34" x2="76" y2="34" stroke={amberColor} strokeWidth={4.5} strokeLinecap="round" />
      <circle cx="76" cy="34" r="4" fill={amberColor} />
      <circle cx="76" cy="34" r="7" fill="none" stroke={amberColor} strokeWidth={1} opacity={0.35} />
      <line x1="8" y1="44" x2="60" y2="44" stroke={lineColor} strokeWidth={3.5} strokeLinecap="round" opacity={isDark ? 0.15 : 0.15} />
      <line x1="8" y1="54" x2="66" y2="54" stroke={lineColor} strokeWidth={3.5} strokeLinecap="round" opacity={isDark ? 0.1 : 0.1} />
      <line x1="8" y1="64" x2="52" y2="64" stroke={lineColor} strokeWidth={3.5} strokeLinecap="round" opacity={isDark ? 0.07 : 0.08} />
    </svg>
  )
}
