import type { Metadata } from "next"
import { BookingCalendar } from "@/components/booking-calendar"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  topic: "Book a Venue Tour",
  path: "/book-tour",
  absoluteTitle: "Book a Venue Tour | 1513 at Stone Creek",
  description:
    "Book a venue tour of 1513 at Stone Creek in Rockmart, Georgia. Hours Monday-Saturday 10-6, Sunday 1-5.",
})

export default function BookTourPage() {
  return (
        <main className="min-h-screen overflow-x-hidden">
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
