'use client'

import { useEffect, useState } from 'react'
import { isSubscribed } from '@/lib/subscription'
import { fetchReviewCountGlobal, fetchWrongCountGlobal } from '@/lib/dataLoader'
import styles from './mypage.module.css'
import Link from 'next/link'

export default function ReviewMistakesSection({ userId }: { userId: string }) {
  const [reviewCount, setReviewCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const paid = await isSubscribed(userId)
        const [review, wrong] = await Promise.all([
          fetchReviewCountGlobal(userId),
          fetchWrongCountGlobal(userId, paid),
        ])
        if (cancelled) return
        setReviewCount(review)
        setWrongCount(wrong)
      } catch (e) {
        console.error('[mypage] review/wrong summary error', e)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  return (
    <>
      <section className={styles.subcatCard}>
        <h3>復習リスト</h3>
        <p>
          あとで見直したい問題をまとめたリストです。
          <br />
          スキマ時間に、ここから重点的に復習できます。
        </p>
        <div className={styles.actions}>
          <span className={styles.muted}>復習中の問題数：</span>
          <strong>
            <span aria-live="polite">{reviewCount}</span> 問
          </strong>
        </div>

        <Link
          href="/review"
          prefetch={false}
          className={`${styles.btn} ${styles.btnSecondary}`}
        >
          復習リストを開く
        </Link>
      </section>

      <section className={styles.subcatCard}>
        <h3>誤答リスト</h3>
        <p>
          最近間違えた問題だけを集めたリストです。
          <br />
          このリストに残っている問題は、1発で正解するまで削除されません。
        </p>
        <div className={styles.actions}>
          <span className={styles.muted}>不正解の問題数：</span>
          <strong>
            <span aria-live="polite">{wrongCount}</span> 問
          </strong>

          <Link
            href="/mistakes?view=wrong"
            prefetch={false}
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            誤答リストを開く
          </Link>
        </div>
      </section>
    </>
  )
}