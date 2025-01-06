'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, Input } from '@/modules/common/components'
import { CustomLink, OptionsLink, FormActions } from '@/modules/links/components'
import { linkFormSchema, NewLink } from '@/modules/links/schemas'
import { fieldsFormLink } from '@/modules/links/utils'
import { api } from '@/server/client'

export const FormLink = () => {
  const createLink = api.link.newLink.useMutation()
  const form = useForm<z.infer<typeof linkFormSchema>>({
    resolver: zodResolver(linkFormSchema),
    defaultValues: {
      title: '',
      longUrl: '',
      slug: '',
      temporal: false,
      qr: false
    }
  })

  const onSubmit = (data: z.infer<typeof linkFormSchema>) => {
    createLink.mutate(data, {
      onSuccess: (r) => {
        console.log(r)
        form.reset()
      }
    })
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

            {/* fields custom */}
            <CustomLink form={form} />
            <OptionsLink form={form} />
          </div>

          <FormActions form={form} state={createLink.isLoading} />
        </form>
      </Form>
    </article>
  )
}
