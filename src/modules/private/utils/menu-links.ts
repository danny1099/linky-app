import { PrivateRoute } from '@/config/routes'

export interface MenuLink {
  label: string
  icon: string
  route: PrivateRoute
  path?: string
}

export const menuLinks: MenuLink[] = [
  {
    label: 'Home',
    icon: 'house',
    route: 'dashboard'
  },
  {
    label: 'Links',
    icon: 'link-45deg',
    route: 'link'
  },
  {
    label: 'QR Codes',
    icon: 'qr-code-scan',
    route: 'qr'
  }
]
