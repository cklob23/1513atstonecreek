import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Get Pricing",
  path: "/contact",
  description: "Get pricing for an all-inclusive wedding or event at 1513 at Stone Creek in Rockmart, GA.",
})

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="Contact Us"
        description="Let's start planning your unforgettable celebration"
        image="1513-moment22.jpg"
        imageAlt="Evening event lighting on the grounds at 1513 at Stone Creek"
      />
      <Contact />
      <Footer />
    </main>
  )
}
