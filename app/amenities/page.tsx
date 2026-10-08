import type { Metadata } from "next"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Wedding Venue Amenities, Rockmart",
  path: "/amenities",
  description:
    "See amenities at 1513 at Stone Creek in Rockmart, GA: bridal suite, coordination, kitchen, sound, photo locations, and bar service.",
})

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbJsonLd("/amenities")} />
      <Navigation />
      <PageBanner
        title="Amenities"
        description="Everything you need for your perfect celebration"
        image="/1513-hero-pic.jpg"
        imageAlt="Pond and countryside estate at 1513 at Stone Creek"
      />
      <Amenities />
      <Footer />
    </main>
  )
}
