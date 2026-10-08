import type { Metadata } from "next"
import { BookingCalendar } from "@/components/booking-calendar"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Tour a Rockmart GA Wedding Venue",
  path: "/book-tour",
  description:
    "Book a tour of 1513 at Stone Creek, a wedding and event venue in Rockmart, GA. Hours Monday through Saturday 10 to 6, Sunday 1 to 5.",
})

export default function BookTourPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={breadcrumbJsonLd("/book-tour")} />
      <Navigation />
      <PageBanner
        title="Book a Tour"
        description="See the venue in person and imagine your celebration here"
        image="the-venue6.jpg"
        imageAlt="Ceremony chairs set on the lawn at 1513 at Stone Creek"
      />
      <BookingCalendar />
      <Footer />
    </main>
  )
}
