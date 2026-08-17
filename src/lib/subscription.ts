import { createClient } from '@/lib/supabase/client'

const ACTIVE_STATUSES = ['active', 'trialing', 'past_due']

export async function isSubscribed(userId: string): Promise<boolean> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_profiles')
    .select('subscription_status, current_period_end')
    .eq('user_id', userId)
    .maybeSingle()

  if (error || !data) {
    console.error('[isSubscribed] error or no data', error, data)
    return false
  }

  const status = String(data.subscription_status || '').toLowerCase()
  const exp = data.current_period_end ? new Date(data.current_period_end) : null

  const active =
    (exp !== null && exp.getTime() > Date.now() - 60_000) ||
    ACTIVE_STATUSES.includes(status)

  return active
}