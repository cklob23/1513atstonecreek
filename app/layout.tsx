import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
// @ts-ignore - CSS module side-effect import
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from "next/font/google"
import Script from "next/script"
import { ScrollToTop } from "@/components/scroll-to-top"

const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

const siteUrl = "https://1513atstonecreek.com"
const siteName = "1513 at Stone Creek"
const siteDescription =
  "1513 at Stone Creek is a premier wedding and special events venue nestled on a scenic countryside estate. Featuring rustic elegance, a picturesque pond, lush gardens, and a covered pavilion, it is the perfect setting for weddings, receptions, and celebrations."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Wedding & Events Venue`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "wedding venue",
    "event venue",
    "1513 at Stone Creek",
    "Stone Creek weddings",
    "rustic wedding venue",
    "outdoor wedding venue",
    "wedding reception",
    "special events venue",
    "countryside wedding",
    "barn wedding",
    "garden wedding",
    "wedding pavilion",
    "wedding ceremony",
    "bridal venue",
    "wedding planning",
    "rehearsal dinner venue",
    "engagement party venue",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Wedding & Events Venue`,
    description: siteDescription,
    images: [
      {
        url: "/1513-hero-pic.jpg",
        width: 1200,
        height: 630,
        alt: "1513 at Stone Creek - Scenic pond and countryside estate wedding venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Wedding & Events Venue`,
    description: siteDescription,
    images: ["/1513-hero-pic.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Wedding Venue",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: `${siteUrl}/1513-hero-pic.jpg`,
    telephone: "(470) 296-0272",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Outdoor Ceremony Space" },
      { "@type": "LocationFeatureSpecification", name: "Covered Pavilion" },
      { "@type": "LocationFeatureSpecification", name: "Bridal Suite" },
      { "@type": "LocationFeatureSpecification", name: "Scenic Pond & Gardens" },
      { "@type": "LocationFeatureSpecification", name: "On-Site Parking" },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-992WXP6EC9"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-992WXP6EC9');
          `}
      </Script>
      <head>
        <LocalBusinessJsonLd />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  )
}
