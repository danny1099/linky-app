import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import { ServerProviders, ClientProvider } from '@/lib/providers'
import '@/globals.css'

interface RootLayoutProps extends Readonly<Children> {
  params: { lang: string }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${globalFont.className} min-h-screen antialiased`}>
        <ServerProviders>
          <ClientProvider>{children}</ClientProvider>
        </ServerProviders>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Linky | Url Shortener',
  description:
    'Linky is a simple and easy to use url shortener platform that allows you to shorten your long urls.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/img-linky-l.svg',
        href: '/images/img-linky-l.svg'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/img-linky-d.svg',
        href: '/images/img-linky-d.svg'
      }
    ]
  }
}
