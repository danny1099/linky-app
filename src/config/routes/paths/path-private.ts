export const privateRoutes = {
  dashboard: 'private/ws/dashboard',
  link: 'private/ws/link',
  new_link: 'private/ws/link/new',
  qr: 'private/ws/qr'
}

export type PrivateRoute = keyof typeof privateRoutes
