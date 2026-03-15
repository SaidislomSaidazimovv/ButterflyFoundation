"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const sectors = [
  "Technology", "Media", "Finance", "Governance",
  "Education", "Culture", "Healthcare", "Architecture",
  "Design", "Energy", "Agriculture", "Defense",
  "Retail", "Transport", "Hospitality", "Sports",
]

export function ButterflyMonthSection() {
  return (
    <section id="butterfly-month" className="relative bg-[hsl(var(--muted))] py-32 md:py-44 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              Global Butterfly Month
            </p>
          </div>
        </ScrollReveal>

        {/* Hero block — large title + butterfly image side by side */}
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <ScrollReveal delay={100}>
              <h2 className="font-serif text-5xl tracking-[-0.02em] text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                May.
              </h2>
              <h2 className="mt-1 font-serif text-5xl tracking-[-0.02em] text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                Global
              </h2>
              <h2 className="font-serif text-5xl tracking-[-0.02em] text-foreground md:text-6xl lg:text-7xl leading-[1.05]">
                Alignment.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
                Every May, the Butterfly rises as a synchronized global moment.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">Not awareness.</p>
              <p className="text-lg font-medium leading-relaxed text-foreground">Acceleration.</p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="mt-10 border-l-2 border-butterfly-teal/25 pl-8">
                <p className="font-serif text-xl text-foreground">
                  A Super Bowl moment for humanity.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Butterfly — hero image for this section */}
          <ScrollReveal delay={200}>
            <div className="relative overflow-hidden">
              <Image
                src="/images/butterfly.jpg"
                alt="Butterfly with spread wings — transformation in nature"
                width={1400}
                height={933}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-wide text-muted-foreground/40">
              The butterfly as global symbol of transformation.
            </p>
          </ScrollReveal>
        </div>

        {/* Sector grid */}
        <div className="mt-24">
          <ScrollReveal delay={300}>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
              Across 16 sectors
            </p>
          </ScrollReveal>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector} delay={350 + i * 25}>
                <div className="group flex items-center justify-center border border-border bg-card px-4 py-4 text-center transition-all duration-400 hover:-translate-y-0.5 hover:border-butterfly-teal/25 hover:shadow-sm">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/70 transition-colors duration-300 group-hover:text-butterfly-teal">
                    {sector}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
