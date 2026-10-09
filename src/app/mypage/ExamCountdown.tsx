'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import styles from './mypage.module.css'
import { formatDisplay, jstTodayYMD, msUntilNextJSTMidnight } from '@/lib/examCountdown'

export default function ExamCountdown() {
  const [examDate, setExamDate] = useState<string | null>(null)
  const [display, setDisplay] = useState('受験日を設定してください')
  const [busy, setBusy] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const midnightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dailyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchExamDate = useCallback(async (): Promise<string | null> => {
    const supabase = createClient()
    const { data, error } = await supabase.from('exam_dates').select('exam_date').maybeSingle()
    if (error) {
      console.error('[exam-date fetch]', error)
      return null
    }
    return data?.exam_date ?? null
  }, [])

  const saveExamDate = useCallback(async (ymd: string | null) => {
    const supabase = createClient()
    const { error } = await supabase.rpc('set_exam_date', { p_exam_date: ymd })
    if (error) throw error
  }, [])

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