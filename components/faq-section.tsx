"use client"

import { useId, useState } from "react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { publishedFaqs } from "@/lib/packages-data"

const PREVIEW_COUNT = 8

function AnswerText({ text }: { text: string }) {
  const parts = text.split("Get Pricing")
  if (parts.length === 1) return <>{text}</>

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <Link href="/contact" className="underline font-medium text-foreground">
              Get Pricing
            </Link>
          ) : null}
        </span>
      ))}
    </>
  )
}

export function FaqSection() {
  const faqs = publishedFaqs()
  const [showAll, setShowAll] = useState(false)
  const panelId = useId()

  if (faqs.length === 0) return null

  const hasOverflow = faqs.length > 10

  return (
    <section id="faq" className="scroll-mt-24 py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="bg-secondary rounded-lg px-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                hidden={hasOverflow && !showAll && index >= PREVIEW_COUNT}
                id={index === PREVIEW_COUNT ? panelId : undefined}
              >
                <AccordionTrigger className="text-base text-foreground text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-[15px]">
                  <p>
                    <AnswerText text={faq.answer} />
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {hasOverflow ? (
            <div className="mt-6">
              <button
                type="button"
                className="underline font-medium text-foreground"
                aria-expanded={showAll}
                aria-controls={panelId}
                onClick={() => setShowAll((open) => !open)}
              >
                {showAll ? "Show fewer questions" : "Show all questions"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
