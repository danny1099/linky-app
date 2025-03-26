import { getTranslations } from 'next-intl/server'
import { Blob, Heading, Navlink, Pill, Text, Title } from '@/modules/common/components'
import { Features, ShortenInput } from '@/modules/home/components'

export default async function Home() {
  const t = await getTranslations('ui.home')

  return (
    <section className="flex size-full flex-col overflow-y-auto bg-background px-4 md:px-24">
      <article className="relative isolate flex h-auto min-h-full w-full flex-col items-center justify-center">
        <Pill text={t('pill')} icon="arrow-right" />
        <header className="flex flex-col items-center text-center">
          <Title className="mt-4 text-balance text-2xl md:text-5xl">{t('title')}</Title>
          <Text className="mt-2 line-clamp-2 w-5/6 text-pretty text-xs md:w-1/2">
            <span className="mr-1 font-bold text-foreground">Linky</span>
            {t('description')}
          </Text>
        </header>

        <ShortenInput />
        <Blob />
      </article>

      <article className="flex h-fit min-h-full w-full flex-col items-center">
        <Features />
        <div className="flex w-full flex-col items-center py-5 text-center">
          <Heading type="h2" className="mt-5 text-xl font-medium md:text-3xl">
            {t('features.title')}
          </Heading>
          <Text className="line-clamp-2 w-5/6 text-pretty text-xs md:w-1/2">{t('features.description')}</Text>
          <Navlink href="/get_started" icon="arrow-right" slot="end" size="xl" className="mt-5">
            {t('topbar.get_started')}
          </Navlink>
        </div>
      </article>
    </section>
  )
}
