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
  nextStepsIntro,
  publishedEnhancementsLine,
  publishedExperienceGuideSections,
  publishedFaqs,
  publishedNextSteps,
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
  const enhancements = publishedEnhancementsLine()
  const guide = publishedExperienceGuideSections()
  const steps = publishedNextSteps()
  const faqs = publishedFaqs()

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <PageBanner
        title="Wedding Packages"
        description="Venue-only and all-inclusive weddings in Rockmart, GA."
        image="/1513-photo-296.jpeg"
        imageAlt="Pavilion ceremony aisle at 1513 at Stone Creek"
        overlay="strong"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {cards.length > 0 ? (
            <div className="mb-20">
              <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center text-foreground">
                Choose your experience.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {cards.map((pkg, index) => (
                  <Card key={`${pkg.name}-${index}`} className="bg-secondary border-border">
                    <CardContent className="p-8 flex flex-col h-full">
                      {pkg.badge ? (
                        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{pkg.badge}</p>
                      ) : null}
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
                        <Link href="/contact">Get pricing for this package</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Choose your experience.</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Use Get Pricing to request current packages and brochures for your wedding or event.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Pricing</Link>
              </Button>
            </div>
          )}

          {enhancements ? (
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-4xl mb-4 text-foreground">Enhance your experience</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">{enhancements}</p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Pricing</Link>
              </Button>
            </div>
          ) : null}

          {guide.length > 0 ? (
            <div className="max-w-3xl mx-auto mb-20 space-y-10">
              {guide.map((section) => (
                <div key={section.title}>
                  <h2 className="font-serif text-4xl mb-4 text-foreground">{section.title}</h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">{section.body}</p>
                  {section.items && section.items.length > 0 ? (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-foreground/85 text-[15px]">
                          <Check className="w-5 h-5 mt-0.5 shrink-0 text-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {steps.length > 0 ? (
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-4xl mb-4 text-foreground">What happens next?</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">{nextStepsIntro}</p>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title}>
                    <p className="font-serif text-2xl text-foreground mb-2">
                      {String(index + 1).padStart(2, "0")} {step.title}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">{step.body}</p>
                  </li>
                ))}
              </ol>
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
