import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/database/supabase'
import { getPrivateRoute } from '@/config/routes'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  /* Get path to redirect sign in page */
  const pathToRedirect = getPrivateRoute('overview')

  if (code) {
    const supabase = await supabaseServer()
    const { data } = await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(pathToRedirect, origin))
}
