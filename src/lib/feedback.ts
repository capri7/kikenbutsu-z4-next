export type Choice = {
  name?: string
  description?: string
  property?: string
  [key: string]: unknown
}

export type QuestionData = {
  answer: number
  feedback_mode: string | null
  choices: Choice[]
  [key: string]: unknown
}

export type FeedbackResult = {
  msg: string
  shouldShowHint: boolean
  contentIsCorrect: boolean
  questionIsCorrect: boolean
}

const FEEDBACK_TEXT = {
  correct: '✅ 正解です。',
  incorrect: '❌ 不正解です。',
  correct_but_negation: '✅ この問題の答えとして正しい選択です。',
  incorrect_but_negation: 'ℹ️ この問題の答えとして誤った選択です。',
} as const

export function getFeedbackMessage(i: number, data: QuestionData): FeedbackResult {
  const isCorrect = i + 1 === data.answer
  const isNegation = data.feedback_mode === 'negation'

  const contentIsCorrect = isNegation ? !isCorrect : isCorrect
  const questionIsCorrect = isCorrect

  let msg: string
  let shouldShowHint: boolean

  if (isCorrect && isNegation) {
    msg = FEEDBACK_TEXT.correct_but_negation
    shouldShowHint = true
  } else if (!isCorrect && isNegation) {
    msg = FEEDBACK_TEXT.incorrect_but_negation
    shouldShowHint = true
  } else if (isCorrect) {
    msg = FEEDBACK_TEXT.correct
    shouldShowHint = false
  } else {
    msg = FEEDBACK_TEXT.incorrect
    shouldShowHint = true
  }

  return { msg, shouldShowHint, contentIsCorrect, questionIsCorrect }
}

export function formatChoiceText(
  i: number,
  choice: Choice | string,
  mode: 'default' | 'short' = 'default'
): string {
  if (typeof choice === 'string') return `${i + 1}. ${choice}`
  if (mode === 'short') return `${choice.name || choice.property || ''}`
  return `${i + 1}. ${choice.property ?? ''}`
}