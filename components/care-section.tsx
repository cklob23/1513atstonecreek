import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Your first visit",
    body: "April, our Tour Specialist, knows the property and every package offering. She helps you feel excited, confident, and cared for from that first walk through the grounds, whether you are dreaming big or keeping it intimate.",
  },
  {
    title: "The year we walk with you",
    body: "Haley and Gina walk alongside our couples for a year. Haley is our Client Experience Coordinator. Gina is our Staff Coordinator and Floral Queen. From florals to catering, décor to coordination, the team curates the details so you can simply look forward to the day.",
  },
  {
    title: "Your wedding day",
    body: "Jaymi, our Wedding Coordinator, cares for you from the moment you arrive until the last dance. The team sets the tables, places the florals, serves your people, and keeps the day unfolding so you can savor it.",
  },
]

export function CareSection() {
  return (
    <section id="how-we-take-care" className="scroll-mt-24 py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground text-balance">How we take care of you</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            You are not just another wedding on the calendar. From the first tour to the last dance, this team is
            honored to celebrate, serve, and care for you.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-secondary rounded-lg border border-border p-8">
              <p className="font-serif text-3xl text-primary/40 mb-4">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-2xl mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/book-tour">Book a Tour</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground text-foreground">
            <Link href="/contact">Get Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
