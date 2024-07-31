import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv';

config({ path: '.env' });

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAPI = process.env.SUPABASE_API as string;

export const supabase = createClient(supabaseUrl, supabaseAPI);
