import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

// SEO Metadata
export const metadata: Metadata = {
  title: 'WebPro Batam - Jasa Pembuatan Website Profesional',
  description: 'Kami menyediakan jasa pembuatan website profesional untuk bisnis Anda di Batam dan sekitarnya. Desain modern, responsif, dan SEO-friendly.',
  keywords: 'website, jasa web, batam, pembuatan website, design web, SEO, web developer',
  authors: [{ name: 'WebPro Batam' }],
  openGraph: {
    title: 'WebPro Batam - Jasa Pembuatan Website Profesional',
    description: 'Kami menyediakan jasa pembuatan website profesional untuk bisnis Anda di Batam dan sekitarnya.',
    type: 'website',
    locale: 'id_ID',
  },
}

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A2463',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
