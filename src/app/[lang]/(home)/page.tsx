import { getTranslate } from '@/lib/i18n/helpers'
import { Pill, Text, Title } from '@/modules/common/components'
import { ShortenInput } from '@/modules/home/components'

export default async function Home() {
  const t = await getTranslate('home')

  return (
    <section className="flex size-full flex-row overflow-hidden bg-background px-4 md:px-24">
      <article className="flex size-full flex-col items-center justify-center">
        <Pill text={t('pill')} icon="arrow-right" />
        <header className="flex flex-col items-center text-center">
          <Title className="mt-4 text-balance text-2xl md:text-5xl">{t('title')}</Title>
          <Text className="mt-2 line-clamp-2 w-5/6 text-pretty text-xs md:w-1/2">
            <span className="mr-1 font-bold text-foreground">Linky</span>
            {t('description')}
          </Text>
        </header>

        <ShortenInput />
      </article>
    </section>
  )
}
