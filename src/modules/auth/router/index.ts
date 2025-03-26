import { headers } from 'next/headers'
import { supabaseServer } from '@/lib/database'
import { SITE_URL } from '@/config/constants'
import { Response, TRPCError } from '@/modules/common/types'
import { authSchema, authProviderSchema } from '@/modules/auth/schemas'
import { User } from '@/modules/auth/types'
import { procedure, router } from '@/server/trpc'

export const authRouter = router({
  signWithProvider: procedure.input(authProviderSchema).mutation<Response | TRPCError>(async () => {
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
      throw new TRPCError('auth/sign-in-provider-error')
    }

    return {
      message: 'auth/sign-in-provider',
      status: 'success',
      data: { url: data.url }
    }
  }),

  signUpWithCredentials: procedure.input(authSchema).mutation<Response | TRPCError>(async ({ ctx, input }) => {
    const origin = (await headers()).get('origin')
    const { email, password } = input

    if (!email || !password) {
      throw new TRPCError('auth/missing-credentials')
    }

    /* check if user already exists with email */
    const existsEmail = await ctx.db.users.findFirst({ where: { email } })
    if (existsEmail) {
      throw new TRPCError('auth/email_exists')
    }

    const supabase = await supabaseServer()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          email: email
        },
        emailRedirectTo: `${origin}/api/auth/callback`
      }
    })

    if (error) {
      throw new TRPCError(`auth/${error.code}` as Message)
    }

    return {
      message: 'auth/account_created',
      status: 'success',
      data: data.user as User
    }
  }),

  signInWithCredentials: procedure.input(authSchema).mutation<Response | TRPCError>(async ({ ctx, input }) => {
    const { email, password } = input

    if (!email || !password) {
      throw new TRPCError('auth/missing-credentials')
    }

    /* check if user already exists with email */
    const existsEmail = await ctx.db.users.findFirst({ where: { email } })
    if (!existsEmail) {
      throw new TRPCError('auth/email_exists')
    }

    const supabase = await supabaseServer()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      throw new TRPCError(`auth/${error.code}` as Message)
    }

    return {
      message: 'auth/logged_successfully',
      status: 'success',
      data: data.user as User
    }
  })
})
