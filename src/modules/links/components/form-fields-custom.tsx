'use client'
import { useTranslations } from 'next-intl'
import { FormControl, FormField, FormItem, FormLabel, Input } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  form: any
  className?: string
}

export const CustomLink = ({ form, className }: Props) => {
  const t = useTranslations('links.form')

  return (
    <div className={cn('mt-5 flex flex-col gap-y-3 px-0.5', className)}>
      <FormField
        control={form.control}
        name="slug"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('slug.label')}</FormLabel>
            <FormControl>
              <div className="flex w-full flex-row items-center gap-x-2">
                <span className="flex h-full w-fit items-center rounded-md border border-border bg-secondary p-3 text-xs font-medium text-foreground">
                  Linky.com
                </span>{' '}
                /
                <Input
                  type="text"
                  isBordered
                  {...field}
                  placeholder={t('slug.placeholder')}
                  value={field.value as string}
                  className="border border-input text-sm text-foreground"
                />
              </div>
            </FormControl>
            {form.formState.errors.slug && <p className="text-2xs text-destructive">{t('slug.error')}</p>}
          </FormItem>
        )}
      />
    </div>
  )
}
