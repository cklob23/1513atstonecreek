import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/intro-section"
import { GalleryPreview } from "@/components/gallery-preview"
import { StatsStrip } from "@/components/stats-strip"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CtaBand } from "@/components/cta-band"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Rockmart, GA Wedding & Event Venue",
  path: "/",
  absoluteTitle: "Rockmart, GA Wedding & Event Venue | 1513 at Stone Creek",
  description:
    "All-inclusive wedding and event venue in Rockmart, GA. 1300+ weddings hosted on 30 acres, for up to 200 guests.",
})

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <div id="content">
        <StatsStrip />
        <IntroSection />
        <TestimonialsPreview />
        <GalleryPreview />
        <CtaBand />
      </div>
      <Footer />
    </main>
  )
}
