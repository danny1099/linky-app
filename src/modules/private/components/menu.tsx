'use client'
import { useTranslations } from 'next-intl'
import { getPrivateRoute } from '@/config/routes'
import { Group, Link } from '@/modules/private/components'
import { menuLinks } from '@/modules/private/utils'

export const Menu = () => {
  const t = useTranslations('menu')

  return (
    <aside className="col-start-1 row-span-2 row-start-2 hidden px-4 py-2 md:ml-16 md:flex md:w-[340px]">
      <Group title={t('title')} className="mt-5">
        <ul className="mt-5 flex w-full flex-col gap-y-2">
          {menuLinks?.map(({ route, icon }, idx) => {
            return (
              <li key={idx} className="w-[90%]">
                <Link route={getPrivateRoute(route)} icon={icon}>
                  {/* @ts-ignore */}
                  {t(`items.${route}`)}
                </Link>
              </li>
            )
          })}
        </ul>
      </Group>
    </aside>
  )
}
