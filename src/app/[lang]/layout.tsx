import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { ServerProviders, ClientProviders } from '@/lib/providers'
import '@/globals.css'

interface RootLayoutProps extends Children {
  params: { lang: string }
}

export default async function RootLayout({ params, children }: Readonly<RootLayoutProps>) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${globalFont.variable} antialiased`}>
        <ServerProviders>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Linky | URL Shortener',
  description: 'Linky is a simple and easy to use url shortener platform that allows you to shorten your long urls.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/img-linky-app.svg',
        href: '/images/img-linky-app.svg'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/img-linky-app-dark.svg',
        href: '/images/img-linky-app-dark.svg'
      }
    ]
  }
}
