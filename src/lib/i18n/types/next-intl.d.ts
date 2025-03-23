export {}

type English = typeof import('@/lib/i18n/langs/en.json')
type Spanish = typeof import('@/lib/i18n/langs/es.json')

declare global {
  interface IntlMessages extends English, Spanish {}
  type Message = keyof IntlMessages['messages']
}
