import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PreventiveRegulationsQuiz from './PreventiveRegulationsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 15節：予防規程',
  description:
    '危険物乙4 第1章15節。予防規程の目的・策定義務のある製造所等と数量要件（指定数量の倍数）を一覧表で整理。認可・変更命令の手続きや、認可なしの罰則（懲役・罰金）についても、試験に出るポイントを押さえてまとめている。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/preventive_regulations',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 15節：予防規程',
    description:
      '危険物乙4 第1章15節。予防規程の目的・策定義務のある製造所等と数量要件（指定数量の倍数）を一覧表で整理。認可・変更命令の手続きや、認可なしの罰則（懲役・罰金）についても、試験に出るポイントを押さえてまとめている。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/preventive_regulations',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 15節：予防規程',
    description:
      '危険物乙4 第1章15節。予防規程の目的・策定義務のある製造所等と数量要件（指定数量の倍数）を一覧表で整理。認可・変更命令の手続きや、認可なしの罰則（懲役・罰金）についても、試験に出るポイントを押さえてまとめている。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PreventiveRegulationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '15節：予防規程' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 予防規程とは */}
        <section className={shared.section}>
          <h2>予防規程とは</h2>
          <div className={shared.bandCard}>
            <p>
              法令で定める製造所等の<strong>所有者・管理者又は占有者（＝所有者等）</strong>は、当該施設における<strong>火災の発生・拡大を防ぐためのルール（予防規程）</strong>を<strong>自ら定めなければならない。</strong>
            </p>
            <p>
              予防規程は、危険物施設ごとの位置・構造・設備や作業内容など、<strong>各現場の実情に合わせて作る「自主保安のための基準」</strong>である。例えば、作業手順、点検・保守の方法、異常時の連絡・初期対応、教育・訓練の方法などが盛り込まれる。
            </p>
            <p>
              <strong>所有者等と、その危険物取扱いに従事する者（従事者）</strong>は、定められた予防規程の内容をよく理解し、<strong>日常の業務の中で確実に遵守すること</strong>が求められる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              予防規程は作って終わりではなく、<strong>「認可」「周知（教育）」「運用」までセット</strong>で考えることが重要である。認可の手続きや対象となる施設の範囲は、このあと別の項目で整理する。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>誰が？</strong> 製造所等の<strong>所有者等</strong>（施設の管理主体）。</li>
              <li><strong>何を？</strong> 現場の実情に即した<strong>自主保安のためのルール（予防規程）</strong>を定める。</li>
              <li><strong>なぜ？</strong> 火災の<strong>発生・拡大を防ぐ</strong>、つまり<strong>予防</strong>が目的。</li>
              <li><strong>誰が守る？</strong> 所有者等<strong>と従業者全員</strong>が内容を<strong>理解し、遵守</strong>する。</li>
              <li><strong>出題ポイント</strong>：「各施設の実情に合わせる」＝画一的ではない点がキーワード。</li>
              <li><strong>ひっかけ注意</strong>：「定めれば終わり」ではなく、教育（周知）・運用まで含めて実効性を確保する。</li>
              <li><strong>用語整理</strong>：「製造所等」は製造所・貯蔵所・取扱所などの総称。</li>
              <li><strong>覚え方</strong>：「主（所有者）・守（従業者）・自（自主保安）」＝<strong>主・守・自</strong>でセット記憶。</li>
            </ul>
          </div>
        </section>

        {/* 2. 認可と変更命令 */}
        <section className={shared.section}>
          <h2>認可と変更命令</h2>
          <div className={shared.bandCard}>
            <p>
              製造所等の<strong>所有者等</strong>は、予防規程を定めたときは<strong>市町村長等の認可</strong>を受けなければならない。<strong>内容を変更する場合も同様に認可が必要</strong>である。
            </p>
            <p>
              ※<strong>認可</strong>：本来は当事者の行為だけでは効力が生じない場合に、行政庁が同意して効力を完成させる行為（例：予防規程の認可）。
            </p>
            <p>
              ※<strong>許可</strong>：原則として<strong>禁止されている行為</strong>について、特定人・特定の事件に限り禁止を解除する行為（性質が異なる）。
            </p>
            <p>
              予防規程の対象となる製造所等で、<strong>認可を受けずに危険物を貯蔵・取扱い</strong>した者は、<strong>6か月以下の懲役または50万円以下の罰金</strong>（消防法第42条第1項第8号）となる。
            </p>
            <p>
              <strong>市町村長等</strong>は、<strong>火災予防上必要</strong>があるときは、予防規程の<strong>変更を命ずる</strong>ことができる（変更命令）。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>提出先：</strong> 設置場所を管轄する<strong>市町村長等への認可申請</strong>（通常は消防署経由）。</li>
              <li><strong>タイミング：</strong> 予防規程を<strong>作るときも・変えるときも認可が必須</strong>。</li>
              <li><strong>罰則：</strong> 認可なしで危険物を貯蔵・取扱い → 懲役6か月以下または罰金50万円以下。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>認可 vs 許可：</strong> 予防規程は<strong>認可</strong>で整えるルール／行為の禁止解除は<strong>許可</strong>で認める行為。
              </li>
              <li><strong>変更命令：</strong> 市町村長等が<strong>火災予防上必要と判断したときに出せる「命令」</strong>である。</li>
              <li>
                <strong>暗記フレーズ：</strong> 「作るも変えるも“認可”必須」、「必要なら“長”が変更命令」。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「届け出で足りる」→ <strong>×</strong>（必ず<strong>認可</strong>）。</li>
              <li>「許可を受ける」→ <strong>×</strong>（予防規程は<strong>認可</strong>案件）。</li>
              <li>「市町村長等の行政指導」→ <strong>×</strong>（ここでは<strong>変更命令</strong>＝命令行為）。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 予防規程を定めなければならない製造所等 */}
        <section className={shared.section}>
          <h2>予防規程を定めなければならない製造所等</h2>
          <div className={shared.bandCard}>
            <p>
              次の製造所等は、<strong>予防規程の策定が必須</strong>である（「指定数量の<strong>倍数</strong>」で判定）。
            </p>
          </div>

          <h3>予防規程の策定が必要となる製造所等と基準</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">予防規程の策定が必要となる製造所等と基準</caption>
              <colgroup>
                <col className={styles.colPlant} />
                <col className={styles.colRequirements} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象となる製造所等</th>
                  <th scope="col">貯蔵・取扱い量（指定数量の倍数）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>製造所</strong></th>
                  <td><strong>10以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内貯蔵所</th>
                  <td><strong>150以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外タンク貯蔵所</th>
                  <td><strong>200以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外貯蔵所</th>
                  <td><strong>100以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>給油取扱所</th>
                  <td><strong>すべて</strong>（自家用車の屋外給油取扱所を除く）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移送取扱所</th>
                  <td><strong>すべて</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td><strong>10以上</strong>（ただし、下記③を除く）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>見逃し注意！</h3>
            <p>※以下に該当するものは<strong>対象外（除外）</strong>となる。</p>
            <ol className={shared.compact}>
              <li><strong>鉱山保安法</strong>第19条第1項の規定による<strong>保安規定</strong>を定めている製造所等</li>
              <li><strong>火薬類取締法</strong>第28条第1項の規定による<strong>危害予防規程</strong>を定めている製造所等</li>
              <li>
                指定数量の<strong>倍数が30以下</strong>かつ<strong>引火点40℃以上</strong>の<strong>第4類危険物のみ</strong>を容器に詰め替える<strong>一般取扱所</strong>
              </li>
            </ol>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>倍数セット：</strong> 製造所<strong>10</strong>・屋内<strong>150</strong>・屋外タンク<strong>200</strong>・屋外<strong>100</strong>・一般<strong>10</strong>。
                <br />
                リズムで「10・150・200・100・10」。
              </li>
              <li>
                <strong>“すべて”が2つ：</strong> <em>給油取扱所</em>（屋外の自家用車給油所を除く）と<em>移送取扱所</em>は指定数量に関係なく<strong>必ず予防規程が必要</strong>。
              </li>
              <li>
                <strong>一般取扱所の例外：</strong> 指定数量の<strong>倍数が30以下</strong>かつ<strong>引火点40℃以上</strong>の<strong>第4類のみを詰め替える一般取扱所</strong>は<strong>対象外</strong>。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>除外の2法：</strong> <strong>鉱山保安法</strong>の<strong>保安規定</strong>・<strong>火薬類取締法</strong>の<strong>危害予防規程</strong>がある製造所等はすでに他法で管理されているため<strong>予防規程の対象外</strong>。
              </li>
              <li>
                <strong>判定は「指定数量の倍数」：</strong> 倍数＝保有量÷指定数量で計算する。例：指定数量200Lの危険物を2万L → 倍数＝20,000÷200＝<strong>100倍</strong>（屋外貯蔵所なら<strong>対象</strong>）。
              </li>
              <li>
                <strong>施設ごとの性格：</strong> 製造所・一般取扱所は「<strong>10倍以上</strong>」で線引き／屋内・屋外・屋外タンクは<strong>大口の貯蔵施設</strong>として高い倍数が設定されている。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>倍数のすり替え：</strong> 「屋内は200倍」「屋外タンクは150倍」と<strong>150と200を入れ替える問題</strong>は×。
              </li>
              <li>
                <strong>一般取扱所30倍トラップ：</strong> 「一般取扱所は30倍以上で必要」は<strong>誤り</strong>。正しくは<strong>10倍以上（ただし③の例外は除外）</strong>。
              </li>
              <li>
                <strong>除外を無視する文言：</strong> 「鉱山保安法・火薬類取締法の規定があっても予防規程が必要」という文は<strong>×</strong>（この2法に基づく規程があれば<strong>予防規程は不要</strong>）。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <PreventiveRegulationsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}