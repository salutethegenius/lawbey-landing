"use client"

/**
 * Identity eyebrow: DM Mono, small, letter-spacing, amber, § before.
 * Use above section titles.
 */
export function SectionEyebrow({
  children,
  className,
  dark,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <p
      className={`font-mono text-[9.5px] md:text-[10px] tracking-[0.22em] uppercase flex items-center gap-2.5 mb-2.5 ${
        dark ? "text-[var(--amber-light)]" : "text-[var(--amber)]"
      } ${className ?? ""}`}
    >
      <span className="font-serif text-sm leading-none" aria-hidden>§</span>
      {children}
    </p>
  )
}
