import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/database/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/auth/sign-in'

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  if (token_hash && type) {
    const supabase = await supabaseServer()
    const { error, data } = await supabase.auth.verifyOtp({ type, token_hash })
    if (!error) {
      /* update confirmation email for user locally in supabase */
      const { user } = data
      await supabase
        .from('profiles')
        .update({ confirmed_at: new Date().toISOString() })
        .eq('id', user?.id)

      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }
  }

  return NextResponse.redirect(redirectTo)
}
