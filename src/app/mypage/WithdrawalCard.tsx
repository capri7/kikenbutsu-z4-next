'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { requestAccountDeletion } from '@/lib/account'
import styles from './mypage.module.css'

export default function WithdrawalCard() {
  const [confirming, setConfirming] = useState(false)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<
    | { type: 'scheduled'; date: string }
    | { type: 'error'; message: string }
    | null
  >(null)

  async function handleConfirmedDelete() {
    if (busy) return
    setBusy(true)
    setResult(null)
    try {
      const res = await requestAccountDeletion()
      if ('deleted' in res && res.deleted) {
        const supabase = createClient()
        await supabase.auth.signOut()
        window.location.href = '/account-deleted'
        return
      }
      if ('scheduled' in res && res.scheduled) {
        const dateStr = res.effective_date
          ? new Date(res.effective_date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })
          : ''
        setResult({ type: 'scheduled', date: dateStr })
        setConfirming(false)
      }
    } catch (err) {
      console.error(err)
      setResult({ type: 'error', message: '退会手続きに失敗しました。しばらくして再度お試しください。' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className={`${styles.subcatCard} ${styles.dangerZone}`}>
      <h3>退会</h3>

      {result?.type === 'scheduled' ? (
        <p>
          退会を受け付けました。契約終了日（{result.date}）にアカウントが削除されます。
          それまではサービスを通常通りご利用いただけます。
        </p>
      ) : (
        <>
          <p>
            退会するとアカウントと学習履歴は完全に削除され、元に戻せません。
            有料会員の方は、契約終了日にあわせて削除されます。
          </p>

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

          {result?.type === 'error' && <small className={styles.muted}>{result.message}</small>}
        </>
      )}
    </section>
  )
}