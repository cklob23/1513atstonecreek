import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { pageMetadata } from "@/lib/metadata"
import {
  publishedFaqs,
  publishedIncludedChecklist,
  publishedPackageCards,
} from "@/lib/packages-data"

export const metadata: Metadata = pageMetadata({
  topic: "Pricing & Packages",
  path: "/packages",
  description:
    "Compare wedding and event packages at 1513 at Stone Creek in Rockmart, GA. See what's included, then get pricing.",
})

export default function PackagesPage() {
  const cards = publishedPackageCards()
  const checklist = publishedIncludedChecklist()
  const faqs = publishedFaqs()

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="Pricing & Packages"
        description="All-inclusive weddings and events in Rockmart, GA"
        image="/1513-photo-294.jpeg"
        imageAlt="Reception tables ready for a wedding at 1513 at Stone Creek"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {cards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {cards.map((pkg, index) => (
                <Card key={`${pkg.name}-${index}`} className="bg-secondary border-border">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="font-serif text-2xl mb-2 text-foreground">{pkg.name}</h3>
                    <p className="text-foreground/80 mb-6">{pkg.audience}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3 text-foreground/85">
                          <Check className="w-5 h-5 mt-0.5 shrink-0 text-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">Get Pricing</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Current packages</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Use Get Pricing to request current packages and brochures for your wedding or event.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Pricing</Link>
              </Button>
            </div>
          )}

          {checklist.length > 0 ? (
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-4xl mb-6 text-foreground">What&apos;s included</h2>
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85 text-[15px]">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {faqs.length > 0 ? (
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl mb-6 text-foreground">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="bg-secondary rounded-lg px-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-base text-foreground text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-[15px]">
                      <p>{faq.answer}</p>
                      {faq.pricingCta ? (
                        <p className="mt-3">
                          <Link href="/contact" className="underline font-medium text-foreground">
                            Get Pricing
                          </Link>
                        </p>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  )
}
