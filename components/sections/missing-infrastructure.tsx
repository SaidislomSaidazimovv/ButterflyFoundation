"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { VerticalLabel } from "@/components/decorative"

export function MissingInfrastructureSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background decorative SVG — offset circle */}
      <Parallax speed={-0.05} className="pointer-events-none absolute -right-32 top-20 opacity-[0.04]">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="240" stroke="hsl(174,52%,36%)" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="180" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="120" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
        </svg>
      </Parallax>

      {/* Left vertical label */}
      <VerticalLabel text="Section 01" className="absolute left-6 top-32 hidden lg:block" />

      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Missing Infrastructure
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          {/* Left column — large serif statements */}
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="font-serif text-3xl leading-[1.35] text-foreground md:text-4xl lg:text-[2.75rem]">
                The world built systems for finance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-5 font-serif text-3xl leading-[1.35] text-foreground md:text-4xl lg:text-[2.75rem]">
                The world built systems for climate.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-5 font-serif text-3xl leading-[1.35] text-muted-foreground/70 md:text-4xl lg:text-[2.75rem]">
                It never built a system for emotional stability.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column — short punchy lines with visual weight */}
          <div className="md:col-span-5 md:border-l md:border-border md:pl-12">
            <div className="flex flex-col gap-8">
              {[
                { text: "AI is accelerating.", active: false },
                { text: "Social cohesion is weakening.", active: false },
                { text: "Volatility is rising.", active: false },
                { text: "Human infrastructure must evolve.", active: true },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={400 + i * 120}>
                  <div className="group flex items-start gap-4">
                    <div
                      className={`mt-2 h-2 w-2 flex-shrink-0 rotate-45 transition-colors duration-300 ${
                        item.active ? "bg-butterfly-teal" : "border border-border group-hover:border-butterfly-teal/40"
                      }`}
                    />
                    <p
                      className={`text-lg leading-relaxed transition-colors duration-300 ${
                        item.active ? "font-medium text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
