'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { TrpcProvider } from '@/lib/providers'

export const ClientProvider = ({ children }: Children) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TrpcProvider>{children}</TrpcProvider>
    </NextThemeProvider>
  )
}
