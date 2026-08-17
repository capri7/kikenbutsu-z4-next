'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './FreeQuizClient.module.css'

const LS_KEY = 'free32_progress_v1'

type Answer = {
  choice?: number
  earned?: boolean
  peeked?: boolean
  revealed?: boolean
  attempts?: number
  firstTry?: boolean
  afterPeek?: boolean
}

type FreeState = {
  index: number
  answers: Record<string, Answer>
}

type FreeQuestion = {
  id: string
  title: string
  question?: string
  choices: string[]
  answer: number | string
  hint?: string
  explanation?: string
  explanations?: string[]
}

function readState(storage: Storage): FreeState {
  try {
    const raw = storage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : { index: 0, answers: {} }
  } catch {
    try {
      storage.removeItem(LS_KEY)
    } catch {}
    return { index: 0, answers: {} }
  }
}

function saveSafe(key: string, obj: unknown, storage: Storage): boolean {
  const v = JSON.stringify(obj)
  try {
    storage.setItem(key, v)
    return true
  } catch {
    try {
      sessionStorage.setItem(key, v)
    } catch {}
    return false
  }
}

export default function FreeQuizClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [ready, setReady] = useState(false)
  const [questions, setQuestions] = useState<FreeQuestion[]>([])
  const [state, setState] = useState<FreeState>({ index: 0, answers: {} })
  const [shared, setShared] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [judge, setJudge] = useState<'ok' | 'ng' | null>(null)

  const storageRef = useRef<Storage | null>(null)

  // 初期化：共有モード判定・状態読み込み・resetクエリ処理
  useEffect(() => {
    const useSession = sessionStorage.getItem(LS_KEY) !== null
    const storage = useSession ? sessionStorage : localStorage
    storageRef.current = storage
    setShared(useSession)

    const initial = readState(storage)

    if (searchParams.get('reset') === '1') {
      initial.index = 0
      initial.answers = {}
      saveSafe(LS_KEY, initial, storage)
      router.replace('/contents/free')
    }

    setState(initial)
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 問題データの読み込み
  useEffect(() => {
    fetch(`/data/free/free-32.json?v=${Date.now()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data: FreeQuestion[]) => setQuestions(data))
  }, [])

  useEffect(() => {
    if (questions.length && (state.index < 0 || state.index >= questions.length)) {
      setState((s) => ({ ...s, index: 0 }))
    }
  }, [questions, state.index])

  const q = questions[state.index]
  const done = q ? state.answers[q.id] : undefined

  // 表示状態は問題が切り替わるたびリセット
  useEffect(() => {
    setHintVisible(false)
    setJudge(null)
    setRevealed(!!done?.revealed)
  }, [state.index, done?.revealed])

  function save(next: FreeState) {
    setState(next)
    const storage = storageRef.current ?? localStorage
    const ok = saveSafe(LS_KEY, next, storage)
    if (!ok) storageRef.current = sessionStorage
  }

  function toggleShared(checked: boolean) {
    const src = checked ? localStorage : sessionStorage
    const dst = checked ? sessionStorage : localStorage
    const v = src.getItem(LS_KEY)
    if (v !== null) {
      dst.setItem(LS_KEY, v)
      src.removeItem(LS_KEY)
    } else if (dst.getItem(LS_KEY) === null) {
      dst.setItem(LS_KEY, JSON.stringify(state))
    }
    storageRef.current = dst
    setShared(checked)
  }

  const solvedCount = useMemo(
    () =>
      questions.reduce((n, qq) => {
        const a = state.answers[qq.id]
        return n + (a?.earned === true ? 1 : 0)
      }, 0),
    [questions, state.answers]
  )
  const total = questions.length
  const progressPct = total ? Math.round((solvedCount / total) * 100) : 0

  function findNextUnsolved(start: number): number {
    const cur = state.index
    for (let i = Math.max(0, start); i < questions.length; i++) {
      if (i === cur) continue
      const a = state.answers[questions[i].id] || {}
      if (a.earned !== true && a.peeked !== true) return i
    }
    for (let i = 0; i < Math.min(start, questions.length); i++) {
      if (i === cur) continue
      const a = state.answers[questions[i].id] || {}
      if (a.earned !== true && a.peeked !== true) return i
    }
    for (let i = Math.max(0, start); i < questions.length; i++) {
      if (i === cur) continue
      const a = state.answers[questions[i].id] || {}
      if (a.earned !== true) return i
    }
    for (let i = 0; i < Math.min(start, questions.length); i++) {
      if (i === cur) continue
      const a = state.answers[questions[i].id] || {}
      if (a.earned !== true) return i
    }
    return -1
  }

  function handleChoice(choice: number) {
    if (!q || judge === 'ok') return
    const answerNum = Number(q.answer) || 1
    const ok = choice === answerNum

    const prev = state.answers[q.id] || {}
    const attempts = (prev.attempts || 0) + 1
    const nextAnswer: Answer = { ...prev, choice, attempts, revealed: false }
    if (ok && !prev.earned) {
      nextAnswer.earned = true
      if (prev.peeked) nextAnswer.afterPeek = true
      else nextAnswer.firstTry = true
    }
    save({ ...state, answers: { ...state.answers, [q.id]: nextAnswer } })
    setJudge(ok ? 'ok' : 'ng')
  }

  function handleShowHint() {
    if (!q) return
    const prev = state.answers[q.id] || {}
    const next: FreeState = {
      ...state,
      answers: { ...state.answers, [q.id]: { ...prev, revealed: true, peeked: true } },
    }
    save(next)
    setRevealed(true)
    setHintVisible(true)
  }

  function handleBack() {
  if (state.index <= 0) {
    router.back()
    return
  }
  const newIndex = state.index - 1
  const nq = questions[newIndex]
  const na = nq ? state.answers[nq.id] || {} : {}
  const answers =
    nq && na.peeked && !na.earned ? { ...state.answers, [nq.id]: { ...na, revealed: false } } : state.answers
  save({ index: newIndex, answers })
}

  function handleNext() {
    if (!q) return
    const a = state.answers[q.id] || {}
    if (!(a.earned === true || a.peeked === true)) return

    const j = findNextUnsolved(state.index + 1)
    const newIndex = j >= 0 ? j : Math.min(questions.length - 1, state.index + 1)

    const nq = questions[newIndex]
    const na = nq ? state.answers[nq.id] || {} : {}
    const answers =
      nq && na.peeked && !na.earned ? { ...state.answers, [nq.id]: { ...na, revealed: false } } : state.answers
    save({ index: newIndex, answers })
  }

  if (!ready || !q) {
    return <div className="site-main">読み込み中...</div>
  }

  const answerNum = Number(q.answer) || 1
  const expFromArray = Array.isArray(q.explanations)
    ? q.explanations[Math.max(0, Math.min(answerNum - 1, (q.choices?.length ?? 1) - 1))]
    : undefined
  const expl = q.explanation ?? expFromArray ?? ''
  const answerText = q.choices?.[answerNum - 1] ?? ''
  const canNext = !!(done?.earned === true || done?.peeked === true)
  const suppressCheck = !!(done?.peeked && !done?.earned && !done?.revealed)

  return (
    <div className="site-main">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl font-bold mb-3 mt-4">サインアップなしの無料32問</h2>

        <div className={styles.qHead}>
          <div className={styles.qCounter}>
            <span className={styles.pill}>Q{state.index + 1}</span>
            <span className={styles.solved}>
              正解 {solvedCount}/{total}
            </span>
          </div>
          <div className={styles.qTitle}>{q.title}</div>
          <div className={styles.qProgress}>
            <div className={styles.bar} style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {q.question && <div className="mt-3 mb-4">{q.question}</div>}

        <ul className="choices">
          {q.choices.map((c, i) => {
            const idx = i + 1
            const isCorrect = revealed && idx === answerNum
            const checked = !suppressCheck && done?.choice === idx
            return (
              <li key={idx} className={isCorrect ? 'is-correct' : ''}>
                <label className="choice flex items-center gap-2 py-2">
                  <input
                    type="radio"
                    name="choice"
                    value={idx}
                    checked={checked}
                    onChange={() => handleChoice(idx)}
                    disabled={judge === 'ok'}
                  />
                  <span className="num">{idx}.</span>
                  <span className="text">{c}</span>
                </label>
              </li>
            )
          })}
        </ul>

        {done?.choice != null && (
          <div className="your-answer mt-4">あなたの解答：{done.choice}</div>
        )}

        {done?.choice != null && !revealed && hintVisible && q.hint && (
          <div className="hint mt-3">🧠 {q.hint}</div>
        )}

        {done?.choice != null && !revealed && q.hint && !hintVisible && (
          <button
            type="button"
            onClick={() => setHintVisible(true)}
            className="block w-[min(260px,100%)] mx-auto mt-4 py-3 px-4 rounded-full font-semibold text-center bg-white text-accent border border-accent-soft"
          >
            ヒントを見る
          </button>
        )}

        {done?.choice != null && !revealed && (
          <button type="button" onClick={handleShowHint} className="block w-[min(260px,100%)] mx-auto mt-3 py-3 px-4 rounded-full font-semibold text-center bg-white text-accent border border-accent-soft">
            正解と解説を見る
          </button>
        )}

        {revealed && (
          <div className="explanation mt-4">
            <p>
              ✅ 正解：{answerNum}. {answerText}
            </p>
            <p className="mt-2">{expl}</p>
          </div>
        )}

        {judge && (
          <div className="judge mt-4">
            {judge === 'ok' ? (
              <p className="ok">正解です。</p>
            ) : (
              <p className="ng">
                不正解です。もう一度選んでください。
                <br />
                <span className="text-sm text-gray-600">
                  （無料登録すると、間違えた問題は自動で誤答リストに残ります）
                </span>
              </p>
            )}
          </div>
        )}

        <div className="my-4">
          <p className="font-bold text-base mb-1">
            今の記録、このブラウザを閉じると消えます。
          </p>
          <p className="text-sm text-gray-600 mb-3">
            メール登録すると、解いた記録がマイページに残り、続きをいつでも再開できます。無料100問＋ヒント解説も使い放題。
          </p>
          <Link href="/signup" className="btn btn-primary inline-block">
            メール登録
          </Link>
        </div>

        <label className="block my-3">
          <input type="checkbox" checked={shared} onChange={(e) => toggleShared(e.target.checked)} />{' '}
          共有端末で利用する（チェックすると、ブラウザを閉じたときに進捗が残りません）
        </label>

        <div className="nav-buttons flex justify-between gap-4 mt-8">
          <button type="button" onClick={handleBack} className="underline text-accent">
            戻る
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canNext}
            className="underline text-accent disabled:opacity-60"
          >
            次へ
          </button>
        </div>
        {!canNext && (
          <p className="text-xs text-gray-400 mt-1 text-right">
            ※「正解」または「正解と解説を見る」を押すと次に進めます
          </p>
        )}

        {solvedCount === total && total > 0 && (
          <section className="complete-card mt-8">
            <h3>無料{total}問 完了！</h3>
            <p>無料登録でマイページに同期できます。他の端末でも続きから再開できます。</p>
            <div className="cta-row flex gap-3 mt-3">
              <Link href="/signup" className="btn-cta primary">
                無料登録して同期する
              </Link>
              <Link href="/checkout" className="btn-cta">
                有料版で本番演習へ
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}