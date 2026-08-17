'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import { isSubscribed } from '@/lib/subscription'
import {
  buildSubcategoryMap,
  fetchUserProgress,
  fetchQuestionIdsByCategory,
  areAllCorrect,
  pickOnePreferNotCorrect,
  type ChapterMap,
  type CategoryData,
} from '@/lib/dataLoader'

import styles from './mypage.module.css'

const QUESTIONS_BASE = '/contents'

function useCategoryColors() {
  return useMemo(() => {
    if (typeof window === 'undefined') return { get: () => '#ccc' }
    const css = getComputedStyle(document.documentElement)
    const raw: Record<string, string> = {
      '危険物に関する法令': css.getPropertyValue('--color-law').trim(),
      '物理と化学': css.getPropertyValue('--color-physics').trim(),
      '性質と火災予防': css.getPropertyValue('--color-safety').trim(),
    }
    const norm = (s: string) => s.replace(/\s+/g, '').toLowerCase()
    return {
      get: (name: string): string => {
        if (raw[name]) return raw[name]
        const key = Object.keys(raw).find((k) => norm(k) === norm(name))
        return key ? raw[key] : '#ccc'
      },
    }
  }, [])
}

export default function CategoryProgress({ userId }: { userId: string }) {
  const [view, setView] = useState<'graph' | 'list'>('graph')
  const [chapterMap, setChapterMap] = useState<ChapterMap>({})
  const [categoryData, setCategoryData] = useState<CategoryData>({})
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart | null>(null)
  const colors = useCategoryColors()

  const categoryNameToId = useMemo(() => {
    const m: Record<string, string> = {}
    for (const info of Object.values(chapterMap)) {
      if (info.categoryName && info.categoryId && m[info.categoryName] == null) {
        m[info.categoryName] = info.categoryId
      }
    }
    return m
  }, [chapterMap])

  // 初期ロード
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const map = await buildSubcategoryMap()
      const paid = await isSubscribed(userId)
      const data = await fetchUserProgress(userId, paid, map)
      if (cancelled) return
      setChapterMap(map)
      setCategoryData(data)
      setLoaded(true)
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  const handleCategoryClick = useCallback(
    async (label: string) => {
      const categoryId = categoryNameToId[label]
      if (!categoryId) return

      const nowPaid = await isSubscribed(userId)
      const targetIds = await fetchQuestionIdsByCategory(categoryId, nowPaid, chapterMap)
      if (!targetIds.length) {
        alert('この分野の問題が見つかりませんでした。')
        return
      }

      if (await areAllCorrect(userId, targetIds)) {
        const go = confirm(`${label} はすべて完了しています。ランダムで再挑戦しますか？`)
        if (!go) return
      }

      const qid = await pickOnePreferNotCorrect(userId, targetIds)
      const qs = new URLSearchParams()
      qs.set('mode', nowPaid ? 'all' : 'free')
      qs.set('scope', 'cat')
      qs.set('cid', String(categoryId))
      window.location.href = `${QUESTIONS_BASE}/${qid}?${qs.toString()}`
    },
    [categoryNameToId, chapterMap, userId]
  )

  // グラフ描画
  useEffect(() => {
    if (view !== 'graph' || !loaded || !canvasRef.current) return

    const labels = Object.keys(categoryData)
    const values = labels.map((l) => {
      const { correct, total } = categoryData[l]
      return total > 0 ? Math.round((correct / total) * 100) : 0
    })
    const barColors = labels.map((l) => colors.get(l))

    if (chartRef.current) {
      chartRef.current.destroy()
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: barColors,
            borderColor: barColors,
            borderWidth: 1,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { stepSize: 20, callback: (v) => v + '%' } },
        },
        plugins: { legend: { display: false } },

        onClick: (evt, _activeEls, chart) => {
          const els = chart.getElementsAtEventForMode(
              evt as unknown as Event,
              'index',
              { intersect: false },
              true
            )
          const idx = els?.[0]?.index
          if (typeof idx !== 'number' || idx < 0) return
          const label = chart.data.labels?.[idx] as string | undefined
          if (label) handleCategoryClick(label)
        },
      },
    })

    return () => {
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [view, loaded, categoryData, colors, handleCategoryClick])

  function toggleExpanded(catName: string) {
    setExpanded((prev) => ({ ...prev, [catName]: !prev[catName] }))
  }

  async function onSubBarClick(subId: string, catName: string, chapName: string) {
    const nowPaid = await isSubscribed(userId)
    const supabaseIds = await fetchQuestionIdsBySubHelper(subId, nowPaid)
    if (!supabaseIds.length) {
      alert('この小分野の問題が見つかりませんでした。')
      return
    }
    const allDone = await areAllCorrect(userId, supabaseIds)
    if (allDone) {
      const go = confirm(`${catName} ＞ ${chapName} はすべて完了しています。ランダムで再挑戦しますか？`)
      if (!go) return
    }
    const qid = await pickOnePreferNotCorrect(userId, supabaseIds)
    const qs = new URLSearchParams()
    qs.set('mode', nowPaid ? 'all' : 'free')
    qs.set('scope', 'sub')
    qs.set('sid', subId)
    window.location.href = `${QUESTIONS_BASE}/${qid}?${qs.toString()}`
  }

  async function fetchQuestionIdsBySubHelper(subId: string, nowPaid: boolean): Promise<string[]> {
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    let q = supabase.from('questions').select('id').eq('subcategory_id', subId)
    if (!nowPaid) q = q.eq('is_paid', false)
    const { data, error } = await q
    if (error) {
      console.error(error)
      return []
    }
    return (data ?? []).map((r: { id: string }) => String(r.id))
  }

  return (
    <section className={styles.subcatCard} id="category-progress">
      <h3>📈 分野別進捗</h3>
      <p>苦手分野をすぐに見つけて、そのまま潰せる進捗マップです。</p>
      <ul className={styles.categoryHint}>
        <li>グラフ：棒グラフをクリックすると、その大分野のランダム演習を開始します。</li>
        <li>リスト：行をクリックすると、その小分野だけに集中して演習できます。</li>
      </ul>

      <div className={styles.chartSwitch} role="tablist">
        <button
          type="button"
          className={`${styles.tab} ${view === 'graph' ? styles.tabActive : ''}`}
          role="tab"
          aria-selected={view === 'graph'}
          onClick={() => setView('graph')}
        >
          📈 グラフ
        </button>
        <button
          type="button"
          className={`${styles.tab} ${view === 'list' ? styles.tabActive : ''}`}
          role="tab"
          aria-selected={view === 'list'}
          onClick={() => setView('list')}
        >
          📊 リスト
        </button>
      </div>

      {view === 'graph' && (
        <div className={styles.chartWrapper}>
          <canvas ref={canvasRef} />
        </div>
      )}

      {view === 'list' && (
        <ul className={styles.categoryList}>
          {Object.entries(categoryData).map(([catName, catData]) => {
            const pct = catData.total ? Math.round((catData.correct / catData.total) * 100) : 0
            const isOpen = !!expanded[catName]
            return (
              <li key={catName}>
                <button
                  type="button"
                  className={styles.categoryToggle}
                  aria-expanded={isOpen}
                  onClick={() => toggleExpanded(catName)}
                >
                  <strong>{catName}</strong>（{catData.correct}/{catData.total}問）
                  <div className={styles.catBar}>
                    <div
                      className={styles.catFill}
                      style={{ width: `${pct}%`, background: colors.get(catName) }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <ul className={styles.categoryPanel}>
                    {Object.entries(catData.chapters).map(([subId, chapData]) => {
                      const cPct = chapData.total
                        ? Math.round((chapData.correct / chapData.total) * 100)
                        : 0
                      return (
                        <li key={subId}>
                          {chapData.name}（{chapData.correct}/{chapData.total}問）
                          <div
                            className={styles.catBar}
                            style={{ cursor: 'pointer' }}
                            onClick={() => onSubBarClick(subId, catName, chapData.name)}
                          >
                            <div
                              className={styles.catFill}
                              style={{ width: `${cPct}%`, background: colors.get(catName) }}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}