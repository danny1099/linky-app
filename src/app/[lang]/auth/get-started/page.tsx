import { getTranslations } from 'next-intl/server'
import { Heading, Text, Title } from '@/modules/common/components'
import { Disclaimer, FormAuth } from '@/modules/auth/components'

export default async function GetStarted() {
  const t = await getTranslations('ui.auth.get_started')

  return (
    <section className="flex size-full flex-row items-center gap-x-4 bg-background px-4 md:px-24">
      <article className="relative isolate h-[85%] w-[60%] overflow-hidden px-2 pb-10 max-sm:hidden">
        <Title className="text-balance text-2xl md:text-3xl">{t('slogan')}</Title>
        <Text className="mt-5">{t('slogan-description')}</Text>
        <div className="mt-6 flex w-full flex-row items-center">
          <Text className="text-foreground md:text-2xs">Powered by</Text>
          <img src="/images/img-supabase-logo.svg" alt="Supabase logo" className="ml-2 size-4" />
        </div>
      </article>

      <article className="flex h-full w-full flex-col items-center px-2 pt-5 md:w-[40%] md:px-6 md:pt-10">
        <header className="flex w-full flex-col">
          <Heading type="h1" className="inline-flex gap-x-2 text-2xl font-medium text-foreground md:text-3xl">
            {t('title')}
            <span className="font-semibold text-tertiary dark:text-primary">Linky</span>
          </Heading>
          <Text>{t('description')}</Text>
        </header>

        <FormAuth />
        <Disclaimer />
      </article>
    </section>
  )
}

export const metadata = {
  title: 'Get Started | Linky URL',
  description: 'Get started with Linky now and start shortening your links'
}
