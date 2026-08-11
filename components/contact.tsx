"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FloatingInput } from "@/components/ui/floating-input"
import { MapPin, Phone, Mail } from "lucide-react"
import Script from "next/script"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    hearAbout: "",
    message: "",
  })

  const eventTypeOptions = ["Wedding", "Quinces/Sweet Sixteens", "Corporate Event", "Other Private Event"]
  const hearAboutOptions = ["Website", "Instagram", "Facebook", "Google", "Friend/Family", "The Knot", "Wedding Wire"]

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("Sending your inquiry...")

    const guestHtmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: 'Georgia', serif;
        background-color: #ffffff;
        color: #3b2e24;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 650px;
        background: #fffaf6;
        margin: 30px auto;
        padding: 30px 40px;
        border: 1px solid #e7dfd7;
        border-radius: 10px;
      }
      .logo {
        text-align: center;
        margin-bottom: 25px;
      }
      .logo img {
        width: 150px;
      }
      h2 {
        color: #3b2e24;
        text-align: center;
      }
      p {
        line-height: 1.6;
        font-size: 16px;
      }
      .details {
        background: #f9f6f3;
        padding: 15px 20px;
        border-radius: 8px;
        margin-top: 20px;
      }
      .details p {
        margin: 8px 0;
      }
      .label {
        font-weight: bold;
        color: #3b2e24;
      }
      .footer {
        margin-top: 35px;
        font-size: 12px;
        color: #8a8178;
        text-align: center;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img
            src="https://one513atstonecreek.onrender.com/1513icon300x300.png"
            alt="1513 at Stone Creek"
            style="max-width:200px"
          />
        </div>

        <h2>Thank you for your inquiry!</h2>

        <p>Hi ${formData.name},</p>

        <p>
          Thank you for reaching out about hosting your event at <strong>1513 at Stone Creek</strong>!
          We're delighted to hear from you and can't wait to learn more about your plans.
          Our team will review your inquiry and follow up soon with availability and details.
        </p>

        <div class="details">
          <p><span class="label">Name:</span> ${formData.name}</p>
          <p><span class="label">Email:</span> ${formData.email}</p>
          <p><span class="label">Phone:</span> ${formData.phone}</p>
          <p><span class="label">Preferred Date:</span> ${formData.date}</p>
          <p><span class="label">Event Type:</span> ${formData.eventType}</p>
          <p><span class="label">How They Heard About Us:</span> ${formData.hearAbout}</p>
          <p><span class="label">Message:</span><br />${formData.message}</p>
        </div>

        <p>
          As promised, here are our pricing brochures. Click any link below to view or download:
        </p>

        <div class="details">
          <p>
            <a href="https://1513atstonecreek.com/brochures/pricing-pamphlet.pdf" style="color:#3b2e24; font-weight:bold;">
              &#128196; Wedding Pricing Pamphlet
            </a>
          </p>
          <p>
            <a href="https://1513atstonecreek.com/brochures/micro-wedding-brochure.pdf" style="color:#3b2e24; font-weight:bold;">
              &#128196; Micro Wedding Brochure
            </a>
          </p>
          <p>
            <a href="https://1513atstonecreek.com/brochures/comparison-chart.pdf" style="color:#3b2e24; font-weight:bold;">
              &#128196; Venue Comparison Chart
            </a>
          </p>
        </div>

        <p>
          We look forward to helping you create something beautiful here at 1513 at Stone Creek.
        </p>

        <div class="footer">
          © ${new Date().getFullYear()} 1513 at Stone Creek &nbsp;|&nbsp; Est. 2025<br>
          <a href="mailto:info@1513stonecreek.com" style="color:#3b2e24; text-decoration:none;">info@1513stonecreek.com</a>
        </div>
      </div>
    </body>
    </html>
    `

    const hostHtmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: 'Georgia', serif;
        background-color: #ffffff;
        color: #3b2e24;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 650px;
        background: #fffaf6;
        margin: 30px auto;
        padding: 30px 40px;
        border: 1px solid #e7dfd7;
        border-radius: 10px;
      }
      .logo {
        text-align: center;
        margin-bottom: 25px;
      }
      .logo img {
        width: 150px;
      }
      h2 {
        color: #3b2e24;
        text-align: center;
      }
      p {
        line-height: 1.6;
        font-size: 16px;
      }
      .details {
        background: #f9f6f3;
        padding: 15px 20px;
        border-radius: 8px;
        margin-top: 20px;
      }
      .details p {
        margin: 8px 0;
      }
      .label {
        font-weight: bold;
        color: #3b2e24;
      }
      .footer {
        margin-top: 35px;
        font-size: 12px;
        color: #8a8178;
        text-align: center;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img
            src="https://one513atstonecreek.onrender.com/1513icon300x300.png"
            alt="1513 at Stone Creek"
            style="max-width:200px"
          />
        </div>

        <h2>New Event Inquiry Received</h2>

        <p>
          A new inquiry was submitted through the <strong>1513 at Stone Creek</strong> website contact form.
          Please review the guest's information below:
        </p>

        <div class="details">
          <p><span class="label">Name:</span> ${formData.name}</p>
          <p><span class="label">Email:</span> ${formData.email}</p>
          <p><span class="label">Phone:</span> ${formData.phone}</p>
          <p><span class="label">Preferred Date:</span> ${formData.date}</p>
          <p><span class="label">Event Type:</span> ${formData.eventType}</p>
          <p><span class="label">How They Heard About Us:</span> ${formData.hearAbout}</p>
          <p><span class="label">Message:</span><br />${formData.message}</p>
        </div>

        <p>
          You can reply directly to the guest at
          <a href="mailto:${formData.email}" style="color:#3b2e24;">${formData.email}</a>
          to follow up on this inquiry.
        </p>

        <div class="footer">
          © ${new Date().getFullYear()} 1513 at Stone Creek | Internal Notification
        </div>
      </div>
    </body>
    </html>
    `;

    try {
      const guestResponse = await fetch("https://one513-at-stone-creek-server.onrender.com/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          html: guestHtmlBody,
          subject: "Thank you for your inquiry!",
          email: formData.email,
        }),
      });
      const hostResponse = await fetch("https://one513-at-stone-creek-server.onrender.com/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          html: hostHtmlBody,
          subject: "New Event Inquiry from Website",
          email: "info@1513atstonecreek.com",
        }),
      });
      console.log(guestResponse)
      if (guestResponse.ok && hostResponse.ok) {
        setStatus("success")
        setMessage("✅ Your inquiry has been sent successfully!")
        setFormData({ name: "", email: "", phone: "", date: "", eventType: "", hearAbout: "", message: "" })
      } else {
        setStatus("error")
        setMessage("❌ Something went wrong. Please try again later.")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
      setMessage("⚠️ There was an error sending your message.")
    }

    // reset after 5 seconds
    setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start planning your perfect day? When you submit your information below,
            we'll automatically send you our pricing brochures, including our pricing pamphlet, micro wedding
            brochure, and venue comparison chart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="h-[713px] mb-10 md:mb-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/EWlddMzddiwY3FDKnxDY"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
              id="inline-EWlddMzddiwY3FDKnxDY"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="1513 Website Form - MMASSIVE Digital"
              data-height="1807"
              data-layout-iframe-id="inline-EWlddMzddiwY3FDKnxDY"
              data-form-id="EWlddMzddiwY3FDKnxDY"
              title="1513 Website Form - MMASSIVE Digital"
            >
            </iframe>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </div>
          {/* LEFT SIDE FORM */}
          {/* <div>
            <form onSubmit={handleSubmit} className="space-y-8">

              <FloatingInput
                id="name"
                label="Your Name"
                required
                value={formData.name}
                onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
              />

              <FloatingInput
                id="email"
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
              />

              <FloatingInput
                id="phone"
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
              />

              <FloatingInput
                id="date"
                label="Preferred Event Date"
                type="date"
                required
                value={formData.date}
                onChange={(e: any) => setFormData({ ...formData, date: e.target.value })}
              />

              <div>
                <label htmlFor="eventType" className="block mb-2 text-sm font-medium text-foreground">
                  What type of event are you planning? <span className="text-primary">*</span>
                </label>
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className={`w-full h-12 rounded-md border border-border bg-muted px-3 text-[16px] appearance-none bg-no-repeat bg-[right_0.75rem_center] ${formData.eventType ? "text-foreground" : "text-muted-foreground"
                    }`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="" disabled>
                    Please select one
                  </option>
                  {eventTypeOptions.map((option) => (
                    <option key={option} value={option} className="text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block mb-2 text-sm font-medium text-foreground">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className={`w-full h-12 rounded-md border border-border bg-muted px-3 text-[16px] appearance-none bg-no-repeat bg-[right_0.75rem_center] ${formData.hearAbout ? "text-foreground" : "text-muted-foreground"
                    }`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="" disabled>
                    Please select how you found our venue
                  </option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option} className="text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <FloatingInput
                id="message"
                label="Tell us about your vision..."
                textarea
                required
                value={formData.message}
                onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </Button>

              {status !== "idle" && (
                <p className="text-center font-medium">
                  {status === "loading" && "Sending your message..."}
                  {status === "success" && <span className="text-green-600">{message}</span>}
                  {status === "error" && <span className="text-red-600">{message}</span>}
                </p>
              )}

            </form>
          </div> */}

          {/* RIGHT SIDE INFO */}
          <div className="space-y-8 md:max-w-sm">

            <div>
              <h3 className="font-serif text-2xl mb-6 text-foreground">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      2769 Cedartown Hwy<br />Rockmart, GA, 30153
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
