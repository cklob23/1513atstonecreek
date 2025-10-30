import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

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
