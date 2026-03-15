"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"

const metrics = [
  { label: "Workplace well-being", abbr: "WB", barWidth: "75%" },
  { label: "Youth stability", abbr: "YS", barWidth: "60%" },
  { label: "Digital health metrics", abbr: "DH", barWidth: "50%" },
  { label: "Institutional resilience", abbr: "IR", barWidth: "85%" },
]

export function IndexSection() {
  return (
    <section id="index" className="relative py-32 md:py-44 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Butterfly Index
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl">
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={300 + i * 100}>
              <div className="group relative flex flex-col overflow-hidden border border-border bg-card p-8 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-md hover:border-butterfly-teal/20">
                <span className="absolute -bottom-3 -right-2 font-serif text-[5rem] font-light leading-none text-muted/40 transition-colors duration-500 group-hover:text-butterfly-teal/6 select-none">
                  {metric.abbr}
                </span>

                <div className="relative z-10">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 text-[16px] font-medium text-foreground leading-snug">{metric.label}</h3>

                  <div className="mt-6 h-px w-full bg-border">
                    <div
                      className="h-full bg-butterfly-teal/25 transition-all duration-1000 group-hover:bg-butterfly-teal/50"
                      style={{ width: metric.barWidth }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-20 border-l-2 border-butterfly-teal/25 pl-8">
            <p className="font-serif text-2xl tracking-[-0.01em] text-foreground md:text-3xl">
              Progress made measurable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
