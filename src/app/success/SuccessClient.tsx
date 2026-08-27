'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './success.module.css'

type Result =
  | { state: 'loading' }
  | { state: 'error'; message: string }
  | { state: 'done'; email: string | null; loggedIn: boolean }

export default function SuccessClient() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [result, setResult] = useState<Result>({ state: 'loading' })

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (!sessionId) {
        setResult({ state: 'error', message: 'セッション情報が見つかりません。' })
        return
      }

      try {
        const supabase = createClient()

        const [{ data, error }, { data: userData }] = await Promise.all([
          supabase.functions.invoke('checkout-session-info', {
            body: { session_id: sessionId },
          }),
          supabase.auth.getUser(),
        ])

        if (cancelled) return

        if (error) throw error
        if (data?.payment_status !== 'paid' && data?.status !== 'complete') {
          setResult({ state: 'error', message: 'お支払いの確認ができませんでした。' })
          return
        }

        setResult({
          state: 'done',
          email: data?.email ?? null,
          loggedIn: Boolean(userData?.user),
        })
      } catch (e) {
        if (!cancelled) {
          setResult({ state: 'error', message: `確認中にエラーが発生しました：${String(e)}` })
        }
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [sessionId])

  if (result.state === 'loading') {
    return (
      <div className="site-main">
        <div className={styles.container}>
          <p className={styles.message}>お支払い内容を確認しています…</p>
        </div>
      </div>
    )
  }

  if (result.state === 'error') {
    return (
      <div className="site-main">
        <div className={styles.container}>
          <h2 className={styles.title}>確認できませんでした</h2>
          <p className={styles.message}>
            {result.message}
            <br />
            お手数ですが、マイページからご契約状況をご確認いただくか、サポートまでお問い合わせください。
          </p>
          <a href="/mypage" className={styles.link}>
            マイページへ
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="site-main">
      <div className={styles.container}>
        <div className={styles.icon} aria-hidden="true">
          ✓
        </div>
        <h2 className={styles.title}>お申し込みが完了しました</h2>
        <p className={styles.message}>
          ご登録ありがとうございます。
          {result.email && (
            <>
              <br />
              決済に使用されたメールアドレス：{result.email}
            </>
          )}
        </p>

        {result.loggedIn ? (
          <a href="/mypage" className={styles.link}>
            マイページへ進む
          </a>
        ) : (
          <>
            <p className={styles.message}>
              ご利用を開始するには、決済時と同じメールアドレスでアカウントを作成（またはログイン）してください。
            </p>
            <a href="/signup" className={styles.link}>
              アカウントを作成する
            </a>
          </>
        )}
      </div>
    </div>
  )
}