"use client"

import Script from "next/script"

const FORM_ID = "EWlddMzddiwY3FDKnxDY"
const FORM_NAME = "1513 Website Form - MMASSIVE Digital"

export function ContactFormEmbed() {
    return (
        <div className="w-full">
            <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
                id={`inline-${FORM_ID}`}
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
                data-layout-iframe-id={`inline-${FORM_ID}`}
                data-form-id={FORM_ID}
                className="block w-full min-h-[600px] rounded-md border-0"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </div>
    )
}
