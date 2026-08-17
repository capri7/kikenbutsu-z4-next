import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import TemporaryStorageHandlingQuiz from './TemporaryStorageHandlingQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 8節：仮貯蔵と仮取扱い',
  description:
    '危険物乙4 第1章8節。仮貯蔵と仮取扱いを整理。指定数量以上の危険物を製造所等以外の場所で一時的に貯蔵・取扱うための条件、消防長または消防署長の承認、期間10日以内の制限、製造所の位置基準との関係を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/temporary_storage_handling',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 8節：仮貯蔵と仮取扱い',
    description:
      '危険物乙4 第1章8節。仮貯蔵と仮取扱いを整理。指定数量以上の危険物を製造所等以外の場所で一時的に貯蔵・取扱うための条件、消防長または消防署長の承認、期間10日以内の制限、製造所の位置基準との関係を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/temporary_storage_handling',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 8節：仮貯蔵と仮取扱い',
    description:
      '危険物乙4 第1章8節。仮貯蔵と仮取扱いを整理。指定数量以上の危険物を製造所等以外の場所で一時的に貯蔵・取扱うための条件、消防長または消防署長の承認、期間10日以内の制限、製造所の位置基準との関係を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function TemporaryStorageHandlingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '8節：仮貯蔵と仮取扱い' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 仮貯蔵等の手続き */}
        <section className={shared.section}>
          <h2>仮貯蔵等の手続き</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>指定数量以上の危険物</strong>を貯蔵または取り扱う場合は、原則として<strong>製造所や貯蔵所などの正規の場所</strong>で行わなければならない。しかし、次の条件をすべて満たす場合に限り、<strong>製造所等以外の場所</strong>でも<strong>一時的に危険物を貯蔵・取扱うこと</strong>が認められる。
            </p>
            <ul className={shared.compact}>
              <li>所轄の<strong>消防長または消防署長の承認</strong>を受けること</li>
              <li>期間が<strong>10日以内</strong>であること</li>
            </ul>
            <p>
              このように、法律で使われる<strong>「この限りではない」</strong>という表現は、原則だけを見ると禁止されている行為であっても、一定の条件を満たせば例外として認められるという意味を表している。
            </p>
            <p>
              また、仮に危険物を貯蔵・取扱う場合の<strong>場所の条件</strong>については、政令で定められている<strong>製造所の位置に関する基準</strong>に従う必要がある。さらに、仮貯蔵・仮取扱いにおいても、危険物の管理は<strong>政令で定める技術上の基準に適合した方法</strong>で行わなければならない。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <p>
              仮貯蔵・仮取扱いは、ひとことで言うと<strong>「指定数量以上の危険物を、消防長等の承認を受けて、10日以内だけ正規外の場所に置かせてもらう特例」</strong>である。まずはこのイメージを頭に入れておく。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>仮貯蔵・仮取扱いは<strong>「指定数量以上」</strong>の危険物が対象。</li>
              <li>承認者は<strong>所轄の消防長または消防署長</strong>。</li>
              <li>期間は<strong>10日以内</strong>に限定される（11日以上は不可）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                条文の<strong>「この限りではない」</strong>は、原則では禁止されている行為でも<strong>条件を満たせば例外として認められる</strong>というサイン。仮貯蔵では「消防長等の承認＋10日以内」と<strong>セットで思い出す</strong>。
              </li>
              <li>
                仮の場所でも、<strong>製造所の位置に関する基準</strong>に従うのが原則。「仮だから場所はどこでもよい」「基準はゆるくてよい」と考えると<strong>典型的な誤答パターン</strong>になる。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <TemporaryStorageHandlingQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}