import { getTranslations } from 'next-intl/server'
import { Heading, Text } from '@/modules/common/components'
import { FormLink } from '@/modules/links/components'

export default async function NewLink() {
  const t = await getTranslations('links.new_link')

  return (
    <section className="flex size-full flex-col px-1">
      <header className="flex w-full flex-col py-1">
        <Heading type="h1">{t('title')}</Heading>
        <Text className="text-foreground-muted">{t('description')}</Text>
      </header>

      {/* form component to create a new link */}
      <FormLink />
    </section>
  )
}
