'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { requestAccountDeletion, cancelAccountDeletion } from '@/lib/account'
import styles from './mypage.module.css'

const ACTIVE_STATUSES = ['active', 'trialing', 'past_due']

export default function WithdrawalCard({ userId }: { userId: string }) {
  const [status, setStatus] = useState<string | null>(null)
  const [endStr, setEndStr] = useState('')
  const [deletionRequested, setDeletionRequested] = useState(false)
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
        setStatus((data?.status ?? '').toLowerCase())
        setDeletionRequested(Boolean(data?.deletion_requested))
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
        return
      }
      if ('scheduled' in res && res.scheduled) {
        setDeletionRequested(true)
        setConfirming(false)
      }
    } catch (err) {
      console.error(err)
      setError('退会手続きに失敗しました。しばらくして再度お試しください。')
    } finally {
      setBusy(false)
    }
  }

  async function handleCancelDeletion() {
    if (busy) return
    setBusy(true)
    setError(null)
    try {
      await cancelAccountDeletion()
      setDeletionRequested(false)
    } catch (err) {
      console.error(err)
      setError('予約の取り消しに失敗しました。しばらくして再度お試しください。')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className={`${styles.subcatCard} ${styles.dangerZone}`}>
      <h3>退会</h3>

      {isPaid ? (
        deletionRequested ? (
          <>
            <p>
              退会を予約しています。契約終了日（{endStr}）をもって自動的に退会（アカウント削除）されます。
            </p>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={handleCancelDeletion}
              disabled={busy}
            >
              {busy ? '処理中...' : '退会予約をキャンセル'}
            </button>
          </>
        ) : (
          <>
            <p>
              退会するとアカウントと学習履歴は完全に削除されます。
              契約終了日（{endStr}）まではこれまで通り有料コンテンツをご利用いただけます。
              契約終了日をもって、無料会員へのダウングレードとアカウント削除が自動的に行われます。
            </p>

            {!confirming ? (
              <button
                type="button"
                className={`${styles.btn} ${styles.btnDanger}`}
                onClick={() => setConfirming(true)}
              >
                退会を予約する
              </button>
            ) : (
              <div className={styles.actions}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnDanger}`}
                  onClick={handleConfirmedDelete}
                  disabled={busy}
                >
                  {busy ? '処理中...' : '本当に退会を予約する'}
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
          </>
        )
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
        </>
      )}

      {error && <small className={styles.muted}>{error}</small>}
    </section>
  )
}