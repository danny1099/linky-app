import { getTranslations } from 'next-intl/server'
import { Heading, Text } from '@/modules/common/components'
import { FormAuth } from '@/modules/auth/components'

export default async function GetStarted() {
  const t = await getTranslations('ui.auth.get_started')

  return (
    <section className="flex size-full flex-row items-center gap-x-4 bg-background px-4 md:px-24">
      <article className="h-[85%] w-[60%] overflow-hidden px-2 pb-10 max-sm:hidden">
        <img
          src="/images/img-auth-background.svg"
          alt="Get Started"
          className="relative mb-2 h-full w-full rounded-xl object-contain"
          loading="lazy"
          width={300}
          height={300}
        />
      </article>

      <article className="flex h-full w-full flex-col items-center px-2 pt-5 md:w-[40%] md:px-6 md:pt-10">
        <header className="flex w-full flex-col">
          <Heading type="h1" className="inline-flex gap-x-2 text-2xl font-medium text-foreground md:text-3xl">
            {t('title')}
            <span className="font-semibold text-tertiary dark:text-primary">Linky</span>
          </Heading>
          <Text>{t('description')}</Text>
        </header>
        <FormAuth type="get_started" />
      </article>
    </section>
  )
}

export const metadata = {
  title: 'Get Started | Linky URL',
  description: 'Get started with Linky now and start shortening your links'
}
