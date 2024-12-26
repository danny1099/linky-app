export const publicRoutes = {
  home: '/',
  sign_in: '/auth/sing-in',
  get_started: '/auth/get-started'
}

export type PublicRoute = keyof typeof publicRoutes
