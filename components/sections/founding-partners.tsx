"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FoundingPartnersSection() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Full-bleed Alpine photo — Swiss institutional gravitas */}
      <div className="absolute inset-0">
        <Image
          src="/images/alpine-lake.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-16 py-36 md:py-52">
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-butterfly-teal">
            Founding Partners
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="mt-10 font-serif text-4xl font-light tracking-[-0.02em] text-primary-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            Architects of the Next Global Standard
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary-foreground/15" />
            <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/50" />
            <div className="h-px w-10 bg-primary-foreground/15" />
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
            className="group mt-14 relative inline-flex items-center gap-3 overflow-hidden border border-primary-foreground/25 px-12 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500"
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
