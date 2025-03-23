export const privateRoutes = {
  overview: '/private/ws/overview',
  links: '/private/ws/links',
  qr: '/private/ws/qr',
  settings: '/private/ws/settings'
}

export type PrivateRoute = keyof typeof privateRoutes
export const getPrivateRoute = (route: PrivateRoute): string => privateRoutes[route]
