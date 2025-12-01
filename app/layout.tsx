import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from 'next/font/google'
import { ScrollToTop } from "@/components/scroll-to-top"

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })

export const metadata: Metadata = {
  title: "1513 at Stone Creek | Wedding Venue",
  description: "Your Story Begins at 1513 at Stone Creek",
  generator: "Developed by Caleb Klobe",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  )
}
