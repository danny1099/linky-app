'use client'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button, Heading, Logo } from '@/modules/common/components'
import { userAgentRegex } from '@/modules/common/regex'
import { ErrorCard } from '@/modules/home/components'
import { api } from '@/server/client'

export default function Shorten() {
  const [original_url, setOriginalUrl] = useState('')
  const [error, setError] = useState('')
  const params = useParams()
  const query = useSearchParams()
  const router = useRouter()
  const t = useTranslations('redirect')

  /* get user agent and device */
  const userAgent = navigator.userAgent
  const isMobile = userAgentRegex.test(userAgent)

  /* get params and query search */
  const shortUrl = params.sh
  const mode = query.get('m') || 'link'

  /* create visit */
  const services = api.link.createVisitByUrl.useMutation()

  const createVisit = async () => {
    await services.mutate(
      { shortUrl: shortUrl as string, mode: mode as string, device: isMobile ? 'mobile' : 'desktop' },
      {
        onSuccess: (data) => {
          setOriginalUrl(data.original_url)
          window.location.href = data.original_url
        },
        onError: (e) => {
          setError(e?.message)
        }
      }
    )
  }

  useEffect(() => {
    createVisit()
  }, [])

  return (
    <main className="flex h-screen flex-col">
      <header className="flex h-16 flex-row items-center bg-background px-4 md:px-20">
        <Logo />
      </header>
      <section className="flex size-full flex-col items-center justify-center px-4 py-2 md:px-20">
        <article className="flex items-center justify-center">
          {!error ? (
            <Heading type="h1" className="text-base font-semibold text-foreground md:text-lg">
              {t('title')}
            </Heading>
          ) : (
            <ErrorCard t={t} />
          )}
        </article>
      </section>
    </main>
  )
}
