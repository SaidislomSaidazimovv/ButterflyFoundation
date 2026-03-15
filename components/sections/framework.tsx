"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionDivider } from "@/components/decorative"
import { StageDiagram } from "@/components/stage-diagram"

const sustainabilityItems = ["Psychological safety", "Belonging", "Purpose", "Resilience", "Hope"]
const regenerationItems = ["Digital environments", "Work structures", "Incentive systems", "AI alignment", "Community density"]
const appliedAcross = ["Governments", "Corporations", "Education", "Platforms"]

export function FrameworkSection() {
  return (
    <section id="framework" className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* ——— Part 1: The Cultural Map ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Butterfly Framework
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl">
            The Cultural Map
          </h2>
        </ScrollReveal>

        {/* Stage diagram with traveling dot animation */}
        <StageDiagram />

        <ScrollReveal delay={800}>
          <div className="relative mt-20 border-l-2 border-butterfly-teal/20 pl-8 md:ml-12">
            <p className="text-lg leading-relaxed text-muted-foreground">A universal language for life transitions.</p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Not diagnosis. Not ideology.</p>
            <p className="mt-2 text-lg font-medium leading-relaxed text-foreground">A shared human map.</p>
          </div>
        </ScrollReveal>

        <SectionDivider className="my-28 md:my-36" />

        {/* ——— Part 2: Emotional Sustainability ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">Part II</p>
          </div>
          <h2 className="mt-6 font-serif text-4xl tracking-[-0.02em] text-foreground md:text-5xl">
            Emotional Sustainability
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">The defense layer.</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/40">
                Protect
              </p>
            </ScrollReveal>

            <ul className="mt-8 flex flex-col">
              {sustainabilityItems.map((item, i) => (
                <ScrollReveal key={item} delay={150 + i * 70}>
                  <li className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:bg-butterfly-teal-light">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/30 transition-all duration-300 group-hover:bg-butterfly-teal group-hover:scale-150" />
                    </div>
                    <span className="text-[17px] text-foreground">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={600}>
              <div className="mt-10 pl-8">
                <p className="text-lg text-muted-foreground">Reduce volatility.</p>
                <p className="text-lg font-medium text-foreground">Prevent collapse.</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={200}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/40">
                Applied across
              </p>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {appliedAcross.map((item, i) => (
                <ScrollReveal key={item} delay={250 + i * 80}>
                  <div className="border border-border bg-card p-7 text-center transition-all duration-400 hover:-translate-y-0.5 hover:shadow-sm hover:border-butterfly-teal/20">
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider className="my-28 md:my-36" />

        {/* ——— Part 3: Emotional Regeneration ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">Part III</p>
          </div>
          <h2 className="mt-6 font-serif text-4xl tracking-[-0.02em] text-foreground md:text-5xl">
            Emotional Regeneration
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">The upgrade layer.</p>
        </ScrollReveal>

        <div className="mt-16 md:max-w-2xl">
          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/40">
              Redesign
            </p>
          </ScrollReveal>

          <ul className="mt-8 flex flex-col">
            {regenerationItems.map((item, i) => (
              <ScrollReveal key={item} delay={150 + i * 70}>
                <li className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:bg-butterfly-teal-light">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/30 transition-all duration-300 group-hover:bg-butterfly-teal group-hover:scale-150" />
                  </div>
                  <span className="text-[17px] text-foreground">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 border-l-2 border-butterfly-teal/20 pl-8 md:ml-12">
            <p className="text-lg text-muted-foreground">Sustainability stabilizes.</p>
            <p className="text-lg font-medium text-foreground">Regeneration transforms.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
