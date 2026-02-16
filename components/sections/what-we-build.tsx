"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { CornerBracket } from "@/components/decorative"

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
    <section className="relative bg-secondary/50 py-32 md:py-48 overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 arch-grid-dense" />

      {/* Decorative SVG corner — top right */}
      <Parallax speed={0.03} className="pointer-events-none absolute -top-10 right-0 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" opacity="0.04">
          <path d="M200 0 L200 200 L0 200" stroke="hsl(174,52%,36%)" strokeWidth="1" />
          <path d="M200 50 L200 200 L50 200" stroke="hsl(174,52%,36%)" strokeWidth="0.5" />
        </svg>
      </Parallax>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/50" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              What We Are Building
            </p>
          </div>
        </ScrollReveal>

        {/* Three pillar cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 180}>
              <div
                className={`card-lift group relative flex h-full flex-col border p-8 lg:p-10 ${
                  pillar.featured
                    ? "border-butterfly-teal/25 bg-card shadow-sm"
                    : "border-border bg-card/80"
                }`}
              >
                {/* Corner brackets */}
                <CornerBracket position="top-left" className={pillar.featured ? "text-butterfly-teal/50" : ""} />
                <CornerBracket position="bottom-right" className={pillar.featured ? "text-butterfly-teal/50" : ""} />

                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground/50">
                    {pillar.number}
                  </span>
                  {pillar.icon}
                </div>

                {/* Layer label */}
                <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
                  {pillar.layer}
                </p>

                {/* Title */}
                <h3 className="mt-3 font-serif text-2xl text-foreground lg:text-[1.65rem]">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                {/* Bottom accent line — grows on hover */}
                <div className="mt-auto pt-8">
                  <div className="h-px w-8 bg-butterfly-teal/30 transition-all duration-700 group-hover:w-full group-hover:bg-butterfly-teal/50" />
                </div>

                {/* Featured badge */}
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
