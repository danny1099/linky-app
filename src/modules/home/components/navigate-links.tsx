import { getTranslations } from 'next-intl/server'
import { getPrivateRoute, getPublicRoute } from '@/config/routes'
import { Avatar, Navlink } from '@/modules/common/components'

export const NavigateLinks = async () => {
  const t = await getTranslations('ui.home.topbar')
  const isSignedIn = false

  /* get routes for sign in and get started */
  const routeToGetStarted = getPublicRoute('get_started')
  const routeToOverview = getPrivateRoute('overview')

  if (isSignedIn) {
    return (
      <Navlink href={routeToOverview} slot="start">
        {t('go_to')}
        <Avatar src="/images/img-avatar.png" size="sm" />
      </Navlink>
    )
  }

  return (
    <Navlink href={routeToGetStarted} icon="arrow-right" slot="end">
      {t('get_started')}
    </Navlink>
  )
}
