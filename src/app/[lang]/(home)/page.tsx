import { getTranslate } from '@/lib/i18n/helpers'
import { Badge, Text, Title } from '@/modules/common/components'
import { ShortenInput } from '@/modules/home/components'

export default async function Home() {
  const t = await getTranslate('home')

  return (
    <section className="flex size-full flex-row overflow-hidden bg-background px-4 md:px-24">
      <article className="flex h-full w-full flex-col items-center justify-center md:w-1/2">
        <header className="flex h-fit w-full flex-col p-2">
          <div className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-accent bg-muted px-7 py-2 backdrop-blur transition-all">
            <p className="text-xs font-medium text-muted-foreground">✨ No more long urls, shorten it!</p>
          </div>

          <Title className="mt-4 text-balance md:text-5xl">{t('title')}</Title>
          <Text className="mt-2 text-pretty">{t('description')}</Text>
        </header>

        <ShortenInput />
      </article>

      <article className="hidden w-1/2 md:block">
        <img src="/images/img-initial-bg-l.svg" alt="background" className="h-full w-full object-cover" />
      </article>
    </section>
  )
}
