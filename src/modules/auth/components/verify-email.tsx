'use client'
import { useEffect, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { useSearchParams, useRouter } from 'next/navigation'
import { getPublicRoute } from '@/config/routes'
import { Button } from '@/modules/common/components'
import { useToast } from '@/modules/common/hooks'
import { User } from '@/modules/auth/types'
import { api } from '@/server/client'

export const VerifyEmail = () => {
  const t = useTranslations('ui.auth.confirm_email')
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const router = useRouter()
  const toast = useToast()

  /* get email provided from url query params and redirect to get started */
  const emailProvided = searchParams.get('email') as string
  const routeToGetStarted = getPublicRoute('get_started')

  /* api call to verify email and find user */
  const apiService = api.auth.verifyEmail.useMutation()
  const apiServiceUser = api.auth.findUserWithEmail.useMutation()

  useEffect(() => {
    validateProvidedEmail()
  }, [])

  const validateProvidedEmail = async () => {
    if (!emailProvided) {
      router.push(routeToGetStarted, { scroll: false })
    }

    await apiServiceUser
      .mutateAsync({ email: emailProvided })
      .then(({ data }) => {
        const user = data as User
        if (user.confirmed_at) router.push(routeToGetStarted, { scroll: false })
      })
      .catch(() => {
        toast('auth/user_not_found', 'error')
        router.push(routeToGetStarted, { scroll: false })
      })
  }

  const handleResend = async () => {
    if (emailProvided) {
      startTransition(async () => {
        await apiService.mutateAsync({ email: emailProvided }).then(({ message }) => toast(message, 'success'))
      })
    }
  }

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center">
      <Button variant="primary" className="w-fit" icon="send-check" isLoading={isPending} onClick={handleResend}>
        {t('resend')}
      </Button>
    </div>
  )
}
