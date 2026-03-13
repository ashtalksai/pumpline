import type { Metadata } from "next"
import { Playfair_Display, Lora, Plus_Jakarta_Sans, DM_Mono } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pumpline — Find Trusted Septic Pros in Your County",
  description:
    "Browse verified septic service providers in your county. See neighbor reviews, transparent pricing, and schedule maintenance — all in one place.",
  keywords: "septic tank pumping, septic service, septic cleaning, rural homeowner, septic maintenance",
  openGraph: {
    title: "Pumpline — Septic Service Marketplace",
    description: "Find trusted septic pros in your county. Real pricing, real reviews.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${plusJakarta.variable} ${dmMono.variable}`}>
      <body className="antialiased min-h-screen" style={{ background: "#F7F3EE" }}>
        {children}
      </body>
    </html>
  )
}
