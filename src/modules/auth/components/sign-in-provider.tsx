'use client'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { DividerWithText, Button } from '@/modules/common/components'
import { useToast } from '@/modules/common/hooks'
import { api } from '@/server/client'

export const SignWithProvider = () => {
  const t = useTranslations('ui.auth.provider')
  const apiServices = api.auth.signWithProvider.useMutation()
  const toast = useToast()
  const router = useRouter()

  const handleSignWithProvider = async () => {
    await apiServices
      .mutateAsync({ provider: 'google' })
      .then(({ message, data }: { message: Message; data?: { url: string } }) => {
        toast(message, 'success')
        router.push(data?.url as string)
      })
      .catch(({ message }) => toast(message, 'error'))
  }

  return (
    <div className="mt-6 flex w-full flex-col items-center gap-y-2">
      <Button variant="outline" className="flex w-full flex-row gap-x-2" onClick={handleSignWithProvider}>
        <img src="/images/img-google-logo.png" alt="google logo" className="size-5" />
        {t('button')}
      </Button>
      <DividerWithText text={t('or')} type="horizontal" className="my-4 w-full" />
    </div>
  )
}
