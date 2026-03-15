"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function MissingInfrastructureSection() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              The Missing Infrastructure
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12 md:items-center">
          {/* Left — statements */}
          <div className="md:col-span-6">
            <ScrollReveal delay={100}>
              <p className="font-serif text-[2rem] leading-[1.3] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[2.75rem]">
                The world built systems for finance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-5 font-serif text-[2rem] leading-[1.3] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[2.75rem]">
                The world built systems for climate.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-5 font-serif text-[2rem] leading-[1.3] tracking-[-0.01em] text-muted-foreground/60 md:text-4xl lg:text-[2.75rem]">
                It never built a system for emotional stability.
              </p>
            </ScrollReveal>

            {/* Punchy lines */}
            <ScrollReveal delay={500}>
              <div className="mt-16 flex flex-col gap-4 border-l-2 border-butterfly-teal/25 pl-8">
                {[
                  "AI is accelerating.",
                  "Social cohesion is weakening.",
                  "Volatility is rising.",
                ].map((text) => (
                  <p key={text} className="text-[17px] leading-relaxed text-muted-foreground">{text}</p>
                ))}
                <p className="text-[17px] font-medium leading-relaxed text-foreground">
                  Human infrastructure must evolve.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — contextual photo */}
          <div className="md:col-span-6">
            <ScrollReveal delay={400}>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/hands-together.jpg"
                  alt="Hands reaching toward each other — the need for human connection"
                  width={1400}
                  height={933}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-[11px] tracking-wide text-muted-foreground/40">
                The infrastructure for connection does not yet exist.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
