import Script from "next/script"

export function BookingCalendar() {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Schedule Your Tour</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Choose a date and time below that works best for you. We can&apos;t wait to walk you through the grounds and
                        show you where your story begins.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-lg bg-background border border-border">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/pGpfvLFdIBIzxTAOvb9b"
                        id="pGpfvLFdIBIzxTAOvb9b_1786478158862"
                        title="Schedule a tour at 1513 at Stone Creek"
                        allow="payment"
                        className="w-full block border-0 min-h-[820px]"
                    />
                </div>

                <div className="text-center mt-10">
                    <p className="text-muted-foreground">
                        Prefer to reach out directly? Call us at{" "}
                        <a href="tel:+14702960272" className="text-foreground font-medium hover:underline">
                            (470) 296-0272
                        </a>{" "}
                        or email{" "}
                        <a href="mailto:info@1513atstonecreek.com" className="text-foreground font-medium hover:underline">
                            info@1513atstonecreek.com
                        </a>
                    </p>
                </div>
            </div>

            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </section>
    )
}
