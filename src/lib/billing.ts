import { createClient } from '@/lib/supabase/client'

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

  const endpoint = 'https://vyzkkkskmwyctznbczzr.functions.supabase.co/billing-portal'
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({ return_url: `${window.location.origin}${returnPath}` }),
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok || !json.url) throw new Error(json.error || 'No portal URL')

  window.location.href = json.url
}