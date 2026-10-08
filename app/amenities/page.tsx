import type { Metadata } from "next"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "See the amenities available for weddings and events at 1513 at Stone Creek in Rockmart, Georgia.",
}

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Amenities"
        description="Everything you need for your perfect celebration"
        imageQuery="luxury wedding venue amenities and facilities"
      />
      <Amenities />
      <Footer />
    </main>
  )
}
