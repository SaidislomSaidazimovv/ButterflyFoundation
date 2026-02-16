"use client"

/** Architectural corner bracket — used on cards and highlighted sections */
export function CornerBracket({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  className?: string
}) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-6 w-6 text-butterfly-teal/30 ${positionClasses[position]} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 24 L0 0 L24 0" />
    </svg>
  )
}

/** Horizontal decorative line with teal accent */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-border" />
      <div className="h-1.5 w-1.5 rotate-45 border border-butterfly-teal/40" />
      <div className="h-px w-12 bg-butterfly-teal/30" />
      <div className="h-1.5 w-1.5 rotate-45 border border-butterfly-teal/40" />
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}

/** Vertical numbered label — Swiss design typographic element */
export function VerticalLabel({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground/40 ${className}`}
      style={{ writingMode: "vertical-lr" }}
    >
      {text}
    </div>
  )
}

/** Small teal diamond icon */
export function DiamondIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`h-2 w-2 rotate-45 bg-butterfly-teal/60 ${className}`} />
  )
}

/** Architectural frame that wraps a section */
export function ArchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <CornerBracket position="top-left" />
      <CornerBracket position="top-right" />
      <CornerBracket position="bottom-left" />
      <CornerBracket position="bottom-right" />
      <div className="px-6 py-6">{children}</div>
    </div>
  )
}
