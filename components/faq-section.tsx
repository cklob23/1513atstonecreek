import { publishedFaqs } from "@/lib/packages-data"
import { FaqAccordion } from "@/components/faq-accordion"

export function FaqSection() {
  const faqs = publishedFaqs()
  if (faqs.length === 0) return null

  return (
    <section id="faq" className="scroll-mt-24 py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Frequently asked questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
