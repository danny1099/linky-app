import './globals.css'
import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { Toaster } from 'sonner'

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
      <body className={`${globalFont.className} antialiased`}>
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Linky | URL Shortener',
  description:
    'Linky is a simple and easy to use url shortener platform that allows you to shorten your long urls.',
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
