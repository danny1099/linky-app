'use client'
import { useTranslations } from 'next-intl'
import { getPrivateRoute, getPublicRoute } from '@/config/routes'
import { Avatar, Navlink } from '@/modules/common/components'

export const Authenticate = () => {
  const isAuthenticated = false
  const t = useTranslations('topbar')

  if (isAuthenticated) {
    return (
      <Navlink
        variant="outline"
        href={getPrivateRoute('dashboard')}
        className="hover:bg-accent hover:text-tertiary dark:hover:text-accent-foreground"
      >
        <Avatar src="/images/img-avatar.png" size="sm" />
        <span className="text-2xs font-medium">{t('go-to')}</span>
      </Navlink>
    )
  }

  return (
    <nav className="flex h-full flex-row items-center justify-end gap-x-2">
      <Navlink variant="outline" href={getPublicRoute('sign_in')} className="max-sm:hidden">
        {t('login')}
      </Navlink>
      <Navlink href={getPublicRoute('get_started')} icon="arrow-right">
        {t('get-started')}
      </Navlink>
    </nav>
  )
}