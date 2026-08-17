import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FacilityCategoriesQuiz from './FacilityCategoriesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '製造所・貯蔵所・取扱所の区分とは？製造所等の違い【乙4対策】',
  description: '製造所・貯蔵所・取扱所の区分と違い、製造所等の意味、貯蔵所又は取扱所の種類。乙4試験対策の練習問題つき。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/facility_categories',
  },
  robots: 'index,follow',
  openGraph: {
    title: '製造所・貯蔵所・取扱所の区分とは？製造所等の違い【乙4対策】',
    description: '製造所・貯蔵所・取扱所の区分と違い、製造所等の意味、貯蔵所又は取扱所の種類。乙4試験対策の練習問題つき。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/facility_categories',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '製造所・貯蔵所・取扱所の区分とは？製造所等の違い【乙4対策】',
    description: '製造所・貯蔵所・取扱所の区分と違い、製造所等の意味、貯蔵所又は取扱所の種類。乙4試験対策の練習問題つき。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function FacilityCategoriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '5節：製造所・貯蔵所・取扱所の区分' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 製造所等の区分 */}
        <section className={shared.section}>
          <h2>製造所等の区分</h2>
          <div className={shared.bandCard}>
            <p>法令上、<strong>指定数量以上の危険物</strong>を貯蔵・取扱いする施設は、以下の3種類に分類される。</p>
            <ul className={shared.compact}>
              <li>製造所：危険物を製造（合成・分解）する施設</li>
              <li>貯蔵所：危険物をタンクやドラム缶などに入れて貯蔵する施設</li>
              <li>取扱所：製造目的以外で、危険物を取り扱う（給油、販売、移送などのため、他の容器に移し替える）施設</li>
            </ul>
            <p>これら3つの施設はまとめて<strong>「製造所等」</strong>と呼び、以降、本章では「製造所」「貯蔵所」「取扱所」をすべてまとめて「製造所等」と表記する。</p>
          </div>
        </section>

        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>製造所</strong> … 危険物を「つくる」施設（合成・分解など）。</li>
              <li><strong>貯蔵所</strong> … 危険物を「ためる」施設（タンク・ドラム缶など）。</li>
              <li><strong>取扱所</strong> … 危険物を「うごかす」施設（給油・販売・移送など）。</li>
            </ul>
            <p>
              試験では、<strong>「何をしている施設か？」</strong>に注目すると区分を間違えにくくなる。迷ったら「つくる／ためる／うごかす」のどれかに当てはめて判断する。
            </p>
          </div>
        </section>

        {/* 2. 貯蔵所の種類 */}
        <section className={shared.section}>
          <h2>貯蔵所の種類</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">貯蔵所の種類</caption>
              <colgroup>
                <col className={styles.colStorage} />
                <col className={styles.colOverviewStorage} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>貯蔵所</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内貯蔵所</th>
                  <td>屋内の場所において、容器（ドラム缶など）入りの危険物を貯蔵し、または取り扱う貯蔵所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外タンク貯蔵所</th>
                  <td>屋外にあるタンク（地下タンク貯蔵所、簡易タンク貯蔵所、移動タンク貯蔵所を除く）において危険物を貯蔵し、または取り扱う貯蔵所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内タンク貯蔵所</th>
                  <td>屋内にあるタンク（地下タンク貯蔵所、簡易タンク貯蔵所、移動タンク貯蔵所を除く）において危険物を貯蔵し、または取り扱う貯蔵所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>地下タンク貯蔵所</th>
                  <td>地盤下に埋設されているタンク（簡易タンク貯蔵所を除く）において危険物を貯蔵し、または取り扱う貯蔵所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>簡易タンク貯蔵所</th>
                  <td>簡易タンク（600L以下）において危険物を貯蔵し、または取り扱う貯蔵所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移動タンク貯蔵所</th>
                  <td><strong>車両</strong>に固定されたタンクにおいて、危険物を貯蔵し、または取り扱う貯蔵所。タンクローリーが該当する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外貯蔵所</th>
                  <td>
                    屋外の場所（タンクを除く）において、第2類の危険物のうち硫黄もしくは引火性固体（引火点が0℃以上のものに限る）または第4類の危険物のうち第1石油類（引火点が0℃以上のものに限る）、アルコール類、第2石油類、第3石油類、第4石油類、動植物油類を貯蔵し、または取り扱う貯蔵所。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>屋内貯蔵所</strong> … 建物の中で、容器入りの危険物を貯蔵する。</li>
              <li><strong>屋外タンク貯蔵所</strong> … 屋外にタンクが立っているイメージ。</li>
              <li><strong>地下タンク貯蔵所</strong> … 地面の下にタンクが埋設されている。</li>
              <li><strong>簡易タンク貯蔵所</strong> … <strong>600L以下の簡易タンク</strong>がキーワード。</li>
              <li><strong>移動タンク貯蔵所</strong> … <strong>車両に固定されたタンク</strong>を使うタイプ。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>屋外タンク／屋内タンク</strong> … タンクそのものは同じで、違うのは「屋外か屋内か」だけ。問題文で場所を必ずチェックする。</li>
              <li><strong>地下タンク貯蔵所</strong> … キーワードは「地中に埋設」。ただ屋外に置いてあるだけなら屋外タンク貯蔵所になる。</li>
              <li><strong>簡易タンク貯蔵所</strong> … <strong>600L以下</strong>を超えたタンクは別区分。容量の数字をさらっと変えてくる問題に注意する。</li>
              <li><strong>移動タンク貯蔵所</strong> … タンクローリーなど、<strong>車両に固定されたタンク</strong>がポイント。タンクが単体で据え付けられていれば、屋内／屋外タンク貯蔵所側になる。</li>
            </ul>
            <p>
              本試験では、<strong>「タンクの場所」×「タンクの種類」</strong>を入れ替えて問うパターンが多い。問題文に出てくるキーワード（屋内／屋外／地下／簡易タンク／車両固定）を見逃さないようにする。
            </p>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 取扱所の種類 */}
        <section className={shared.section}>
          <h2>取扱所の種類</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">取扱所の種類</caption>
              <colgroup>
                <col className={styles.colHandlingOffice} />
                <col className={styles.colClassification} />
                <col className={styles.colOverviewHandling} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>取扱所</th>
                  <th scope="col">区分</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    給油取扱所<br />
                    <small>ガソリンスタンド</small>
                  </th>
                  <td></td>
                  <td>
                    専ら給油設備によって<strong>自動車等の燃料タンクに直接給油</strong>するための危険物を取り扱う取扱所であり、給油設備によって自動車等の燃料タンクに直接給油するほか、<strong>次の作業を行う取扱所</strong>。
                    <ul className={shared.compact}>
                      <li>給油設備からガソリンを容器に詰め替え、または軽油を車両に固定された容量4000L以下のタンク（※）に注入する作業</li>
                      <li>固定した注油設備から灯油もしくは軽油を容器に詰め替え、または車両に固定された容量4000L以下のタンク（※）に注入する作業</li>
                    </ul>
                    （※）容量2000Lを超えるタンクにおいては、その内部を2000L以下ごとに仕切ったものに限る。
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>販売取扱所</th>
                  <td>第一種</td>
                  <td>
                    第一種、第二種ともに、店舗において容器入りのままで販売するための危険物を取り扱う取扱所。
                    <ul className={shared.compact}>
                      <li>指定数量の倍数が<strong>15以下のもの</strong></li>
                      <li>塗料やシンナーを取り扱う塗料小売店等が該当する。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>第二種</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>指定数量の倍数が<strong>15を超え40以下</strong>のもの</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移送取扱所</th>
                  <td></td>
                  <td>
                    配管及びポンプ並びにこれらに付属する設備によって、危険物の移送の取り扱いを行う取扱所。地下に埋め込んであるパイプ、地上に配設してあるパイプ及びそのポンプなどが該当する。
                    <br />
                    ※移送とは、他の場所に移し送ることをいう。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td></td>
                  <td>給油取扱所、販売取扱所、移送取扱所以外で危険物の取り扱いをする取扱所。燃料に大量の重油等を使用する<strong>ボイラー施設</strong>などが該当する。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>給油取扱所</strong> … 自動車などの<strong>燃料タンクに直接給油</strong>する施設（ガソリンスタンド）。</li>
              <li><strong>販売取扱所</strong> … <strong>容器入りのまま販売</strong>する施設（塗料・シンナーなど）。</li>
              <li><strong>移送取扱所</strong> … 配管やポンプで<strong>危険物を移し送る</strong>施設。</li>
              <li><strong>一般取扱所</strong> … 上の3つ以外で、ボイラー燃料用の重油タンクなどが代表例。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>給油取扱所 vs 一般取扱所</strong> … 自動車の燃料タンクに<strong>直接給油しているかどうか</strong>が決め手。直接給油なら給油取扱所、そうでなければ一般取扱所側。</li>
              <li><strong>販売取扱所</strong> … キーワードは<strong>「容器入りのまま販売」</strong>。容器から燃料タンクに注いでいれば、販売ではなく給油取扱所のイメージに近づく。</li>
              <li><strong>移送取扱所</strong> … 配管＋ポンプで<strong>他の場所へ送り出す</strong>のがポイント。その場でタンクに注ぎ替えるだけなら、給油／一般との区別に注意する。</li>
              <li><strong>一般取扱所</strong> … 「給油・販売・移送のどれでもない大量使用の施設」として、ボイラー施設などをイメージしておく。</li>
            </ul>
            <p>
              問題では、<strong>「どんな作業をしているか」</strong>と<strong>「相手が車（お客さん）か設備か」</strong>を読み取るのがコツ。キーワードを見つけて、<strong>給油／販売／移送／その他</strong>のどれに当てはまるかすばやく判断できるようにしておく。
            </p>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <FacilityCategoriesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}