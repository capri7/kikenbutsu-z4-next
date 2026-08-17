'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { openBillingPortal } from '@/lib/billing'

const ACTIVE_STATUSES = ['active', 'trialing', 'past_due']

export default function SiteHeader() {
  const supabase = createClient()

  const [navOpen, setNavOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [showCheckout, setShowCheckout] = useState(true)
  const [showCancel, setShowCancel] = useState(false)
  const [portalBusy, setPortalBusy] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // nav.js: ログイン状態・サブスク状態によるリンク出し分け
  useEffect(() => {
    let cancelled = false

    async function updateNavState() {
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession()

        if (sessionError || !session) {
          if (cancelled) return
          setLoggedIn(false)
          setShowCheckout(true)
          setShowCancel(false)
          return
        }

        if (cancelled) return
        setLoggedIn(true)

        const ACTIVE = ACTIVE_STATUSES
        let active = false
        let sub = null
        let subError = null

        let res = await supabase
          .from('subscriptions')
          .select('status, updated_at, created_at')
          .eq('user_id', session.user.id)
          .order('updated_at', { ascending: false })
          .limit(1)
          .maybeSingle()

        sub = res.data
        subError = res.error

        if (subError && /updated_at/i.test(subError.message || '')) {
          res = await supabase
            .from('subscriptions')
            .select('status, created_at')
            .eq('user_id', session.user.id)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle()
          sub = res.data
          subError = res.error
        }

        if (!subError && sub) {
          active = ACTIVE.includes(String(sub.status || '').toLowerCase())
        } else {
          const { data: prof } = await supabase
            .from('user_profiles')
            .select('subscription_status')
            .eq('user_id', session.user.id)
            .maybeSingle()
          active = ACTIVE.includes(String(prof?.subscription_status || '').toLowerCase())
        }

        if (cancelled) return
        setShowCheckout(!active)
        setShowCancel(active)
      } catch (e) {
        console.error('ナビ状態更新で例外:', e)
        if (cancelled) return
        setShowCheckout(true)
        setShowCancel(false)
      }
    }

    updateNavState()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      updateNavState()
    })

    return () => {
      cancelled = true
      subscription.unsubscribe()
    }
  }, [supabase])


  // nav-toggle.js: ハンバーガーメニュー開閉
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setNavOpen(false)

    if (mq.addEventListener) {
      mq.addEventListener('change', sync)
    } else {
      mq.addListener(sync)
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', sync)
      } else {
        mq.removeListener(sync)
      }
    }
  }, [])

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && navOpen) {
        setNavOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [navOpen])

  function handleNavLinkClick() {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (!isDesktop) setNavOpen(false)
  }

  // billing.ts: Stripeカスタマーポータルを開く
  async function handleOpenBillingPortal(e: React.MouseEvent) {
    e.preventDefault()
    if (portalBusy) return
    setPortalBusy(true)
    try {
      await openBillingPortal()
    } catch (err) {
      console.error(err)
      alert('請求ポータルを開けませんでした。しばらくして再度お試しください。')
    } finally {
      setPortalBusy(false)
    }
  }

  async function handleLogout(e: React.MouseEvent) {
    e.preventDefault()
    if (loggingOut) return
    setLoggingOut(true)
    document.body.setAttribute('aria-busy', 'true')

    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        alert('ログアウトに失敗しました: ' + error.message)
      } else {
        window.location.href = '/login'
      }
    } finally {
      document.body.removeAttribute('aria-busy')
      setLoggingOut(false)
    }
  }

  return (
    <header className={`site-header${navOpen ? ' nav-open' : ''}`}>
      <div className="header-container">
        <Link href="/">
          <img src="/images/logo.svg" alt="危険物乙4試験対策サイト" className="logo" />
        </Link>
        <h1 className="site-title">乙種4類危険物取扱者試験対策</h1>
        <button
          ref={hamburgerRef}
          className="hamburger"
          aria-label={navOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={navOpen}
          aria-controls="site-nav"
          type="button"
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className="nav-links" id="site-nav" aria-label="メインメニュー">
        <Link href="/" onClick={handleNavLinkClick}>
          トップ
        </Link>
        <Link href="/basics" onClick={handleNavLinkClick}>
          基礎知識
        </Link>
        <Link href="/contents" onClick={handleNavLinkClick}>
          学習ガイド
        </Link>
        {loggedIn ? (
          <Link href="/mypage" onClick={handleNavLinkClick}>
            マイページ
          </Link>
        ) : (
          <Link href="/login" onClick={handleNavLinkClick}>
            ログイン
          </Link>
        )}
        {showCheckout && (
          <Link href="/checkout" id="link-checkout" className="nav-link" onClick={handleNavLinkClick}>
            購入
          </Link>
        )}
        {showCancel && (
          <a
            href="#"
            id="link-cancel"
            className="nav-link logout"
            onClick={(e) => {
              handleOpenBillingPortal(e)
              handleNavLinkClick()
            }}
          >
            請求情報
          </a>
        )}
        {loggedIn && (
          <a href="#" id="logout-link" className="nav-link logout" onClick={handleLogout}>
            ログアウト
          </a>
        )}
      </nav>
    </header>
  )
}

