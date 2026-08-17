'use client'

import { useEffect, useState, useCallback } from 'react'
import { getReviewItems, markReviewItemMastered, type ReviewItem } from '@/lib/review'
import { buildSubcategoryMap, type ChapterMap } from '@/lib/dataLoader'
import { useToast } from '@/lib/toast'
import styles from './ReviewClient.module.css'
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

function withReviewScope(path: string): string {
  const [pathname, query] = path.split('?')
  const qs = new URLSearchParams(query)
  qs.set('scope', 'review')
  return `${pathname}?${qs.toString()}`
}

export default function ReviewClient() {
  const [items, setItems] = useState<ReviewItem[]>([])
  const [chapterMap, setChapterMap] = useState<ChapterMap>({})
  const [loaded, setLoaded] = useState(false)
  const { showToast } = useToast()

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const [reviewItems, map] = await Promise.all([
        getReviewItems(),
        buildSubcategoryMap(),
      ])
      if (cancelled) return
      setItems(reviewItems)
      setChapterMap(map)
      setLoaded(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const handleMastered = useCallback(
    async (id: string) => {
      const result = await markReviewItemMastered(id)
      if (result.ok) {
        setItems((prev) => prev.filter((it) => it.id !== id))
        showToast('復習済みにしました', 'success')
      } else {
        showToast('処理に失敗しました。通信状況をご確認ください', 'error')
      }
    },
    [showToast]
  )

  const groups: Record<string, Record<string, ReviewItem[]>> = {}
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
          { label: '復習リスト' },
        ]}
      />
      <div className="site-main">
        <div className="max-w-[760px] mx-auto">
          <div className={styles.headerRow}>
            <h2 className="text-2xl font-bold mt-4">復習リスト</h2>
            <span className={styles.countBadge}>{items.length}件</span>
          </div>
          <p className="mb-6">復習リストに追加した問題を並べています。完全に解けるようになったら復習済みにしてください。</p>

          {!loaded && <p className={styles.muted}>読み込み中...</p>}

          {loaded && items.length === 0 && (
            <p className={styles.muted}>まだ何も追加されていません。</p>
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
                              {item.lastReviewedAt
                                ? `最終確認: ${fmtDate(item.lastReviewedAt)}`
                                : `追加: ${fmtDate(item.createdAt)}`}
                            </p>
                            <div className={styles.cardActions}>
                              <a href={withReviewScope(item.contentPath)} className={styles.btnPrimary}>
                                ▶ 確認する
                              </a>
                              <button
                                type="button"
                                onClick={() => handleMastered(item.id)}
                                className={styles.btnDanger}
                              >
                                復習済みにする
                              </button>
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
                        {item.lastReviewedAt
                          ? `最終確認: ${fmtDate(item.lastReviewedAt)}`
                          : `追加: ${fmtDate(item.createdAt)}`}
                      </p>
                      <div className={styles.cardActions}>
                        <a href={withReviewScope(item.contentPath)} className={styles.btnPrimary}>
                          ▶ 確認する
                        </a>
                        <button
                          type="button"
                          onClick={() => handleMastered(item.id)}
                          className={styles.btnDanger}
                        >
                          復習済みにする
                        </button>
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

