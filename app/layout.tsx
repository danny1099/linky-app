import './globals.css'
import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${globalFont.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Linky - URL Shortener with Advanced Analytics | Free QR Code',
  description:
    'Shorten URLs for free with LinkShort. Advanced analytics, custom QR codes, and 99.9% uptime. Ideal for businesses and creators. Try it for free!',
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
  },
}
