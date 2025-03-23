'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useIsClient } from 'usehooks-ts'
import { Button, Icon } from '@/modules/common/components'
import { detectThemeChange } from '@/modules/common/utils'

/* prettier-ignore */
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useIsClient()

  useEffect(() => {
    detectThemeChange((theme) => setTheme(theme))
  }, [theme])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? 'dark' : 'light')}
    >
       <Icon name={theme === 'light' ? 'moon': 'sun'} className="text-foreground size-4" />
    </Button>
  )
}
