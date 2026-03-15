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
import { PhotoBreak } from "@/components/photo-break"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MissingInfrastructureSection />
        <WhatWeBuildSection />
        <SymbolToSystemSection />
        <PhotoBreak
          src="/images/calm-water.jpg"
          alt="Calm turquoise waters at golden hour"
          caption="Stability begins within"
        />
        <FoundingPartnersSection />
        <FrameworkSection />
        <PhotoBreak
          src="/images/nature-light.jpg"
          alt="Sunlight filtering through a forest path"
          caption="From cocoon to emergence"
        />
        <ButterflyMonthSection />
        <InstitutionalModelSection />
        <AccordSection />
        <PhotoBreak
          src="/images/monarch.jpg"
          alt="Blue butterflies in an enchanted forest"
          caption="The butterfly effect at scale"
        />
        <IndexSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
