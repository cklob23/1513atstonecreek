"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FloatingInput } from "@/components/ui/floating-input"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })

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
        max-width: 50px;
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
          <p><span class="label">Message:</span><br />${formData.message}</p>
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
        max-width: 50px;
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
          Please review the guest’s information below:
        </p>

        <div class="details">
          <p><span class="label">Name:</span> ${formData.name}</p>
          <p><span class="label">Email:</span> ${formData.email}</p>
          <p><span class="label">Phone:</span> ${formData.phone}</p>
          <p><span class="label">Preferred Date:</span> ${formData.date}</p>
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
        setFormData({ name: "", email: "", phone: "", date: "", message: "" })
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
            Ready to start planning your perfect day? Contact us to schedule a tour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* LEFT SIDE FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">

              <FloatingInput
                id="name"
                label="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <FloatingInput
                id="email"
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <FloatingInput
                id="phone"
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <FloatingInput
                id="date"
                label="Preferred Event Date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />

              <FloatingInput
                id="message"
                label="Tell us about your vision..."
                textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-foreground">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      2769 Cedartown Hwy<br/>Rockmart, GA, 30153
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
