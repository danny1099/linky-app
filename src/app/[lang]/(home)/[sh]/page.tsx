'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { Heading, Icon } from '@/modules/common/components'
import { api } from '@/server/client'
import { cn } from '@/modules/common/utils'

export default function Shorten() {
  const t = useTranslations('redirect')
  const searchParams = useSearchParams()
  const [originalUrl, setOriginalUrl] = useState('')

  /* Get params and query */
  const router = useRouter()
  const params = useParams()
  const mode = searchParams.get('m')

  const createVisit = api.link.createVisit.useMutation()

  useEffect(() => {
    if (params.sh) {
      createVisit.mutate(
        { url: params.sh as string, mode: mode || 'link' },
        { onSuccess: (data) => setOriginalUrl(data.original_url) }
      )
    }

    if (originalUrl) router.push(originalUrl)
  }, [])

  return (
    <section className="flex size-full flex-row items-center justify-center gap-2 px-1">
      <Icon name="spinner" className={cn('size-6 md:size-8', createVisit.isLoading && 'animate-spin')} />
      <Heading type="h1" className="text-balance text-base tracking-tight md:text-2xl">
        {t('title')}
      </Heading>

      {!originalUrl && !createVisit.isLoading && <span className="text-foreground-muted">Url not found</span>}
    </section>
  )
}
