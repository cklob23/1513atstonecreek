import Script from "next/script"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 pb-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start planning your perfect day? Contact us to schedule a tour
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="min-h-[800px]">
            <iframe
              src="https://wedding.venuebooking.info/widget/form/cJmgZ9EbDgrlZIZPFCba"
              style={{ width: "100%", height: "800px", border: "none", borderRadius: "4px" }}
              id="inline-cJmgZ9EbDgrlZIZPFCba"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Form"
              data-height="800"
              data-layout-iframe-id="inline-cJmgZ9EbDgrlZIZPFCba"
              data-form-id="cJmgZ9EbDgrlZIZPFCba"
              title="Website Form"
            />
            <Script src="https://wedding.venuebooking.info/js/form_embed.js" strategy="lazyOnload" />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-foreground">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      2769 Cedartown Hwy
                      <br />
                      Rockmart, GA, 30153
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">(470) 296-0272</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@1513stonecreek.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Hours</h3>
              <div className="text-muted-foreground space-y-2">
                <div>Tours by Appointment</div>
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>10am - 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>1pm - 5pm</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
