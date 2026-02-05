import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calc',
  description: 'A modern calculator app with basic arithmetic operations',
  generator: 'v0.app',
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: 'https://v0-calculator-application-ba.vercel.app/screenshot.png',
      button: {
        title: 'Open Calculator',
        action: {
          type: 'launch_frame',
          url: 'https://v0-calculator-application-ba.vercel.app',
          name: 'Calc',
          splashImageUrl: 'https://v0-calculator-application-ba.vercel.app/splash.png',
          splashBackgroundColor: '#18181b'
        }
      }
    }),
    'base:app_id': '6983d1fa2d51dfb241e4e388',
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
