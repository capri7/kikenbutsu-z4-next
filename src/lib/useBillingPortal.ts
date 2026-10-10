import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getBillingPortalUrl } from '@/lib/billing'
import { NotLoggedInError } from '@/lib/authErrors'

// 「請求情報」を押したときの画面の移り方をまとめる（マイページの請求情報のカードと、ヘッダーで使う）。
// - Stripe の請求の画面を開く
// - 顧客 ID がなければ、購入の画面へ移る
// - ログインが切れていたら、ログインの画面へ移る
// 移ると決まったら、表示が切り替わるまで busy を true のままにする（2回押しを防ぐ）
export function useBillingPortal() {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  async function open() {
    if (busy) return
    setBusy(true)
    let navigating = false
    try {
      const result = await getBillingPortalUrl('/mypage')
      navigating = true
      if (result.kind === 'no_customer') {
        router.push('/checkout')
      } else {
        window.location.href = result.url // Stripe（外のサイト）
      }
    } catch (err) {
      if (err instanceof NotLoggedInError) {
        navigating = true
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- ログインが切れているので、ページ全体を読み込み直して、画面に残った会員の情報も消す
        window.location.href = '/login'
        return
      }
      console.error(err)
      alert('請求ポータルを開けませんでした。しばらくして再度お試しください。')
    } finally {
      if (!navigating) setBusy(false)
    }
  }

  return { open, busy }
}
