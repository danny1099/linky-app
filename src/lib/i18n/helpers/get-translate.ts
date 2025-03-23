import { getTranslations } from 'next-intl/server'

export const getTranslate = async (namespace: UI) => {
  const t = await getTranslations(`ui.${namespace}`)
  return t
}
