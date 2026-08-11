import { BookingCalendar } from "@/components/booking-calendar"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
    title: "Book a Tour | 1513 at Stone Creek",
    description:
        "Schedule a private tour of 1513 at Stone Creek, our wedding and special event venue in Rockmart, Georgia.",
}

export default function BookTourPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <PageBanner
                title="Book a Tour"
                description="See the venue in person and imagine your celebration here"
                image="the-venue6.jpg"
            />
            <BookingCalendar />
            <Footer />
        </main>
    )
}
