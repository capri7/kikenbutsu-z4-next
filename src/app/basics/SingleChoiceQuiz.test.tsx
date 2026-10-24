import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axe from 'axe-core'
import shared from '@/app/basics/BasicsShared.module.css'
import SingleChoiceQuiz from './SingleChoiceQuiz'

// 節のページの小テストの共通部品。動作を数通りのデータで確かめる。
// 正解・不正解の見た目は、CSS モジュールの class 名を直接書かず、同じモジュールを import して比べる。

afterEach(cleanup)

// 3択：解説は文字列、正解は先頭
function ThreeChoices() {
  return (
    <SingleChoiceQuiz
      question="正しいものはどれか。"
      options={[
        { id: 'a', label: '甲' },
        { id: 'b', label: '乙' },
        { id: 'c', label: '丙' },
      ]}
      correct="a"
      feedback={{ a: '正解です。甲の解説。', b: '不正解です。乙の解説。', c: '不正解です。丙の解説。' }}
    />
  )
}

// 4択：問題文と解説が JSX、正解は末尾
function FourChoices() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          <strong>最も適切</strong>なものはどれか。
        </>
      }
      options={[
        { id: 'o1', label: '一' },
        { id: 'o2', label: '二' },
        { id: 'o3', label: '三' },
        { id: 'o4', label: '四' },
      ]}
      correct="o4"
      feedback={{
        o1: <>不正解です。<em>一</em>の解説。</>,
        o2: '不正解です。二の解説。',
        o3: '不正解です。三の解説。',
        o4: <>正解です。<em>四</em>の解説。</>,
      }}
    />
  )
}

const radios = () => screen.getAllByRole('radio') as HTMLInputElement[]
const labelOf = (r: HTMLInputElement) => r.closest('label')!

describe('SingleChoiceQuiz：動作', () => {
  it.each([
    ['3択（正解は先頭）', ThreeChoices, 3, 0],
    ['4択（正解は末尾・JSX）', FourChoices, 4, 3],
  ])('%s：選ぶ → 正誤と解説 → 固定 → もう一度挑戦で元に戻る', async (_name, Quiz, count, correctIndex) => {
    for (let i = 0; i < count; i++) {
      const user = userEvent.setup()
      const { container } = render(<Quiz />)

      // 最初：何も選ばれておらず、固定もされず、解説も再挑戦のボタンも無い
      expect(radios()).toHaveLength(count)
      expect(radios().some((r) => r.checked || r.disabled)).toBe(false)
      expect(container.querySelector('[aria-live="polite"]')).toBeNull()
      expect(screen.queryByRole('button')).toBeNull()

      await user.click(radios()[i])

      // 選んだものだけが選ばれ、すべて固定される
      expect(radios().map((r) => r.checked)).toEqual(radios().map((_, j) => j === i))
      expect(radios().every((r) => r.disabled)).toBe(true)

      // 選んだ選択肢だけに、正解か不正解の見た目が付く
      const correctClass = shared.quizOptionCorrect
      const wrongClass = shared.quizOptionWrong
      radios().forEach((r, j) => {
        const cls = labelOf(r).className
        expect(cls.includes(correctClass)).toBe(j === i && i === correctIndex)
        expect(cls.includes(wrongClass)).toBe(j === i && i !== correctIndex)
      })

      // 解説が出て、正解のときだけ「正解」で始まる
      const feedback = container.querySelector('[aria-live="polite"]')
      expect(feedback?.textContent).toMatch(i === correctIndex ? /^正解/ : /^不正解/)

      // もう一度挑戦すると、元に戻る
      await user.click(screen.getByRole('button', { name: 'もう一度挑戦する' }))
      expect(radios().some((r) => r.checked || r.disabled)).toBe(false)
      expect(container.querySelector('[aria-live="polite"]')).toBeNull()
      expect(screen.queryByRole('button')).toBeNull()
      cleanup()
    }
  })

  it('選択後は、別の選択肢を押しても答えは変わらない', async () => {
    const user = userEvent.setup()
    render(<ThreeChoices />)
    await user.click(radios()[1])
    await user.click(radios()[2])
    expect(radios().map((r) => r.checked)).toEqual([false, true, false])
  })
})

describe('SingleChoiceQuiz：構造', () => {
  it('選択肢は role="group" で囲まれ、問題文が名前になる。ul には role を付けない', () => {
    const { container } = render(<FourChoices />)
    expect(screen.getByRole('group', { name: '最も適切なものはどれか。' })).toBeTruthy()
    expect(container.querySelector('ul[role]')).toBeNull()
    // 問題文の JSX（強調）がそのまま出る
    expect(container.querySelector('strong')?.textContent).toBe('最も適切')
  })

  it('2つ並べても、問題文の id・選択肢の name が重ならない', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <>
        <ThreeChoices />
        <ThreeChoices />
      </>,
    )
    const groups = Array.from(container.querySelectorAll('[role="group"]'))
    expect(groups).toHaveLength(2)
    const ids = groups.map((g) => g.getAttribute('aria-labelledby'))
    expect(new Set(ids).size).toBe(2)
    for (const id of ids) expect(container.querySelectorAll(`#${CSS.escape(id!)}`)).toHaveLength(1)

    // 1つめで答えても、2つめは変わらない
    const all = radios()
    expect(new Set(all.map((r) => r.name)).size).toBe(2)
    await user.click(all[0])
    expect(all.slice(3).some((r) => r.checked || r.disabled)).toBe(false)
  })

  it('見た目の切り替えに使う class 名が、取れている（空でなく、正解と不正解で違う）', () => {
    expect(shared.quizOptionCorrect).toBeTruthy()
    expect(shared.quizOptionWrong).toBeTruthy()
    expect(shared.quizOptionCorrect).not.toBe(shared.quizOptionWrong)
  })
})

describe('SingleChoiceQuiz：型（tsc で確かめる。実行時には何も起きない）', () => {
  it('不正なデータは、コンパイルが通らない', () => {
    const opts = [
      { id: 'a', label: '甲' },
      { id: 'b', label: '乙' },
    ] as const
    const ok = <SingleChoiceQuiz question="q" options={[...opts]} correct="a" feedback={{ a: 'x', b: 'y' }} />
    // @ts-expect-error 解説が足りない（b が無い）
    const missing = <SingleChoiceQuiz question="q" options={[...opts]} correct="a" feedback={{ a: 'x' }} />
    // @ts-expect-error 正解が、選択肢に無い id
    const unknownCorrect = <SingleChoiceQuiz question="q" options={[...opts]} correct="z" feedback={{ a: 'x', b: 'y' }} />
    // @ts-expect-error 選択肢が1つしかない
    const single = <SingleChoiceQuiz question="q" options={[{ id: 'a', label: '甲' }]} correct="a" feedback={{ a: 'x' }} />
    // @ts-expect-error 選択肢に無い id の解説がある
    const extra = <SingleChoiceQuiz question="q" options={[{ id: 'a', label: '甲' }, { id: 'b', label: '乙' }]} correct="a" feedback={{ a: 'x', b: 'y', z: 'w' }} />
    expect([ok, missing, unknownCorrect, single, extra]).toHaveLength(5)
  })
})

// アクセシビリティ（axe-core）。共通部品に対して、数通りのデータで1回ずつ動かす。
// 色のコントラストは、jsdom では判定できないため対象にしない（Lighthouse CI の Accessibility で見る）
async function axeViolations(container: HTMLElement) {
  const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } })
  return results.violations.map((v) => `${v.id}（${v.impact}）：${v.nodes.length}件`)
}

describe('SingleChoiceQuiz：アクセシビリティ（axe-core）', () => {
  it.each([
    ['3択（文字列）', ThreeChoices],
    ['4択（JSX の問題文・解説）', FourChoices],
  ])('%s：初期と回答後で、違反がない', async (_name, Quiz) => {
    const { container } = render(<Quiz />)
    expect(await axeViolations(container)).toEqual([])

    // 1つ目の選択肢を選んだあと（解説と再挑戦のボタンが出た状態）
    await userEvent.setup().click(radios()[0])
    expect(await axeViolations(container)).toEqual([])
  })
})
