'use client'

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
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

function saveSafe(key: string, obj: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(obj))
  } catch {
    // 保存できなくても、画面の操作は続けられる（記録はページを開いている間だけ残る）
  }
}

// ハイドレーションが終わったかを返す。サーバーでの描画とハイドレーションの間は false、その後は true。
// ブラウザの保存領域はサーバーでは読めないため、true になってから読む。
const noopSubscribe = () => () => {}
function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false)
}

// 正解していない問題を、未回答の状態に戻す（回答回数と「解説を見た」記録は残す）
function clearUnsolved(a: Answer): Answer {
  return a.earned ? a : { ...a, choice: undefined, revealed: false }
}

// 最初の状態を決める。reset=1 のときは空の状態から始める。
function loadInitial(reset: boolean): FreeState {
  const loaded: FreeState = reset ? { index: 0, answers: {} } : readState(localStorage)
  // 正解していない問題は、開き直したときに未回答の状態から始める
  const answers: Record<string, Answer> = {}
  for (const [id, a] of Object.entries(loaded.answers ?? {})) answers[id] = clearUnsolved(a)
  return { ...loaded, answers }
}

export default function FreeQuizClient() {
  const hydrated = useHydrated()
  if (!hydrated) {
    return <div className="site-main">読み込み中...</div>
  }
  return <FreeQuiz />
}

function FreeQuiz() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const reset = searchParams.get('reset') === '1'

  // 初期化：状態の読み込み。ハイドレーションの後にだけ描画されるので、保存領域を直接読める
  const [initial] = useState(() => loadInitial(reset))

  const [questions, setQuestions] = useState<FreeQuestion[]>([])
  const [state, setState] = useState<FreeState>(initial)
  const [hintVisible, setHintVisible] = useState(false)

  // reset=1 で開いたときは、空の状態を保存し、URL から reset=1 を外す（開いたときに1回だけ）
  // 画面の移動はせず、URL だけを書き換える（再読み込みで再びリセットされないように）
  useEffect(() => {
    if (!reset) return
    saveSafe(LS_KEY, initial)
    window.history.replaceState(null, '', '/contents/free')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 問題データの読み込み
  useEffect(() => {
    fetch(`/data/free/free-32.json?v=${Date.now()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data: FreeQuestion[]) => setQuestions(data))
  }, [])

  // 保存された位置が問題数の範囲外なら（問題数が減ったときなど）、先頭の問題を表示する
  const index = state.index >= 0 && state.index < questions.length ? state.index : 0
  const q = questions[index]
  const done = q ? state.answers[q.id] : undefined

  function save(next: FreeState) {
    setState(next)
    saveSafe(LS_KEY, next)
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
    const cur = index
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
    // 正解した後と、解説を見た後は、選択を変えられない
    if (!q || done?.earned === true || done?.revealed === true) return
    const answerNum = Number(q.answer) || 1
    const ok = choice === answerNum

    const prev = state.answers[q.id] || {}
    const attempts = (prev.attempts || 0) + 1
    const nextAnswer: Answer = { ...prev, choice, attempts }
    if (ok && !prev.earned) {
      nextAnswer.earned = true
      if (prev.peeked) nextAnswer.afterPeek = true
      else nextAnswer.firstTry = true
    }
    save({ ...state, answers: { ...state.answers, [q.id]: nextAnswer } })
  }

  function handleShowHint() {
    if (!q) return
    const prev = state.answers[q.id] || {}
    const next: FreeState = {
      ...state,
      answers: { ...state.answers, [q.id]: { ...prev, revealed: true, peeked: true } },
    }
    save(next)
  }

  function handleBack() {
    if (index <= 0) {
      router.back()
      return
    }
    const newIndex = index - 1
    const nq = questions[newIndex]
    const na = nq ? state.answers[nq.id] : undefined
    // 正解していない問題は、表示し直したときに未回答の状態に戻す
    const answers = nq && na ? { ...state.answers, [nq.id]: clearUnsolved(na) } : state.answers
    save({ index: newIndex, answers })
    setHintVisible(false)
  }

  function handleNext() {
    if (!q) return
    const a = state.answers[q.id] || {}
    if (!(a.earned === true || a.peeked === true)) return

    const j = findNextUnsolved(index + 1)
    const newIndex = j >= 0 ? j : Math.min(questions.length - 1, index + 1)

    const nq = questions[newIndex]
    const na = nq ? state.answers[nq.id] : undefined
    // 正解していない問題は、表示し直したときに未回答の状態に戻す
    const answers = nq && na ? { ...state.answers, [nq.id]: clearUnsolved(na) } : state.answers
    save({ index: newIndex, answers })
    setHintVisible(false)
  }

  if (!q) {
    return <div className="site-main">読み込み中...</div>
  }

  const answerNum = Number(q.answer) || 1
  const expFromArray = Array.isArray(q.explanations)
    ? q.explanations[Math.max(0, Math.min(answerNum - 1, (q.choices?.length ?? 1) - 1))]
    : undefined
  const expl = q.explanation ?? expFromArray ?? ''
  const answerText = q.choices?.[answerNum - 1] ?? ''
  const canNext = !!(done?.earned === true || done?.peeked === true)
  // 表示は保存したデータから計算する
  const revealed = done?.revealed === true
  const locked = revealed || done?.earned === true
  const judge: 'ok' | 'ng' | null =
    done?.choice != null && !revealed ? (done.choice === answerNum ? 'ok' : 'ng') : null

  return (
    <div className="site-main">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl font-bold mb-3 mt-4">サインアップなしの無料32問</h2>

        <div className={styles.qHead}>
          <div className={styles.qCounter}>
            <span className={styles.pill}>Q{index + 1}</span>
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
            const checked = done?.choice === idx
            return (
              <li key={idx} className={isCorrect ? 'is-correct' : ''}>
                <label className={`choice inline-flex items-center gap-2 py-2 ${locked ? 'cursor-default' : 'cursor-pointer'}`}>
                  <input
                    type="radio"
                    name="choice"
                    value={idx}
                    checked={checked}
                    onChange={() => handleChoice(idx)}
                    disabled={locked}
                    className={locked ? 'cursor-default' : 'cursor-pointer'}
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

        {done?.choice != null && !revealed && done.earned !== true && hintVisible && q.hint && (
          <div className="hint mt-3">🧠 {q.hint}</div>
        )}

                {done?.choice != null && !revealed && done.earned !== true && q.hint && !hintVisible && (
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
          <p className="text-sm text-gray-600 mb-3">
            メール登録すると、解いた記録がマイページに残り、続きをいつでも再開できます。無料100問＋ヒント解説も使い放題。
          </p>
          <Link href="/signup" className="btn btn-primary inline-block" prefetch={false}>
            メール登録
          </Link>
        </div>

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
              <Link href="/signup" className="btn-cta primary" prefetch={false}>
                無料登録して同期する
              </Link>
              <Link href="/checkout" className="btn-cta" prefetch={false}>
                有料版で本番演習へ
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}