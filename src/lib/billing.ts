import { createClient } from '@/lib/supabase/client'
import { invokeEdgeFunction } from '@/lib/edge-functions'

export async function openBillingPortal(returnPath: string = '/mypage'): Promise<void> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user
  if (!user) {
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- 画面の部品の外の関数で router を使えないため。ログインが切れているので、ページ全体を読み込み直して、画面に残った会員の情報も消す
    window.location.href = '/login'
    return
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!profile?.stripe_customer_id) {
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- 画面の部品の外の関数で router を使えないため（ログインの状態は変わらない。呼び出す側の画面が router.push で移る形に直す予定）
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
