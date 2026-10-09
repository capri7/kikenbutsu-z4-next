import { describe, expect, it } from 'vitest'
import {
  allCorrect,
  buildCategoryData,
  latestCorrectByQuestion,
  pickPreferNotCorrect,
  progressPercent,
  type ProgressLogRow,
} from './categoryProgress'
import type { ChapterMap } from './dataLoader'

// 大分野「法令」に小分野 s1・s2、大分野「化学」に小分野 s3
const chapterMap: ChapterMap = {
  s1: { slug: 'law-1', categoryId: 'c1', categoryName: '法令', name: '法令の小分野1' },
  s2: { slug: 'law-2', categoryId: 'c1', categoryName: '法令', name: '法令の小分野2' },
  s3: { slug: 'chem-1', categoryId: 'c2', categoryName: '化学', name: '化学の小分野1' },
}

// 解ける問題：s1 に2問、s2 に1問、s3 に2問
const qrows = [
  { id: 'q1', subcategory_id: 's1' },
  { id: 'q2', subcategory_id: 's1' },
  { id: 'q3', subcategory_id: 's2' },
  { id: 'q4', subcategory_id: 's3' },
  { id: 'q5', subcategory_id: 's3' },
]

// 回答の記録は、DB から新しい順に受け取る。配列の先頭ほど新しい
function log(question_id: string, is_correct: boolean, subcategory_id: string): ProgressLogRow {
  return { question_id, is_correct, questions: { subcategory_id } }
}

describe('buildCategoryData（分野ごとの正解数と問題数）', () => {
  it('回答がなければ、正解数は0で、問題数は小分野の問題数の合計になる', () => {
    expect(buildCategoryData(chapterMap, qrows, [])).toEqual({
      法令: {
        correct: 0,
        total: 3,
        chapters: {
          s1: { name: '法令の小分野1', correct: 0, total: 2 },
          s2: { name: '法令の小分野2', correct: 0, total: 1 },
        },
      },
      化学: {
        correct: 0,
        total: 2,
        chapters: { s3: { name: '化学の小分野1', correct: 0, total: 2 } },
      },
    })
  })

  it('最新の回答が正解の問題だけを数える（前に正解していても、最新が不正解なら数えない）', () => {
    const logs = [
      log('q1', true, 's1'), // q1：不正解のあと正解（最新は正解）
      log('q2', false, 's1'), // q2：正解のあと不正解（最新は不正解）
      log('q2', true, 's1'),
      log('q1', false, 's1'),
    ]
    const data = buildCategoryData(chapterMap, qrows, logs)
    expect(data['法令'].correct).toBe(1)
    expect(data['法令'].chapters.s1).toEqual({ name: '法令の小分野1', correct: 1, total: 2 })
  })

  it('同じ問題に何回正解しても、1問として数える', () => {
    const logs = [log('q4', true, 's3'), log('q4', true, 's3'), log('q4', true, 's3')]
    const data = buildCategoryData(chapterMap, qrows, logs)
    expect(data['化学'].correct).toBe(1)
    expect(data['化学'].chapters.s3.correct).toBe(1)
  })

  it('大分野の正解数は、その中の小分野の正解数の合計になる', () => {
    const logs = [log('q1', true, 's1'), log('q2', true, 's1'), log('q3', true, 's2'), log('q4', true, 's3')]
    const data = buildCategoryData(chapterMap, qrows, logs)
    expect(data['法令'].correct).toBe(3)
    expect(data['法令'].total).toBe(3)
    expect(data['化学'].correct).toBe(1)
  })

  it('小分野の一覧にない問題の記録は数えない', () => {
    const logs = [log('qx', true, 's_unknown'), { question_id: 'qy', is_correct: true, questions: null }]
    const data = buildCategoryData(chapterMap, qrows, logs)
    expect(data['法令'].correct).toBe(0)
    expect(data['化学'].correct).toBe(0)
  })

  it('問題の情報が配列で返ってきても数える', () => {
    const logs: ProgressLogRow[] = [{ question_id: 'q3', is_correct: true, questions: [{ subcategory_id: 's2' }] }]
    expect(buildCategoryData(chapterMap, qrows, logs)['法令'].chapters.s2.correct).toBe(1)
  })
})

describe('progressPercent（グラフに出す割合）', () => {
  it('正解数 ÷ 問題数 を、整数の % に四捨五入する', () => {
    expect(progressPercent(1, 3)).toBe(33)
    expect(progressPercent(2, 3)).toBe(67)
    expect(progressPercent(3, 3)).toBe(100)
  })

  it('解ける問題がない分野は 0%', () => {
    expect(progressPercent(0, 0)).toBe(0)
  })
})

describe('latestCorrectByQuestion（問題ごとの最新の正誤）', () => {
  it('新しい順の記録から、問題ごとに最初の行の正誤を採る', () => {
    const latest = latestCorrectByQuestion([
      { question_id: 'q1', is_correct: false },
      { question_id: 'q2', is_correct: true },
      { question_id: 'q1', is_correct: true },
    ])
    expect(latest).toEqual(
      new Map([
        ['q1', false],
        ['q2', true],
      ])
    )
  })
})

describe('分野を押したときの出題', () => {
  // q1 は最新が正解、q2 は最新が不正解、q3 は未回答
  const latest = new Map([
    ['q1', true],
    ['q2', false],
  ])

  it('まだ正解していない問題（最新が不正解・未回答）から選び、正解済みの問題は選ばない', () => {
    expect(pickPreferNotCorrect(['q1', 'q2', 'q3'], latest, () => 0)).toBe('q2')
    expect(pickPreferNotCorrect(['q1', 'q2', 'q3'], latest, () => 0.999)).toBe('q3')
  })

  it('すべて正解済みなら、その分野の全部の問題から選ぶ（再挑戦）', () => {
    const allDone = new Map([
      ['q1', true],
      ['q2', true],
    ])
    expect(pickPreferNotCorrect(['q1', 'q2'], allDone, () => 0)).toBe('q1')
    expect(pickPreferNotCorrect(['q1', 'q2'], allDone, () => 0.999)).toBe('q2')
  })

  it('すべての問題の最新の回答が正解のときだけ「すべて完了」と判定する', () => {
    expect(allCorrect(['q1'], latest)).toBe(true)
    expect(allCorrect(['q1', 'q2'], latest)).toBe(false) // 最新が不正解の問題がある
    expect(allCorrect(['q1', 'q3'], latest)).toBe(false) // 未回答の問題がある
  })

  it('問題がない分野は「すべて完了」と判定しない', () => {
    expect(allCorrect([], latest)).toBe(false)
  })
})
