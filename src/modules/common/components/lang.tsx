'use client'
import { useLocale, useTranslations } from 'next-intl'
import { type Locale, routing, useRouter, usePathname } from '@/lib/i18n'
import {
  DropdownMenu,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
  Icon,
  Button
} from '@/modules/common/components'

export const LangToggle = () => {
  const pathname = usePathname()
  const router = useRouter()
  const currentlocale = useLocale()

  /* get all locales available */
  const t = useTranslations('ui.lang')
  const { locales } = routing

  const getLocalesStack = () => {
    const langs: { locale: Locale; name: string; description: string }[] = []

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
      <MenuTrigger asChild>
        <Button variant="ghost" size="icon" icon="translate">
          <span className="sr-only">Lang</span>
        </Button>
      </MenuTrigger>

      <MenuContent className="w-fit">
        <MenuRadioGroup
          value={currentlocale}
          onValueChange={(newLang: string) => router.push(pathname, { locale: newLang, scroll: false })}
        >
          {getLocalesStack().map((lang) => {
            return (
              <MenuRadioItem key={lang.locale} value={lang.locale} iconName="check2" iconClassName="text-tertiary">
                <div className="flex flex-row items-center gap-x-2 text-xs">
                  <img
                    src={`/images/img-flag-${lang.locale}.png`}
                    alt="Flag of locale selected"
                    className="h-4 w-4"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center text-xs text-foreground">
                    <span className="text-2xs font-medium uppercase">{lang.name}</span>
                    <p className="text-2xs text-foreground-muted">{lang.description}</p>
                  </div>
                </div>
              </MenuRadioItem>
            )
          })}
        </MenuRadioGroup>
      </MenuContent>
    </DropdownMenu>
  )
}
