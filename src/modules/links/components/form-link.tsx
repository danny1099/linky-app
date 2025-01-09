'use client'
import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, Input } from '@/modules/common/components'
import { CustomLink, FormActions, OptionsLink } from '@/modules/links/components'
import { linkFormSchema, NewLink } from '@/modules/links/schemas'
import { fieldsFormLink, shortenUrl } from '@/modules/links/utils'
import { api } from '@/server/client'

export const FormLink = () => {
  const t = useTranslations('links.form')
  const params = useSearchParams()
  const createLink = api.link.createNewLink.useMutation()
  const form = useForm<z.infer<typeof linkFormSchema>>({
    resolver: zodResolver(linkFormSchema),
    defaultValues: {
      title: '',
      longUrl: params.get('sh') || '',
      slug: '',
      temporal: false,
      shortUrl: '',
      qr: false
    }
  })

  const onSubmit = async (data: z.infer<typeof linkFormSchema>) => {
    createLink.mutate(
      {
        title: data.title,
        longUrl: data.longUrl,
        slug: data.slug,
        shortUrl: shortenUrl(),
        temporal: data.temporal,
        qr: data.qr
      },
      {
        onSuccess: () => {
          toast.success(t('success'))
          form.reset()
        },
        onError: (error) => {
          console.log({ error: error.message, data })
          toast.error(error.message.includes('Slug') ? t('slug-error') : t('error'))
        }
      }
    )
  }

  return (
    <article className="flex size-full flex-col overflow-hidden py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full w-full flex-col gap-y-3 md:w-[75%]">
          <div className="flex flex-col gap-y-3 px-0.5">
            {fieldsFormLink()
              .slice(0, 2)
              .map(({ id, name, type, label, placeholder, error }) => (
                <FormField
                  key={id}
                  control={form.control}
                  name={name as NewLink}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={type}
                          placeholder={placeholder}
                          value={field.value as string}
                          className="border border-input text-sm text-foreground"
                        />
                      </FormControl>
                      {form.formState.errors[name as NewLink] && <p className="text-2xs text-destructive">{error}</p>}
                    </FormItem>
                  )}
                />
              ))}
            <CustomLink form={form} />
            <OptionsLink form={form} />
          </div>

          <FormActions form={form} state={createLink.isLoading} />
        </form>
      </Form>
    </article>
  )
}
