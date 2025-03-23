import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function detectThemeChange(callback: (theme: 'dark' | 'light') => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (event: MediaQueryListEvent) => {
    const theme = event.matches ? 'dark' : 'light'
    callback(theme)
  }
  mediaQuery.addEventListener('change', handleChange)
  return () => mediaQuery.removeEventListener('change', handleChange)
}
