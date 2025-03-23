'use client'
import { useTranslations } from 'next-intl'

export const useTranslate = (namespace: UI) => {
  const t = useTranslations(`ui.${namespace}`)
  return t
}
