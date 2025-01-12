import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { i18n, type Locale } from './locales'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as Locale
  if (!locale || !i18n.locales.includes(locale)) notFound()

  return {
    messages: (await import(`@/config/i18n/langs/${locale}.json`)).default
  }
})
