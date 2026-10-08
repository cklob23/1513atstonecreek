import type { Metadata } from "next"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { StaffSection } from "@/components/staff-section"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Our Team",
  path: "/about",
  description: "Meet the team behind 1513 at Stone Creek, an all-inclusive wedding and event venue in Rockmart, GA.",
})

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="Our Story"
        description="Discover the history and charm of 1513 at Stone Creek"
        image="1513-venue0.jpg"
        imageAlt="Stone Creek grounds and trees at 1513 at Stone Creek"
      />
      <About />
      <StaffSection />
      <Footer />
    </main>
  )
}
