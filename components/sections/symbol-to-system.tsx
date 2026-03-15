"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionDivider, VerticalLabel } from "@/components/decorative"

const stack = [
  { item: "The Butterfly Movement", label: "Culture", color: "bg-butterfly-teal/10" },
  { item: "Global Butterfly Month (May)", label: "Measurement", color: "bg-butterfly-teal/8" },
  { item: "The Butterfly Index", label: "Commitment", color: "bg-butterfly-teal/6" },
  { item: "The Butterfly Accord", label: "Execution", color: "bg-butterfly-teal/5" },
  { item: "The Geneva Foundation", label: "Institution", color: "bg-butterfly-teal/3" },
]

export function SymbolToSystemSection() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <VerticalLabel text="Section 03" className="absolute left-6 top-32 hidden lg:block" />

      <div className="mx-auto max-w-5xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              From Symbol to System
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">The Stack</h2>
        </ScrollReveal>

        {/* Visual stack diagram */}
        <div className="relative mt-20">
          {/* SVG connector backbone */}
          <div className="absolute left-8 top-0 bottom-0 hidden md:block">
            <svg className="h-full w-4" viewBox="0 0 16 500" preserveAspectRatio="none" fill="none">
              <line x1="8" y1="0" x2="8" y2="500" stroke="hsl(174,52%,36%)" strokeWidth="1" opacity="0.15" />
            </svg>
          </div>

          <div className="flex flex-col gap-0">
            {stack.map((item, i) => (
              <ScrollReveal key={item.item} delay={i * 100}>
                <div className="group relative flex items-stretch border-b border-border transition-all duration-500 hover:bg-butterfly-teal-light md:ml-16">
                  {/* Connection node */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:flex items-center">
                    <div className="h-3 w-3 rounded-full border-[1.5px] border-butterfly-teal/30 bg-background transition-all duration-400 group-hover:border-butterfly-teal group-hover:bg-butterfly-teal/20" />
                    <div className="h-px w-[calc(4rem-12px)] bg-border transition-colors duration-400 group-hover:bg-butterfly-teal/30" />
                  </div>

                  <div className="flex w-full items-center justify-between py-7 px-0 md:px-6">
                    <div className="flex items-center gap-5">
                      <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl text-foreground md:text-2xl line-reveal">
                        {item.item}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/60">
                      {item.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <SectionDivider className="mt-16" />
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
            <span>Culture</span>
            <span className="text-butterfly-teal/30">&#9670;</span>
            <span>Measurement</span>
            <span className="text-butterfly-teal/30">&#9670;</span>
            <span>Commitment</span>
            <span className="text-butterfly-teal/30">&#9670;</span>
            <span>Execution</span>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
