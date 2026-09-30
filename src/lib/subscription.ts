import { createClient } from '@/lib/supabase/client'

// 有料会員かどうかを、DB の has_active_subscription() で判定する（本人だけ）
export async function isSubscribed(): Promise<boolean> {
  const supabase = createClient()
  const { data, error } = await supabase.rpc('has_active_subscription')

  if (error) {
    console.error('[isSubscribed] rpc error', error)
    return false
  }

  return data === true
}
