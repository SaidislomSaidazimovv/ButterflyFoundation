"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { CornerBracket, SectionDivider } from "@/components/decorative"

const stages = [
  { name: "Egg", description: "Potential. Beginning. The unseen origin.", icon: "M20 35 A15 15 0 1 1 20 5 A15 15 0 1 1 20 35" },
  { name: "Caterpillar", description: "Growth. Consumption. Learning the ground.", icon: "M6 20 Q12 10, 20 20 Q28 30, 34 20" },
  { name: "Cocoon", description: "Withdrawal. Stillness. Deep restructuring.", icon: "M12 32 Q20 4, 28 32 Z" },
  { name: "Metamorphosis", description: "Transformation. The invisible becoming.", icon: "M8 20 L20 8 L32 20 L20 32 Z" },
  { name: "Butterfly", description: "Emergence. Flight. Integration.", icon: "M20 20 C14 10, 4 6, 6 16 C8 22, 14 24, 20 20 M20 20 C26 10, 36 6, 34 16 C32 22, 26 24, 20 20" },
]

const sustainabilityItems = ["Psychological safety", "Belonging", "Purpose", "Resilience", "Hope"]
const regenerationItems = ["Digital environments", "Work structures", "Incentive systems", "AI alignment", "Community density"]
const appliedAcross = ["Governments", "Corporations", "Education", "Platforms"]

export function FrameworkSection() {
  return (
    <section id="framework" className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* ——— Part 1: The Cultural Map ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Butterfly Framework
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            The Cultural Map
          </h2>
        </ScrollReveal>

        {/* ——— SVG Stage Diagram ——— */}
        <ScrollReveal delay={200}>
          <div className="relative mt-24">
            {/* SVG connector line */}
            <div className="absolute top-[44px] left-0 right-0 hidden md:block">
              <svg className="w-full" height="2" preserveAspectRatio="none">
                <line x1="10%" y1="1" x2="90%" y2="1" stroke="hsl(174,52%,36%)" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-6">
              {stages.map((stage, i) => (
                <ScrollReveal key={stage.name} delay={250 + i * 120}>
                  <div className="group flex flex-col items-center text-center">
                    {/* Stage icon circle */}
                    <div className="relative flex h-[88px] w-[88px] items-center justify-center">
                      {/* Outer ring */}
                      <svg viewBox="0 0 88 88" className="absolute inset-0 h-full w-full" fill="none">
                        <circle cx="44" cy="44" r="42" stroke="hsl(174,52%,36%)" strokeWidth="0.5" opacity="0.2"
                          className="transition-all duration-700 group-hover:opacity-50" />
                        <circle cx="44" cy="44" r="36" stroke="hsl(174,52%,36%)" strokeWidth="0.3" opacity="0.1"
                          className="transition-all duration-700 group-hover:opacity-30" />
                      </svg>
                      {/* Inner icon */}
                      <svg viewBox="0 0 40 40" className="relative z-10 h-10 w-10 transition-transform duration-500 group-hover:scale-110">
                        <path d={stage.icon} fill="hsl(174,52%,36%)" fillOpacity="0.12" stroke="hsl(174,52%,36%)" strokeWidth="0.8" />
                      </svg>
                    </div>

                    {/* Stage number */}
                    <span className="mt-5 text-[10px] font-medium tracking-[0.3em] text-muted-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-serif text-lg text-foreground">{stage.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Cultural Map summary */}
        <ScrollReveal delay={900}>
          <div className="relative mt-20 border-l-2 border-butterfly-teal/20 pl-8 md:ml-12">
            <p className="text-lg leading-relaxed text-muted-foreground">A universal language for life transitions.</p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Not diagnosis.</p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">Not ideology.</p>
            <p className="mt-2 text-lg font-medium leading-relaxed text-foreground">A shared human map.</p>
          </div>
        </ScrollReveal>

        {/* ——— Divider ——— */}
        <SectionDivider className="my-28 md:my-36" />

        {/* ——— Part 2: Emotional Sustainability ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">Part II</p>
          </div>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Emotional Sustainability</h2>
          <p className="mt-4 text-lg text-muted-foreground">The defense layer.</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          {/* Protect list */}
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
                Protect
              </p>
            </ScrollReveal>

            <ul className="mt-8 flex flex-col gap-0">
              {sustainabilityItems.map((item, i) => (
                <ScrollReveal key={item} delay={150 + i * 80}>
                  <li className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:bg-butterfly-teal-light">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/40 transition-all duration-300 group-hover:bg-butterfly-teal group-hover:scale-150" />
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

          {/* Applied across — visual card grid */}
          <div className="md:col-span-5">
            <ScrollReveal delay={200}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
                Applied across
              </p>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {appliedAcross.map((item, i) => (
                <ScrollReveal key={item} delay={250 + i * 100}>
                  <div className="card-lift relative border border-border bg-card p-7 text-center">
                    <CornerBracket position="top-left" />
                    <CornerBracket position="bottom-right" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* ——— Divider ——— */}
        <SectionDivider className="my-28 md:my-36" />

        {/* ——— Part 3: Emotional Regeneration ——— */}
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">Part III</p>
          </div>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">Emotional Regeneration</h2>
          <p className="mt-4 text-lg text-muted-foreground">The upgrade layer.</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/50">
                Redesign
              </p>
            </ScrollReveal>

            <ul className="mt-8 flex flex-col gap-0">
              {regenerationItems.map((item, i) => (
                <ScrollReveal key={item} delay={150 + i * 80}>
                  <li className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:bg-butterfly-teal-light">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/40 transition-all duration-300 group-hover:bg-butterfly-teal group-hover:scale-150" />
                    </div>
                    <span className="text-[17px] text-foreground">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Visual diagram — regeneration cycle */}
          <div className="md:col-span-5 flex items-center justify-center">
            <Parallax speed={-0.03}>
              <ScrollReveal delay={400}>
                <svg viewBox="0 0 200 200" className="h-48 w-48 md:h-56 md:w-56" fill="none">
                  {/* Outer rotating ring effect */}
                  <circle cx="100" cy="100" r="90" stroke="hsl(174,52%,36%)" strokeWidth="0.4" opacity="0.15" strokeDasharray="4 8" />
                  <circle cx="100" cy="100" r="70" stroke="hsl(174,52%,36%)" strokeWidth="0.5" opacity="0.2" />
                  <circle cx="100" cy="100" r="50" stroke="hsl(174,52%,36%)" strokeWidth="0.6" opacity="0.25" />
                  {/* Core */}
                  <circle cx="100" cy="100" r="28" fill="hsl(174,52%,36%)" fillOpacity="0.06" stroke="hsl(174,52%,36%)" strokeWidth="0.8" />
                  {/* Arrows suggesting regeneration */}
                  <path d="M100 30 L100 20 M90 25 L100 20 L110 25" stroke="hsl(174,52%,36%)" strokeWidth="0.8" opacity="0.4" />
                  <path d="M170 100 L180 100 M175 90 L180 100 L175 110" stroke="hsl(174,52%,36%)" strokeWidth="0.8" opacity="0.4" />
                  <path d="M100 170 L100 180 M90 175 L100 180 L110 175" stroke="hsl(174,52%,36%)" strokeWidth="0.8" opacity="0.4" />
                  <path d="M30 100 L20 100 M25 90 L20 100 L25 110" stroke="hsl(174,52%,36%)" strokeWidth="0.8" opacity="0.4" />
                  {/* Center text */}
                  <text x="100" y="97" textAnchor="middle" fontSize="7" fill="hsl(174,52%,36%)" fontFamily="sans-serif" letterSpacing="0.1em" opacity="0.5">UPGRADE</text>
                  <text x="100" y="107" textAnchor="middle" fontSize="7" fill="hsl(174,52%,36%)" fontFamily="sans-serif" letterSpacing="0.1em" opacity="0.5">LAYER</text>
                </svg>
              </ScrollReveal>
            </Parallax>
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 border-l-2 border-butterfly-teal/20 pl-8 md:ml-12">
            <p className="text-lg text-muted-foreground">Sustainability stabilizes.</p>
            <p className="text-lg font-medium text-foreground">Regeneration transforms.</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
