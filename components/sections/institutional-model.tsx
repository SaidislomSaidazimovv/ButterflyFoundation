"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { CornerBracket } from "@/components/decorative"

const principles = [
  {
    title: "Independent board oversight",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="1" stroke="hsl(174,52%,36%)" strokeWidth="0.6" opacity="0.3" />
        <rect x="14" y="14" width="20" height="20" rx="1" stroke="hsl(174,52%,36%)" strokeWidth="0.5" opacity="0.4" />
        <rect x="20" y="20" width="8" height="8" fill="hsl(174,52%,36%)" fillOpacity="0.15" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Transparent capital allocation",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <circle cx="24" cy="24" r="20" stroke="hsl(174,52%,36%)" strokeWidth="0.6" opacity="0.3" />
        <circle cx="24" cy="24" r="13" stroke="hsl(174,52%,36%)" strokeWidth="0.5" opacity="0.4" />
        <circle cx="24" cy="24" r="6" fill="hsl(174,52%,36%)" fillOpacity="0.12" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
        <line x1="24" y1="4" x2="24" y2="44" stroke="hsl(174,52%,36%)" strokeWidth="0.3" opacity="0.15" />
        <line x1="4" y1="24" x2="44" y2="24" stroke="hsl(174,52%,36%)" strokeWidth="0.3" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Long-term institutional mandate",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <path d="M24 4 L44 14 L44 34 L24 44 L4 34 L4 14 Z" stroke="hsl(174,52%,36%)" strokeWidth="0.6" opacity="0.3" />
        <path d="M24 12 L36 18 L36 30 L24 36 L12 30 L12 18 Z" stroke="hsl(174,52%,36%)" strokeWidth="0.5" opacity="0.4" />
        <circle cx="24" cy="24" r="4" fill="hsl(174,52%,36%)" fillOpacity="0.15" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
      </svg>
    ),
  },
]

export function InstitutionalModelSection() {
  return (
    <section id="institutional-model" className="relative py-32 md:py-48 overflow-hidden">
      {/* Architectural frame */}
      <div className="pointer-events-none absolute inset-10 border border-border/30 hidden md:block md:inset-20" />

      {/* Subtle decorative geometry */}
      <Parallax speed={0.04} className="pointer-events-none absolute top-20 -right-20 opacity-[0.03]">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M150 10 L290 150 L150 290 L10 150 Z" stroke="hsl(174,52%,36%)" strokeWidth="1" />
          <path d="M150 60 L240 150 L150 240 L60 150 Z" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
        </svg>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              Institutional Model
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl text-foreground md:text-5xl">
            {'Governance & Structure'}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
            The Butterfly Foundation is established in Geneva, Switzerland.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-muted-foreground">It operates with:</p>
        </ScrollReveal>

        {/* Principle cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={350 + i * 140}>
              <div className="card-lift group relative flex flex-col items-start gap-6 border border-border bg-card p-8 lg:p-10">
                <CornerBracket position="top-left" />
                <CornerBracket position="bottom-right" />

                {p.icon}

                <p className="text-[17px] font-medium text-foreground leading-snug">{p.title}</p>

                {/* Bottom accent line */}
                <div className="mt-auto h-px w-6 bg-butterfly-teal/25 transition-all duration-700 group-hover:w-16 group-hover:bg-butterfly-teal/50" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Purpose statement */}
        <ScrollReveal delay={800}>
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
              Purpose
            </p>
            <p className="mt-5 font-serif text-2xl text-foreground md:text-3xl lg:text-[2rem]">
              To standardize Emotional Sustainability globally.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
