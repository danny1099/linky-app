import { NextIntlClientProvider, useMessages } from 'next-intl'

/* prettier-ignore */
export const NextIntlProvider = ({ children }: Children) => {
  const messages = useMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
