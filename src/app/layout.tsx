import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { TreeProvider } from '@/lib/providers'
import '@/globals.css'

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} min-h-screen antialiased`}>
        <TreeProvider>{children}</TreeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Linky | Url Shortener',
  description:
    'Linky is a simple and easy to use url shortener platform that allows you to shorten your long urls.'
}
