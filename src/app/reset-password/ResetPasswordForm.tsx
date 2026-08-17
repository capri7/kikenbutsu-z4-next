
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './reset-password.module.css'

function translateAuthError(err: { code?: string; message?: string } | null): string {
  const code = (err?.code || '').toLowerCase()
  const msg = err?.message || ''

  if (code === 'same_password') {
    return '新しいパスワードは以前のパスワードと異なる必要があります。'
  }
  if (/new password should be different/i.test(msg)) {
    return '新しいパスワードは以前のパスワードと異なる必要があります。'
  }
  if (/password (should be|must be).+6/i.test(msg)) {
    return 'パスワードは6文字以上で入力してください。'
  }
  if (/(expired|invalid).*(session|token)/i.test(msg)) {
    return 'リンクの有効期限が切れているか無効です。メールのリンクからもう一度お試しください。'
  }

  return `更新に失敗しました：${msg || '不明なエラー'}`
}

export default function ResetPasswordForm() {
  const router = useRouter()
  const supabase = createClient()

  const [pw1, setPw1] = useState('')
  const [pw2, setPw2] = useState('')
  const [busy, setBusy] = useState(false)
  const [formEnabled, setFormEnabled] = useState(false)
  const [linkWarning, setLinkWarning] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState<'ok' | 'error'>('ok')

  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const checkTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let cancelled = false

    async function adoptSessionFromHashIfNeeded() {
      const hash = (window.location.hash || '').replace(/^#/, '')
      if (!hash) return
      const sp = new URLSearchParams(hash)
      const at = sp.get('access_token')
      const rt = sp.get('refresh_token')
      if (at && rt) {
        try {
          await supabase.auth.setSession({ access_token: at, refresh_token: rt })
        } catch {
          // noop
        }
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search)
      }
    }

    async function hasRecoverySession(): Promise<boolean> {
      const { data } = await supabase.auth.getSession()
      if (data?.session) return true

      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      if (code && typeof supabase.auth.exchangeCodeForSession === 'function') {
        try {
          await supabase.auth.exchangeCodeForSession(code)
          const after = await supabase.auth.getSession()
          return !!after.data?.session
        } catch {
          // noop
        }
      }
      return false
    }

    async function init() {
      setFormEnabled(false)
      setLinkWarning(false)
      setFeedback('リンクを確認しています…')
      setFeedbackType('ok')

      await adoptSessionFromHashIfNeeded()
      if (cancelled) return

      const ok = await hasRecoverySession()
      if (cancelled) return

      if (ok) {
        setFormEnabled(true)
        setLinkWarning(false)
        setFeedback('')
      } else {
        checkTimer.current = setTimeout(async () => {
          const again = await supabase.auth.getSession()
          const ready = !!again.data?.session
          setFormEnabled(ready)
          setLinkWarning(!ready)
          setFeedback('')
        }, 400)
      }
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setFormEnabled(true)
        setLinkWarning(false)
        setFeedback('')
      }
    })

    init()

    return () => {
      cancelled = true
      authListener.subscription.unsubscribe()
      if (redirectTimer.current) clearTimeout(redirectTimer.current)
      if (checkTimer.current) clearTimeout(checkTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function passwordsValid(): boolean {
    if (pw1.length < 6) {
      setFeedback('パスワードは6文字以上で入力してください。')
      setFeedbackType('error')
      return false
    }
    if (pw1 !== pw2) {
      setFeedback('確認用のパスワードが一致しません。')
      setFeedbackType('error')
      return false
    }
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeedback('')

    if (!passwordsValid()) return

    setBusy(true)
    try {
      const { error } = await supabase.auth.updateUser({ password: pw1 })
      if (error) {
        const code = (error.code || '').toLowerCase()
        const m = error.message || ''
        if (code === 'session_not_found' || /expired|invalid|session|token/i.test(m)) {
          setLinkWarning(true)
          setFeedback('リンクの有効期限が切れているか無効です。メールのリンクからもう一度お試しください。')
          setFeedbackType('error')
        } else {
          setFeedback(translateAuthError(error))
          setFeedbackType('error')
        }
        return
      }

      setPw1('')
      setPw2('')
      setFeedback('パスワードを更新しました。ログイン画面からサインインしてください。')
      setFeedbackType('ok')
      redirectTimer.current = setTimeout(() => {
        router.push('/login')
      }, 1500)
    } catch (err) {
      setFeedback(`更新に失敗しました：${String(err)}`)
      setFeedbackType('error')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-card">
      <h2 className={styles.heading}>新しいパスワードを設定</h2>
      <p className={styles.secureNote}>
        <span className={styles.secureIcon}>🔒</span>
        <span>安全に送信されます</span>
      </p>

      {linkWarning && (
        <p id="link-warning" className={`${styles.feedback} ${styles.feedbackError}`} role="alert">
          リンクが無効、または有効期限切れの可能性があります。メールからもう一度お試しください。
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate aria-busy={busy}>
        <label htmlFor="new-password" className="sr-only">
          新しいパスワード
        </label>
        <input
          type="password"
          id="new-password"
          placeholder="新しいパスワード（6文字以上）"
          autoComplete="new-password"
          minLength={6}
          required
          aria-describedby="reset-feedback"
          value={pw1}
          onChange={(e) => setPw1(e.target.value)}
          disabled={!formEnabled || busy}
        />

        <label htmlFor="new-password-confirm" className="sr-only">
          新しいパスワード（確認）
        </label>
        <input
          type="password"
          id="new-password-confirm"
          placeholder="確認のためもう一度入力"
          autoComplete="new-password"
          minLength={6}
          required
          aria-describedby="reset-feedback"
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
          disabled={!formEnabled || busy}
        />

        <button id="reset-submit" type="submit" disabled={!formEnabled || busy}>
          更新する
        </button>
        <p
          id="reset-feedback"
          className={`${styles.feedback} ${feedbackType === 'error' ? styles.feedbackError : styles.feedbackOk}`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </form>

      <p className="small-link">
        設定後は <a href="/login">ログイン</a> へお進みください
      </p>
    </div>
  )
}