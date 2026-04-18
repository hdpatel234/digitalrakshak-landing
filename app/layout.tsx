import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigitalRakshak | Identity & Address Verification Services',
  description: 'Secure and instant verification services for Aadhar, PAN, and Address. Trust DigitalRakshak for reliable identity verification solutions.',
  generator: 'v0.app',
  openGraph: {
    title: 'DigitalRakshak | Secure Verification Services',
    description: 'Fast, reliable Aadhar, PAN, and Address verification services',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
