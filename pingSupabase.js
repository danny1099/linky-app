// pingSupabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Missing Supabase credentials. Make sure SUPABASE_URL and SUPABASE_KEY are set.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function pingSupabase() {
  try {
    console.log(`🔄 Pinging Supabase at: ${SUPABASE_URL}`);
    const { data, error } = await supabase
      .from('urls')
      .select('*')
      .limit(1);

    if (error) {
      throw error;
    }

    console.log('✅ Supabase responded successfully:', data);
  } catch (err) {
    console.error('💥 Error pinging Supabase:', err.message);
    process.exit(1);
  }
}

pingSupabase();
