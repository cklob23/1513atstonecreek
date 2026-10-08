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
          Weddings and Special Events
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
              1513 at Stone Creek is an all-inclusive wedding and event venue on 30 acres in Rockmart, GA. From
              intimate gatherings to celebrations of up to 200 guests, our team handles the details so you can enjoy
              the day.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Explore the Pavilion, Ballroom, and grounds, then get pricing or book a tour.
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
