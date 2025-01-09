'use client'
import { useTranslations } from 'next-intl'
import { getPrivateRoute } from '@/config/routes'
import { Navlink } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  className?: string
}

export const AddLink = ({ className }: Props) => {
  const t = useTranslations('links')

  return (
    <div className={cn('flex w-full', className)}>
      <Navlink href={getPrivateRoute('new_link')} icon="plus-lg" direction="end" className="w-full md:w-fit">
        {t('new-link')}
      </Navlink>
    </div>
  )
}
