'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { getPrivateRoute } from '@/config/routes'
import { Button, Input } from '@/modules/common/components'

export const ShortenInput = () => {
  const t = useTranslations('home')
  const router = useRouter()
  const privateRouteNewLink = getPrivateRoute('new_link')
  const [value, setValue] = useState('')

  const handleShorten = () => {
    const routePrivateNewLink = `${privateRouteNewLink}/`
    const segmentParams = value ? `?sh=${value}` : ''
    router.push(routePrivateNewLink + segmentParams, { scroll: false })
  }

  return (
    <div className="mt-10 flex w-full flex-row items-center justify-center gap-2 p-2 md:w-1/2">
      <Input
        type="text"
        placeholder={t('input-placeholder')}
        className="bg-accent max-sm:w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button icon="send" className="w-fit" onClick={handleShorten}>
        <span className="max-sm:hidden">{t('button-text')}</span>
      </Button>
    </div>
  )
}
