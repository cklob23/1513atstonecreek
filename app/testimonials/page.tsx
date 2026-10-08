import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Couple Reviews",
  path: "/testimonials",
  description: "Read couple reviews of weddings and events at 1513 at Stone Creek in Rockmart, Georgia.",
})

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
