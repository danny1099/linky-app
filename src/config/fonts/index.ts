import { Inter, Roboto, Comfortaa } from 'next/font/google'

export const globalFont = Roboto({ subsets: ['latin'], preload: false, variable: '--global-font' })
export const titleFont = Inter({ subsets: ['latin'], preload: false, variable: '--title-font' })
export const brandFont = Comfortaa({ subsets: ['latin'], preload: false, variable: '--brand-font' })
