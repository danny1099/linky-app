import { buildProvidersTree, ThemeProvider, NextIntlProvider } from '@/lib/providers'

export const TreeProvider = buildProvidersTree([
  [NextIntlProvider, {}],
  [ThemeProvider, {}]
])
