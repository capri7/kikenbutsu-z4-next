import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import type { ComponentType, ReactElement, ReactNode } from 'react'
import SingleChoiceQuiz from './SingleChoiceQuiz'

// 節のページ（第1〜3章）の小テスト（〜Quiz.tsx）のデータを、全件通して確かめる。
// 動き（選択・固定・解説・再挑戦）とアクセシビリティは、共通部品 SingleChoiceQuiz のテスト（SingleChoiceQuiz.test.tsx）が確かめる。
// ここでは、各小テストが共通部品を使い、解説の書き出しが決まりどおりであることを確かめる。
// 件数は固定せず、フォルダにある小テストをすべて対象にする。

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

const ENTRIES = Object.entries(QUIZZES)

type QuizProps = {
  options: readonly { id: string }[]
  correct: string
  feedback: Record<string, ReactNode>
}

// 解説（文字列でも JSX でもよい）の、表示される文字
function textOf(node: ReactNode): string {
  const { container } = render(<>{node}</>)
  const text = container.textContent ?? ''
  cleanup()
  return text
}

describe('節のページの小テスト：データ', () => {
  // 小テストは、データだけを共通部品に渡す部品。関数として呼ぶと、共通部品の要素（type と props）が返る
  it.each(ENTRIES)('%s', async (_path, load) => {
    const { default: Quiz } = await load()
    const element = (Quiz as () => ReactElement<QuizProps>)()

    // 共通部品を使っている（動きを自前で持たない）
    expect(element.type).toBe(SingleChoiceQuiz)

    // 解説の書き出し：正解の選択肢は「正解」、それ以外は「不正解」で始める
    const { options, correct, feedback } = element.props
    const wrong = options.flatMap(({ id }) => {
      const expected = id === correct ? /^正解/ : /^不正解/
      return expected.test(textOf(feedback[id])) ? [] : [`${id}の解説が${id === correct ? '「正解」' : '「不正解」'}で始まっていない`]
    })
    expect(wrong).toEqual([])
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
