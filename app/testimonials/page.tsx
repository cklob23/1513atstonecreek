import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Wedding Venue Reviews, Rockmart",
  path: "/testimonials",
  description:
    "Read couple reviews of weddings, showers, and events at 1513 at Stone Creek, a wedding and event venue in Rockmart, GA.",
})

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={breadcrumbJsonLd("/testimonials")} />
      <Navigation />
      <PageBanner
        title="Testimonials"
        description="Hear from couples who celebrated their special day with us"
        image="1513-photo-289.jpg"
        imageAlt="Couple celebrating at 1513 at Stone Creek"
      />
      <Testimonials />
      <Footer />
    </main>
  )
}
