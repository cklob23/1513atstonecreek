import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { homeTestimonials } from "@/lib/testimonials-data"

export function TestimonialsPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Love Stories</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Longer notes from recent celebrations at the venue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {homeTestimonials.map((testimonial) => (
            <Card key={`${testimonial.name}-${testimonial.date}`} className="bg-secondary border-border">
              <CardContent className="p-8">
                <blockquote className="mb-6">
                  <p className="text-foreground/85 leading-relaxed">
                    <span className="font-serif text-4xl leading-none text-primary/50 align-[-0.35em] mr-1" aria-hidden>
                      {"\u201C"}
                    </span>
                    {testimonial.text}
                    <span aria-hidden>{"\u201D"}</span>
                  </p>
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/70">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Read all reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
