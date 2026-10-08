import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what couples say about celebrating their wedding or special event at 1513 at Stone Creek.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Testimonials"
        description="Hear from couples who celebrated their special day with us"
        image="1513-photo-289.jpg"
      />
      <Testimonials />
      <Footer />
    </main>
  )
}
