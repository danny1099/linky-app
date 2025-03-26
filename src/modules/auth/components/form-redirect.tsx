'use client'
import { useTranslations } from 'next-intl'
import { getPublicRoute } from '@/config/routes'
import { Navlink, Text } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface FormRedirectProps {
  type: 'sign_in' | 'get_started'
  className?: string
}

export const FormRedirect = ({ type, className }: FormRedirectProps) => {
  const t = useTranslations('ui.auth')
  const routeToRedirect = type === 'get_started' ? getPublicRoute('sign_in') : getPublicRoute('get_started')

  return (
    <div className={cn('-mt-3 flex h-fit flex-row items-center justify-center gap-x-1 px-2 py-1', className)}>
      <Text className="text-xs md:text-xs">{t(`${type}.have-account`)}</Text>
      <Navlink href={routeToRedirect} variant="ghost" className="h-fit px-0 text-xs font-semibold">
        {t(`${type}.redirect-text`)}
      </Navlink>
    </div>
  )
}
