import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ChiefSafetyOfficersQuiz from './ChiefSafetyOfficersQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '危険物保安統括管理者とは？資格・必要な施設・選任【乙4対策】',
  description:
    '危険物保安統括管理者の選任要件・届出先・資格条件を解説。製造所等の数量要件や自衛消防組織の編成・任務。乙4試験対策の練習問題つき。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chief_safety_officers',
  },
  robots: 'index,follow',
  openGraph: {
    title: '危険物保安統括管理者とは？資格・必要な施設・選任【乙4対策】',
    description:
      '危険物保安統括管理者の選任要件・届出先・資格条件を解説。製造所等の数量要件や自衛消防組織の編成・任務。乙4試験対策の練習問題つき。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chief_safety_officers',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '危険物保安統括管理者とは？資格・必要な施設・選任【乙4対策】',
    description:
      '危険物保安統括管理者の選任要件・届出先・資格条件を解説。製造所等の数量要件や自衛消防組織の編成・任務。乙4試験対策の練習問題つき。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}


export default function ChiefSafetyOfficersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '13節：危険物保安統括管理者' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 危険物保安統括管理者 */}
        <section className={shared.section}>
          <h2>危険物保安統括管理者とは</h2>
          <div className={shared.bandCard}>
            <p>
              この節では、事業所全体の危険物保安をまとめる<strong>「危険物保安統括管理者」</strong>について学ぶ。ひとまず次の3点だけ押さえておけばよい。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>いつ必要？</strong>
                <br />
                同一事業所内に<strong>複数の製造所等</strong>があり、なおかつ<strong>第4類危険物を大量に貯蔵・取扱う</strong>ときに統括管理者が必要になる。
              </li>
              <li>
                <strong>誰に届け出る？</strong>
                <br />
                統括管理者を<strong>選任・解任したとき</strong>は、製造所等の<strong>所有者等 → 市町村長等</strong>（所轄消防長・消防署長等）へ届け出る。
              </li>
              <li>
                <strong>誰がなる？</strong>
                <br />
                法律上の<strong>免状や実務経験の必須条件はない</strong>が、事業の実施を統括管理する立場の人（一般に<strong>工場長などの管理職</strong>）が選ばれる。
              </li>
            </ul>
          </div>

          <h3>概要（くわしく）</h3>
          <div className={shared.bandCard}>
            <p>
              同一事業所内で<strong>複数の製造所等</strong>を有し、かつ<strong>第4類危険物を大量に貯蔵・取り扱う</strong>製造所等の<strong>所有者等</strong>は、<strong>危険物保安統括管理者</strong>を定め、事業所における危険物の<strong>保安に関する業務</strong>を統括して管理させなければならない。
            </p>
            <p>
              製造所等の所有者等は、危険物保安統括管理者を<strong>選任したとき</strong>、または<strong>解任したとき</strong>は、遅滞なく<strong>市町村長等</strong>（所轄消防長・消防署長等）に<strong>届け出</strong>なければならない。
            </p>
            <p>
              危険物保安統括管理者になるための<strong>資格要件は法律上は規定されていない。</strong>ただし、<strong>事業所において事業の実施を統括管理する者</strong>であることが求められるので、一般には<strong>工場長</strong>などの管理職が選任される。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                統括管理者が必要になる条件は「同一事業所内で<strong>複数の製造所等</strong>＋<strong>第4類危険物を大量に貯蔵・取扱う</strong>」のセットで押さえておく。
              </li>
              <li>
                統括管理者を<strong>選任・解任したときの届出義務</strong>は、<strong>所有者等 → 市町村長等</strong>（所轄消防長・消防署長等）である点を整理しておく。
              </li>
              <li>
                統括管理者には<strong>免状の種類や実務経験などの法定資格要件はない</strong>が、<strong>事業の実施を統括管理する立場（工場長など）</strong>が選任されるのがポイント。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                条件は<strong>「第4類危険物を大量に貯蔵・取扱う場合」</strong>。<strong>他の類</strong>の危険物だけでは統括管理者の選任対象外になる点に注意。
              </li>
              <li>
                統括管理者には<strong>甲種＋乙種などの免状要件はない</strong>。保安監督者や施設保安員の<strong>資格要件</strong>とゴッチャにしないようにする。
              </li>
              <li>
                問題文で<strong>「複数の製造所等」</strong>の条件がこっそり抜かれていることがある。<strong>製造所が1か所だけ</strong>なら統括管理者は不要、というパターンを意識して読む。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 危険物保安統括管理者の選任を必要とする製造所等 */}
        <section className={shared.section}>
          <h2>危険物保安統括管理者の選任を必要とする製造所等</h2>
          <div className={shared.bandCard}>
            <p>次の製造所等では、危険物保安統括管理者を<strong>選任しなければならない</strong>。</p>
          </div>

          <h3>危険物保安統括管理者の選任が必要な製造所等と数量要件</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険物保安統括管理者の選任が必要な製造所等と数量要件</caption>
              <colgroup>
                <col className={styles.colPlant} />
                <col className={styles.colRequirements} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象となる製造所等</th>
                  <th scope="col">貯蔵・取扱う第4類危険物の数量要件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>製造所</strong></th>
                  <td>指定数量の<strong>倍数が3,000以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td>指定数量の<strong>倍数が3,000以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移送取扱所</th>
                  <td>指定数量の<strong>倍数が1以上</strong>（= 指定数量以上）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <p>
              ※「指定数量の倍数」は、<u>実数量 ÷ 指定数量</u>で計算する。複数品目や複数設備がある場合は、<u>品目ごとに（数量 ÷ 指定数量）を合算</u>して判断する（例：第4類の異なる品目をまとめて取り扱う場合の合算）。
              <br />
              ※本節は、<strong>「同一事業所で複数の製造所等を有する場合」</strong>を想定している。実務では、事前に所轄消防へ確認しておくと安心である。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                統括管理者が必要になるのは<strong>製造所・一般取扱所・移送取扱所</strong>の3つ。いずれも<strong>同一事業所内で複数の製造所等を有するケース</strong>が前提。
              </li>
              <li>
                <strong>製造所・一般取扱所</strong>は「<strong>指定数量の倍数が3,000以上</strong>」になると統括管理者が必要。
              </li>
              <li>
                <strong>移送取扱所</strong>は「<strong>指定数量の倍数が1以上</strong>（＝ 指定数量以上）」で統括管理者が必要 → 実質的に<strong>第4類を扱えばほぼ必ず必要</strong>になるイメージで押さえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                数量条件の<strong>「3,000倍」</strong>を「300倍」や「30倍」と<strong>1桁ずらして</strong>出すひっかけが多い。ゼロの数までセットで覚えておく。
              </li>
              <li>
                統括管理者の対象は<strong>第4類危険物</strong>を大量に扱う場合のみ。他の類を含めた一般論とごちゃまぜにしないように注意。
              </li>
              <li>
                「<strong>移送取扱所＝ 1倍以上で必要</strong>」は頻出。「<strong>他と同じ3,000倍</strong>」と誤っている選択肢を、確実に見抜けるようにする。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 自衛消防組織 */}
        <section className={shared.section}>
          <h2>自衛消防組織</h2>
          <div className={shared.bandCard}>
            <p>
              この節では、危険物保安統括管理者の選任が必要となる規模の事業所における<strong>自衛消防組織</strong>について学ぶ。
            </p>
            <p>
              そのような事業所の<strong>所有者等</strong>は、当該事業所に<strong>自衛消防組織</strong>を<strong>必ず置かなければならない</strong>。
            </p>
            <p>
              自衛消防組織は、事業所の規模・危険物の種類や数量に応じて、<strong>法令で定める基準以上の人員</strong>と、必要な<strong>消防資機材</strong>（例：化学消防自動車・泡消火設備・無線・防火衣など）を備えて編成する。
            </p>
          </div>

          <h3>自衛消防組織の基本構成（例）</h3>
          <div className={shared.bandCard}>
            <p>代表的な自衛消防組織の構成例は、次のとおりである。</p>
            <ul className={shared.compact}>
              <li><strong>隊長（指揮）</strong>：事案全体の指揮と、対外連絡の統括を行う。</li>
              <li><strong>通報・連絡班</strong>：119番通報、所轄消防・関係部署への連絡、館内放送を担当する。</li>
              <li><strong>初期消火班</strong>：初期消火・延焼防止、消火設備の操作を担当する。</li>
              <li><strong>避難誘導班</strong>：避難経路の確保、来訪者・要配慮者の誘導・点呼を担当する。</li>
              <li><strong>安全・後方支援班</strong>：危険区域の立入管理、救護・資機材補給を担当する。</li>
            </ul>
          </div>

          <h3>日常の体制と訓練</h3>
          <div className={shared.bandCard}>
            <ul className={shared.compact}>
              <li><strong>編成表・連絡網の整備</strong>：当直・夜間・休日の体制も含め、常に連絡が取れる状態にしておく。</li>
              <li><strong>計画・記録</strong>：自衛消防計画の作成・見直し、教育・訓練の実施記録を保存する。</li>
              <li><strong>定期訓練</strong>：通報・初期消火・避難誘導を含む総合訓練を定期的に実施する（昼夜・平日・休日を織り交ぜると効果的）。</li>
              <li><strong>設備点検</strong>：消火器・屋内消火栓・泡設備・無線などの点検と補充を行う。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                自衛消防組織は<strong>事業所単位</strong>で編成する。具体的な人員数や装備基準は、危険物の規模や設備構成によって異なる。
              </li>
              <li>
                <u>「危険物保安統括管理者を要する事業所 ⇒ 自衛消防組織の設置義務」</u>の流れと、<u>自衛消防の主な任務（通報・初期消火・避難誘導）</u>のセットは、試験で<strong>問われやすいポイント</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <ChiefSafetyOfficersQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}