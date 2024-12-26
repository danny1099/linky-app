export const privateRoutes = {
  dashboard: 'private/ws/dashboard',
  link: 'private/ws/link'
}

export type PrivateRoute = keyof typeof privateRoutes
