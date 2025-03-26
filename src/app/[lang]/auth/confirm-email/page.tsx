import { getTranslations } from 'next-intl/server'
import { Circle, Heading, Icon, Text } from '@/modules/common/components'
import { VerifyEmail } from '@/modules/auth/components'

export default async function ConfirmEmail() {
  const t = await getTranslations('ui.auth.confirm_email')

  return (
    <section className="flex size-full flex-row items-center gap-x-4 bg-background px-4 md:px-24">
      <article className="flex size-full flex-col items-center justify-center">
        <header className="flex flex-col items-center">
          <Circle className="mb-4 flex size-40 bg-accent">
            <Icon name="envelope-check" className="size-24 text-primary" />
          </Circle>
          <Heading type="h1" className="inline-flex text-2xl font-medium text-foreground md:text-4xl">
            {t('title')}
          </Heading>
          <Text className="text-pretty text-center">{t('description')}</Text>
        </header>

        <VerifyEmail />
      </article>
    </section>
  )
}
