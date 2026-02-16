"use client"

import { ButterflySymbol } from "@/components/butterfly-symbol"
import { SectionDivider } from "@/components/decorative"

export function Footer() {
  return (
    <footer className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-16">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <ButterflySymbol className="h-10 w-10" animated={false} />

          {/* Category statement */}
          <p className="max-w-lg font-serif text-lg leading-relaxed text-muted-foreground">
            Emotional Sustainability is to the human system what environmental sustainability is to the planet.
          </p>

          <SectionDivider className="w-48" />

          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground/60">
              The Butterfly Foundation
            </p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground/40">
              Geneva, Switzerland
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
