import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gykadskozmoaxslaggqn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5a2Fkc2tvem1vYXhzbGFnZ3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODE3NzAsImV4cCI6MjA0ODY1Nzc3MH0.tYbODayfwxmuBuqjkZ8zET4wTx-9dqL_ttohqGzCaXg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
