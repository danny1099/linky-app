// pingSupabase.js
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from '@/config/env'

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase credentials. Make sure SUPABASE_URL and SUPABASE_KEY are set.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function pingSupabase() {
  try {
    console.log(`🔄 Pinging Supabase at: ${SUPABASE_URL}`)
    const { data, error } = await supabase.from('urls').select('*').limit(1)

    if (error) {
      throw error
    }

    console.log('✅ Supabase responded successfully:', data)
  } catch (err: any) {
    console.error('💥 Error pinging Supabase:', err.message)
    process.exit(1)
  }
}

pingSupabase()
