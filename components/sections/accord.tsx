"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionDivider } from "@/components/decorative"

const alignments = ["Governments", "Corporations", "Institutions"]

export function AccordSection() {
  return (
    <section id="accord" className="relative bg-secondary/50 py-32 md:py-48 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 arch-grid" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Butterfly Accord
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            Commitment at Scale
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
            The Butterfly Accord aligns:
          </p>
        </ScrollReveal>

        {/* Alignment items — large interactive rows */}
        <div className="mt-12 flex flex-col">
          {alignments.map((item, i) => (
            <ScrollReveal key={item} delay={300 + i * 120}>
              <div className="group relative flex items-center border-b border-border py-8 transition-colors duration-400 hover:bg-butterfly-teal-light">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-full w-0 bg-butterfly-teal/10 transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 flex w-full items-center gap-8 px-2">
                  <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-foreground md:text-3xl lg:text-4xl">
                    {item}
                  </span>
                  {/* Arrow that appears on hover */}
                  <svg
                    className="ml-auto h-5 w-5 text-butterfly-teal opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                    viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
                  >
                    <path d="M4 10h12M12 6l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={700}>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Emotional Sustainability becomes measurable.
              </p>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Accountable.</p>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Integrated.</p>
            </div>
            <div className="flex items-center">
              <div className="border-l-2 border-butterfly-teal/30 pl-8">
                <p className="text-lg text-muted-foreground">Not a pledge.</p>
                <p className="text-lg font-medium text-foreground">A framework.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
