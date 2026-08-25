'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { isSubscribed } from '@/lib/subscription'
import { getRandomAnyQuestionId, getOrderedFreeQuestionIds } from '@/lib/dataLoader'
import styles from './mypage.module.css'

const QUESTIONS_BASE = '/contents'

async function countAnsweredAndCorrectLatest(userId: string, paid: boolean) {
  const supabase = createClient()
  let q = supabase
    .from('user_progress')
    .select(`
      question_id, is_correct, updated_at, answered_at,
      questions!inner ( is_paid )
    `)
    .eq('user_id', userId)
    .order('answered_at', { ascending: false, nullsFirst: false })
    .order('updated_at', { ascending: false, nullsFirst: false })
    .order('id', { ascending: false })

  if (!paid) q = q.eq('questions.is_paid', false)

  const { data: rows, error } = await q
  if (error || !rows) return { answered: 0, correct: 0 }

  const seen = new Set<string>()
  let answered = 0
  let correct = 0

  for (const r of rows as { question_id: string; is_correct: boolean }[]) {
    const qid = String(r.question_id)
    if (seen.has(qid)) continue
    seen.add(qid)
    answered += 1
    if (r.is_correct) correct += 1
  }
  return { answered, correct }
}

async function fetchProgressSummaryGlobal(userId: string, paid: boolean) {
  const supabase = createClient()

  async function countTotalQuestions() {
    let q = supabase.from('questions').select('id', { head: true, count: 'exact' })
    if (!paid) q = q.eq('is_paid', false)
    const { count, error } = await q
    if (error) {
      console.error('[fetchProgressSummaryGlobal] total error', error)
      return 0
    }
    return Number(count || 0)
  }

  const [{ answered, correct }, total] = await Promise.all([
    countAnsweredAndCorrectLatest(userId, paid),
    countTotalQuestions(),
  ])

  return { total, answered, correct }
}

export default function PracticeSection({ userId }: { userId: string }) {
  const [summary, setSummary] = useState({ total: 0, answered: 0, correct: 0 })
  const [busy, setBusy] = useState(false)

  const refreshSummary = useCallback(async () => {
    try {
      const nowPaid = await isSubscribed(userId)
      const s = await fetchProgressSummaryGlobal(userId, nowPaid)
      setSummary(s)
    } catch (e) {
      console.error('[mypage] summary error', e)
      setSummary({ total: 0, answered: 0, correct: 0 })
    }
  }, [userId])

  useEffect(() => {
    refreshSummary()
  }, [refreshSummary])

  async function handlePractice() {
    if (busy) return
    setBusy(true)
    try {
      const nowPaid = await isSubscribed(userId)

      if (nowPaid) {
        const qid = await getRandomAnyQuestionId()
        if (!qid) {
          alert('問題が見つかりませんでした。')
          return
        }
        window.location.href = `${QUESTIONS_BASE}/${qid}?mode=all&scope=all`
        return
      }

      const supabase = createClient()
      const ordered = await getOrderedFreeQuestionIds()
      if (!ordered?.length) {
        alert('無料問題が見つかりませんでした。')
        return
      }

      const { data: latestRows, error: lerr2 } = await supabase
        .from('user_latest_free_v2')
        .select('question_id')
        .eq('user_id', userId)
      if (lerr2) {
        console.error(lerr2)
        alert('読み込みに失敗しました。')
        return
      }

      const latestSet = new Set((latestRows ?? []).map((r: { question_id: string }) => String(r.question_id)))
      const allDoneFree = ordered.length > 0 && latestSet.size >= ordered.length
      if (allDoneFree) {
        const go = confirm('無料セットはすべて完了しています。ランダムで再挑戦しますか？')
        if (!go) return
      }

      const candidate = ordered[Math.floor(Math.random() * ordered.length)]
      window.location.href = `${QUESTIONS_BASE}/${candidate}?mode=free&scope=free`
    } catch (e) {
      console.error(e)
      alert('読み込みに失敗しました。')
    } finally {
      setBusy(false)
    }
  }

  const percent = summary.total ? Math.round((summary.correct / summary.total) * 100) : 0

  return (
    <section className={styles.subcatCard}>
      <h3>📚 練習問題</h3>
      <p>全分野から練習問題がランダムで出題されます。</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={handlePractice}
          disabled={busy}
        >
          スタート
        </button>
        <p className={styles.note}>
          無料コース：100問
          <br />
          サブスク登録：1473問
        </p>
      </div>

      <h4>
        全体の学習状況：<span aria-live="polite">{percent}%</span>
        <span aria-live="polite"> （{summary.correct}/{summary.total}問）</span>
      </h4>

      <div
        className={styles.progressBar}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`学習進捗 ${percent}%`}
        aria-label="学習進捗"
      >
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </section>
  )
}