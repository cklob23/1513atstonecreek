import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Testimonials"
        description="Hear from couples who celebrated their special day with us"
        image="1513-moment11.jpg"
      />
      <Testimonials />
      <Footer />
    </main>
  )
}
