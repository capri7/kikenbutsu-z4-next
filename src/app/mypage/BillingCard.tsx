'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useBillingPortal } from '@/lib/useBillingPortal'
import styles from './mypage.module.css'

type Subscription = {
  stripe_customer_id: string | null
  status: string | null
  current_period_end: string | null
}

export default function BillingCard({ userId }: { userId: string }) {
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const { open: openPortal, busy } = useBillingPortal()

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('subscriptions')
        .select('stripe_customer_id, status, current_period_end')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      if (cancelled) return
      if (!error && data) setSubscription(data)
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  // stripe_customer_idが無いユーザー（無料会員）には表示しない
  if (!subscription?.stripe_customer_id) return null

  const endStr = subscription.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
    : ''

  const hint =
    `現在のステータス：${subscription.status ?? 'none'}` +
    (endStr ? `（有効期限：${endStr} まで）` : '')

  return (
    <section className={styles.subcatCard}>
      <h3>💳 請求情報</h3>
      <p>支払い方法の変更・領収書の確認・解約はカスタマーポータルで手続きをお願いします。</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={openPortal}
          disabled={busy}
        >
          請求情報を開く
        </button>
      </div>
      <small className={styles.muted}>{hint}</small>
    </section>
  )
}