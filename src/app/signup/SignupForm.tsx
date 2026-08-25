'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import styles from './signup.module.css'

type FeedbackType = 'ok' | 'error'

function normalizeEmail(v: string): string {
  return (v || '').trim().toLowerCase()
}

export default function SignupForm() {
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('ok')
  const [alreadyExists, setAlreadyExists] = useState(false)
  const [inputsDisabled, setInputsDisabled] = useState(false)

  const feedbackRef = useRef<HTMLDivElement>(null)
  const sendResetRef = useRef<HTMLButtonElement>(null)
  const submittingRef = useRef(false)

  useEffect(() => {
    if (feedback) {
      feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      feedbackRef.current?.focus({ preventScroll: true })
    }
  }, [feedback])

  useEffect(() => {
    if (alreadyExists) {
      sendResetRef.current?.focus()
    }
  }, [alreadyExists])

  const ABS = (path: string) => `${window.location.origin}${path}`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true

    setAlreadyExists(false)
    setFeedback('')

    const trimmedEmail = normalizeEmail(email)

    if (!trimmedEmail) {
      setFeedback('メールアドレスを入力してください。')
      setFeedbackType('error')
      submittingRef.current = false
      return
    }
    if (password.length < 6) {
      setFeedback('パスワードは6文字以上で入力してください。')
      setFeedbackType('error')
      submittingRef.current = false
      return
    }

    let signupSucceeded = false

    setBusy(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: { emailRedirectTo: ABS('/login') },
      })

      const identities = data?.user?.identities ?? null
      if (!error && identities && identities.length === 0) {
        setFeedback('このメールアドレスはすでに登録されています。')
        setFeedbackType('error')
        setAlreadyExists(true)
        return
      }

      if (error) {
        const raw = (error.message || '').toLowerCase()
        const code = (error.code || '').toLowerCase()

        const already =
          code === 'user_already_exists' ||
          raw.includes('already registered') ||
          raw.includes('already exists') ||
          raw.includes('user exists') ||
          raw.includes('email address is already registered')

        const rate = code === 'over_email_send_rate_limit' || raw.includes('rate limit')

        const smtpFail = raw.includes('error sending confirmation email') || raw.includes('smtp')

        if (already) {
          setFeedback('このメールアドレスはすでに登録されています。')
          setFeedbackType('error')
          setAlreadyExists(true)
          return
        }
        if (rate) {
          setFeedback('メール送信が混み合っています。しばらくしてから再度お試しください。')
          setFeedbackType('error')
          return
        }
        if (smtpFail) {
          setFeedback('確認メールの送信でエラーが発生しました。数分後に再度お試しください。')
          setFeedbackType('error')
          return
        }

        setFeedback(`登録に失敗しました：${error.message}`)
        setFeedbackType('error')
        return
      }

      signupSucceeded = true

      try {
        await supabase.functions.invoke('check-guest-subscription', {
          body: { email: trimmedEmail, user_id: data.user!.id },
        })
      } catch (e) {
        console.error('[guest-subscription-check] failed', e)
        // ここで失敗しても、サインアップ自体は成功として続行する
      }

      window.location.href = '/mypage'


    } catch (err) {
      setFeedback(`登録に失敗しました：${String(err)}`)
      setFeedbackType('error')
    } finally {
      setBusy(false)

      if (signupSucceeded) {
        setInputsDisabled(true)
      } else {
        setInputsDisabled(false)
      }

      submittingRef.current = false
    }
  }

  async function handleSendReset() {
    const trimmedEmail = normalizeEmail(email)
    if (!trimmedEmail) {
      setFeedback('メールアドレスを入力してください。')
      setFeedbackType('error')
      return
    }

    setBusy(true)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(trimmedEmail, {
        redirectTo: ABS('/reset-password'),
      })
      if (error) {
        const raw = error.message || ''
        const code = (error.code || '').toLowerCase()
        const m = raw.match(/(?:after|once every)\s+(\d+)\s*seconds?/i)

        if (code === 'over_email_send_rate_limit' || m) {
          setFeedback(`セキュリティ保護のため、あと ${m ? m[1] : 60} 秒後にもう一度お試しください。`)
          setFeedbackType('error')
        } else {
          setFeedback('再設定メールの送信に失敗しました。時間をおいてもう一度お試しください。')
          setFeedbackType('error')
        }
        return
      }
      setFeedback('パスワード再設定用のメールを送信しました。受信メールのリンクから続行してください。')
      setFeedbackType('ok')
    } catch {
      setFeedback('再設定メールの送信に失敗しました。時間をおいてもう一度お試しください。')
      setFeedbackType('error')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-card">
      <h2 className={styles.heading}>新規登録</h2>
      <p className={styles.secureInfo}>
        <span className={styles.secureIcon}>🔒</span>
        安全に送信されます
      </p>

      <p className={styles.registerBenefit}>
        メールアドレスを登録すると、解いた問題の記録が保存され、
        進捗・復習リスト・誤答リストをいつでも確認できます。
      </p>

      <form onSubmit={handleSubmit} className="auth-form" noValidate aria-busy={busy}>
        <div
          ref={feedbackRef}
          id="signup-feedback"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className={`${styles.feedback} ${feedback ? (feedbackType === 'error' ? styles.feedbackError : styles.feedbackOk) : ''}`}
        >
          {feedback}
        </div>

        <label htmlFor="email" className="sr-only">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          aria-describedby="signup-feedback"
          placeholder="メールアドレス"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={busy || inputsDisabled}
        />

        <label htmlFor="password" className="sr-only">
          パスワード
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          aria-describedby="signup-feedback"
          placeholder="新しいパスワードを作成（6文字以上）"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={busy || inputsDisabled}
        />

        <button id="signup-submit" type="submit" disabled={busy || inputsDisabled}>
          登録する
        </button>

        {alreadyExists && (
          <div id="already-exists" className={styles.alreadyExists}>
            <button
              ref={sendResetRef}
              id="send-reset"
              type="button"
              className={styles.sendReset}
              onClick={handleSendReset}
              disabled={busy}
            >
              パスワード再設定メールを送る
            </button>
          </div>
        )}
      </form>

      <p className="small-link">
        すでにアカウントをお持ちの方は <Link href="/login">ログイン</Link>
      </p>
    </div>
  )
}