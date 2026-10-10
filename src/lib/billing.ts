import { createClient } from '@/lib/supabase/client'
import { invokeEdgeFunction } from '@/lib/edge-functions'
import { NotLoggedInError } from '@/lib/authErrors'

export type BillingPortalResult =
  | { kind: 'no_customer' } // Stripe の顧客 ID がない（購入の画面へ案内する）
  | { kind: 'portal'; url: string } // Stripe の請求の画面（カスタマーポータル）の URL

// Stripe の請求の画面の URL を作る。画面は移らない（移るのは useBillingPortal）。
// ログインが切れていたら NotLoggedInError を投げる。
export async function getBillingPortalUrl(returnPath: string = '/mypage'): Promise<BillingPortalResult> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user
  if (!user) {
    throw new NotLoggedInError()
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!profile?.stripe_customer_id) {
    return { kind: 'no_customer' }
  }

  const json = await invokeEdgeFunction<{ url?: string }>(
    supabase,
    'billing-portal',
    'No portal URL',
    { return_url: `${window.location.origin}${returnPath}` },
  )
  if (!json?.url) throw new Error('No portal URL')

  return { kind: 'portal', url: json.url }
}
