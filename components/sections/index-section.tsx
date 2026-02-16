"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { CornerBracket } from "@/components/decorative"

const metrics = [
  {
    label: "Workplace well-being",
    abbr: "WB",
    barWidth: "75%",
  },
  {
    label: "Youth stability",
    abbr: "YS",
    barWidth: "60%",
  },
  {
    label: "Digital health metrics",
    abbr: "DH",
    barWidth: "50%",
  },
  {
    label: "Institutional resilience",
    abbr: "IR",
    barWidth: "85%",
  },
]

export function IndexSection() {
  return (
    <section id="index" className="relative py-32 md:py-48 overflow-hidden">
      {/* Decorative data-visualization SVG */}
      <Parallax speed={-0.04} className="pointer-events-none absolute right-0 top-32 opacity-[0.03] hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="hsl(174,52%,36%)" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="hsl(174,52%,36%)" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="100" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="hsl(174,52%,36%)" strokeWidth="0.3" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="hsl(174,52%,36%)" strokeWidth="0.3" />
        </svg>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Butterfly Index
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            Measure What Matters
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Emotional stability must become visible.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
            The Butterfly Index tracks:
          </p>
        </ScrollReveal>

        {/* Metric cards with visual bars */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={300 + i * 120}>
              <div className="card-lift group relative flex flex-col overflow-hidden border border-border bg-card p-8">
                <CornerBracket position="top-left" />
                <CornerBracket position="bottom-right" />

                {/* Abbreviated label — large watermark */}
                <span className="absolute -bottom-3 -right-2 font-serif text-[5rem] font-light leading-none text-muted/60 transition-colors duration-500 group-hover:text-butterfly-teal/8 select-none">
                  {metric.abbr}
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 text-[16px] font-medium text-foreground leading-snug">{metric.label}</h3>

                  {/* Visual progress bar */}
                  <div className="mt-6 h-px w-full bg-border">
                    <div
                      className="h-full bg-butterfly-teal/30 transition-all duration-1000 group-hover:bg-butterfly-teal/60"
                      style={{ width: metric.barWidth }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <p className="mt-20 font-serif text-2xl text-foreground md:text-3xl">
            Progress made measurable.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
