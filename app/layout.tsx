import type React from "react"
import type { Metadata, Viewport } from "next"

// @ts-ignore - CSS module side-effect import
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from "next/font/google"
import Script from "next/script"
import { ScrollToTop } from "@/components/scroll-to-top"
import { defaultOgImage, siteFacts, siteName, siteUrl } from "@/lib/site"

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

const siteDescription =
  "All-inclusive wedding and event venue in Rockmart, GA. 1300+ weddings hosted on 30 acres, for up to 200 guests."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Rockmart, GA Wedding & Event Venue | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "wedding venue",
    "event venue",
    "1513 at Stone Creek",
    "Rockmart GA wedding venue",
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
    siteName,
    title: `Rockmart, GA Wedding & Event Venue | ${siteName}`,
    description: siteDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rockmart, GA Wedding & Event Venue | ${siteName}`,
    description: siteDescription,
    images: [defaultOgImage.url],
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
    image: `${siteUrl}${defaultOgImage.url}`,
    telephone: siteFacts.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteFacts.addressLines[0],
      addressLocality: "Rockmart",
      addressRegion: "GA",
      postalCode: "30153",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "13:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/stonecreekinnvenue",
      "https://www.instagram.com/stonecreekvenue/?hl=en",
    ],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <LocalBusinessJsonLd />
      </head>

      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-992WXP6EC9" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-992WXP6EC9');
          `}
        </Script>
      </body>
    </html>
  )
}
