"use client"

import Image from "next/image"
import { ButterflySymbol } from "@/components/butterfly-symbol"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* ——— Full-bleed background image (covers nav + hero) ——— */}
      <div className="absolute inset-0 -top-[var(--nav-height,80px)]">
        <Image
          src="/images/photo_2026-03-25_16-45-34.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* White overlay to preserve light/cream aesthetic */}
        <div className="absolute inset-0 bg-[hsl(var(--background))]/[0.70]" />
      </div>

      {/* Side labels */}
      <div
        className={`pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 delay-[1200ms] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/30"
          style={{ writingMode: "vertical-lr" }}
        >
          Geneva, Switzerland
        </p>
      </div>

      <div
        className={`pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 delay-[1200ms] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/30"
          style={{ writingMode: "vertical-lr" }}
        >
          The Butterfly Foundation
        </p>
      </div>

      {/* ——— Content ——— */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-28 text-center">
        {/* Butterfly symbol */}
        <div
          className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="animate-float">
            <ButterflySymbol className="h-32 w-32 md:h-44 md:w-44 lg:h-52 lg:w-52" />
          </div>
        </div>

        <h1
          className={`mt-14 font-serif text-5xl font-light tracking-[-0.03em] text-foreground md:text-7xl lg:text-[5.5rem] transition-all duration-[1200ms] delay-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-balance">Emotional Sustainability.</span>
        </h1>

        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-[1000ms] delay-[600ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-12 bg-butterfly-teal/40" />
          <div className="h-1.5 w-1.5 rotate-45 bg-butterfly-teal/50" />
          <div className="h-px w-12 bg-butterfly-teal/40" />
        </div>

        <p
          className={`mt-8 max-w-[38rem] text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-[1200ms] delay-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building the global infrastructure for emotional stability and
          regeneration in the age of accelerating intelligence.
        </p>

        <a
          href="#framework"
          className={`group mt-14 relative inline-flex items-center gap-3 overflow-hidden border border-foreground/80 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground transition-all duration-500 hover:text-background delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          <span className="relative z-10">Explore the Framework</span>
          <svg
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
          Scroll
        </span>
        <div className="relative h-10 w-6 rounded-full border border-butterfly-teal/40">
          <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-butterfly-teal animate-scroll-dot" />
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
