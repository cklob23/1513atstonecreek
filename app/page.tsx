import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/intro-section"
import { OwnersBand } from "@/components/owners-band"
import { CareSection } from "@/components/care-section"
import { GalleryPreview } from "@/components/gallery-preview"
import { StatsStrip } from "@/components/stats-strip"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CtaBand } from "@/components/cta-band"
import { websiteJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { siteDescription } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  topic: "Rockmart, GA Wedding & Event Venue",
  path: "/",
  absoluteTitle: "Rockmart, GA Wedding & Event Venue | 1513 at Stone Creek",
  description: siteDescription,
})

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <JsonLd data={websiteJsonLd()} />
      <Navigation />
      <Hero />
      <div id="content" className="scroll-mt-24">
        <StatsStrip />
        <IntroSection />
        <OwnersBand />
        <CareSection />
        <TestimonialsPreview />
        <GalleryPreview />
        <CtaBand />
      </div>
      <Footer />
    </main>
  )
}
