import Link from "next/link"
import { Button } from "@/components/ui/button"

type CtaBandProps = {
  title?: string
  description?: string
}

export function CtaBand({
  title = "Love what you see?",
  description = "Get pricing for your wedding or event, or book a tour of the grounds in Rockmart, GA.",
}: CtaBandProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">{title}</h2>
        <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="min-h-12 px-8 bg-[oklch(0.93_0.04_85)] text-[oklch(0.22_0.02_60)] hover:bg-[oklch(0.88_0.05_85)]"
          >
            <Link href="/contact">Get Pricing</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-h-12 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/book-tour">Book a Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
