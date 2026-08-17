'use client'

import { useEffect, useState } from 'react'
import { isSubscribed } from '@/lib/subscription'
import styles from './mypage.module.css'

export default function PaidUpsellSection({ userId }: { userId: string }) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function checkSubscription() {
      try {
        const paid = await isSubscribed(userId)
        if (!cancelled) {
          setShouldShow(!paid)
        }
      } catch (e) {
        console.error('[mypage] paid-upsell subscription check error', e)
        if (!cancelled) {
          setShouldShow(false)
        }
      }
    }

    checkSubscription()

    return () => {
      cancelled = true
    }
  }, [userId])

  if (!shouldShow) return null

  return (
    <section className={styles.paidUpsell}>
      <h3>🔓 残り1,472問で苦手を完全制覇</h3>
      <p>苦手な節だけ繰り返せる1,453問が解放されます。誤答リスト・復習リストをフル活用して、本番までに弱点をゼロにしましょう。</p>
      <a className={`${styles.btn} ${styles.btnSecondary}`} href="/checkout">
        今すぐ全問解放する（¥1,280/月）
      </a>
    </section>
  )
}