"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start planning your perfect day? Contact us to schedule a tour
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-border"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Preferred Event Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => !e.target.value && (e.target.type = "text")}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Inquiry
              </Button>
            </form>
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
                    <div className="text-muted-foreground">info@1513atstonecreek.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Hours</h3>
              <div className="text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span>Tours by Appointment</span>
                </div>
                <div className="flex items-start gap-4">
                  <span>Monday - Saturday</span>
                  <span>10am - 6pm</span>
                </div>
                <div className="flex items-start gap-4">
                  <span>Sunday</span>
                  <span>1am - 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
