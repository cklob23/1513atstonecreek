import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Lacey",
      date: "August 2025",
      text: "We hosted a wedding shower here in April. It was an amazing and beautiful experience. The new owners are attentive, efficient, accommodating, and kind! They are working very hard and diligently to bring this beautiful venue back up to its full potential. Check out 1513 at Stone Creek.",
      rating: 5,
    },
    {
      name: "Rebecca",
      date: "October 2025",
      text: "Amazing venue! Loved the space.",
      rating: 5,
    },
    {
      name: "Kerry",
      date: "September 2025",
      text: "Wedding turned out beautiful. Food was great. Very pleased with everything!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">What Couples Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the couples who made their dreams come true at our venue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-border">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
