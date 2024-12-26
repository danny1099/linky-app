'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { i18n, type Locale } from '@/config/i18n/'
import { Button, Icon } from '@/modules/common/components'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/modules/common/components/dropdown'
import { cn } from '../utils'

export const LangToggle = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('lang')

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/'

    const segments = pathname.split('/')
    segments[1] = locale

    /* define current path */
    const currentPath = segments.join('/')
    router.push(currentPath, { scroll: false })
  }

  const getLocalesStack = () => {
    const locales = i18n.locales
    const langs: { locale: string; name: string; description: string }[] = []

    locales.map((l: Locale) => {
      langs.push({
        locale: l,
        name: t(`${l}.locale`),
        description: t(`${l}.description`)
      })
    })
    return langs
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="size-5 max-sm:hidden">
        <Button variant="ghost" size="icon">
          <Icon name="translate" className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit">
        <DropdownMenuRadioGroup value={locale} onValueChange={redirectedPathname}>
          {getLocalesStack().map((lang) => {
            return (
              <DropdownMenuRadioItem
                key={lang.locale}
                value={lang.locale}
                iconName="check2"
                className={cn(
                  'text-tertiary focus:bg-background focus:text-foreground',
                  lang.locale === locale && 'bg-accent text-foreground'
                )}
              >
                <div className="flex flex-row items-center gap-x-2 text-xs">
                  <img
                    src={`/images/img-flag-${lang.locale}.png`}
                    alt="Flag of locale selected"
                    className="h-4 w-4"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center text-xs text-foreground">
                    <span className="text-xs font-medium uppercase">{lang.name}</span>
                    <p className="text-2xs text-foreground-muted">{lang.description}</p>
                  </div>
                </div>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
