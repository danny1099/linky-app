import type { NextConfig } from 'next'
import NextIntlPlugin from 'next-intl/plugin'

/* Request path i18n config */
const i18nPath = './src/config/i18n/locales/request.ts'
const withNextIntl = NextIntlPlugin(i18nPath)

const nextConfig: NextConfig = {
  /* config options here */
}

export default withNextIntl(nextConfig)
