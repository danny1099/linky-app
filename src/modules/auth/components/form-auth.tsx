'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { getPrivateRoute, getPublicRoute } from '@/config/routes'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/modules/common/components/form'
import { useToast } from '@/modules/common/hooks'
import { InputPassword, Input, Button } from '@/modules/common/components'
import { FormRedirect, SignWithProvider } from '@/modules/auth/components'
import { authSchema } from '@/modules/auth/schemas'
import { User } from '@/modules/auth/types'
import { api } from '@/server/client'

interface FormAuthProps {
  type: 'sign_in' | 'get_started'
}

const API_SERVICE = {
  get_started: api.auth.signUpWithCredentials,
  sign_in: api.auth.signInWithCredentials
}

export const FormAuth = ({ type }: FormAuthProps) => {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('ui.auth.form')
  const toast = useToast()
  const router = useRouter()

  /* define api services */
  const apiService = API_SERVICE[type].useMutation()

  /* define routes to redirect user */
  const routeToConfirmEmail = getPublicRoute('confirm_email')
  const routeToOverview = getPrivateRoute('overview')

  /* use funtions and values from form */
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  /* use form state to get errors */
  const { formState } = form

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    startTransition(async () => {
      await apiService
        .mutateAsync(data)
        .then(({ message, data }: { message: Message; data?: User }) => {
          toast(message, 'success')
          data?.confirmed_at ? router.push(routeToOverview) : router.push(routeToConfirmEmail)
        })
        .catch(({ message }: { message: Message }) => {
          if (message === 'auth/email_not_confirmed') {
            toast(message as Message, 'info')
            router.push(routeToConfirmEmail)
          }
          toast(message as Message, 'error')
        })
    })
  }

  return (
    <Form {...form}>
      <SignWithProvider />
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex size-full flex-col py-2">
        <div className="flex size-full flex-col gap-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email.label')}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder={t('email.placeholder')}
                    value={field.value as string}
                    variant="accent"
                    icon="envelope"
                    isBordered
                    className="w-full text-foreground"
                  />
                </FormControl>
                {formState.errors['email'] && <FormMessage />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password.label')}</FormLabel>
                <FormControl>
                  <InputPassword
                    {...field}
                    type="text"
                    placeholder={t('password.placeholder')}
                    value={field.value as string}
                    variant="accent"
                    isBordered
                    className="w-full text-foreground"
                  />
                </FormControl>
                {formState.errors['password'] && <FormMessage />}
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" isLoading={isPending} className="w-full" icon="save">
          {t('button')}
        </Button>
      </form>

      <FormRedirect type={type} />
    </Form>
  )
}
