import { createClient } from '@/lib/supabase/client'
import { invokeEdgeFunction } from '@/lib/edge-functions'

export async function openBillingPortal(returnPath: string = '/mypage'): Promise<void> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user
  if (!user) {
    window.location.href = '/login'
    return
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!profile?.stripe_customer_id) {
    window.location.href = '/checkout'
    return
  }

  const json = await invokeEdgeFunction<{ url?: string }>(
    supabase,
    'billing-portal',
    'No portal URL',
    { return_url: `${window.location.origin}${returnPath}` },
  )
  if (!json?.url) throw new Error('No portal URL')

  window.location.href = json.url
}
