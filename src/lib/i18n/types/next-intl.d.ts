export {}

type English = typeof import('@/lib/i18n/langs/en.json')
type Spanish = typeof import('@/lib/i18n/langs/es.json')
type Messages_EN = typeof import('@/lib/i18n/messages/en.json')
type Messages_ES = typeof import('@/lib/i18n/messages/es.json')

declare global {
  interface IntlMessages extends English, Spanish, Messages_EN, Messages_ES {}

  /* types for messages and keys */
  type UI = keyof IntlMessages['ui']
  type Message = keyof IntlMessages['messages']['system']
  type Validation = keyof IntlMessages['messages']['validation']
}
