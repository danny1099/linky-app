import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

/* prettier-ignore */
export const ServerProviders = async ({ children }: Children) => {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
     {children}
    </NextIntlClientProvider>
  )
}
