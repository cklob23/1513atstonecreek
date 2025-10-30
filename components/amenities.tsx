import { Sparkles, Users, Utensils, Music, Camera, Wine } from "lucide-react"

export function Amenities() {
  const amenities = [
    {
      icon: Sparkles,
      title: "Bridal Suite",
      description: "Luxurious preparation space with natural lighting and elegant furnishings",
    },
    {
      icon: Users,
      title: "Event Coordination",
      description: "Professional staff to ensure your day runs smoothly from start to finish",
    },
    {
      icon: Utensils,
      title: "Catering Kitchen",
      description: "Full commercial kitchen for your preferred caterer",
    },
    {
      icon: Music,
      title: "Sound System",
      description: "Premium audio equipment for ceremonies and receptions",
    },
    {
      icon: Camera,
      title: "Photo Locations",
      description: "Multiple scenic backdrops throughout the property",
    },
    {
      icon: Wine,
      title: "Bar Service",
      description: "Full bar setup with customizable beverage packages",
    },
  ]

  return (
    <section id="amenities" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Amenities & Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a seamless and memorable celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div key={index} className="bg-muted p-8 rounded-lg hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="font-serif text-2xl mb-3 text-foreground">{amenity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
