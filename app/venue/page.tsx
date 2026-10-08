import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent } from "@/components/ui/card"
import { CtaBand } from "@/components/cta-band"
import { ResponsiveImage } from "@/components/responsive-image"
import { Users, MapPin, Clock, Sparkles } from "lucide-react"
import { pageMetadata } from "@/lib/metadata"
import { venueFactNotes, venueFacts } from "@/lib/packages-data"

export const metadata: Metadata = pageMetadata({
  topic: "Ceremony & Reception Spaces",
  path: "/venue",
  description:
    "Explore ceremony and reception spaces at 1513 at Stone Creek, including the Pavilion, Ballroom, Bridal Suite, and Patio in Rockmart, GA.",
})

export default function VenuePage() {
  const features = [
    {
      icon: Users,
      title: "Capacity",
      description: "Accommodates up to 200 guests for ceremonies and receptions",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Nestled in the scenic countryside with stunning natural backdrops",
    },
    {
      icon: Clock,
      title: "Flexibility",
      description: "Full-day venue access from setup to teardown",
    },
    {
      icon: Sparkles,
      title: "Ambiance",
      description: "Rustic elegance with modern amenities and timeless charm",
    },
  ]

  const spaces = [
    {
      title: "The Pavilion",
      description:
        "A covered outdoor space perfect for ceremonies, receptions, and gatherings of all kinds — beautifully designed to shine in any season or weather.",
      image: "/1513-photo-302.jpeg",
      imageAlt: "Covered Pavilion ceremony and reception space at 1513 at Stone Creek",
    },
    {
      title: "The Ballroom",
      description:
        "Elegant and spacious, our ballroom seats up to 200 guests comfortably and offers a timeless setting for dining, dancing, and unforgettable moments.",
      image: "/the-dining2.jpg",
      imageAlt: "Ballroom dining tables at 1513 at Stone Creek",
    },
    {
      title: "Bridal Suite",
      description:
        "Luxurious, comfortable, and thoughtfully designed for parties of every size. Begin your day surrounded by your closest friends in spaces crafted for relaxation and excitement.",
      image: "/1513-suite4.jpg",
      imageAlt: "Bridal suite seating and vanity at 1513 at Stone Creek",
    },
    {
      title: "The Patio",
      description:
        "Ideal for cocktail hour, mingling, or your next celebration — complete with our brand-new outdoor fireplace, creating a cozy, inviting atmosphere.",
      image: "/1513-patio.jpg",
      imageAlt: "Patio and outdoor fireplace at 1513 at Stone Creek",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="The Venue"
        description="A Setting Designed for Every Celebration"
        image="/the-venue5.jpg"
        imageAlt="Ceremony lawn and countryside backdrop at 1513 at Stone Creek"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">A Timeless Setting</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              1513 at Stone Creek combines rustic charm with modern sophistication, creating the perfect backdrop for
              your wedding celebration. Our venue offers a breathtaking variety of spaces to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-secondary border-border text-center">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-serif text-xl mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/80 text-[15px] leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Our Spaces</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Each space at 1513 at Stone Creek has been thoughtfully designed to create unforgettable moments. From
              the natural charm of our property to our all-inclusive packages and experienced coordination team, every
              detail is built to make your day effortless, beautiful, and entirely yours.
            </p>
          </div>

          <div className="space-y-16">
            {spaces.map((space, index) => (
              <div
                key={space.title}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
                    <ResponsiveImage
                      src={space.image}
                      alt={space.imageAlt}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl mb-4 text-foreground">{space.title}</h3>
                  <p className="text-foreground/80 text-lg leading-relaxed">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Venue facts</h2>
          <p className="text-foreground/75 mb-8">
            Confirmed guest capacity is up to 200. Other figures are placeholders until the owner confirms them.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <caption className="sr-only">Capacity by space at 1513 at Stone Creek</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                    Space
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                    Seated
                  </th>
                  <th scope="col" className="py-3 font-semibold text-foreground">
                    Standing
                  </th>
                </tr>
              </thead>
              <tbody>
                {venueFacts.map((row) => (
                  <tr key={row.space} className="border-b border-border">
                    <th scope="row" className="py-3 pr-4 font-medium text-foreground">
                      {row.space}
                    </th>
                    <td className="py-3 pr-4 text-foreground/80">{row.seated}</td>
                    <td className="py-3 text-foreground/80">{row.standing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className="mt-10 grid sm:grid-cols-2 gap-6">
            {venueFactNotes.map((note) => (
              <div key={note.label}>
                <dt className="font-semibold text-foreground mb-1">{note.label}</dt>
                <dd className="text-foreground/80">{note.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  )
}
