import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="Contact Us"
        description="Let's start planning your unforgettable celebration"
        image="1513-moment22.jpg"
      />
      <Contact />
      <Footer />
    </main>
  )
}
