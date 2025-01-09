'use client'
import { Heading, Text, Button } from '@/modules/common/components'
import { useRouter } from 'next/navigation'

export const ErrorCard = ({ t }: { t: any }) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center px-4 py-2">
      <Heading type="h4" className="text-base font-semibold text-foreground md:text-lg">
        {t('error_title')}
      </Heading>
      <Text className="text-pretty text-2xs text-foreground-muted">{t('error_message')}</Text>
      <Button className="mt-5" variant="outline" icon="house" onClick={() => router.push('/')}>
        {t('button-text')}
      </Button>
    </div>
  )
}
