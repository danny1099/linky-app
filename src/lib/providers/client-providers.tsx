'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { TrpcProvider } from './trpc-provider'

export const ClientProviders = ({ children }: Children) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TrpcProvider>{children}</TrpcProvider>
    </NextThemeProvider>
  )
}
