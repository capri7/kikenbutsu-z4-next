// src/app/basics/physical_chemistry/extinguishing_agents/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ExtinguishingAgentsQuiz from './ExtinguishingAgentsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 8節：消火と消火剤',
  description:
    '危険物乙4 第2章8節。消火の三方法・四方法（冷却・窒息・除去・抑制）、火災の区分（A・B・C）、水・強化液・泡・ハロゲン化物・二酸化炭素・粉末・金属火災用の各消火剤の特性を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/extinguishing_agents',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 8節：消火と消火剤',
    description:
      '危険物乙4 第2章8節。消火の三方法・四方法（冷却・窒息・除去・抑制）、火災の区分（A・B・C）、水・強化液・泡・ハロゲン化物・二酸化炭素・粉末・金属火災用の各消火剤の特性を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/extinguishing_agents',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 8節：消火と消火剤',
    description:
      '危険物乙4 第2章8節。消火の三方法・四方法（冷却・窒息・除去・抑制）、火災の区分（A・B・C）、水・強化液・泡・ハロゲン化物・二酸化炭素・粉末・金属火災用の各消火剤の特性を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ExtinguishingAgentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '8節：消火と消火剤' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 燃焼の三要素と消火の三方法・四方法 */}
        <section className={shared.section}>
          <h2>燃焼の三要素と消火の三方法・四方法</h2>

          <div className={shared.bandCard}>
            <h3>燃焼の三要素</h3>
            <p>火が燃え続けるためには、次の<strong>三つの条件</strong>がそろっている必要があります。</p>
            <ol className={shared.compact}>
              <li><strong>可燃物</strong>：燃える物質</li>
              <li><strong>酸素（酸化剤）</strong>：燃焼を支える酸素・酸化剤</li>
              <li><strong>熱源（点火源）</strong>：十分な温度・点火源</li>
            </ol>
            <p>
              したがって、この三つのうち<strong>いずれか一つでも欠ければ、燃焼は止まります</strong>。
              消火では、この「三要素のどれを断つか」という視点がとても大切です。
            </p>

            <h3>消火の三方法（=三原則）</h3>
            <p>燃焼の三要素のどれを断つかによって、消火方法は次の<strong>三つの基本パターン</strong>に整理できます。</p>
            <ol className={shared.compact}>
              <li><strong>冷却</strong>：水などで温度を下げ、着火点未満にします。</li>
              <li><strong>窒息</strong>：泡・二酸化炭素などで酸素を遮り、燃焼面を覆います。</li>
              <li><strong>除去</strong>：可燃物や点火源を取り除き、燃焼条件を断ちます。</li>
            </ol>

            <h3>消火の四方法と抑制効果</h3>
            <p>
              これに加えて、燃焼の連続する<strong>化学反応（連鎖反応）を抑える</strong>ことで消火する方法があります。
              これを<strong>抑制効果</strong>（負触媒効果）といい、三方法に加えて<strong>「消火の四方法」</strong>とするときの4つ目に数えます。
            </p>
            <p>代表的な消火剤の例は、ハロゲン化物消火剤や粉末消火剤（炭酸水素塩系）などです。</p>

            <p>
              <small>
                <strong>用語メモ：</strong>
                触媒は化学反応の速さを変えますが、自分自身は変化しない物質です。反応を遅くするものを<strong>負触媒</strong>といいます。
              </small>
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>燃焼の三要素：可燃物・酸素（酸化剤）・熱源（点火源）</li>
              <li>消火の三方法：冷却・窒息・除去</li>
              <li>四方法にするときは「抑制効果」が4つ目に加わります。</li>
            </ul>
          </div>
        </section>

        {/* 2. 除去効果による消火（除去消火法） */}
        <section className={shared.section}>
          <h2>除去効果による消火（除去消火法）</h2>

          <div className={shared.bandCard}>
            <h3>除去消火とは</h3>
            <p>
              <strong>除去消火</strong>は、燃焼に必要な条件のうち、とくに<strong>可燃物（可燃性蒸気を含む）</strong>や<strong>その供給源</strong>を取り除いて、燃焼を成り立たなくする方法です。
            </p>
            <p>燃える材料そのものを取り除いたり、燃料の流れ・可燃性ガスの発生を止めたりして、「燃えるもの」そのものを断つのがポイントです。</p>

            <h3>身近な除去消火の例</h3>
            <p>
              身近な例として、ロウソクの炎を息で吹き消す方法があります。息を吹きかけることで<strong>炎の近くにある可燃性蒸気を吹き払い</strong>、燃焼条件を断つことで火を消すことができます。
            </p>
            <p>
              もう一つの例は、燃焼しているガスコンロの<strong>元栓やバルブを閉める</strong>場合です。燃料ガスの供給が絶たれることで火が消えますが、これは<strong>燃料供給源を除去</strong>した結果による消火です。
            </p>

            <h3>実務でよく出る除去効果</h3>
            <p>実務では、次のような操作も除去効果に含まれます。</p>
            <ul className={shared.compact}>
              <li>油の流出火災で<strong>流出を停止する</strong>。</li>
              <li>可燃物を<strong>安全な場所へ搬出する</strong>。</li>
              <li>可燃性ガスが滞留している場所を<strong>換気する</strong>。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>除去消火は「可燃物」または「可燃性ガス・燃料の供給源」を断つ方法です。</li>
              <li>燃焼反応そのものを抑える<strong>抑制効果</strong>とは別の考え方であることを区別しておきましょう。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>見逃し注意！</h3>
            <p>
              除去は「燃えるもの（可燃物・可燃性混合気）」や「その供給」を断つのが中心です。燃焼の化学反応を遅らせる<strong>抑制（負触媒効果）</strong>は、消火の四方法のうち別枠の方法として扱われます。用語を混同しないようにしてください。
            </p>
          </div>
        </section>

        {/* 3. 窒息効果による消火（窒息消火法） */}
        <section className={shared.section}>
          <h2>窒息効果による消火（窒息消火法）</h2>

          <div className={shared.bandCard}>
            <h3>窒息消火とは</h3>
            <p>
              <strong>窒息消火</strong>は、燃焼に必要な<strong>酸素の供給を遮断</strong>し、燃焼面を空気から隔てることで消火する方法です。炎の周囲を不燃性の物質で覆い、酸素濃度を低下させることで火を消します。
            </p>

            <h3>身近な窒息消火の例</h3>
            <p>
              代表的な方法として、燃焼物を<strong>泡（フォーム）</strong>や<strong>二酸化炭素（CO₂）</strong>、窒素などの不燃性ガスで覆います。泡は油面を覆って空気との接触を断ち、CO₂・窒素は燃焼域の酸素濃度を下げます。
            </p>
            <p>
              <strong>アルコールランプにふたをする</strong>、たき火に<strong>砂をかける</strong>といった身近な方法も、いずれも炎を空気から隔てる<strong>窒息効果による消火</strong>の例です。
            </p>

            <h3>酸素濃度と消炎</h3>
            <p>
              空気中の酸素濃度は<strong>約21 vol%</strong>です。一般に石油類は、周囲の酸素濃度が<strong>約14〜15 vol%以下</strong>になると燃焼が持続できなくなり、自然に消炎します。「酸素濃度をどこまで下げれば火が消えるか」という目安として覚えておきましょう。
            </p>

            <h3>粉末消火剤と窒息・抑制効果</h3>
            <p>
              <strong>粉末消火剤</strong>は油火災に対して強い消火力を示します。粉末が油面を覆うことで<strong>窒息効果</strong>が働くほか、炭酸水素塩系などの粉末は、燃焼の<strong>連鎖反応を抑制する効果（抑制効果）</strong>も併せ持ちます。つまり、粉末消火剤は<strong>窒息＋抑制</strong>の二つの効果で火を消していると考えられます。
            </p>

            <p>
              <small>
                <strong>学習メモ：</strong>
                窒息消火は「<strong>酸素を断つ</strong>」方法です。泡＝油面を覆う、CO₂＝酸素濃度を下げる、砂＝物理的に覆う、と整理しておくと覚えやすくなります。
                CO₂は密閉空間で使用すると、人体への酸欠リスクが高まるため注意が必要です。また、再着火を防ぐためには、熱源を下げる<strong>冷却効果</strong>と組み合わせることも重要です。
              </small>
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>窒息消火は、燃焼に必要な<strong>酸素の供給を遮断</strong>する方法です。</li>
              <li>空気中の酸素濃度は<strong>約21 vol%</strong>、多くの石油類は<strong>約14〜15 vol%以下</strong>で燃焼が続かなくなります。</li>
              <li>粉末消火剤は<strong>窒息効果</strong>に加えて、燃焼の<strong>連鎖反応を抑制する抑制効果</strong>も持つことがよく問われます。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>見逃し注意！</h3>
            <p>
              窒息消火は「<strong>酸素を断つ方法</strong>」であり、燃焼の化学反応そのものを遅らせる<strong>抑制効果</strong>とは考え方が異なります。
            </p>
            <p>
              粉末消火剤のように<strong>窒息＋抑制</strong>の両方を持つものもあるため、用語と効果の対応関係を混同しないように整理しておきましょう。
            </p>
          </div>
        </section>

        {/* 4. 冷却効果による消火（冷却消火法） */}
        <section className={shared.section}>
          <h2>冷却効果による消火（冷却消火法）</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>冷却消火</strong>は、燃焼物から熱を奪って温度を下げ、<strong>引火点または発火点より低い温度</strong>にすることで燃焼の継続を止める方法です。代表的な消火剤は<strong>水</strong>で、比熱と気化熱が大きいため、効率よく温度を低下させることができます。
            </p>
            <p>
              とくに<strong>固体の火災</strong>では、加熱によって<strong>熱分解</strong>が進むと可燃性ガス・蒸気が発生し、燃焼が続きます。冷却により熱分解を抑え、可燃性ガスの発生を減らすことで消火します。
            </p>
            <p>
              実務上は、散水・流水・噴霧（水ミスト）などによって<strong>燃焼面とその周囲の温度を下げる</strong>ことが有効です。粉末やCO₂など他の消火剤にも一部に冷却効果はありますが、主な作用は<strong>窒息</strong>や<strong>抑制</strong>である点を区別して覚えておきましょう。
            </p>
            <p>
              <small>
                <strong>試験・安全メモ：</strong>
                水による冷却は有効な場面が多い一方で、<u>電気火災</u>（感電・機器損傷のおそれ）、<u>油火災</u>（燃焼液体の飛散・拡大のおそれ）、<u>活性金属火災</u>（ナトリウムなどと激しく反応）には不適切です。どの火災にどの消火剤が適合するかを確認しておくことが重要です。
              </small>
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>冷却消火は、温度を下げて<strong>引火点・発火点未満</strong>にする方法です。</li>
              <li>代表的な消火剤は<strong>水</strong>。比熱・気化熱が大きく、冷却効果が高いことをおさえましょう。</li>
              <li>固体火災では、熱分解を抑えて<strong>可燃性ガスの発生を減らす</strong>イメージで整理しておきます。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>見逃し注意！</h3>
            <p>冷却消火に水がよく使われますが、<strong>電気火災・油火災・活性金属火災</strong>には不適切です。</p>
            <p>また、粉末消火剤は「冷却」が主作用ではなく、<strong>窒息＋抑制効果</strong>が中心です。作用の違いを問うひっかけ問題に備えて整理しておきましょう。</p>
          </div>
        </section>

        {/* 5. 火災の区分 */}
        <section className={shared.section}>
          <h2>火災の区分</h2>
          <p>火災は、主に燃焼物の種類や性状（それに応じた消火剤の適否）によって、大きく次のように区分されます。</p>

          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">火災の区分</caption>
              <colgroup>
                <col className={styles.t1ColClassification} />
                <col className={styles.t1ColOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>火災の区分</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>A火災<br />（普通火災）</th>
                  <td>紙・木材・布・繊維類などの<strong>固体</strong>が燃焼する火災です。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>B火災<br />（油火災）</th>
                  <td>ガソリン・灯油・軽油・アルコール類・食用油などの<strong>可燃性液体</strong>が燃焼する火災です。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>C火災<br />（電気火災）</th>
                  <td>電気設備または通電中の機器（配線・変圧器・モーター等）に<strong>起因する</strong>火災です。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. 消火剤の分類と消火効果 */}
        <section className={shared.section}>
          <h2>消火剤の分類と消火効果</h2>
          <div className={shared.bandCard}>
            <p>
              消火剤には、次のような種類があります。それぞれの<strong>主な消火作用（除去・窒息・冷却・抑制）</strong>と、<strong>適応する火災の種類</strong>をセットで整理していきましょう。
            </p>
            <ol className={shared.compact}>
              <li>水消火剤（冷却効果・A火災が中心）</li>
              <li>強化液消火剤（冷却＋浸潤・A火災の強化版）</li>
              <li>泡消火剤（窒息＋冷却・B火災に有効）</li>
              <li>ハロゲン化物消火剤（抑制効果・精密機器など）</li>
              <li>二酸化炭素（不活性ガス）消火剤（窒息効果・C火災など）</li>
              <li>粉末消火剤（窒息＋抑制・幅広い火災に対応）</li>
              <li>金属火災用消火剤（特殊なD火災用）</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>とくに<strong>金属火災用消火剤</strong>は、ナトリウムなどの<strong>金属火災専用</strong>で、他の火災には原則として使用できない点が試験でもよく問われます。</p>
          </div>
        </section>

        {/* 1. 水消火剤 */}
        <section className={shared.section}>
          <h3>1. 水消火剤</h3>
          <div className={shared.bandCard}>
            <p>
              水は<strong>比熱</strong>と<strong>蒸発熱（気化熱）</strong>が大きいため、<strong>冷却効果</strong>に非常に優れた消火剤です。主な用途は<strong>普通火災（A火災）</strong>で、広く使用されています。
            </p>
            <p>
              水は蒸発すると体積が<strong>約1,700倍</strong>になります。発生した水蒸気によって、燃焼域の<strong>酸素や可燃性ガスが希釈</strong>される作用も併せて期待できますが、<strong>主作用は冷却</strong>である点を押さえておきましょう。
            </p>
            <p>
              一方で、<strong>油火災（B火災）</strong>や<strong>電気火災（C火災）</strong>には原則として<strong>使用できません</strong>。油は水より軽く水面に広がるため、<u>水をかけると燃焼液が飛散・拡大</u>するおそれがあります。また水には導電性があるため、<u>通電中の機器に用いると感電の危険</u>があります。
            </p>
            <p>
              ただし、<strong>専用の水噴霧（水ミスト）設備や水蒸気</strong>を用いる場合は、微細な粒子が均一に広がることで<strong>冷却・希釈</strong>が働き、<strong>一部の油火災や電気設備火災</strong>に適用されることがあります。<u>適用可否は設備の規格・設置条件に依存</u>しますので、一般の水消火器とは区別して学習しましょう。
            </p>
            <p><small>※詳しくは「第1章：消火設備と設置基準」を参照してください。</small></p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>水消火剤の<strong>主作用は冷却効果</strong>であり、主な適用火災は<strong>普通火災（A火災）</strong>です。</li>
              <li>水は蒸発すると<strong>体積が約1,700倍</strong>になり、水蒸気による<strong>酸素・可燃性ガスの希釈</strong>も副次的に働きます。</li>
              <li><strong>油火災（B火災）・電気火災（C火災）には原則使用不可</strong>。油には飛散・拡大、電気には感電の危険があります。</li>
              <li><strong>水ミスト設備・水蒸気設備</strong>では、一部の油火災・電気設備火災に適用されることもありますが、<strong>一般の水消火器とは別物</strong>として区別して覚えます。</li>
            </ul>
          </div>
        </section>

        {/* 2. 強化液消火剤 */}
        <section className={shared.section}>
          <h3>2. 強化液消火剤</h3>
          <div className={shared.bandCard}>
            <p>
              強化液消火剤は、水に<strong>アルカリ金属塩（炭酸カリウム）</strong>を加えた<strong>濃厚な水溶液</strong>で、アルカリ性を示します。<strong>-20℃</strong>でも凍結しないため、寒冷地でも使用できます。
            </p>
            <p>この消火剤は、<strong>冷却効果</strong>に加えて、燃焼を<strong>科学的に抑制する効果（負触媒効果）</strong>を備えています。</p>
            <p>普通火災に対しては<strong>冷却効果</strong>が大きく、また水溶液で浸透性があることから<strong>再燃防止効果</strong>もあります。</p>
            <p>
              <strong>油火災および電気火災</strong>には、<strong>噴霧状</strong>に放射することで適応します。特に油火災に対しては、<strong>抑制効果</strong>が大きいことがポイントです。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>強化液消火剤は、<strong>炭酸カリウムを溶かした濃厚な水溶液</strong>で、<strong>アルカリ性</strong>を示します。</li>
              <li><strong>-20℃でも凍結しない</strong>ため、寒冷地での使用に適しています。</li>
              <li>主な作用は<strong>冷却＋負触媒による抑制</strong>で、<strong>A・B・C火災の一部に適応</strong>します。</li>
              <li><strong>油火災や電気火災には噴霧状で使用</strong>することが条件になる点も押さえておきましょう。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>強化液消火剤は見た目は「水系」ですが、<strong>適応火災が広く、B・C火災にも使える</strong>点が普通の<strong>水消火剤</strong>と異なります。</p>
            <p>また、<strong>泡消火剤は「窒息＋冷却」</strong>が中心であるのに対し、強化液消火剤は<strong>冷却＋負触媒による抑制</strong>がキーワードです。作用の違いを問うひっかけ問題に備えて整理しておきましょう。</p>
          </div>
        </section>

        {/* 3. 泡消火剤 */}
        <section className={shared.section}>
          <h3>3. 泡消火剤</h3>
          <div className={shared.bandCard}>
            <p>泡消火剤は、<strong>一般泡</strong>と<strong>水溶性液体用（耐アルコール泡）</strong>の2種類です。</p>

            <dl className={shared.summaryGrid}>
              <div className={shared.summaryGridRow}>
                <dt><strong>一般泡</strong></dt>
                <dd>
                  <p><strong>A火災（普通火災）</strong>には<strong>冷却</strong>と<strong>窒息</strong>で消火します。</p>
                  <p><strong>B火災（油火災）</strong>では、油面を泡で覆って酸素（空気）を遮断する<strong>窒息効果</strong>が中心です。</p>
                </dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>水溶性液体用（耐アルコール泡）</strong></dt>
                <dd>
                  <p>アルコール類などの<strong>水溶性可燃液体</strong>では、一般泡は溶けて崩れやすいため不向きです。</p>
                  <p>泡が溶けにくい組成で表面を覆い、同様に<strong>窒息</strong>させます。</p>
                </dd>
              </div>
            </dl>
          </div>

          <h3>泡消火器のタイプ</h3>
          <p>泡消火器は、泡の作り方の違いにより次の2タイプがあります。</p>

          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">泡消火器のタイプ</caption>
              <colgroup>
                <col className={styles.t2ColTypes} />
                <col className={styles.t2ColDiff} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>泡消火器の<br />タイプ</th>
                  <th scope="col">泡の作り方の違い</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学泡タイプ</th>
                  <td>
                    薬剤の化学反応で生じた<strong>二酸化炭素</strong>を泡として包み込みます。
                    ※充填された水溶液の<strong>有効期限は1年</strong>とされ、再充填などの整備・点検が必要です。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>機械泡タイプ<br />（空気泡タイプ）</th>
                  <td>ノズル等で<strong>空気を混入</strong>して機械的に泡を作ります。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>見逃し注意！</h3>
            <ul className={shared.compact}>
              <li>泡＝「表面を覆って酸素を遮断」が基本。</li>
              <li>水溶性液体には耐アルコール泡（一般泡は溶けやすい）。</li>
            </ul>
          </div>

          <h3>泡消火剤の種類と特性</h3>
          <div className={shared.bandCard}>
            <p>泡消火剤は「種類」と「得意な性質」をセットで整理すると、ひっかけに強くなります。</p>
            <ul className={shared.compact}>
              <li>種類：<strong>たん白泡</strong>／<strong>フッ素たん白泡</strong>／<strong>水成膜泡（AFFF）</strong>／<strong>合成界面活性剤泡</strong></li>
              <li>耐熱性：<strong>フッ素たん白泡</strong>が特に強い（<strong>たん白泡</strong>も良い）。</li>
              <li>起泡性（発泡性）：<strong>水成膜泡（AFFF）</strong>・<strong>合成界面活性剤泡</strong>が優れる。</li>
            </ul>
            <p className={shared.muted}>
              ※外観の目安：たん白泡系＝暗褐色の粘性溶液（たん白臭）／AFFF・合成界面活性剤泡＝淡黄色の液体（グリコールエーテル臭）
            </p>
          </div>

          <h3>泡消火剤の比較</h3>
          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable} ${styles.centerCells}`} aria-describedby="foam-legend">
              <caption className="sr-only">泡消火剤の比較</caption>
              <colgroup>
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
                <col className={styles.t3Col} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>種類</th>
                  <th scope="col">起泡性<br />・発泡性</th>
                  <th scope="col">安定性<br />・保水性</th>
                  <th scope="col">展開性<br />・流動性</th>
                  <th scope="col">耐熱性<br />・耐火性</th>
                  <th scope="col">耐油性</th>
                  <th scope="col">油面<br />密封性</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>たん白泡</th>
                  <td>○</td><td>◎</td><td>△</td><td>○</td><td>△</td><td>◎</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>フッ素<br />たん白泡</th>
                  <td>○</td><td>◎</td><td>○</td><td>◎</td><td>◎</td><td>◎</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>水成膜泡（AFFF）</th>
                  <td>◎</td><td>○</td><td>◎</td><td>○</td><td>○</td><td>△</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>合成界面活性剤泡</th>
                  <td>◎</td><td>○</td><td>◎</td><td>×</td><td>×</td><td>×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p id="foam-legend"><small>※ ◎ 非常に優れている / ○ 優れている / △ 普通 / × 劣る</small></p>
          <p>
            また、<strong>合成界面活性剤泡</strong>は起泡性に優れるため、<strong>高発泡としての使用</strong>に適しています。高発泡で使用する場合は、<strong>高発泡専用の放射ノズル等</strong>を使用します。
          </p>

          <h3>泡の膨張倍率と用途</h3>
          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">泡の膨張倍率と用途</caption>
              <colgroup>
                <col className={styles.t4ColKind} />
                <col className={styles.t4ColWay} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>種類</th>
                  <th scope="col">用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>低膨張泡<br /><small>（倍率20以下）</small></th>
                  <td>泡の<strong>流動性</strong>に優れ、主として<strong>可燃性液体の流出火災</strong>や<strong>タンク火災</strong>に用います。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>中膨張泡<br /><small>（倍率20超〜80未満）</small></th>
                  <td>防護対象の<strong>表面を一気に被覆</strong>したり、対象の<strong>空間を泡で充満</strong>させて、燃焼を抑制する用途に用います。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>高膨張泡<br /><small>（倍率80以上〜1000未満）</small></th>
                  <td>地下室・倉庫などの<strong>空間を泡で充満</strong>させて、酸素を遮断し燃焼を抑制する用途に用います。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ <strong>発泡倍率</strong>とは、生成された泡の体積 ÷ 原液（水溶液）の体積をいいます。</small></p>

          <h3>一般の泡消火剤</h3>
          <div className={shared.bandCard}>
            <p>
              一般の泡消火剤は、アルコールなどの<strong>水溶性可燃性液体</strong>に触れると、泡が<strong>溶けて壊れ</strong>、<strong>覆って遮断する効果が低下</strong>します。したがって、これらの消火には適しません。
              そこで用いるのが、<strong>水溶性液体用泡消火剤（耐アルコール泡）</strong>で、アルコールやアセトン等の消火に適しています。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>一般的に泡消火剤に求められる性質</h3>
            <p>泡消火剤に共通して求められるポイントは次のとおりです。</p>
            <ol className={shared.compact}>
              <li><strong>流動性・展開性</strong>があること</li>
              <li><strong>耐油性・耐火性・耐熱性</strong>があること</li>
              <li><strong>寿命が長い</strong>こと</li>
              <li><strong>持続安定性</strong>があること</li>
              <li><strong>起泡性</strong>（泡立つ性質）と<strong>付着性</strong>が十分であること</li>
            </ol>
            <p>※なお、泡消火剤は<strong>通電中の電気設備</strong>には使用できません。<strong>感電のおそれ</strong>があるためです。</p>
          </div>
        </section>

        {/* 4. ハロゲン化物消火剤 */}
        <section className={shared.section}>
          <h3>4. ハロゲン化物消火剤</h3>
          <div className={shared.bandCard}>
            <p>
              ハロゲン化物消火剤は、代表例として<strong>一臭化三フッ化メタン（CBrF₃）</strong>（ブロモトリフルオロメタン／ハロン1301）が用いられてきました。
            </p>
            <ul className={shared.compact}>
              <li><strong>主な消火作用：</strong>燃焼の連鎖反応（ラジカル反応）を抑える<strong>抑制効果</strong>（負触媒効果）</li>
              <li><strong>補助的作用：</strong>状況によっては、燃焼域の酸素濃度低下による窒息効果も働く</li>
              <li><strong>特長：</strong>気体で放射するため<strong>汚損が少ない</strong></li>
              <li><strong>適応：</strong><strong>油火災（B）・電気火災（C）に有効</strong>／普通火災（A）は相対的に効果が薄い傾向</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>注意</h3>
            <p>
              火災などで高温にさらされると分解し、ホスゲン（COCl₂）やフッ化水素（HF）などの有毒ガスを生じるおそれがあります。使用後は換気と安全確保が必要です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>試験の押さえどころ</h3>
            <ul className={shared.compact}>
              <li><strong>抑制効果が主作用</strong></li>
              <li><strong>B・Cに有効</strong></li>
              <li><strong>汚損が少ない</strong></li>
              <li><strong>高温分解で有毒ガス</strong></li>
            </ul>
            <p>
              <small>※環境規制により製造・新設が制限され、現在は代替のクリーン消火剤（HFC系やFK系など）への移行が進んでいます。</small>
            </p>
          </div>
        </section>

        {/* 5. 二酸化炭素（不活性ガス）消火剤 */}
        <section className={shared.section}>
          <h3>5. 二酸化炭素（不活性ガス）消火剤</h3>
          <div className={shared.bandCard}>
            <p>二酸化炭素（CO₂）消火剤は、加圧して液化した状態で容器に充填されます。経年による変質が少ないため、長期間安定して使用できます。</p>
            <p>
              放射するとすぐに気化し、空気より重い（相対密度 約<strong>1.53</strong>）CO₂が燃焼域を覆います。主作用は<strong>窒息効果</strong>で、気化時の冷却も補助的に働きます。
            </p>
            <p>燃焼域の酸素濃度がおおむね<strong>14〜15 vol%</strong>以下になると、燃焼は継続できず停止します。</p>
            <p>
              CO₂は非導電性で、電気設備に対して電気絶縁性が良好です。また、金属や電気機器と化学反応を起こしにくく、気体のため細部まで行き渡るので、消火後の<strong>汚損が少ない</strong>のも利点です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>注意（酸素欠乏）</h3>
            <p>
              CO₂は<strong>高濃度になると酸素欠乏</strong>を招くおそれがあります。特に閉鎖空間で放出された場合は<strong>速やかに退室</strong>し、換気・安全確保を徹底します。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>試験の押さえどころ</h3>
            <ul className={shared.compact}>
              <li><strong>主作用は窒息効果</strong>（冷却は補助）</li>
              <li>空気より重く、燃焼域を覆う（相対密度 約<strong>1.53</strong>）</li>
              <li><strong>汚損が少ない</strong></li>
              <li><strong>油火災（B）・電気火災（C）に有効</strong>／普通火災（A）は相対的に弱め</li>
              <li><strong>酸欠リスク</strong>に注意</li>
            </ul>
            <p>
              不活性ガス消火設備（第3種）では、CO₂のほかN₂、IG-541（N₂・Ar・CO₂）、IG-55（N₂・Ar）なども用いられます。
            </p>
          </div>
        </section>

        {/* 6. 粉末消火剤 */}
        <section className={shared.section}>
          <h3>6. 粉末消火剤</h3>
          <div className={shared.bandCard}>
            <p>粉末消火剤は、主成分の違いにより複数の種類があります。共通する特長は次のとおりです。</p>
            <ol className={shared.compact}>
              <li>
                粉末は吸湿・固化を防ぐため、粒子表面をシリコーン樹脂などで防湿処理しています。また、粒径が小さいほど比表面積が大きくなり、一般に消火効果が高まりやすくなります。
              </li>
              <li>種類を識別しやすいように、主成分ごとに着色されています（代表例は下表）。</li>
            </ol>
          </div>

          <h4>粉末消火剤の種類</h4>
          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">粉末消火剤の種類</caption>
              <colgroup>
                <col className={styles.t5ColMain} />
                <col className={styles.t5ColColoring} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>主成分</th>
                  <th scope="col">着色（代表例）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>炭酸水素<br />ナトリウム</th>
                  <td>白色・淡緑色</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>炭酸水素<br />カリウム</th>
                  <td>紫色</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>リン酸塩類等</th>
                  <td>淡紅色</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>粉末消火剤は、燃焼の連鎖反応を化学的に抑える<strong>抑制効果</strong>が大きく、燃焼面を覆う<strong>窒息効果</strong>も併せて働きます。</p>
            <p>粉末は電気を通しにくいため、<strong>油火災（B）</strong>と<strong>電気火災（C）</strong>に適応します。</p>
            <p>
              リン酸塩類（例：リン酸二水素アンモニウム）を主成分とする粉末は、木材などの<strong>普通火災（A）</strong>にも適応します。これを充填したものは<strong>ABC消火器</strong>と呼ばれます。
            </p>
            <p>
              炭酸水素塩類（例：炭酸水素カリウム、炭酸水素ナトリウム）を主成分とする粉末は、<strong>B・C火災に適応</strong>し、<strong>A火災には不適応</strong>です。
            </p>
            <p>
              炭酸水素カリウム（KHCO₃）は無色固体で、水溶液は弱い塩基性を示します。加熱により二酸化炭素を放出して炭酸カリウム（K₂CO₃）となります。他剤と識別しやすいよう紫色に着色されます。
            </p>
            <p>
              炭酸水素ナトリウム（NaHCO₃）は白色粉末で、水溶液は弱い塩基性を示します。加熱により炭酸ナトリウム（Na₂CO₃）・二酸化炭素（CO₂）・水蒸気（H₂O）に分解します（いわゆる重曹）。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント!</h4>
            <ul className={shared.compact}>
              <li>粉末：抑制効果＋窒息効果</li>
              <li>B・Cに適応（電気を通しにくい）</li>
              <li>リン酸塩系 → ABC消火器</li>
              <li>炭酸水素塩系 → B・Cのみ（Aは不適応）</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意!</h4>
            <p>「粉末＝全部ABC」と思わせてくる。<strong>炭酸水素塩系はAに不適応</strong>で落としにくい。</p>
          </div>
        </section>

        {/* 簡易消火用具 */}
        <section className={shared.section}>
          <h3>簡易消火用具</h3>
          <div className={shared.bandCard}>
            <p>
              簡易消火用具とは、消火能力のある<strong>水・砂・粉状物</strong>と、それらを使用する<strong>バケツ等の用具</strong>をいいます。
            </p>
            <ul className={shared.compact}>
              <li>水バケツ</li>
              <li>乾燥砂</li>
              <li>膨張ひる石（蛭石）</li>
              <li>膨張真珠岩（パーライト）</li>
            </ul>
            <p>乾燥砂・膨張ひる石・膨張真珠岩は、燃焼面を覆って酸素供給を遮断する<strong>窒息効果</strong>により、<strong>初期消火</strong>に有効です。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>簡易消火用具＝「水・砂・粉状物」＋それを使う用具</li>
              <li>砂・ひる石・パーライトは<strong>覆って窒息</strong>（初期消火向き）</li>
            </ul>
          </div>
        </section>

        {/* 7. 金属火災用消火剤 */}
        <section className={shared.section}>
          <h3>7. 金属火災用消火剤</h3>
          <div className={shared.bandCard}>
            <p>金属火災は、カリウム・ナトリウム・カルシウム・マグネシウム・アルミニウム・亜鉛などの<strong>金属</strong>が対象です。</p>
            <p>金属火災は<strong>非常に高温</strong>のため、通常の消火剤は<strong>熱分解</strong>して使用できません。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG!</h3>
            <p>とくにアルカリ金属などに<strong>注水</strong>すると、水と激しく反応して<strong>水素</strong>を発生し、<strong>爆発の危険</strong>があります。</p>
            <p>金属火災＝水・泡・CO₂は<strong>原則不適</strong>（ここ、狙われる）。</p>
          </div>

          <div className={shared.bandCard}>
            <p>従来は乾燥砂などが用いられてきましたが、現在は<strong>金属火災専用の消火剤</strong>の使用が一般的です。</p>
            <ul className={shared.compact}>
              <li>乾燥炭酸ナトリウム粉末</li>
              <li>乾燥塩化ナトリウム粉末</li>
            </ul>
            <p>
              塩化ナトリウム系は、架橋剤・流動化剤を加えており、燃焼物表面を覆うと<strong>架橋・固化して「せんべい状」の被覆層</strong>を形成します。これにより酸素を遮断し、<strong>窒息効果</strong>と<strong>熱遮断</strong>で消火します。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>金属火災は高温 → 通常の消火剤は熱分解</li>
              <li>基本は<strong>専用粉末で覆蓋（覆って蓋）</strong>→ 窒息＋熱遮断</li>
            </ul>
          </div>
        </section>

        {/* 水系消火器の比較表 */}
        <section className={shared.section}>
          <h3>水系消火器の比較表</h3>
          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">水系消火器の比較表（消火器・消火剤・形状・適応火災・主な消火効果）</caption>
              <colgroup>
                <col className={styles.t6ColExtinguisher} />
                <col className={styles.t6ColAgent} />
                <col className={styles.t6ColShape} />
                <col className={styles.t6ColFire} />
                <col className={styles.t6ColEffect} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>消火器</th>
                  <th scope="col">消火剤</th>
                  <th scope="col">形状</th>
                  <th scope="col">適応火災</th>
                  <th scope="col">主な消火効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>水消火器</th>
                  <td rowSpan={2}>水</td>
                  <td>棒状</td>
                  <td>普通火災</td>
                  <td>冷却</td>
                </tr>
                <tr>
                  <td>霧状</td>
                  <td>普通火災・電気火災</td>
                  <td>冷却</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>強化液<br />消火器</th>
                  <td rowSpan={2}>アルカリ金属塩類の水溶液</td>
                  <td>棒状</td>
                  <td>普通火災</td>
                  <td>冷却</td>
                </tr>
                <tr>
                  <td>霧状</td>
                  <td>普通火災・油火災・<br />電気火災</td>
                  <td>冷却・抑制</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>泡消火器</th>
                  <td>一般の泡消火剤</td>
                  <td>—</td>
                  <td>普通火災・油火災<br />（非水溶性）</td>
                  <td>冷却・窒息</td>
                </tr>
                <tr>
                  <td>水溶性液体用<br />（耐アルコール）<br />泡消火剤</td>
                  <td>—</td>
                  <td>水溶性可燃液体<br />（アルコール等）</td>
                  <td>冷却・窒息</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 水系消火器以外の比較表 */}
        <section className={shared.section}>
          <h3>水系消火器以外の比較表</h3>
          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.decoratedTable}`}>
              <caption className="sr-only">水系消火器以外の比較表（消火器・消火剤・適応火災・主な消火効果）</caption>
              <colgroup>
                <col className={styles.t7ColExtinguisher} />
                <col className={styles.t7ColAgent} />
                <col className={styles.t7ColFire} />
                <col className={styles.t7ColEffect} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>消火器</th>
                  <th scope="col">消火剤</th>
                  <th scope="col">適応火災</th>
                  <th scope="col">主な消火効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>ガス系<br />消火器</th>
                  <td>ハロゲン化物消火剤</td>
                  <td>油火災・電気火災</td>
                  <td>抑制（主）・窒息</td>
                </tr>
                <tr>
                  <td>二酸化炭素</td>
                  <td>油火災・電気火災</td>
                  <td>窒息（主）・冷却</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>粉末系<br />消火器</th>
                  <td>リン酸塩類</td>
                  <td>普通火災・油火災・電気火災（ABC）</td>
                  <td>抑制・窒息</td>
                </tr>
                <tr>
                  <td>炭酸水素塩類</td>
                  <td>油火災・電気火災（BC）</td>
                  <td>抑制・窒息</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol} rowSpan={2}>金属火災用消火器</th>
                  <td>乾燥炭酸ナトリウム（無水）</td>
                  <td>ナトリウム</td>
                  <td>窒息・熱遮断</td>
                </tr>
                <tr>
                  <td>乾燥塩化ナトリウム</td>
                  <td>リチウム・マグネシウム</td>
                  <td>窒息・熱遮断</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ExtinguishingAgentsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}