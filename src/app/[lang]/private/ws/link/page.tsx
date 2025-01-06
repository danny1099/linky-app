import { getTranslations } from 'next-intl/server'
import { Heading, Input, Text } from '@/modules/common/components'
import { AddLink, EmptyLinks } from '@/modules/links/components'

export default async function Links() {
  const t = await getTranslations('links')
  const links = []

  return (
    <section className="flex size-full flex-col px-1">
      <header className="flex w-full flex-col py-1">
        <Heading type="h1">{t('title')}</Heading>
        <Text className="text-foreground-muted">{t('description')}</Text>
        <div className="mt-1.5 flex w-full flex-row items-center justify-between gap-x-3 py-1">
          <Input placeholder={t('search')} icon="search" slot="end" className="w-full bg-secondary" />
          <AddLink className="w-fit max-sm:hidden" />
        </div>
      </header>

      <article className="flex size-full flex-col overflow-hidden py-2">
        <div className="flex size-full flex-col">
          {links.length === 0 && <EmptyLinks />}

          <ul className="flex size-full flex-col gap-y-2 overflow-y-auto"></ul>
        </div>
        <AddLink className="w-full md:hidden" />
      </article>
    </section>
  )
}
