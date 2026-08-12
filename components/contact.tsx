"use client"

import { Button } from "@/components/ui/button"
import { ContactFormEmbed } from "@/components/contact-form-embed"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start planning your perfect day? Share a few details below and our team will follow up with your
            pricing brochures, including our pricing pamphlet, micro wedding brochure, and venue comparison chart.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          {/* LEFT SIDE FORM */}
          <div className="lg:col-span-3">
            <ContactFormEmbed />
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-foreground">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground mt-1" />
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
                  <Phone className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">(470) 296-0272</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@1513atstonecreek.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-muted">
              <h3 className="font-serif text-2xl mb-2 text-foreground">Schedule a Tour</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Pick a date and time that works for you and see the venue in person.
              </p>
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/book-tour">Book a Tour</Link>
              </Button>
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
