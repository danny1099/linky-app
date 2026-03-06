'use client'
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs'

export const AuthProvider = ({ children }: Children) => {
  return <KindeProvider>{children}</KindeProvider>
}
