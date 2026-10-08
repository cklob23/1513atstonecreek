import type React from "react"
import type { Metadata, Viewport } from "next"

// @ts-ignore - CSS module side-effect import
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from "next/font/google"
import Script from "next/script"
import { JsonLd } from "@/components/json-ld"
import { ScrollToTop } from "@/components/scroll-to-top"
import { venueJsonLd } from "@/lib/json-ld"
import { ogImageAbsolute, siteDescription, siteName, siteUrl } from "@/lib/site"

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

const ogImage = ogImageAbsolute()

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
    "northwest Georgia wedding venue",
    "wedding venue near Atlanta",
    "Rome GA wedding venue",
    "Cartersville wedding venue",
    "Dallas GA wedding venue",
    "Carrollton wedding venue",
    "Polk County wedding venue",
    "Stone Creek weddings",
    "rustic wedding venue",
    "outdoor wedding venue",
    "barn wedding venue",
    "wedding reception",
    "rehearsal dinner venue",
    "corporate event venue",
    "bridal shower venue",
    "wedding pavilion",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "150x150" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "150x150" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `Rockmart, GA Wedding & Event Venue | ${siteName}`,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rockmart, GA Wedding & Event Venue | ${siteName}`,
    description: siteDescription,
    images: [ogImage.url],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={venueJsonLd()} />
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
