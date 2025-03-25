import { getTranslations } from 'next-intl/server'
import { getPublicRoute } from '@/config/routes'
import { Navlink } from '@/modules/common/components'

export const NavigateLinks = async () => {
  const t = await getTranslations('ui.home.topbar')

  /* get routes for sign in and get started */
  const getStartedRoute = getPublicRoute('get_started')

  return (
    <>
      <Navlink href={getStartedRoute} icon="arrow-right" slot="end" size="lg">
        {t('get_started')}
      </Navlink>
    </>
  )
}
