'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { requestAccountDeletion } from '@/lib/account'
import styles from './mypage.module.css'

const ACTIVE_STATUSES = ['active', 'trialing', 'past_due']

export default function WithdrawalCard({ userId }: { userId: string }) {
  const [status, setStatus] = useState<string | null>(null)
  const [endStr, setEndStr] = useState('')
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
        .select('status, current_period_end')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      if (!cancelled) {
        setStatus((data?.status ?? '').toLowerCase())
        setEndStr(
          data?.current_period_end
            ? new Date(data.current_period_end).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })
            : ''
        )
        setLoaded(true)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  if (!loaded) return null

  const isPaid = ACTIVE_STATUSES.includes(status ?? '')

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

      {isPaid ? (
        <p>
          退会をご希望の場合は、上記「請求情報を開く」からサブスクリプションを解約してください。
          解約後も契約終了日（{endStr}）までは、今まで通り有料コンテンツをご利用いただけます。
          契約終了日をもって自動的に無料会員に切り替わります。
          アカウントの削除（退会）をご希望の場合は、無料会員に切り替わった後、あらためてマイページ最下部の「退会する」からお手続きください。
        </p>
      ) : (
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