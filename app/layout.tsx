import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thebutterflyfoundation.org'),
  title: 'The Butterfly Foundation | Emotional Sustainability',
  description:
    'Building the global infrastructure for emotional stability and regeneration in the age of accelerating intelligence.',
  icons: {
    icon: '/ONETOPIA_Logo_Symbol_Black.png',
  },
  openGraph: {
    title: 'The Butterfly Foundation | Emotional Sustainability',
    description:
      'Building the global infrastructure for emotional stability and regeneration in the age of accelerating intelligence.',
    url: 'https://thebutterflyfoundation.org',
    siteName: 'The Butterfly Foundation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/alpine-lake.jpg',
        width: 1400,
        height: 933,
        alt: 'The Butterfly Foundation — Geneva, Switzerland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Butterfly Foundation | Emotional Sustainability',
    description:
      'Building the global infrastructure for emotional stability and regeneration in the age of accelerating intelligence.',
    images: ['/images/alpine-lake.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#fcfcfc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
