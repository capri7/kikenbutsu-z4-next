'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { requestAccountDeletion } from '@/lib/account'
import styles from './mypage.module.css'

const ACTIVE_STATUSES = ['active', 'trialing', 'past_due']

type SubRow = {
  status: string | null
  current_period_end: string | null
  deletion_requested: boolean | null
}

export default function WithdrawalCard({ userId }: { userId: string }) {
  const [subRow, setSubRow] = useState<SubRow | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const supabase = createClient()
      const { data } = await supabase
        .from('subscriptions')
        .select('status, current_period_end, deletion_requested')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      if (!cancelled) {
        setSubRow(data ?? null)
        setLoaded(true)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  if (!loaded) return null

  const status = (subRow?.status ?? '').toLowerCase()
  const isPaid = ACTIVE_STATUSES.includes(status)
  const isCanceling = isPaid && !!subRow?.deletion_requested

  const endStr = subRow?.current_period_end
    ? new Date(subRow.current_period_end).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
    : ''

  async function handleConfirmedDelete() {
    if (busy) return
    setBusy(true)
    setError(null)
    try {
      const res = await requestAccountDeletion()
      if ('deleted' in res && res.deleted) {
        const supabase = createClient()
        await supabase.auth.signOut()
        window.location.href = '/account-deleted'
      }
    } catch (err) {
      console.error(err)
      setError('退会手続きに失敗しました。しばらくして再度お試しください。')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className={`${styles.subcatCard} ${styles.dangerZone}`}>
      <h3>退会</h3>

      {isPaid && isCanceling && (
        <p>
          サブスクリプションの解約手続きが完了しています。
          契約終了日（{endStr}）をもって自動的に退会となります。
          それまではサービスを通常通りご利用いただけます。
        </p>
      )}

      {isPaid && !isCanceling && (
        <p>
          退会をご希望の場合は、上記「請求情報を開く」からサブスクリプションを解約してください。
          解約後、契約終了日（{endStr}）に自動的に退会となります。
        </p>
      )}

      {!isPaid && (
        <>
          <p>退会するとアカウントと学習履歴は完全に削除され、元に戻せません。</p>

          {!confirming ? (
            <button
              type="button"
              className={`${styles.btn} ${styles.btnDanger}`}
              onClick={() => setConfirming(true)}
            >
              退会する
            </button>
          ) : (
            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnDanger}`}
                onClick={handleConfirmedDelete}
                disabled={busy}
              >
                {busy ? '処理中...' : '本当に退会する'}
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => setConfirming(false)}
                disabled={busy}
              >
                キャンセル
              </button>
            </div>
          )}

          {error && <small className={styles.muted}>{error}</small>}
        </>
      )}
    </section>
  )
}