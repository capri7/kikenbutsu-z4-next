import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FacilitySafetyStaffQuiz from './FacilitySafetyStaffQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '危険物施設保安員とは？資格・必要な施設・役割【乙4対策】',
  description:
    '危険物施設保安員の役割・選任が必要な施設と数量要件・届出義務の有無・資格条件。施設保安員の業務内容（点検・記録・異常時の連絡・応急措置）。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/facility_safety_staff',
  },
  robots: 'index,follow',
  openGraph: {
    title: '危険物施設保安員とは？資格・必要な施設・役割【乙4対策】',
    description:
      '危険物施設保安員の役割・選任が必要な施設と数量要件・届出義務の有無・資格条件。施設保安員の業務内容（点検・記録・異常時の連絡・応急措置）。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/facility_safety_staff',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '危険物施設保安員とは？資格・必要な施設・役割【乙4対策】',
    description:
      '危険物施設保安員の役割・選任が必要な施設と数量要件・届出義務の有無・資格条件。施設保安員の業務内容（点検・記録・異常時の連絡・応急措置）。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function FacilitySafetyStaffPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '14節：危険物施設保安員' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 概要 */}
        <section className={shared.section}>
          <h2>危険物施設保安員とは</h2>
          <div className={shared.bandCard}>
            <p>
              この節では、製造所等の<strong>構造・設備の保安</strong>を担当する「<strong>危険物施設保安員</strong>」について学ぶ。ひとまず次の3点だけ押さえておけばよい。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>どんな役割？</strong>
                <br />
                製造所等の構造・設備を対象に、巡視・点検や異常時の措置、保安記録の作成・保管などを行う「設備側の保安担当」である。
              </li>
              <li>
                <strong>誰が選任する？</strong>
                <br />
                法令で定める<strong>製造所等の所有者等</strong>が、事業所ごとに危険物施設保安員を<strong>選任しなければならない</strong>。
              </li>
              <li>
                <strong>ほかの保安役職との違いは？</strong>
                <br />
                「取扱作業の保安」は<strong>危険物保安監督者</strong>、「構造・設備の保安」は<strong>危険物施設保安員</strong>が担当する、という分担を意識しておく。
              </li>
            </ul>
          </div>

          <h3>概要（くわしく）</h3>
          <div className={shared.bandCard}>
            <p>
              法令で定める<strong>製造所等の所有者等</strong>は、<strong>危険物施設保安員</strong>を<strong>定めなければならない</strong>。危険物施設保安員は、製造所等の<strong>構造・設備の保安</strong>に関する業務を行う。
            </p>
            <p>
              危険物施設保安員は、<strong>危険物保安監督者</strong>の指揮の下で、日常の巡視・点検、異常時の措置、保安記録の作成・保管などの業務を実施する（具体的な内容は保安規程に従う）。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <p>
              学習メモ：危険物施設保安員は<strong>「選任義務のある役職」</strong>である。危険物の取扱そのものを行う場合は、別途<strong>危険物取扱者</strong>の要件（本人が有資格者、または有資格者の立会い）が関わる点にも注意しておく。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「取扱作業の保安」＝危険物保安監督者、「構造・設備の保安」＝危険物施設保安員</strong>という役割分担を混同しない。
              </li>
              <li>
                危険物施設保安員は<strong>危険物保安監督者の指揮の下</strong>で、巡視・点検・異常時の措置・記録作成などを行うという位置づけをセットで覚えておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 危険物施設保安員の選任を必要とする製造所等 */}
        <section className={shared.section}>
          <h2>危険物施設保安員の選任を必要とする製造所等</h2>
          <div className={shared.bandCard}>
            <p>次の製造所等では、危険物施設保安員を<strong>定めなければならない</strong>。</p>
          </div>

          <h3>危険物施設保安員を定めなければならない製造所等と数量要件</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険物施設保安員を定めなければならない製造所等と数量要件</caption>
              <colgroup>
                <col className={styles.colPlant} />
                <col className={styles.colRequirements} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象となる製造所等</th>
                  <th scope="col">貯蔵・取扱う危険物の数量等</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>製造所</strong></th>
                  <td>指定数量の<strong>倍数が100以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td>指定数量の<strong>倍数が100以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移送取扱所</th>
                  <td><strong>指定数量の多少にかかわらず、すべての移送取扱所で定める</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              ※「指定数量の倍数」は、<u>実数量 ÷ 指定数量</u>で算定する。複数品目がある場合は、品目ごとに（数量 ÷ 指定数量）を合算して判断する。
            </p>
            <p>※鉱山保安法など他法令の適用を受ける<strong>製造所・移送取扱所・一般取扱所</strong>は対象外である。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>危険物施設保安員が必要になるのは<strong>製造所・一般取扱所・移送取扱所</strong>の3種類。</li>
              <li>
                <strong>製造所・一般取扱所</strong>はいずれも「<strong>指定数量の倍数が100以上</strong>」で選任が必要になる。（保安統括管理者の「3,000倍」との違いもセットで覚えると理解しやすい）
              </li>
              <li>
                <strong>移送取扱所</strong>は<strong>数量条件に関係なくすべて選任が必要</strong>。「移送取扱所には必ず施設保安員がいる」イメージで押さえておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                数量条件の<strong>「100倍」</strong>を「10倍」「30倍」「300倍」などに1ケタずらして出すパターンが多い。ゼロの数までセットで覚えておく。
              </li>
              <li>
                移送取扱所について「<strong>指定数量の倍数が100以上</strong>で必要」と他と同じ条件にしている選択肢は<strong>誤り</strong>。
              </li>
              <li>
                鉱山保安法など<strong>他法令の適用を受ける施設</strong>は対象外になる点も、脚注レベルのひっかけとして意識して読んでおく。
              </li>
            </ul>
          </div>

          <h3>選任・届出に関する事項</h3>
          <div className={shared.bandCard}>
            <p>
              危険物施設保安員になるための<strong>法律上の資格要件は定められていない</strong>。そのため、<strong>危険物取扱者でない者や実務未経験者</strong>であっても選任できる。ただし、必要な教育・訓練をどのように実施するかは<strong>事業者の責任</strong>となる。
            </p>
            <p>危険物施設保安員を<strong>選任・解任したときの届出義務はない</strong>。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              役割のイメージ（工場の場合）は、<strong>危険物保安統括管理者＝工場長</strong>／<strong>危険物保安監督者＝課長</strong>／<strong>危険物施設保安員＝主任</strong>と考えると整理しやすい。実務では事業所の規模や組織によって役職名が変わることがある。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                数量基準は<strong>製造所・一般取扱所＝指定数量の100倍以上</strong>、<strong>移送取扱所＝数量に関係なくすべて</strong>のセットで押さえておく。
              </li>
              <li>
                危険物施設保安員には<strong>法律上の資格要件がない</strong>のが特徴。誰を選任するか、教育・訓練をどう行うかは<strong>事業者の判断と責任</strong>になる。
              </li>
              <li>
                <strong>選任・解任しても届出義務はない</strong>点をしっかり覚える（危険物保安統括管理者と<strong>対比</strong>しておくと忘れにくい）。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「100倍以上」</strong>と<strong>「3,000倍以上」</strong>（危険物保安統括管理者）、<strong>「30倍を超える」</strong>（屋外貯蔵所の保安監督者）など、<strong>倍数だけを入れ替えたひっかけ</strong>がよく出る。
              </li>
              <li>
                「危険物施設保安員も危険物取扱者の資格が必要」「選任・解任の届出が必要」などの記述は、<strong>ほかの役職のルールを混ぜた誤り</strong>と判断する。
              </li>
              <li>
                移送取扱所について「指定数量の100倍以上のみ」と書かれていたら誤り。<strong>移送取扱所は数量に関係なくすべてが対象</strong>である点を確認する。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 危険物施設保安員の業務 */}
        <section className={shared.section}>
          <h2>危険物施設保安員の業務</h2>
          <div className={shared.bandCard}>
            <p>製造所等の<strong>所有者等</strong>は、危険物施設保安員に次の業務を<strong>行わせなければならない</strong>。</p>
            <ul className={shared.compact}>
              <li>
                <strong>定期・臨時の点検</strong>：製造所等の<strong>構造・設備</strong>が技術上の基準に適合しているか確認する。
              </li>
              <li>
                <strong>記録・保存</strong>：点検箇所の状況と<strong>保安のために講じた措置</strong>を記録し、所定の期間<strong>保存</strong>する。
              </li>
              <li>
                <strong>異常時の連絡・措置</strong>：構造・設備に<strong>異常を発見</strong>した場合は、<strong>危険物保安監督者</strong>など関係者に速やかに<strong>連絡</strong>し、状況に応じて<strong>必要な措置</strong>を講じる。
              </li>
              <li>
                <strong>火災時の応急措置</strong>：<strong>火災が発生</strong>したとき、または<strong>火災の危険が著しい</strong>ときは、危険物保安監督者と協力して<strong>通報・初期消火・遮断・避難誘導</strong>などの<strong>応急措置</strong>を行う。
              </li>
              <li>
                <strong>日常の保安管理</strong>：計測装置・制御装置・<strong>安全装置</strong>などの機能が適正に保たれるよう、日常の<strong>点検・調整・必要な補修</strong>を行う。
              </li>
              <li>
                <strong>その他の保安業務</strong>：構造・設備の<strong>保安に関して必要な業務</strong>を行う。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              危険物施設保安員の業務は<strong>「構造・設備の保安」</strong>が中心である。キーワードは<strong>点検 → 記録・保存 → 異常時の連絡 → 応急措置</strong>の流れ。
            </p>
            <p>
              とくに<u>誰に連絡するか（危険物保安監督者）</u>と、<u>何を保存するか（点検結果と講じた措置）</u>をセットで押さえておくと、選択肢の言い換え問題に強くなる。
            </p>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <FacilitySafetyStaffQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}