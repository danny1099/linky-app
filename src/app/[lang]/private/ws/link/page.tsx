import { getTranslations } from 'next-intl/server'
import { Heading, Input, Text } from '@/modules/common/components'
import { AddLink, EmptyLinks, LinkCard } from '@/modules/links/components'
import { api } from '@/server/ssr'

export default async function Links() {
  const t = await getTranslations('links')
  const links = await api.link.findByUserLinks()

  return (
    <section className="flex size-full flex-col px-4 py-2 md:pl-5 md:pr-20">
      <header className="flex w-full flex-col py-1">
        <Heading type="h1">{t('title')}</Heading>
        <Text className="text-foreground-muted">{t('description')}</Text>
        <div className="mt-1.5 flex w-full flex-row items-center justify-between gap-x-3 py-1 pr-2">
          <Input placeholder={t('search')} icon="search" slot="end" className="w-full bg-secondary" />
          <AddLink className="size-fit max-sm:hidden" />
        </div>
      </header>

      <article className="flex size-full flex-col overflow-hidden py-2">
        <div className="flex size-full flex-col overflow-hidden">
          {links.length === 0 ? (
            <EmptyLinks />
          ) : (
            <ul className="sb-tiny sb-track sb-thumb flex size-full flex-col gap-y-2 overflow-y-auto px-1">
              {links.map((link) => (
                <LinkCard key={link.id} {...link} />
              ))}
            </ul>
          )}
        </div>

        <AddLink className="w-full bg-background px-1 py-2 md:hidden" />
      </article>
    </section>
  )
}
