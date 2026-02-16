"use client";

import { ButterflySymbol } from "@/components/butterfly-symbol";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 arch-grid animate-grid-reveal" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 800 800" className="h-[800px] w-[800px]" fill="none">
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="hsl(174,52%,36%)"
            strokeWidth="0.4"
            opacity="0.06"
          />
          <circle
            cx="400"
            cy="400"
            r="300"
            stroke="hsl(174,52%,36%)"
            strokeWidth="0.3"
            opacity="0.08"
          />
          <circle
            cx="400"
            cy="400"
            r="220"
            stroke="hsl(174,52%,36%)"
            strokeWidth="0.3"
            opacity="0.1"
          />
          <circle
            cx="400"
            cy="400"
            r="140"
            stroke="hsl(174,52%,36%)"
            strokeWidth="0.2"
            opacity="0.12"
          />
          <line
            x1="400"
            y1="20"
            x2="400"
            y2="780"
            stroke="hsl(220,12%,91%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <line
            x1="20"
            y1="400"
            x2="780"
            y2="400"
            stroke="hsl(220,12%,91%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <line
            x1="120"
            y1="120"
            x2="680"
            y2="680"
            stroke="hsl(220,12%,91%)"
            strokeWidth="0.3"
            opacity="0.15"
          />
          <line
            x1="680"
            y1="120"
            x2="120"
            y2="680"
            stroke="hsl(220,12%,91%)"
            strokeWidth="0.3"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-48 w-48 rounded-full border border-butterfly-teal/15 animate-pulse-ring" />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-48 w-48 rounded-full border border-butterfly-teal/10 animate-pulse-ring"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

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

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
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
          className={`mt-14 font-serif text-5xl font-light tracking-[-0.02em] text-foreground md:text-7xl lg:text-[5.5rem] transition-all duration-[1200ms] delay-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
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

      <div
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
