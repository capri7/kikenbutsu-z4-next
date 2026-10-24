import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentType } from 'react'

// 節のページ（第1〜3章）の小テスト（〜Quiz.tsx）を、全件通して確かめる。
// 1問ずつ「選ぶ → 正誤と解説が出る → 選択肢が固定される → もう一度挑戦で元に戻る」を、
// すべての選択肢で動かす。件数は固定せず、フォルダにある小テストをすべて対象にする。

afterEach(cleanup)

type QuizModule = { default: ComponentType }

// 末尾が小文字の quiz.tsx（SimpleTankStorageStandardsquiz.tsx）も対象にする
const QUIZZES = import.meta.glob('./*/*/*[Qq]uiz.tsx') as Record<string, () => Promise<QuizModule>>

// 'use client' の部品を、すべて読む（テストの対象から漏れた小テストを見つけるため）
const SOURCES = import.meta.glob(['./*/*/*.tsx', '!./**/*.test.tsx', '!./**/page.tsx'], {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

// 小テストではない 'use client' の部品。ここに足すときは、専用のテストを書く
const NOT_QUIZ_CLIENT_COMPONENTS = ['./physical_chemistry/static_electricity/FoilElectroscopeDiagram.tsx']

const RETRY_LABEL = 'もう一度挑戦する'

const ENTRIES = Object.entries(QUIZZES)

// 選択肢をクリックした状態の小テストを返す
async function pick(Quiz: ComponentType, index: number) {
  const user = userEvent.setup()
  const view = render(<Quiz />)
  const radios = screen.getAllByRole('radio') as HTMLInputElement[]
  await user.click(radios[index])
  return { view, radios, user }
}

const isCorrect = (radio: HTMLInputElement) => /Correct/.test(radio.closest('label')?.className ?? '')

describe('節のページの小テスト：動作', () => {
  it.each(ENTRIES)('%s', async (_path, load) => {
    const { default: Quiz } = await load()

    // 最初の状態：選択肢が2つ以上あり、何も選ばれておらず、解説も再挑戦のボタンも無い
    const first = render(<Quiz />)
    const count = screen.getAllByRole('radio').length
    expect(count).toBeGreaterThanOrEqual(2)
    expect((screen.getAllByRole('radio') as HTMLInputElement[]).some((r) => r.checked || r.disabled)).toBe(false)
    expect(first.container.querySelector('[aria-live="polite"]')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    cleanup()

    let correctCount = 0
    for (let i = 0; i < count; i++) {
      const { view, radios, user } = await pick(Quiz, i)

      // 選んだものだけが選ばれ、全部の選択肢が固定される
      expect(radios.map((r) => r.checked)).toEqual(radios.map((_, j) => j === i))
      expect(radios.every((r) => r.disabled)).toBe(true)

      // 正解の選択肢は「正解」の見た目、それ以外は「不正解」の見た目になる
      if (isCorrect(radios[i])) correctCount++
      else expect(radios[i].closest('label')?.className).toMatch(/Wrong/)

      // 解説が出る
      const feedback = view.container.querySelector('[aria-live="polite"]')
      expect(feedback?.textContent?.trim().length).toBeGreaterThan(0)

      // もう一度挑戦すると、元の状態に戻る
      await user.click(screen.getByRole('button'))
      expect(radios.some((r) => r.checked || r.disabled)).toBe(false)
      expect(view.container.querySelector('[aria-live="polite"]')).toBeNull()
      expect(screen.queryByRole('button')).toBeNull()
      cleanup()
    }

    // 正解の選択肢は、ちょうど1つ
    expect(correctCount).toBe(1)
  })
})

// 統一した仕様（すべての小テストで同じにする）で、守られていない点を返す
async function violations(Quiz: ComponentType): Promise<string[]> {
  const found: string[] = []

  const first = render(<Quiz />)
  const group = first.container.querySelector('[role="radiogroup"]')
  if (!group) found.push('選択肢の囲みが role="radiogroup" ではない')
  else {
    const labelId = group.getAttribute('aria-labelledby')
    if (!labelId || !first.container.querySelector(`#${labelId}`)) {
      found.push('radiogroup の aria-labelledby が、問題文を指していない')
    }
  }
  if (first.container.querySelector('label code')) found.push('選択肢の文字を <code> で囲んでいる')
  const count = screen.getAllByRole('radio').length
  cleanup()

  for (let i = 0; i < count; i++) {
    const { view, radios } = await pick(Quiz, i)
    const text = view.container.querySelector('[aria-live="polite"]')?.textContent ?? ''
    const expected = isCorrect(radios[i]) ? /^正解/ : /^不正解/
    if (!expected.test(text)) {
      found.push(`選択肢${i + 1}の解説が「${isCorrect(radios[i]) ? '正解' : '不正解'}」で始まっていない`)
    }
    if (i === 0) {
      const button = screen.getByRole('button')
      if (button.textContent?.trim() !== RETRY_LABEL) found.push(`再挑戦のボタンの文言が「${RETRY_LABEL}」ではない`)
      if (!/RetryWrap/.test(button.parentElement?.className ?? '')) found.push('再挑戦のボタンが quizRetryWrap で囲まれていない')
    }
    cleanup()
  }
  return found
}

describe('節のページの小テスト：統一した仕様', () => {
  // 仕様：選択肢は role="radiogroup" で囲み、解説は「正解」か「不正解」で始め、
  // 再挑戦のボタンは「もう一度挑戦する」の文言で quizRetryWrap の中に置き、選択肢の文字は装飾しない
  it.each(ENTRIES)('%s', async (_path, load) => {
    const { default: Quiz } = await load()
    expect(await violations(Quiz)).toEqual([])
  })
})

describe('節のページの小テスト：対象から漏れていない', () => {
  it("'use client' の部品は、小テストか、専用のテストを書く一覧のどちらかに入っている", async () => {
    const clientFiles: string[] = []
    for (const [path, read] of Object.entries(SOURCES)) {
      const source = await read()
      // 先頭のコメントの後に 'use client' がある
      if (/^(?:\s*\/\/[^\n]*\n)*\s*['"]use client['"]/.test(source)) clientFiles.push(path)
    }
    const notQuiz = clientFiles.filter((p) => !(p in QUIZZES))
    expect(notQuiz.sort()).toEqual([...NOT_QUIZ_CLIENT_COMPONENTS].sort())
    expect(ENTRIES.length).toBeGreaterThan(0)
  })
})
