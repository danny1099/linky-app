import { getTranslate } from '@/lib/i18n/helpers'
import { Text, Title } from '@/modules/common/components'

export default async function Home() {
  const t = await getTranslate('home')

  return (
    <section className="flex size-full flex-col overflow-hidden bg-background">
      <article className="flex size-full flex-col items-center justify-center px-4 text-center md:px-24">
        <header className="flex h-fit w-full flex-col p-2">
          <Title>{t('title')}</Title>
          <Text>{t('description')}</Text>
        </header>
      </article>
    </section>
  )
}
