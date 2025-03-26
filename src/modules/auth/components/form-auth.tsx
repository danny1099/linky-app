'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { getPublicRoute } from '@/config/routes'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/modules/common/components/form'
import { useToast } from '@/modules/common/hooks'
import { Input, Button } from '@/modules/common/components'
import { SignWithProvider } from '@/modules/auth/components'
import { authSchema } from '@/modules/auth/schemas'
import { api } from '@/server/client'

export const FormAuth = () => {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('ui.auth.form')
  const toast = useToast()
  const router = useRouter()

  /* define api services */
  const apiService = api.auth.loginWithOTP.useMutation()

  /* define routes to redirect user */
  const routeToConfirmEmail = getPublicRoute('confirm_email')

  /* use funtions and values from form */
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: ''
    }
  })

  /* use form state to get errors */
  const { formState } = form

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    startTransition(async () => {
      await apiService
        .mutateAsync(data)
        .then(({ message }) => {
          toast(message, 'success')
          router.push(`${routeToConfirmEmail}?email=${data.email}`)
        })
        .catch(({ message }: { message: Message }) => toast(message, 'error'))
    })
  }

  return (
    <Form {...form}>
      <SignWithProvider />
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex size-full flex-col">
        <div className="flex h-auto w-full flex-col gap-5 py-1">
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
          <Button type="submit" isLoading={isPending} className="w-full" icon="arrow-right">
            {t('button')}
          </Button>
        </div>
      </form>
    </Form>
  )
}
