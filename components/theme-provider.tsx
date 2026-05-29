'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const scriptProps =
    typeof window === 'undefined' ? undefined : ({ type: 'application/json' } as const)

  return (
    <NextThemesProvider
      {...props}
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
      scriptProps={scriptProps}>
      {children}
    </NextThemesProvider>
  )
}
