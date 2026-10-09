// マイページの分野別の進捗（正答率と、分野を押したときの出題）の計算
// DB を読む関数（src/lib/dataLoader.ts）から、計算の部分だけを切り出したもの。中身は切り出す前と同じ
import type { CategoryData, ChapterMap } from './dataLoader'

// 回答の記録の1行。DB から、新しい回答が先に来る順（answered_at・updated_at・id の降順）で受け取る
export type ProgressLogRow = {
  question_id: string
  is_correct: boolean
  questions: { subcategory_id: string } | { subcategory_id: string }[] | null
}

// 問題ごとの最新の正誤。記録は新しい順に並んでいる前提で、問題ごとに最初の行を採る
export function latestCorrectByQuestion(
  rows: { question_id: string; is_correct: boolean }[]
): Map<string, boolean> {
  const m = new Map<string, boolean>()
  for (const r of rows) {
    const qid = String(r.question_id)
    if (!m.has(qid)) m.set(qid, r.is_correct)
  }
  return m
}

// 分野ごと・小分野ごとに「最新の回答が正解の問題数」と「解ける問題数」を数える
export function buildCategoryData(
  chapterMap: ChapterMap,
  qrows: { id: string; subcategory_id: string }[],
  logs: ProgressLogRow[]
): CategoryData {
  const totalsBySub: Record<string, number> = {}
  for (const q of qrows) {
    if (!q.subcategory_id) continue
    totalsBySub[q.subcategory_id] = (totalsBySub[q.subcategory_id] || 0) + 1
  }

  const categoryData: CategoryData = {}
  for (const [subId, info] of Object.entries(chapterMap)) {
    const { categoryName, name: chapterName } = info
    if (!categoryData[categoryName]) {
      categoryData[categoryName] = { correct: 0, total: 0, chapters: {} }
    }
    const subTotal = totalsBySub[subId] || 0
    categoryData[categoryName].chapters[subId] = { name: chapterName, correct: 0, total: subTotal }
    categoryData[categoryName].total += subTotal
  }

  const lastByQuestion = new Map<string, ProgressLogRow>()
  for (const row of logs) {
    if (!lastByQuestion.has(row.question_id)) {
      lastByQuestion.set(row.question_id, row)
    }
  }

  for (const row of lastByQuestion.values()) {
    const qObj = Array.isArray(row.questions) ? row.questions[0] : row.questions
    const subId = qObj?.subcategory_id
    const chap = subId ? chapterMap[subId] : undefined
    if (!chap || !subId) continue
    if (row.is_correct) {
      const cat = categoryData[chap.categoryName]
      if (!cat.chapters[subId]) {
        cat.chapters[subId] = { name: chap.name, correct: 0, total: 0 }
      }
      cat.correct += 1
      cat.chapters[subId].correct += 1
    }
  }

  return categoryData
}

// グラフと棒の長さに使う割合（%）。解ける問題がないときは 0
export function progressPercent(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0
}

// まだ正解していない問題（未回答・最新の回答が不正解）から1問選ぶ。すべて正解済みなら全体から選ぶ
export function pickPreferNotCorrect(
  ids: string[],
  latest: Map<string, boolean>,
  random: () => number = Math.random
): string {
  const notYetCorrect = ids.filter((id) => latest.get(String(id)) !== true)
  const pool = notYetCorrect.length ? notYetCorrect : ids
  return pool[Math.floor(random() * pool.length)]
}

// すべての問題の最新の回答が正解か。問題がなければ false
export function allCorrect(ids: string[], latest: Map<string, boolean>): boolean {
  if (!ids.length) return false
  return ids.every((id) => latest.get(String(id)) === true)
}
