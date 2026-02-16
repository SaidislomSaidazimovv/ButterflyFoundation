"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { MissingInfrastructureSection } from "@/components/sections/missing-infrastructure"
import { WhatWeBuildSection } from "@/components/sections/what-we-build"
import { SymbolToSystemSection } from "@/components/sections/symbol-to-system"
import { FoundingPartnersSection } from "@/components/sections/founding-partners"
import { FrameworkSection } from "@/components/sections/framework"
import { ButterflyMonthSection } from "@/components/sections/butterfly-month"
import { InstitutionalModelSection } from "@/components/sections/institutional-model"
import { AccordSection } from "@/components/sections/accord"
import { IndexSection } from "@/components/sections/index-section"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MissingInfrastructureSection />
        <WhatWeBuildSection />
        <SymbolToSystemSection />
        <FoundingPartnersSection />
        <FrameworkSection />
        <ButterflyMonthSection />
        <InstitutionalModelSection />
        <AccordSection />
        <IndexSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
