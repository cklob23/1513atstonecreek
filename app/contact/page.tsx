import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Wedding Venue Pricing, Rockmart",
  path: "/contact",
  description:
    "Get pricing for weddings and events at 1513 at Stone Creek in Rockmart, GA. Plan a reception, rehearsal dinner, shower, or corporate event.",
})

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={breadcrumbJsonLd("/contact")} />
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
