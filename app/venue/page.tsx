import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Clock, Sparkles } from "lucide-react"

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
      title: "The Pavillion",
      description:
        "A covered outdoor space perfect for ceremonies, receptions, and gatherings of all kinds — beautifully designed to shine in any season or weather.",
      image: "/1513-photo-302.jpeg",
    },
    {
      title: "The Ballroom",
      description:
        "Elegant and spacious, our ballroom seats up to 200 guests comfortably and offers a timeless setting for dining, dancing, and unforgettable moments.",
      image: "/the-dining2.jpg",
    },
    {
      title: "Bridal Suite",
      description:
        "Luxurious, comfortable, and thoughtfully designed for parties of every size. Begin your day surrounded by your closest friends in spaces crafted for relaxation and excitement.",
      image: "/1513-suite4.jpg",
    },
    {
      title: "The Patio",
      description:
        "Ideal for cocktail hour, mingling, or your next celebration — complete with our brand-new outdoor fireplace, creating a cozy, inviting atmosphere.",
      image: "/1513-patio.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner
        title="The Venue"
        description="A Setting Designed for Every Celebration"
        image="/the-venue5.jpg"
      />

      {/* Venue Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">A Timeless Setting</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              1513 at Stone Creek combines rustic charm with modern sophistication, creating the perfect backdrop for
              your wedding celebration. Our venue offers a breathtaking variety of spaces to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-secondary border-border text-center">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-serif text-xl mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Spaces */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Our Spaces</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Each space at 1513 at Stone Creek has been thoughtfully designed to create unforgettable moments. 
              From the natural charm of our property to our all-inclusive packages and experienced coordination team, every detail at 1513 at Stone Creek is built to make your day effortless, beautiful, and entirely yours.
            </p>
          </div>

          <div className="space-y-16">
            {spaces.map((space, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
                    <img
                      src={space.image || "/placeholder.svg"}
                      alt={space.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-serif text-3xl mb-4 text-foreground">{space.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
