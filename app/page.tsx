import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/intro-section"
import { GalleryPreview } from "@/components/gallery-preview"

export const metadata: Metadata = {
  title: {
    absolute: "1513 at Stone Creek | Wedding & Events Venue",
  },
  description:
    "1513 at Stone Creek is a premier wedding and special events venue on a scenic countryside estate in Rockmart, Georgia.",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <div id="content">
        <IntroSection />
        <GalleryPreview />
      </div>
      <Footer />
    </main>
  )
}
