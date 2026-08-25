'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import styles from './login.module.css'

type FeedbackType = 'ok' | 'error'

function mapAuthError(err: { code?: string; message?: string; status?: number } | null, { forReset = false } = {}): string {
  const code = String(err?.code || '').toLowerCase()
  const msg = String(err?.message || '').toLowerCase()
  const status = Number(err?.status || 0)

  if (!forReset && (code === 'invalid_credentials' || /invalid login|email|password/.test(msg))) {
    return 'メールアドレスまたはパスワードが正しくありません。'
  }
  if (code === 'email_not_confirmed' || /not confirmed|email not confirmed/.test(msg)) {
    return 'メール確認が未完了です。受信メールのリンクから有効化してください。'
  }
  if (forReset && (status === 429 || code === 'over_email_send_rate_limit' || /rate|too many|throttle/.test(msg))) {
    return 'メール送信が混み合っています。1〜2分後にもう一度お試しください。'
  }
  if (forReset && /redirect|not allowed|url not permitted|url not allowed/.test(msg)) {
    return 'リダイレクトURLが許可されていません。管理画面のURL設定を確認してください。'
  }
  if (/network|fetch|failed to fetch|timeout/.test(msg)) {
    return 'ネットワークエラーが発生しました。接続を確認して再度お試しください。'
  }
  return `処理に失敗しました：${err?.message ?? '不明なエラー'}`
}

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [busy, setBusy] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('ok')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeedback('')

    const trimmedEmail = email.trim().toLowerCase()

    if (!trimmedEmail) {
      setFeedback('メールアドレスを入力してください。')
      setFeedbackType('error')
      return
    }
    if (!password) {
      setFeedback('パスワードを入力してください。')
      setFeedbackType('error')
      return
    }

    setBusy(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password,
      })

      if (error) {
        setFeedback(mapAuthError(error))
        setFeedbackType('error')
        setPassword('')
        return
      }

      router.push('/mypage')
    } catch (err) {
      setFeedback(`ログインに失敗しました：${String(err)}`)
      setFeedbackType('error')
    } finally {
      setBusy(false)
    }
  }

  async function handleReset() {
    setFeedback('')

    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedEmail) {
      setFeedback('まずメールアドレスを入力してください。')
      setFeedbackType('error')
      return
    }

    setBusy(true)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(trimmedEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) {
        setFeedback(mapAuthError(error, { forReset: true }))
        setFeedbackType('error')
        return
      }

      setFeedback(
        'パスワード再設定用のメールを送信しました。届かない場合は迷惑メールもご確認ください。（登録のないアドレスには届かない仕様です）'
      )
      setFeedbackType('ok')
    } catch (err) {
      setFeedback(`再設定メールの送信に失敗しました：${String(err)}`)
      setFeedbackType('error')
    } finally {
      setBusy(false)
    }
  }

  return (
   <main className="site-main">
    <div className="auth-card">
      <h2 className={styles.heading}>ログイン</h2>

      <div className={styles.secureInfo}>
        <span className={styles.secureIcon}>🔒</span>
        <span>安全に送信されます</span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email" className="sr-only">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          inputMode="email"
          placeholder="メールアドレス"
          autoComplete="email"
          aria-describedby="login-feedback"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={busy}
        />

        <div className="input-wrapper">
          <label htmlFor="password" className="sr-only">
            パスワード
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="パスワード"
            autoComplete="current-password"
            aria-describedby="login-feedback"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={busy}
          />
          <button
            type="button"
            className="toggle-password"
            aria-label="パスワード表示切替"
            aria-pressed={showPassword}
            onClick={() => setShowPassword((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        <button type="submit" disabled={busy}>
          ログイン
        </button>

        <p
          id="login-feedback"
          className={`${styles.feedback} ${feedback ? (feedbackType === 'error' ? styles.feedbackError : styles.feedbackOk) : ''}`}
          role="status"
          aria-live="polite"
        >
        {feedback}
        </p>

        <button
         type="button"
         className={styles.ghostBtn}
         onClick={handleReset}
         disabled={busy}
        >
        パスワード再設定メールを送る
        </button>
      </form>

      <p>
        メールアドレスを登録すると、解いた問題の記録が保存され、
        進捗・復習リスト・誤答リストをいつでも確認できます。
      </p>

      <p>
        初めての方は <Link href="/signup">新規登録</Link>
      </p>
    </div>
  </main>
  )
}