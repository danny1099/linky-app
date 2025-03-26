import { SITE_URL } from '@/config/constants'
import { getPrivateRoute } from '@/config/routes'
import { supabaseServer } from '@/lib/database'
import { Response, TRPCError } from '@/modules/common/types'
import { authSchema, authProviderSchema } from '@/modules/auth/schemas'
import { procedure, router } from '@/server/trpc'

export const authRouter = router({
  loginWithProvider: procedure.input(authProviderSchema).mutation<Response | TRPCError>(async () => {
    const supabase = await supabaseServer()

    /* Sign in with Google */
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        },
        redirectTo: `${SITE_URL}/api/auth/callback`
      }
    })

    if (error) {
      throw new TRPCError('auth/logged_error')
    }

    return {
      message: 'auth/logged_successfully',
      status: 'success',
      data: { url: data.url }
    }
  }),

  loginWithOTP: procedure.input(authSchema).mutation<Response | TRPCError>(async ({ input }) => {
    const { email } = input
    const routeToRedirect = getPrivateRoute('overview')

    if (!email) {
      throw new TRPCError('auth/missing_credentials')
    }

    const supabase = await supabaseServer()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${routeToRedirect}`
      }
    })

    if (error) {
      throw new TRPCError('auth/logged_error')
    }

    return {
      message: 'auth/logged_successfully',
      status: 'success',
      data: null
    }
  }),

  logout: procedure.mutation(async () => {
    const supabase = await supabaseServer()
    const { error } = await supabase.auth.signOut()

    if (error) {
      return new TRPCError('auth/logged_error')
    }

    return {
      message: 'auth/logout_successfully',
      status: 'success',
      data: null
    }
  }),

  findUserWithEmail: procedure.input(authSchema).mutation<Response | TRPCError>(async ({ ctx, input }) => {
    const { email } = input

    if (!email) {
      throw new TRPCError('auth/missing_credentials')
    }

    const existingUser = await ctx.db.users.findFirst({ where: { email } })
    if (!existingUser) {
      throw new TRPCError('auth/user_not_found')
    }

    return {
      message: 'auth/user_found',
      status: 'success',
      data: existingUser
    }
  }),

  verifyEmail: procedure.input(authSchema).mutation<Response | TRPCError>(async ({ ctx, input }) => {
    const { email } = input
    const routeToRedirect = getPrivateRoute('overview')

    if (!email) {
      throw new TRPCError('auth/missing_credentials')
    }

    const existingUser = await ctx.db.users.findFirst({ where: { email } })
    if (!existingUser) {
      throw new TRPCError('auth/user_not_found')
    }

    const supabase = await supabaseServer()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${routeToRedirect}`
      }
    })

    if (error) {
      throw new TRPCError('auth/logged_error')
    }

    return {
      message: 'auth/confirm_email',
      status: 'success',
      data: null
    }
  })
})
