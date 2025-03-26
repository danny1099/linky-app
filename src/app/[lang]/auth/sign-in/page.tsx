import { getTranslations } from 'next-intl/server'
import { Heading, Text } from '@/modules/common/components'
import { FormAuth } from '@/modules/auth/components'

export default async function SignIn() {
  const t = await getTranslations('ui.auth.sign_in')

  return (
    <section className="flex size-full flex-row items-center gap-x-4 bg-background px-4 md:px-24">
      <article className="h-[85%] w-[60%] overflow-hidden px-2 pb-10 max-sm:hidden"></article>

      <article className="flex h-full w-full flex-col items-center px-2 pt-5 md:w-[40%] md:px-6 md:pt-10">
        <header className="flex w-full flex-col">
          <Heading type="h1" className="inline-flex gap-x-2 text-2xl font-medium text-foreground md:text-3xl">
            {t('title')}
            <span className="font-semibold text-tertiary dark:text-primary">Linky</span>
          </Heading>
          <Text>{t('description')}</Text>
        </header>

        <FormAuth type="sign_in" />
      </article>
    </section>
  )
}

export const metadata = {
  title: 'Sign In | Linky URL',
  description: 'Sign in with Linky and start shortening your links'
}
