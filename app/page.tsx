import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/intro-section"
import { GalleryPreview } from "@/components/gallery-preview"

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
