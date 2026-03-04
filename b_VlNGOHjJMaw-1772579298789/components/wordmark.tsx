"use client"

/**
 * LawBey wordmark: "Law" (Cormorant 600, upright) + "Bey" (Cormorant 400 italic, amber).
 * Light context: ink + amber. Dark context: white + amber-light.
 */
export function Wordmark({
  variant = "dark",
  showSubline = false,
  className,
  size = "md",
}: {
  variant?: "light" | "dark"
  showSubline?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const isDark = variant === "dark"
  const lawColor = isDark ? "white" : "#111827"
  const beyColor = isDark ? "#E0AE52" : "#C8922A"
  const sublineColor = isDark ? "rgba(255,255,255,0.3)" : "#6B7280"

  const sizes = {
    sm: { fontSize: 24, letterSpacing: -0.5 },
    md: { fontSize: 34, letterSpacing: -0.5 },
    lg: { fontSize: 52, letterSpacing: -1 },
  }
  const s = sizes[size]

  return (
    <span className={`inline-flex flex-col font-serif ${className ?? ""}`}>
      {showSubline && (
        <span
          className="font-mono text-[7.5px] md:text-[9px] uppercase mb-0.5"
          style={{ color: sublineColor, letterSpacing: "2px" }}
        >
          Bahamian Legal Research
        </span>
      )}
      <span className="tracking-tight" style={{ letterSpacing: `${s.letterSpacing}px` }}>
        <span className="font-semibold not-italic" style={{ color: lawColor, fontSize: s.fontSize }}>
          Law
        </span>
        <span className="font-normal italic" style={{ color: beyColor, fontSize: s.fontSize }}>
          Bey
        </span>
      </span>
    </span>
  )
}
