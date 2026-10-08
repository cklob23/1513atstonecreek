"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const FORM_ID = "EWlddMzddiwY3FDKnxDY"
const FORM_NAME = "1513 Website Form - MMASSIVE Digital"
const IFRAME_ID = `inline-${FORM_ID}`

function isPricingFormSuccess(event: MessageEvent): boolean {
  const origin = typeof event.origin === "string" ? event.origin : ""
  const fromGhl = /leadconnectorhq\.com|msgsndr\.com|gohighlevel\.com/i.test(origin)
  const data = event.data

  if (Array.isArray(data)) {
    const action = String(data[0] ?? "")
    const payload = data.slice(1).map((value) => String(value ?? "")).join(" ")
    const mentionsThisForm =
      payload.includes(FORM_ID) || payload.includes(IFRAME_ID) || payload.includes(`embedded_iframe_${IFRAME_ID}`)

    // GHL marks a lead collected via set-sticky-contacts + the iframe storage key.
    if (action === "set-sticky-contacts") {
      const userDataKey = String(data[1] ?? "")
      const iframeId = String(data[2] ?? "")
      const isLeadKey = userDataKey.startsWith("embedded_iframe_")
      return Boolean(isLeadKey && iframeId && (mentionsThisForm || fromGhl))
    }

    if (/submit|success|complete|thank/i.test(action)) {
      return fromGhl || mentionsThisForm
    }
  }

  if (typeof data === "string") {
    if (data.startsWith("[iFrameSizer]") && data.includes(":message")) {
      return /submit|success|complete|thank|lead/i.test(data)
    }
    try {
      return isPricingFormSuccess({ ...event, data: JSON.parse(data) } as MessageEvent)
    } catch {
      return false
    }
  }

  if (data && typeof data === "object") {
    const text = JSON.stringify(data)
    const type = String(
      (data as { type?: unknown; event?: unknown; action?: unknown }).type ??
        (data as { event?: unknown }).event ??
        (data as { action?: unknown }).action ??
        "",
    )
    if (/submit|success|complete|thank|leadCollected/i.test(type) && (fromGhl || text.includes(FORM_ID))) {
      return true
    }
    if (text.includes(FORM_ID) && /submit|success|complete|thank|leadCollected/i.test(text)) {
      return true
    }
  }

  return false
}

export function ContactFormEmbed() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (isPricingFormSuccess(event)) {
        setSubmitted(true)
      }
    }

    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  if (submitted) {
    return (
      <div className="w-full rounded-lg border border-border bg-background p-8 md:p-12 text-center shadow-sm">
        <h3 className="font-serif text-3xl mb-3 text-foreground">Thank you</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          We received your request and will follow up with your pricing brochures shortly.
        </p>
        <p className="text-foreground font-medium mb-6">Ready for the next step? See the venue in person.</p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/book-tour">Book a Tour</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={IFRAME_ID}
        title={FORM_NAME}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height="1807"
        data-layout-iframe-id={IFRAME_ID}
        data-form-id={FORM_ID}
        className="block w-full min-h-[600px] rounded-md border-0"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}
