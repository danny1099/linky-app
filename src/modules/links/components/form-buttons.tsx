'use client'
import { Button } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { useTranslations } from 'next-intl'

interface Props {
  form: any
  className?: string
  state?: boolean
}

export const FormActions = ({ form, state, className }: Props) => {
  const t = useTranslations('links.form')

  return (
    <div className={cn('mt-5 flex w-full flex-col items-center gap-3 md:flex-row-reverse md:justify-start', className)}>
      <Button type="submit" className="w-full md:w-fit" icon="save" isLoading={state}>
        {t('submit')}
      </Button>
      <Button type="reset" className="w-full md:w-fit" variant="outline" onClick={() => form.reset()}>
        {t('cancel')}
      </Button>
    </div>
  )
}