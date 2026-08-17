'use client'

import { useEffect, useMemo, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import styles from './mypage.module.css'

async function fetchStudyDaysSet(userId: string): Promise<Set<string>> {
  const supabase = createClient()
  const { data, error } = await supabase.rpc('get_study_days', { p_user_id: userId })
  if (error) {
    console.error('[study-calendar] fetchStudyDaysSet error:', error)
    return new Set()
  }
  return new Set((data ?? []).map((r: { study_date: string }) => r.study_date))
}

async function fetchProfileStreak(userId: string): Promise<number> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_profiles')
    .select('streak_days')
    .eq('user_id', userId)
    .maybeSingle()
  if (error) {
    console.error('fetchProfileStreak error:', error)
    return 0
  }
  return data?.streak_days ?? 0
}

type DayCell = { day: number | null; ymd: string | null }

function buildCalendarRows(year: number, monthIndex: number): DayCell[][] {
  const first = new Date(year, monthIndex, 1)
  const firstDow = first.getDay()
  const lastDate = new Date(year, monthIndex + 1, 0).getDate()

  const yStr = String(year)
  const mStr = String(monthIndex + 1).padStart(2, '0')

  const rows: DayCell[][] = []
  let row: DayCell[] = []

  for (let i = 0; i < firstDow; i++) {
    row.push({ day: null, ymd: null })
  }

  for (let day = 1; day <= lastDate; day++) {
    const dow = (firstDow + day - 1) % 7
    const dStr = String(day).padStart(2, '0')
    row.push({ day, ymd: `${yStr}-${mStr}-${dStr}` })

    if (dow === 6 || day === lastDate) {
      rows.push(row)
      row = []
    }
  }

  return rows
}

export default function StudyCalendar({ userId }: { userId: string }) {
  const today = useMemo(() => new Date(), [])
  const [calYear, setCalYear] = useState(today.getFullYear())
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [learnedDaysSet, setLearnedDaysSet] = useState<Set<string>>(new Set())
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const [days, s] = await Promise.all([
        fetchStudyDaysSet(userId),
        fetchProfileStreak(userId),
      ])
      if (cancelled) return
      setLearnedDaysSet(days)
      setStreak(s)
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  function handlePrev() {
    if (calMonth === 0) {
      setCalMonth(11)
      setCalYear((y) => y - 1)
    } else {
      setCalMonth((m) => m - 1)
    }
  }

  function handleNext() {
    if (calMonth === 11) {
      setCalMonth(0)
      setCalYear((y) => y + 1)
    } else {
      setCalMonth((m) => m + 1)
    }
  }

  const rows = useMemo(() => buildCalendarRows(calYear, calMonth), [calYear, calMonth])
  const monthLabel = `${calYear}年${String(calMonth + 1).padStart(2, '0')}月の学習カレンダー`

  return (
    <section className={styles.subcatCard}>
      <div className={styles.studyCalendarWrapper}>
        <div className={styles.studyCalendarHeader}>
          <button type="button" onClick={handlePrev} aria-label="前の月">
            ◀
          </button>
          <h3 className={styles.studyCalendarTitle}>{monthLabel}</h3>
          <button type="button" onClick={handleNext} aria-label="次の月">
            ▶
          </button>
        </div>

        <table className={styles.studyCalendarTable}>
          <thead>
            <tr>
              <th>日</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  cell.day === null ? (
                    <td key={j} className={styles.empty} />
                  ) : (
                    <td
                      key={j}
                      className={
                        cell.ymd && learnedDaysSet.has(cell.ymd) ? styles.learnedDay : undefined
                      }
                    >
                      {cell.day}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.streakInfo}>
        🔥 継続学習日数：<span>{streak}</span>日
      </p>
    </section>
  )
}
