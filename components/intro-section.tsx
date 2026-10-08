import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ResponsiveImage } from "@/components/responsive-image"

export function IntroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="font-serif text-5xl md:text-6xl text-center mb-16 text-foreground italic"
          style={{ fontWeight: 300 }}
        >
          A celebration that feels like family
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="rounded-full overflow-hidden w-full aspect-square">
              <ResponsiveImage
                src="/1513-photo-303.jpeg"
                alt="Couple celebrating outdoors at 1513 at Stone Creek"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              You are not just another wedding on the calendar. Haley and Gina started 1513 so couples would feel
              welcomed, loved, celebrated, and cared for, like family, with the people who matter most.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              The grounds in Rockmart, GA, have room for intimate gatherings and celebrations of up to 200 guests.
              Walk the Pavilion, Ballroom, and countryside, then get pricing or book a tour.
            </p>

            <Link href="/venue">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore The Venue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
