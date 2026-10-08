import type { Metadata } from "next"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { StaffSection } from "@/components/staff-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind 1513 at Stone Creek and meet the team that hosts weddings and celebrations in Rockmart, Georgia.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Our Story"
        description="Discover the history and charm of 1513 at Stone Creek"
        image="1513-venue0.jpg"
      />
      <About />
      <StaffSection />
      <Footer />
    </main>
  )
}
