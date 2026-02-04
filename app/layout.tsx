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
    'fc:frame': 'vNext',
    'fc:frame:image': '/screenshot.png',
    'fc:frame:image:aspect_ratio': '3:2',
    'fc:frame:button:1': 'Open Calculator',
    'fc:frame:button:1:action': 'launch_frame',
    'fc:frame:button:1:target': '_self',
    'of:accepts:xmtp': '2024-02-01',
    'fc:miniapp': 'true',
    'fc:miniapp:splash_image': '/splash.png',
    'fc:miniapp:splash_background_color': '#18181b',
    'fc:miniapp:icon': '/icon.png',
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
