import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent } from "@/components/ui/card"
import { CtaBand } from "@/components/cta-band"
import { ResponsiveImage } from "@/components/responsive-image"
import { Users, MapPin, Clock, Sparkles } from "lucide-react"
import { pageMetadata } from "@/lib/metadata"
import { publishedVenueFactNotes, publishedVenueFacts } from "@/lib/packages-data"

export const metadata: Metadata = pageMetadata({
  topic: "Ceremony & Reception Spaces",
  path: "/venue",
  description:
    "Explore ceremony and reception spaces at 1513 at Stone Creek, including the Pavilion, Ballroom, Bridal Suite, and Patio in Rockmart, GA.",
})

export default function VenuePage() {
  const facts = publishedVenueFacts()
  const notes = publishedVenueFactNotes()
  const showSeated = facts.some((row) => row.seated)
  const showStanding = facts.some((row) => row.standing)

  const features = [
    {
      icon: Users,
      title: "Your people",
      description: "Room for ceremonies and receptions of up to 200 guests",
    },
    {
      icon: MapPin,
      title: "Countryside quiet",
      description: "30 acres in Rockmart, with Fish Creek flowing behind the vows",
    },
    {
      icon: Clock,
      title: "Cared for",
      description: "From setup to the last dance, the team handles the details so you can savor the day",
    },
    {
      icon: Sparkles,
      title: "Ease and glow",
      description: "Rustic elegance with modern amenities, so the day feels beautiful and entirely yours",
    },
  ]

  const spaces = [
    {
      title: "The Pavilion",
      description:
        "Say your vows under cover, with the grounds around you, in any season. A gathering place for ceremonies, receptions, and the people you love, rain or shine.",
      image: "/1513-photo-302.jpeg",
      imageAlt: "Covered Pavilion ceremony and reception space at 1513 at Stone Creek",
    },
    {
      title: "The Ballroom",
      description:
        "Dine and dance with up to 200 guests in a space that holds the joy of the room. Elegant, spacious, and ready for the moments you will remember.",
      image: "/the-dining2.jpg",
      imageAlt: "Ballroom dining tables at 1513 at Stone Creek",
    },
    {
      title: "Bridal Suite",
      description:
        "Start the morning with your closest people. Comfortable, thoughtfully designed rooms for parties of every size, made for the quiet before the walk down the aisle.",
      image: "/1513-suite4.jpg",
      imageAlt: "Bridal suite seating and vanity at 1513 at Stone Creek",
    },
    {
      title: "The Patio",
      description:
        "Linger together after the ceremony. Cocktail hour, conversation, and a brand-new outdoor fireplace for a cozy, inviting pause in the day.",
      image: "/1513-patio.jpg",
      imageAlt: "Patio and outdoor fireplace at 1513 at Stone Creek",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="The Venue"
        description="Where your people come together"
        image="/the-venue5.jpg"
        imageAlt="Ceremony lawn and countryside backdrop at 1513 at Stone Creek"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">A place to gather the people you love</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Exchange vows with Fish Creek behind you. Celebrate under the Pavilion or in the Ballroom. The countryside
              in Rockmart holds both the quiet and the joy, with room for up to 200 guests.
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
              Each space is here for the feeling of the day: the first look, the vows, the dinner, the last dance. From
              the natural charm of the property to all-inclusive florals, catering, décor, and coordination, the team
              keeps the details so the day can feel effortless, beautiful, and entirely yours.
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
          <p className="text-foreground/80 text-lg mb-8">Guest capacity: up to 200</p>
          {facts.length > 0 && (showSeated || showStanding) ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">Capacity by space at 1513 at Stone Creek</caption>
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                      Space
                    </th>
                    {showSeated ? (
                      <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                        Seated
                      </th>
                    ) : null}
                    {showStanding ? (
                      <th scope="col" className="py-3 font-semibold text-foreground">
                        Standing
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {facts.map((row) => (
                    <tr key={row.space} className="border-b border-border">
                      <th scope="row" className="py-3 pr-4 font-medium text-foreground">
                        {row.space}
                      </th>
                      {showSeated ? <td className="py-3 pr-4 text-foreground/80">{row.seated}</td> : null}
                      {showStanding ? <td className="py-3 text-foreground/80">{row.standing}</td> : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {notes.length > 0 ? (
            <dl className="mt-10 grid sm:grid-cols-2 gap-6">
              {notes.map((note) => (
                <div key={note.label}>
                  <dt className="font-semibold text-foreground mb-1">{note.label}</dt>
                  <dd className="text-foreground/80">{note.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  )
}
