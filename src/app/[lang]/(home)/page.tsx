import { getTranslations } from 'next-intl/server'
import { Button, Heading, Input, Text } from '@/modules/common/components'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <section className="size-full bg-background px-4 py-2 md:px-20">
      <article className="flex size-full flex-col items-center py-20">
        <div className="mt-5 flex flex-col items-center space-y-2 text-pretty text-center">
          <Heading type="h1" className="text-balance text-2xl font-bold md:text-4xl">
            {t('title')}
          </Heading>
          <Text className="line-clamp-2 w-5/6 text-pretty text-[.72rem] md:w-1/2 md:text-sm">
            {t('description')}
          </Text>
        </div>

        <div className="mt-10 flex w-full flex-row items-center justify-center gap-2 p-2 md:w-1/2">
          <Input type="text" placeholder={t('input-placeholder')} className="bg-accent max-sm:w-full" />
          <Button icon="send" className="w-fit">
            <span className="max-sm:hidden">{t('button-text')}</span>
          </Button>
        </div>
      </article>
    </section>
  )
}
