'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import styles from './mypage.module.css'

function jstTodayYMD(): string {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now).reduce((o: Record<string, string>, p) => {
    o[p.type] = p.value
    return o
  }, {})
  return `${parts.year}-${parts.month}-${parts.day}`
}

function daysLeftJST(ymd: string | null): number | null {
  if (!ymd) return null
  const [y, m, d] = ymd.split('-').map(Number)
  const examUTC = Date.UTC(y, m - 1, d)
  const [ty, tm, td] = jstTodayYMD().split('-').map(Number)
  const todayUTC = Date.UTC(ty, tm - 1, td)
  return Math.round((examUTC - todayUTC) / 86400000)
}

function msUntilNextJSTMidnight(): number {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(now).reduce((o: Record<string, string>, p) => {
    o[p.type] = p.value
    return o
  }, {})
  const cur = new Date(
    `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+09:00`
  )
  const next = new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00+09:00`)
  next.setDate(next.getDate() + 1)
  return next.getTime() - cur.getTime()
}

function formatDisplay(ymd: string | null): string {
  const left = daysLeftJST(ymd)
  if (left === null) return '受験日を設定してください'
  if (left > 0) return `本番まで残り ${left}日`
  if (left === 0) return '今日が試験日！'
  return `試験日から ${Math.abs(left)}日経過`
}

export default function ExamCountdown({ userId }: { userId: string }) {
  const [examDate, setExamDate] = useState<string | null>(null)
  const [display, setDisplay] = useState('受験日を設定してください')
  const [busy, setBusy] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const midnightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dailyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchExamDate = useCallback(async (): Promise<string | null> => {
    const supabase = createClient()
    try {
      const { data, error } = await supabase.from('exam_dates').select('exam_date').maybeSingle()
      if (!error) return data?.exam_date ?? null
    } catch {
      // フォールバックへ
    }
    try {
      const { data } = await supabase.rpc('get_exam_date')
      if (Array.isArray(data)) return data[0]?.exam_date ?? null
      return data?.exam_date ?? null
    } catch {
      return null
    }
  }, [])

  const saveExamDate = useCallback(async (ymd: string | null) => {
    const supabase = createClient()
    try {
      const { error } = await supabase.rpc('set_exam_date', { p_exam_date: ymd })
      if (!error) return
    } catch {
      // フォールバックへ
    }
    await supabase.from('exam_dates').upsert({ user_id: userId, exam_date: ymd })
  }, [userId])

  // 初期ロード
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const current = await fetchExamDate()
      if (cancelled) return
      setExamDate(current)
      setDisplay(formatDisplay(current))
      setLoaded(true)
    })()
    return () => {
      cancelled = true
    }
  }, [fetchExamDate])

  // JST深夜0時に表示を自動更新
  useEffect(() => {
    if (!loaded) return

    midnightTimerRef.current = setTimeout(() => {
      setExamDate((cur) => {
        setDisplay(formatDisplay(cur))
        return cur
      })
      dailyIntervalRef.current = setInterval(() => {
        setExamDate((cur) => {
          setDisplay(formatDisplay(cur))
          return cur
        })
      }, 24 * 60 * 60 * 1000)
    }, msUntilNextJSTMidnight())

    return () => {
      if (midnightTimerRef.current) clearTimeout(midnightTimerRef.current)
      if (dailyIntervalRef.current) clearInterval(dailyIntervalRef.current)
    }
  }, [loaded])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    try {
      await saveExamDate(examDate)
      setDisplay(formatDisplay(examDate))
    } catch (err) {
      console.error('[exam-date save]', err)
      alert('保存に失敗しました。時間をおいて再度お試しください。')
    } finally {
      setBusy(false)
    }
  }

  async function handleClear() {
    setBusy(true)
    try {
      await saveExamDate(null)
      setExamDate(null)
      setDisplay(formatDisplay(null))
    } catch (err) {
      console.error('[exam-date clear]', err)
      alert('クリアに失敗しました。')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className={styles.subcatCard} id="exam-countdown">
      <h3>📅 カウントダウン</h3>
      <p>※ 全国で日程が異なるため、ご自身の受験日を設定してください。</p>

      <div className={styles.countdownDisplay} aria-live="polite">
        {display}
      </div>

      <form className={styles.examDateForm} onSubmit={handleSubmit}>
        <input
          type="date"
          className={styles.examDateInput}
          min={jstTodayYMD()}
          value={examDate ?? ''}
          onChange={(e) => setExamDate(e.target.value || null)}
          required
          disabled={busy}
        />
        <button type="submit" className={styles.examDateSave} disabled={busy}>
          保存
        </button>
        <button type="button" className={styles.examDateClear} onClick={handleClear} disabled={busy}>
          クリア
        </button>
      </form>
    </section>
  )
}