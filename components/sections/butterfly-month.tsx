"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { CornerBracket } from "@/components/decorative"

const sectors = [
  "Technology", "Media", "Finance", "Governance",
  "Education", "Culture", "Healthcare", "Architecture",
  "Design", "Energy", "Agriculture", "Defense",
  "Retail", "Transport", "Hospitality", "Sports",
]

export function ButterflyMonthSection() {
  return (
    <section id="butterfly-month" className="relative bg-secondary/50 py-32 md:py-48 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 arch-grid-dense" />

      {/* Large decorative "MAY" watermark */}
      <Parallax speed={-0.06} className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2">
        <span className="font-serif text-[20rem] font-light leading-none text-foreground/[0.015] select-none hidden lg:block">
          May
        </span>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              Global Butterfly Month
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left — headline and copy */}
          <div className="md:col-span-5">
            <ScrollReveal delay={100}>
              <h2 className="font-serif text-5xl text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                May.
              </h2>
              <h2 className="mt-2 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                Global
              </h2>
              <h2 className="font-serif text-5xl text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                Alignment.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px w-6 bg-butterfly-teal/40" />
                <div className="h-1 w-1 rotate-45 bg-butterfly-teal/50" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Every May, the Butterfly rises as a synchronized global moment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Not awareness.</p>
              <p className="text-lg font-medium leading-relaxed text-foreground">Acceleration.</p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="mt-12 relative border border-butterfly-teal/20 bg-card p-8">
                <CornerBracket position="top-left" />
                <CornerBracket position="bottom-right" />
                <p className="font-serif text-xl text-foreground">
                  A Super Bowl moment for humanity.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — sector grid */}
          <div className="md:col-span-7">
            <ScrollReveal delay={300}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
                Across 16 sectors
              </p>
            </ScrollReveal>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {sectors.map((sector, i) => (
                <ScrollReveal key={sector} delay={350 + i * 30}>
                  <div className="card-lift group relative flex items-center justify-center border border-border bg-card px-4 py-4 text-center">
                    <div className="absolute top-0 left-0 h-0 w-px bg-butterfly-teal transition-all duration-500 group-hover:h-full" />
                    <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-foreground/80 transition-colors duration-300 group-hover:text-butterfly-teal">
                      {sector}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
