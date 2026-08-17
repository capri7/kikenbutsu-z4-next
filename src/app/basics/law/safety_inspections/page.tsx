import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SafetyInspectionsQuiz from './SafetyInspectionsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '乙4保安検査とは？対象施設・定期保安検査と臨時保安検査の違い【乙4対策】',
  description: '保安検査の対象施設・定期保安検査と臨時保安検査の違い・検査を行う機関・検査の頻度。乙4試験対策の練習問題つき。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/safety_inspections',
  },
  robots: 'index,follow',
  openGraph: {
    title: '乙4保安検査とは？対象施設・定期保安検査と臨時保安検査の違い【乙4対策】',
    description: '保安検査の対象施設・定期保安検査と臨時保安検査の違い・検査を行う機関・検査の頻度。乙4試験対策の練習問題つき。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/safety_inspections',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '乙4保安検査とは？対象施設・定期保安検査と臨時保安検査の違い【乙4対策】',
    description: '保安検査の対象施設・定期保安検査と臨時保安検査の違い・検査を行う機関・検査の頻度。乙4試験対策の練習問題つき。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SafetyInspectionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '19節：保安検査' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 保安検査の対象 */}
        <section className={shared.section}>
          <h2>保安検査の対象</h2>
          <div className={shared.bandCard}>
            <p>
              政令で定める<strong>屋外タンク貯蔵所</strong>または<strong>移送取扱所</strong>の<strong>所有者等（所有者・管理者または占有者）</strong>は、政令で定める<strong>時期ごと</strong>に、当該施設に係る<strong>構造および設備</strong>について、政令で定められた事項が<strong>技術上の基準に従って維持</strong>されているかどうかについて、<strong>市町村長等が行う保安に関する検査</strong>を受けなければならない。
            </p>
            <p>この検査を、特に<strong>定期保安検査</strong>という。</p>
            <p>
              なお、<strong>定期点検</strong>は、製造所等の<strong>位置・構造・設備</strong>が<strong>技術上の基準に適合</strong>しているかどうかを<strong>事業者自らが確認する点検</strong>である。
            </p>
            <p>
              また、政令で定める<strong>屋外タンク貯蔵所</strong>の<strong>所有者等（所有者・管理者または占有者）</strong>は、当該屋外タンク貯蔵所について<strong>不等沈下</strong>その他の政令で定める事由が発生した場合には、当該屋外タンク貯蔵所に係る<strong>構造および設備</strong>に関する事項が<strong>技術上の基準に従って維持</strong>されているかどうかについて、<strong>市町村長等が行う保安に関する検査</strong>を受けなければならない。
            </p>
            <p>この検査を、特に<strong>臨時保安検査</strong>という。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>対象施設：</strong>屋外タンク貯蔵所 ＋ 移送取扱所</li>
              <li><strong>義務を負うのは：</strong>所有者等（所有者・管理者または占有者）</li>
              <li><strong>誰が検査する？：</strong>市町村長等が行う「保安に関する検査」</li>
              <li><strong>見るポイント：</strong>構造・設備が技術上の基準どおりに<strong>維持</strong>されているか</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>定期点検</strong>… 事業者が<strong>自分で行う</strong>点検。位置・構造・設備が基準に<strong>適合</strong>しているかを確認する。
              </li>
              <li>
                <strong>定期保安検査</strong>… 市町村長等が行う検査。屋外タンク貯蔵所・移送取扱所の<strong>構造および設備</strong>が基準どおり<strong>維持</strong>されているかを確認する。
              </li>
              <li>
                <strong>臨時保安検査</strong>… 不等沈下など<strong>異常事態</strong>が起きたときに、市町村長等が行う追加の保安検査。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>定期点検</strong>」と「<strong>定期保安検査</strong>」は、<strong>誰が行うか</strong>と<strong>何を確認するか</strong>がよく入れ替え出題される。
              </li>
              <li>「<strong>保安検査</strong>」の対象は、屋外タンク貯蔵所＋移送取扱所に<strong>限定</strong>される点に注意。</li>
              <li>「不等沈下などがあったとき」の検査名は<strong>臨時保安検査</strong>。単なる定期点検や通常の定期保安検査と混同しないこと。</li>
            </ul>
          </div>
        </section>

        {/* 2. 保安検査の概要 */}
        <section className={shared.section}>
          <h2>保安検査の概要</h2>
          <div className={shared.bandCard}>
            <p>保安検査の対象、検査時期および検査事項は次のとおりである。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>定期保安検査の対象は、<strong>特定屋外タンク貯蔵所（容量 10,000kL 以上）</strong>と<strong>特定移送取扱所</strong>。</li>
              <li>屋外タンク貯蔵所は<strong>原則8年に1回</strong>、移送取扱所は<strong>原則1年に1回</strong>検査を受ける。</li>
              <li>特定屋外タンク貯蔵所で<strong>所定の保安措置</strong>を講じているものは、条件付きで<strong>10年または13年</strong>に延長できる。</li>
            </ul>
          </div>

          <h3>定期保安検査（※1）</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">定期保安検査</caption>
              <colgroup>
                <col className={styles.colNull} />
                <col className={styles.colStorage} />
                <col className={styles.colHandlingOffice} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}></th>
                  <th scope="col">屋外タンク貯蔵所</th>
                  <th scope="col">移送取扱所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      保安検査の
                      <br />
                      対象
                    </strong>
                  </th>
                  <td>
                    <strong>特定屋外タンク貯蔵所</strong>
                    <br />
                    （容量 <strong>10,000&nbsp;kL</strong> 以上）
                  </td>
                  <td>
                    <strong>特定移送取扱所</strong>
                    <br />
                    ・配管の延長が<strong>15&nbsp;kmを超える</strong>もの
                    <br />
                    ・<strong>最大常用圧力が0.95&nbsp;MPa以上</strong>かつ延長が<strong>7〜15&nbsp;km以下</strong>のもの
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>検査時期</th>
                  <td>原則 <strong>8年に1回</strong>（※2）</td>
                  <td>原則 <strong>1年に1回</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>検査事項</th>
                  <td>液体危険物タンクの<strong>底部板厚</strong>および<strong>溶接部</strong>の確認</td>
                  <td>移送取扱所の<strong>構造および設備</strong>（政令で定める事項）の確認</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>注釈</h3>
            <p>
              （※1） 定期保安検査の<strong>検査時期</strong>は、次の場合に<strong>所有者等の申請</strong>に基づき、<strong>市町村長等が別に定める時期</strong>とすることができる。
            </p>
            <ol className={shared.compact}>
              <li>危険物の<strong>貯蔵および取扱いを休止</strong>しており、通常の検査期間が適当でないと認められるとき。</li>
              <li><strong>災害その他の非常事態</strong>の発生や<strong>保安上の必要</strong>が生じ、当該時期に検査を行うのが適当でないと認められるとき。</li>
            </ol>
            <p>
              （※2） <strong>特定屋外タンク貯蔵所</strong>のうち、<strong>総務省令で定める保安措置</strong>を講じているものについては、当該措置に応じ、<strong>総務省令で定めるところにより</strong>市町村長等が<strong>10年または13年</strong>のいずれかの期間に定めることができる。（※ 通常は<strong>8年に1回</strong>の検査が原則である。）
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>8年・10年・13年</strong>」の数字だけを入れ替える問題に注意。<strong>8年に1回が原則</strong>で、10年・13年は<strong>保安措置を講じた特定屋外タンク貯蔵所</strong>だけ。
              </li>
              <li>
                移送取扱所の条件は<strong>「15kmを超える」</strong>配管と、<strong>「0.95MPa以上かつ 7〜15km以下」</strong>の組合せ。屋外タンク側の数字とごちゃ混ぜにするひっかけが多い。
              </li>
            </ul>
          </div>

          <h3>臨時保安検査</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">臨時保安検査</caption>
              <colgroup>
                <col className={styles.colItems} />
                <col className={styles.colTank} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}></th>
                  <th scope="col">屋外タンク貯蔵所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      保安検査の
                      <br />
                      対象
                    </strong>
                  </th>
                  <td>
                    <strong>特定屋外タンク貯蔵所</strong>（容量 <strong>10,000&nbsp;kL</strong> 以上）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>実施事由</th>
                  <td>
                    タンクの<strong>不等沈下</strong>の値が、<strong>タンク直径の1％以上</strong>となった場合
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>検査事項</th>
                  <td>液体危険物タンクの<strong>底部板厚</strong>および<strong>溶接部</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>定期保安検査</strong>の対象は、<strong>特定屋外タンク貯蔵所（10,000&nbsp;kL以上）</strong>と<strong>特定移送取扱所</strong>の2つ。
              </li>
              <li>
                屋外タンク貯蔵所の検査時期は<strong>原則8年に1回</strong>。ただし、<strong>保安措置を講じている場合は10年または13年</strong>に延長できる。
              </li>
              <li>特定移送取扱所の定期保安検査は<strong>原則1年に1回</strong>。</li>
              <li>
                <strong>臨時保安検査</strong>は、特定屋外タンク貯蔵所で<strong>タンクの不等沈下がタンク直径の1％以上</strong>となったときに実施する。<strong>特定移送取扱所は対象外なので、施設の違いを問うひっかけに注意。</strong>
              </li>
              <li>
                どちらの保安検査でも、液体危険物タンクの<strong>底部板厚</strong>や<strong>溶接部</strong>など、構造・設備が<strong>技術上の基準に従って維持されているか</strong>を確認する。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SafetyInspectionsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}