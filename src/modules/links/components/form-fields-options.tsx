'use client'
import { FormControl, FormField, FormItem, FormLabel, Icon, Switch } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { NewLink } from '@/modules/links/schemas'
import { fieldsFormLink } from '@/modules/links/utils'

interface Props {
  form: any
  className?: string
}

export const OptionsLink = ({ form, className }: Props) => {
  return (
    <div className={cn('flex h-20 flex-row items-center justify-between gap-x-3 px-0.5', className)}>
      <div className="flex flex-col gap-y-2">
        {fieldsFormLink()
          .slice(3, 5)
          .map(({ id, name, label }) => (
            <FormField
              key={id}
              control={form.control}
              name={name as NewLink}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-x-1">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-xs tracking-tight text-foreground-muted">{label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
      </div>
      {form.getValues('qr') === true && <Icon name="qr-code" className="size-12" />}
    </div>
  )
}
