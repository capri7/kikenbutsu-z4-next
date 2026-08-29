// src/lib/feedback.test.ts
import { describe, expect, test } from 'vitest'
import { getFeedbackMessage, formatChoiceText } from './feedback'
import type { QuestionData } from './feedback'

describe('getFeedbackMessage', () => {
  test('通常問題（否定形でない）で正解を選んだ場合、正解メッセージを返しヒントは非表示', () => {
    const data: QuestionData = { answer: 2, feedback_mode: null, choices: [] }
    const result = getFeedbackMessage(1, data) // i=1 → 1+1=2 === answer
    expect(result).toEqual({
      msg: '✅ 正解です。',
      shouldShowHint: false,
      contentIsCorrect: true,
      questionIsCorrect: true,
    })
  })

  test('通常問題で不正解を選んだ場合、不正解メッセージを返しヒントを表示', () => {
    const data: QuestionData = { answer: 2, feedback_mode: null, choices: [] }
    const result = getFeedbackMessage(0, data) // i=0 → 1 !== 2
    expect(result).toEqual({
      msg: '❌ 不正解です。',
      shouldShowHint: true,
      contentIsCorrect: false,
      questionIsCorrect: false,
    })
  })

  test('否定形問題で「公式な正解番号」を選んだ場合、contentIsCorrectはfalseに反転する', () => {
    const data: QuestionData = { answer: 2, feedback_mode: 'negation', choices: [] }
    const result = getFeedbackMessage(1, data) // i=1 → isCorrect=true, isNegation=true
    expect(result).toEqual({
      msg: '✅ この問題の答えとして正しい選択です。',
      shouldShowHint: true,
      contentIsCorrect: false, // 否定形なので反転
      questionIsCorrect: true, // 公式な正解番号とは一致している
    })
  })

  test('否定形問題で「公式な正解番号」以外を選んだ場合、contentIsCorrectはtrueに反転する', () => {
    const data: QuestionData = { answer: 2, feedback_mode: 'negation', choices: [] }
    const result = getFeedbackMessage(0, data) // i=0 → isCorrect=false, isNegation=true
    expect(result).toEqual({
      msg: 'ℹ️ この問題の答えとして誤った選択です。',
      shouldShowHint: true,
      contentIsCorrect: true, // 否定形なので反転
      questionIsCorrect: false,
    })
  })

  test('feedback_modeがnegation以外の文字列でも、通常問題として扱う', () => {
    const data: QuestionData = { answer: 1, feedback_mode: 'something_else', choices: [] }
    const result = getFeedbackMessage(0, data)
    expect(result.contentIsCorrect).toBe(true)
    expect(result.questionIsCorrect).toBe(true)
  })
})

describe('formatChoiceText', () => {
  test('choiceが文字列の場合、番号を付けてそのまま返す', () => {
    expect(formatChoiceText(0, '選択肢A')).toBe('1. 選択肢A')
  })

  test('choiceがオブジェクトでmode未指定（default）の場合、propertyを番号付きで返す', () => {
    expect(formatChoiceText(2, { property: '第4類' })).toBe('3. 第4類')
  })

  test('choiceがオブジェクトでmode=shortの場合、nameを優先して返す（番号なし）', () => {
    expect(formatChoiceText(0, { name: 'ガソリン', property: '第4類' }, 'short')).toBe('ガソリン')
  })

  test('mode=shortでnameが無い場合、propertyにフォールバックする', () => {
    expect(formatChoiceText(0, { property: '第4類' }, 'short')).toBe('第4類')
  })
})
