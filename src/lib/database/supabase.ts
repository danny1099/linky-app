import { cookies } from 'next/headers'
import { createServerClient, createBrowserClient } from '@supabase/ssr'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/config/env'

export const supabase = async () => {
  const cookieStore = await cookies()

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase credentials')
  }

  return createServerClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch (error) {}
      }
    }
  })
}

export const supabaseClient = createBrowserClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)
