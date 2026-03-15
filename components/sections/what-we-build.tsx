"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    number: "01",
    layer: "Cultural Layer",
    title: "The Butterfly Movement",
    description: "A universal language for the emotional stages of life.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="hsl(174,52%,36%)" strokeWidth="0.8">
        <circle cx="20" cy="20" r="18" opacity="0.2" />
        <circle cx="20" cy="20" r="12" opacity="0.3" />
        <circle cx="20" cy="20" r="6" opacity="0.5" />
        <circle cx="20" cy="20" r="2" fill="hsl(174,52%,36%)" stroke="none" />
      </svg>
    ),
  },
  {
    number: "02",
    layer: "Stability Layer",
    title: "Emotional Sustainability",
    description: "Protect what makes us human.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="hsl(174,52%,36%)" strokeWidth="0.8">
        <rect x="4" y="4" width="32" height="32" rx="1" opacity="0.2" />
        <rect x="10" y="10" width="20" height="20" rx="1" opacity="0.3" />
        <rect x="16" y="16" width="8" height="8" rx="0.5" fill="hsl(174,52%,36%)" fillOpacity="0.2" stroke="hsl(174,52%,36%)" />
      </svg>
    ),
    featured: true,
  },
  {
    number: "03",
    layer: "Upgrade Layer",
    title: "Emotional Regeneration",
    description: "Redesign systems to increase human capacity.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="hsl(174,52%,36%)" strokeWidth="0.8">
        <path d="M20 4 L20 36" opacity="0.3" />
        <path d="M4 20 L36 20" opacity="0.3" />
        <path d="M8 8 L32 32" opacity="0.2" />
        <path d="M32 8 L8 32" opacity="0.2" />
        <circle cx="20" cy="20" r="4" fill="hsl(174,52%,36%)" fillOpacity="0.15" stroke="hsl(174,52%,36%)" />
      </svg>
    ),
  },
]

export function WhatWeBuildSection() {
  return (
    <section className="relative bg-[hsl(var(--muted))] py-32 md:py-44 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              What We Are Building
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 150}>
              <div
                className={`group relative flex h-full flex-col border bg-card p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  pillar.featured
                    ? "border-butterfly-teal/30 shadow-sm"
                    : "border-border hover:border-butterfly-teal/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground/40">
                    {pillar.number}
                  </span>
                  {pillar.icon}
                </div>

                <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
                  {pillar.layer}
                </p>

                <h3 className="mt-3 font-serif text-2xl tracking-[-0.01em] text-foreground lg:text-[1.65rem]">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                <div className="mt-auto pt-8">
                  <div className="h-px w-8 bg-butterfly-teal/25 transition-all duration-700 group-hover:w-full group-hover:bg-butterfly-teal/40" />
                </div>

                {pillar.featured && (
                  <div className="absolute top-0 right-8 h-8 w-px bg-butterfly-teal/40" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
