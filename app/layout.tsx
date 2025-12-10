import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from 'next/font/google'
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://1513atstonecreek.com"),
  title: "1513 at Stone Creek | Elegant Wedding & Event Venue",
  description:
    "Your story begins at 1513 at Stone Creek — a stunning Georgia wedding venue offering elegant indoor and outdoor spaces for ceremonies, receptions, and special events.",
  keywords: [
    "wedding venue",
    "event venue",
    "Stone Creek wedding",
    "Georgia wedding venue",
    "reception venue",
    "ceremony venue",
    "rustic elegant wedding venue"
  ],

  generator: "Developed by Caleb Klobe",
  alternates: {
    canonical: "https://1513atstonecreek.com",
  },
  openGraph: {
    title: "1513 at Stone Creek | Wedding & Event Venue",
    description:
      "A breathtaking Georgia wedding venue with modern amenities, charming architecture, and unforgettable event spaces.",
    url: "https://1513atstonecreek.com",
    siteName: "1513 at Stone Creek",
    images: [
      {
        url: "/1513-hero-pic.jpg",
        width: 1200,
        height: 630,
        alt: "1513 at Stone Creek Wedding Venue",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1513 at Stone Creek",
    description:
      "Experience unforgettable weddings and events at 1513 at Stone Creek.",
    images: ["/1513-hero-pic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <head>
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-992WXP6EC9`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-992WXP6EC9');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
