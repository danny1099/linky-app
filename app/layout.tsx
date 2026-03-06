import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { globalFont } from '@/config/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/components/auth-provider'
import './globals.css'

export default function RootLayout({ children }: Children) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Linky',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Free URL shortener with advanced analytics, custom QR codes, and enterprise-grade reliability.',
    url: 'https://linky-url.vercel.app',
    author: {
      '@type': 'Organization',
      name: 'Linky',
      url: 'https://linky-url.vercel.app',
    },
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${globalFont.className} antialiased`}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster position='top-right' />
        </AuthProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://linky-url.vercel.app'),
  title: {
    default: 'Linky - URL Shortener with Advanced Analytics | Free QR Code',
    template: '%s | Linky URL Shortener',
  },
  description:
    'Shorten URLs for free with Linky. Advanced analytics, custom QR codes, and 99.9% uptime. Ideal for businesses and creators. Try it for free!',
  keywords: [
    'URL shortener',
    'link shortener',
    'free URL shortening',
    'QR code generator',
    'link analytics',
    'track links',
    'short links',
    'custom URL',
    'link management',
  ],
  authors: [{ name: 'Linky' }],
  creator: 'Linky',
  publisher: 'Linky',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linky-url.vercel.app',
    siteName: 'Linky',
    title: 'Linky - URL Shortener with Advanced Analytics | Free QR Code',
    description:
      'Shorten URLs for free with Linky. Advanced analytics, custom QR codes, and 99.9% uptime. Ideal for businesses and creators. Try it for free!',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linky - URL Shortener with Advanced Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linky - URL Shortener with Advanced Analytics | Free QR Code',
    description:
      'Shorten URLs for free with Linky. Advanced analytics, custom QR codes, and 99.9% uptime. Try it for free!',
    images: ['/images/og-image.png'],
    creator: '@linky',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://linky-url.vercel.app',
    languages: {
      en: 'https://linky-url.vercel.app',
    },
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/img-linky-app.svg',
        href: '/images/img-linky-app.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/img-linky-app-dark.svg',
        href: '/images/img-linky-app-dark.svg',
      },
    ],
    shortcut: '/images/img-linky-app.svg',
    apple: [
      {
        url: '/images/img-linky-app.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  },
}
