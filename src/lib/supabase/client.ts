import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://crnkizllssyyjpjpjwkw.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "sb_publishable_Ybyq5_aHm6br8-f-n4KEHw_QeANeSkB";

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
