export const publicRoutes = {
  get_started: '/auth/get-started',
  confirm_email: '/auth/confirm-email',
  sign_in: '/auth/sign-in'
}

export type PublicRoute = keyof typeof publicRoutes
export const getPublicRoute = (route: PublicRoute): string => publicRoutes[route]
