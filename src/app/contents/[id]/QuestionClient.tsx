'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ChoicesTable from './ChoicesTable'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildSubcategoryMap, type ChapterInfo } from '@/lib/dataLoader'
import { useToast } from '@/lib/toast'
import { getFeedbackMessage, formatChoiceText, type Choice, type QuestionData } from '@/lib/feedback'

import { saveProgress } from '@/lib/progress'
import { recordMistake, clearMistake, getOrderedMistakeQuestionIds } from '@/lib/mistakes'
import { addToReview, isInReviewList, getOrderedReviewQuestionIds } from '@/lib/review'
import styles from './QuestionClient.module.css'

import {
  getNextForUser,
  getNextInScope,
  getNextRandomQuestionId,
  getOrderedFreeQuestionIds,
  type QuestionRow,
} from '@/lib/dataLoader'


function makeNonce(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return Math.random().toString(36).slice(2)
}

type Scope = '' | 'cat' | 'sub' | 'free' | 'review' | 'mistakes'

export default function QuestionClient({ question }: { question: QuestionRow }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { showToast } = useToast()

  const mode = searchParams.get('mode') === 'free' ? 'free' : 'all'
  const scope = (searchParams.get('scope') || '') as Scope
  const sid = searchParams.get('sid')
  const cid = searchParams.get('cid')

  const choices = (question.choices as Choice[]) ?? []
  const fields = (question.fields as string[]) ?? null
  const headers = (question.headers as string[]) ?? null
  const explanation = (question.explanation as string[]) ?? []
  const statementExplanations = question.statement_explanations as Record<string, string> | null

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [busy, setBusy] = useState(false)
  const [nextBusy, setNextBusy] = useState(false)
  const [reviewAdded, setReviewAdded] = useState(false)
  const [chapterInfo, setChapterInfo] = useState<ChapterInfo | null>(null)

useEffect(() => {
  let cancelled = false
  buildSubcategoryMap().then((map) => {
    if (!cancelled) setChapterInfo(map[question.subcategory_id] ?? null)
  })
  return () => {
    cancelled = true
  }
}, [question.subcategory_id])

useEffect(() => {
  let cancelled = false
  isInReviewList(question.id).then((added) => {
    if (!cancelled) setReviewAdded(added)
  })
  return () => {
    cancelled = true
  }
}, [question.id])

  const correctIndex = question.answer - 1

  const questionData: QuestionData = useMemo(
    () => ({
      answer: question.answer,
      feedback_mode: question.feedback_mode,
      choices,
    }),
    [question.answer, question.feedback_mode, choices]
  )

  async function handleSelect(index: number) {
    if (answered || busy) return
    setBusy(true)

    const { msg, shouldShowHint, questionIsCorrect } = getFeedbackMessage(index, questionData)

    try {
      const clientNonce = makeNonce()
      await saveProgress({
        questionId: question.id,
        isCorrect: questionIsCorrect,
        clientNonce,
      })

      if (questionIsCorrect) {
        try {
          await clearMistake(question.id)
        } catch (e) {
          console.error('[mistakes] clear failed', e)
        }
      } else {
        try {
          await recordMistake(question.id, clientNonce, question.subcategory_id)
        } catch (e) {
          console.error('[mistakes] record failed', e)
        }
      }
    } catch (e) {
      console.error('[progress] save failed', e)
      showToast('記録に失敗しました（ネットワークをご確認ください）', 'error')
      setBusy(false)
      return
    }

    setSelectedIndex(index)
    setAnswered(questionIsCorrect)
    showToast(msg, questionIsCorrect ? 'success' : 'error')
    if (shouldShowHint) setHintVisible(false)
    setBusy(false)
  }

  async function handleNext() {
    if (nextBusy) return
    setNextBusy(true)
    try {
      let nextId: string | null = null


      if (scope === 'review') {
        const ordered = await getOrderedReviewQuestionIds()
        const idx = ordered.indexOf(question.id)
        if (idx >= 0 && idx + 1 < ordered.length) {
          nextId = ordered[idx + 1]
        } else {
          router.push('/review')
          return
        }
      } else if (scope === 'mistakes') {
        const ordered = await getOrderedMistakeQuestionIds()
        const idx = ordered.indexOf(question.id)
        if (idx >= 0 && idx + 1 < ordered.length) {
          nextId = ordered[idx + 1]
        } else {
          router.push('/mistakes')
          return
        }
      } else if (scope === 'free') {

        const ordered = await getOrderedFreeQuestionIds()
        const idx = ordered.indexOf(question.id)
        nextId = idx >= 0 && idx + 1 < ordered.length ? ordered[idx + 1] : ordered[0] ?? null

      } else if (scope === 'sub' || scope === 'cat') {
        const { createClient } = await import('@/lib/supabase/client')
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (user) {
          nextId = await getNextInScope(question.id, user.id, mode === 'all', {
            subcategoryId: scope === 'sub' ? sid : null,
            categoryId: scope === 'cat' ? cid : null,
          })
        }
        if (!nextId) {
          nextId = await getNextForUser(question.id, mode)
        }
      } else {
        nextId = await getNextForUser(question.id, mode)
        if (!nextId) {
          nextId = await getNextRandomQuestionId(question.id, mode === 'all' ? 'all' : 'free')
        }
      }

      if (!nextId) {
        showToast('次の問題が見つかりませんでした', 'error')
        return
      }

      const qs = new URLSearchParams()
      qs.set('mode', mode)
      if (scope === 'sub' && sid) {
        qs.set('scope', 'sub')
        qs.set('sid', sid)
      } else if (scope === 'cat' && cid) {
        qs.set('scope', 'cat')
        qs.set('cid', cid)
      } else if (scope === 'free') {
        qs.set('scope', 'free')
      
      } else if (scope === 'review') {
        qs.set('scope', 'review')
      } else if (scope === 'mistakes') {
        qs.set('scope', 'mistakes')
      }

      router.push(`/contents/${nextId}?${qs.toString()}`)

    } catch (e) {
      console.error('[next] failed', e)
      showToast('次の問題に移動できませんでした', 'error')
    } finally {
      setNextBusy(false)
    }
  }

  function handleBack() {
  router.back()
  }

  async function handleAddToReview() {
    if (reviewAdded) return

    const result = await addToReview({
      questionId: question.id,
      title: question.title,
      subcategoryId: question.subcategory_id,
      contentPath: window.location.pathname,
    })

    if (result.ok) {
      setReviewAdded(true)
      showToast('復習リストに追加しました', 'success')
    } else if ('reason' in result && result.reason === 'auth') {
      router.push('/login')
    } else {
      showToast('復習リストに追加できませんでした', 'error')
    }
  }

  return (
    <>
    <Breadcrumbs
      items={[
        { label: 'トップ', href: '/' },
        { label: '練習問題', href: '/contents' },
        {
          label: chapterInfo
            ? `${chapterInfo.categoryName} | ${chapterInfo.name}`
            : '読み込み中...',
        },
      ]}
    />
    <div className="site-main">
      <div className="max-w-[760px] mx-auto">

    <h2 className="text-2xl font-bold mb-3 mt-4">{question.title}</h2>

    <p className={`${styles.questionBody} mb-6`}>{question.question}</p>

      {question.image && (
        <img src={question.image} alt="問題図" loading="lazy" decoding="async" />
      )}

      <ChoicesTable
        choices={choices}
        fields={fields}
        headers={headers}
        selectedIndex={selectedIndex}
        disabled={answered || busy}
        onSelect={handleSelect}
      />

      {selectedIndex !== null && (
        <div className="your-answer mt-4">
          あなたの解答：{formatChoiceText(selectedIndex, choices[selectedIndex], 'short')}
        </div>
      )}

      {selectedIndex !== null && !revealed && hintVisible && question.hint && (
        <div className="hint mt-3">🧠 {question.hint}</div>
      )}

      {selectedIndex !== null && !revealed && question.hint && !hintVisible && (
        <button
          type="button"
          onClick={() => setHintVisible(true)}
          className="block w-[min(260px,100%)] mx-auto mt-4 py-3 px-4 rounded-full font-semibold text-center bg-white text-accent border border-accent-soft"
        >
          ヒントを見る
        </button>
      )}

      {selectedIndex !== null && !revealed && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="block w-[min(260px,100%)] mx-auto mt-3 py-3 px-4 rounded-full font-semibold text-center bg-white text-accent border border-accent-soft"
        >
          正解と解説を見る
        </button>
      )}

      {revealed && (
        <div className="explanation mt-4">
          <p>
            ✅ 正解：{formatChoiceText(correctIndex, choices[correctIndex], 'short')}
          </p>
          {choices.map((c, idx) => {
            const isAnswer = idx === correctIndex
            const isNegation = question.feedback_mode === 'negation'
            const mark = isAnswer ? '✅ 正解' : isNegation ? '' : '❌ 不正解'
            return (
              <p key={idx} className="mt-2">
                {idx + 1}.{mark && ` ${mark}`}
                <br />
                {explanation[idx] ?? ''}
              </p>
            )
          })}
          {statementExplanations && (
            <>
              <hr className="my-4" />
              <strong>各文の解説</strong>
              {Object.entries(statementExplanations).map(([key, text]) => (
                <p key={key} className="mt-2">
                  【{key}】{text}
                </p>
              ))}
            </>
         )}
       </div>
    )}

    {!reviewAdded && (
      <button
        type="button"
        onClick={handleAddToReview}
        className="block w-[min(260px,100%)] mx-auto mt-4 py-3 px-4 rounded-full font-semibold text-center bg-accent text-white"
      >
        🔁 復習リストに追加
      </button>
    )}

    <div className="nav-buttons flex justify-between gap-4 mt-8">
      <button type="button" onClick={handleBack} className="underline text-accent">
        戻る
      </button>
      <button type="button" onClick={handleNext} disabled={nextBusy} className="underline text-accent disabled:opacity-60">
        次の問題へ
      </button>
    </div>
    </div>
    </div>
    </>
  )
}