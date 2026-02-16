"use client"

import { ScrollReveal, Parallax } from "@/components/scroll-reveal"
import { ButterflySymbol } from "@/components/butterfly-symbol"

export function FoundingPartnersSection() {
  return (
    <section className="relative bg-foreground py-32 md:py-48 overflow-hidden">
      {/* Architectural grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Large butterfly watermark */}
      <Parallax speed={-0.04} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <ButterflySymbol className="h-[500px] w-[500px]" animated={false} />
      </Parallax>

      {/* Decorative SVG lines — left and right */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-butterfly-teal/10 to-transparent hidden lg:block ml-24" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-butterfly-teal/10 to-transparent hidden lg:block mr-24" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-16">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-butterfly-teal/40" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
              Founding Partners
            </p>
            <div className="h-px w-10 bg-butterfly-teal/40" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="mt-10 font-serif text-4xl font-light text-primary-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            <span className="text-balance">Architects of the Next Global Standard</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-primary-foreground/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/50" />
            <div className="h-px w-6 bg-primary-foreground/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-primary-foreground/50">
            We are inviting a limited number of founding partners to help shape
            the institutional framework for Emotional Sustainability.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <a
            href="#contact"
            className="group mt-14 relative inline-flex items-center gap-3 overflow-hidden border border-primary-foreground/20 px-12 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500"
          >
            <span className="absolute inset-0 bg-butterfly-teal translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative z-10">Request Strategic Briefing</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
