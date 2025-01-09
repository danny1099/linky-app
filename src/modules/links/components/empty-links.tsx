import { getTranslations } from 'next-intl/server'
import { Heading, Text } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

export const EmptyLinks = async ({ className }: { className?: string }) => {
  const t = await getTranslations('links.empty')

  return (
    <div className={cn('my-auto flex w-full flex-col items-center', className)}>
      <img src="/images/img-empty-data.svg" alt="Empty image of links" className="size-60" loading="eager" />
      <div className="flex w-full flex-col items-center justify-center">
        <Heading type="h4" className="text-sm font-medium text-foreground">
          {t('title')}
        </Heading>
        <Text className="text-xs text-foreground-muted">{t('description')}</Text>
      </div>
    </div>
  )
}
