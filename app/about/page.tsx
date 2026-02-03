import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Our Story"
        description="Discover the history and charm of 1513 at Stone Creek"
        image="DJI_0140.jpg"
      />
      <About />
      <Footer />
    </main>
  )
}
