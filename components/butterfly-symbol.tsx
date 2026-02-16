"use client"

export function ButterflySymbol({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="The Butterfly Foundation symbol"
      >
        {/* Outer ring — subtle architectural element */}
        <circle cx="120" cy="120" r="115" stroke="hsl(174, 52%, 36%)" strokeWidth="0.3" opacity="0.2" />
        <circle cx="120" cy="120" r="100" stroke="hsl(174, 52%, 36%)" strokeWidth="0.2" opacity="0.1" />

        {/* Left wing upper */}
        <g className={animated ? "animate-wing-left" : ""} style={{ transformOrigin: "120px 115px" }}>
          <path
            d="M120 115 C100 70, 45 35, 30 80 C18 118, 62 140, 120 115"
            fill="hsl(174, 52%, 36%)"
            fillOpacity="0.12"
            stroke="hsl(174, 52%, 36%)"
            strokeWidth="0.8"
          />
          {/* Inner vein lines */}
          <path d="M120 115 C95 82, 60 55, 40 80" stroke="hsl(174, 52%, 36%)" strokeWidth="0.3" opacity="0.3" fill="none" />
          <path d="M120 115 C88 98, 50 90, 32 100" stroke="hsl(174, 52%, 36%)" strokeWidth="0.3" opacity="0.25" fill="none" />
          {/* Left wing lower */}
          <path
            d="M120 115 C96 130, 42 160, 44 138 C46 118, 78 108, 120 115"
            fill="hsl(174, 52%, 36%)"
            fillOpacity="0.08"
            stroke="hsl(174, 52%, 36%)"
            strokeWidth="0.6"
          />
        </g>

        {/* Right wing upper */}
        <g className={animated ? "animate-wing-right" : ""} style={{ transformOrigin: "120px 115px" }}>
          <path
            d="M120 115 C140 70, 195 35, 210 80 C222 118, 178 140, 120 115"
            fill="hsl(174, 52%, 36%)"
            fillOpacity="0.12"
            stroke="hsl(174, 52%, 36%)"
            strokeWidth="0.8"
          />
          <path d="M120 115 C145 82, 180 55, 200 80" stroke="hsl(174, 52%, 36%)" strokeWidth="0.3" opacity="0.3" fill="none" />
          <path d="M120 115 C152 98, 190 90, 208 100" stroke="hsl(174, 52%, 36%)" strokeWidth="0.3" opacity="0.25" fill="none" />
          {/* Right wing lower */}
          <path
            d="M120 115 C144 130, 198 160, 196 138 C194 118, 162 108, 120 115"
            fill="hsl(174, 52%, 36%)"
            fillOpacity="0.08"
            stroke="hsl(174, 52%, 36%)"
            strokeWidth="0.6"
          />
        </g>

        {/* Body */}
        <ellipse cx="120" cy="118" rx="2" ry="22" fill="hsl(220, 18%, 12%)" opacity="0.8" />

        {/* Antennae */}
        <path d="M120 96 C115 78, 106 66, 98 58" stroke="hsl(220, 18%, 12%)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <path d="M120 96 C125 78, 134 66, 142 58" stroke="hsl(220, 18%, 12%)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="58" r="1.8" fill="hsl(174, 52%, 36%)" />
        <circle cx="142" cy="58" r="1.8" fill="hsl(174, 52%, 36%)" />
      </svg>
    </div>
  )
}
