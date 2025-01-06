import { useTranslations } from 'next-intl'

interface FieldsLink {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  error?: string
}

export const fieldsFormLink = () => {
  const t = useTranslations('links.form')
  const fieldsLink: FieldsLink[] = [
    {
      id: '1',
      name: 'title',
      type: 'text',
      label: t('title.label'),
      placeholder: t('title.placeholder'),
      error: t('title.error')
    },
    {
      id: '2',
      name: 'longUrl',
      type: 'text',
      label: t('longUrl.label'),
      placeholder: t('longUrl.placeholder'),
      error: t('longUrl.error')
    },
    { id: '3', name: 'slug', type: 'text', label: t('slug.label'), placeholder: t('slug.placeholder'), error: '' },
    {
      id: '4',
      name: 'temporal',
      type: 'checkbox',
      label: t('temporal.label'),
      placeholder: t('temporal.placeholder'),
      error: ''
    },
    { id: '5', name: 'qr', type: 'checkbox', label: t('qr.label'), placeholder: t('qr.placeholder'), error: '' }
  ]
  return fieldsLink
}
