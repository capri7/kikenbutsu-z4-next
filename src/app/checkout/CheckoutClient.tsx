'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

export default function CheckoutClient() {
  const [agreed, setAgreed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  async function handleStartCheckout() {
    // ボタンは未同意の間disabledのため、この関数が呼ばれる時点でagreedは常にtrueである
    trackEvent('checkout_cta_click')

    setCheckoutError(null)
    setSubmitting(true)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          priceId: PRICE_ID,
          user_id: user?.id ?? null,
          email: user?.email ?? null,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/checkout?canceled=1`,
        },
      })

      if (error) throw error
      if (!data?.url) throw new Error('Checkoutの開始に失敗しました')

      // Stripeの決済画面へ実際に遷移する直前を記録する
      trackEvent('checkout_redirect_to_stripe')
      window.location.href = data.url
    } catch (e) {
      // Supabase/Stripe側で技術的に失敗したケースを記録する（原因調査に重要）
      trackEvent('checkout_session_error', { message: String(e) })
      setCheckoutError(`エラー: ${String(e)}`)
      setSubmitting(false)
    }
  }

  return (
    <main className="site-main page-checkout">
      <div className="auth-card">
        <img src="/images/logo.svg" alt="危険物乙4対策サイトロゴ" className="auth-logo" />

        <h2 className="hero-title">乙4合格マスターコース</h2>
        <p className="plan-info">1280円／月（税込）</p>

        <ul className="checkout-benefits">
          <li>本試験のどんな出題にも対応できる実力がつく</li>
          <li>苦手分野だけを繰り返し復習できるから、最短ルートで合格レベルに到達</li>
          <li>学習の進み具合が見える化されるから、迷わず勉強を続けられる</li>
          <li>気に入らなければいつでも解約、リスクなく始められる</li>
        </ul>

        <div className="consent-row">
          <label>
            <input
              id="agree"
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                const checked = e.target.checked
                setAgreed(checked)
                if (checked) {
                  // 最初に同意チェックが入った時点を記録する（フォーム操作の開始に相当）
                  trackEvent('checkout_consent_checked')
                }
              }}
            />
            <span>
              <a href="/terms" target="_blank" rel="noopener">
                利用規約
              </a>{' '}
              と{' '}
              <a href="/privacy" target="_blank" rel="noopener">
                プライバシーポリシー
              </a>{' '}
              に同意します。
            </span>
          </label>
        </div>

        <p className="consent-hint">チェックを入れると「お申し込みへ進む」ボタンが有効になります。</p>

        <button
          type="button"
          className="btn btn-primary"
          disabled={!agreed || submitting}
          onClick={handleStartCheckout}
        >
          {submitting ? '処理中…' : 'お申し込みへ進む'}
        </button>

        {checkoutError && (
          <p role="alert" aria-live="polite" style={{ color: '#b91c1c', marginTop: 8, fontSize: '.9rem' }}>
            {checkoutError}
          </p>
        )}
      </div>
    </main>

  )
}