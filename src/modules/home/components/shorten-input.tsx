'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { getPrivateRoute } from '@/config/routes'
import { Input, Button } from '@/modules/common/components'

export const ShortenInput = () => {
  const [value, setValue] = useState('')
  const t = useTranslations('ui.home')

  /* Get private route with locale prefix */
  const router = useRouter()
  const privateRouteNewLink = getPrivateRoute('links')

  const handleShorten = () => {
    const routePrivateNewLink = `${privateRouteNewLink}/new`
    const segmentParams = value ? `?sh=${value}` : ''
    router.push(routePrivateNewLink + segmentParams, { scroll: false })
  }

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-2 p-2 md:flex-row">
      <Input
        type="text"
        placeholder={t('input-placeholder')}
        className="w-full"
        variant="accent"
        value={value}
        slot="start"
        icon="link-45deg"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button icon="arrow-right" variant="outline" className="w-full max-sm:mt-2 md:w-40" onClick={handleShorten}>
        {t('input-button')}
      </Button>
    </div>
  )
}
