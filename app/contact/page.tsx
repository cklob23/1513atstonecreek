import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request pricing brochures or get in touch with 1513 at Stone Creek to start planning your wedding or special event.",
}

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
