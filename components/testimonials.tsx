import { Card, CardContent } from "@/components/ui/card"
import { CtaBand } from "@/components/cta-band"
import { testimonialsByLength } from "@/lib/testimonials-data"

export function Testimonials() {
  const reviews = testimonialsByLength()

  return (
    <>
      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">What Couples Say</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Couples and guests share what it is like to celebrate a wedding, shower, or event at 1513 at Stone Creek
              in Rockmart, GA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((testimonial) => (
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
        </div>
      </section>
      <CtaBand />
    </>
  )
}
