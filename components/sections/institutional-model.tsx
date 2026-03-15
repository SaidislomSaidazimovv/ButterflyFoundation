"use client"

import Image from "next/image"
import { ScrollReveal, Parallax } from "@/components/scroll-reveal"

const principles = [
  { title: "Independent board oversight" },
  { title: "Transparent capital allocation" },
  { title: "Long-term institutional mandate" },
]

export function InstitutionalModelSection() {
  return (
    <section id="institutional-model" className="relative py-32 md:py-44 overflow-hidden">
      {/* Subtle sunrise background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sunrise-mist.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.20]"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              Institutional Model
            </p>
          </div>
          <h2 className="mt-8 font-serif text-4xl tracking-[-0.02em] text-foreground md:text-5xl">
            Governance &amp; Structure
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
            The Butterfly Foundation is established in Geneva, Switzerland.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-muted-foreground">It operates with:</p>
        </ScrollReveal>

        {/* Principle rows — clean, confident */}
        <div className="mt-14 flex flex-col">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={350 + i * 120}>
              <div className="group flex items-center gap-6 border-b border-border border-l-2 border-l-transparent py-8 transition-all duration-300 ease hover:border-l-butterfly-teal hover:translate-x-2">
                <span className="text-[11px] font-medium tracking-[0.3em] pl-5 text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl text-foreground md:text-2xl">{p.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Purpose */}
        <ScrollReveal delay={750}>
          <div className="mt-20 border-l-2 border-butterfly-teal/25 pl-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/40">
              Purpose
            </p>
            <p className="mt-5 font-serif text-2xl tracking-[-0.01em] text-foreground md:text-3xl">
              To standardize Emotional Sustainability globally.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
