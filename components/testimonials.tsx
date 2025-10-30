import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Michael",
      date: "June 2024",
      text: "Our wedding at 1513 at Stone Creek was absolutely magical. The venue exceeded all our expectations, and the staff went above and beyond to make our day perfect.",
      rating: 5,
    },
    {
      name: "Emily & James",
      date: "September 2024",
      text: "From the moment we toured the venue, we knew it was the one. The rustic elegance and natural beauty created the perfect atmosphere for our celebration.",
      rating: 5,
    },
    {
      name: "Jessica & David",
      date: "May 2024",
      text: "The team at Stone Creek made planning our wedding stress-free. The venue is stunning, and our guests are still raving about how beautiful everything was.",
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
