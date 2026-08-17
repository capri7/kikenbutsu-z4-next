'use client'

import { useEffect, useState } from 'react'
import { getMistakeItems, type MistakeItem } from '@/lib/mistakes'
import { buildSubcategoryMap, type ChapterMap } from '@/lib/dataLoader'
import styles from './MistakesClient.module.css'
import Breadcrumbs from '@/components/Breadcrumbs'

const CATEGORY_ORDER = ['危険物に関する法令', '物理と化学', '性質と火災予防']

function fmtDate(iso: string | null): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('ja-JP')
  } catch {
    return ''
  }
}

function withMistakesScope(path: string): string {
  return `${path}?scope=mistakes`
}

export default function MistakesClient() {
  const [items, setItems] = useState<MistakeItem[]>([])
  const [chapterMap, setChapterMap] = useState<ChapterMap>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const [mistakeItems, map] = await Promise.all([
        getMistakeItems(),
        buildSubcategoryMap(),
      ])
      if (cancelled) return
      setItems(mistakeItems)
      setChapterMap(map)
      setLoaded(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const groups: Record<string, Record<string, MistakeItem[]>> = {}
  for (const item of items) {
    const info = item.subcategoryId ? chapterMap[item.subcategoryId] : null
    const catName = info?.categoryName || ''
    const subName = info?.name || ''
    if (!groups[catName]) groups[catName] = {}
    if (!groups[catName][subName]) groups[catName][subName] = []
    groups[catName][subName].push(item)
  }

  const cats = [
    ...CATEGORY_ORDER.filter((c) => groups[c]),
    ...Object.keys(groups).filter((c) => c && !CATEGORY_ORDER.includes(c)),
  ]
  const hasUncategorized = !!groups['']

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: 'マイページ', href: '/mypage' },
          { label: '誤答リスト' },
        ]}
      />
      <div className="site-main">
        <div className="max-w-[760px] mx-auto">
          <div className={styles.headerRow}>
            <h2 className="text-2xl font-bold mt-4">誤答リスト</h2>
            <span className={styles.countBadge}>{items.length}件</span>
          </div>
          <p className="mb-6">間違えた問題を並べています。正解すると自動的にこのリストから外れます。</p>

          {!loaded && <p className={styles.muted}>読み込み中...</p>}

          {loaded && items.length === 0 && (
            <p className={styles.muted}>間違えた問題はありません。</p>
          )}

          {loaded && items.length > 0 && (
            <>
              {cats.map((cat) => (
                <section key={cat} className={styles.catSection}>
                  <h3 className={styles.catTitle}>{cat}</h3>
                  {Object.entries(groups[cat]).map(([sub, subItems]) => (
                    <div key={sub} className={styles.subGroup}>
                      {sub && <h4 className={styles.subTitle}>{sub}</h4>}
                      <div className={styles.cardList}>
                        {subItems.map((item) => (
                          <div key={item.id} className={styles.card}>
                            <h5 className={styles.cardTitle}>{item.title || '(無題)'}</h5>
                            <p className={styles.cardMeta}>
                              誤答回数: {item.incorrectCount}回　最終誤答: {fmtDate(item.lastSeenAt)}
                            </p>
                            <div className={styles.cardActions}>
                              <a href={withMistakesScope(`/contents/${item.questionId}`)} className={styles.btnPrimary}>
                                ▶ 確認する
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))}

              {hasUncategorized && (
                <div className={styles.cardList} style={{ marginTop: 24 }}>
                  {groups[''][''].map((item) => (
                    <div key={item.id} className={styles.card}>
                      <h5 className={styles.cardTitle}>{item.title || '(無題)'}</h5>
                      <p className={styles.cardMeta}>
                        誤答回数: {item.incorrectCount}回　最終誤答: {fmtDate(item.lastSeenAt)}
                      </p>
                      <div className={styles.cardActions}>
                        <a href={withMistakesScope(`/contents/${item.questionId}`)} className={styles.btnPrimary}>
                          ▶ 確認する
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
