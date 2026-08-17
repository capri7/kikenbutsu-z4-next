import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SignsAndNoticesQuiz from './SignsAndNoticesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 33節：標識・掲示板',
  description:
    '危険物乙4 第1章33節。標識・掲示板の基準を整理。標識の寸法（0.3m×0.6m以上・白地黒文字）、移動タンク貯蔵所の「危」標識（正方形・黒地黄色反射）、掲示板の表示5項目、注意掲示の配色（禁水＝青・火気厳禁＝赤・エンジン停止＝黄赤）を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/signs_and_notices',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 33節：標識・掲示板',
    description:
      '危険物乙4 第1章33節。標識・掲示板の基準を整理。標識の寸法（0.3m×0.6m以上・白地黒文字）、移動タンク貯蔵所の「危」標識（正方形・黒地黄色反射）、掲示板の表示5項目、注意掲示の配色（禁水＝青・火気厳禁＝赤・エンジン停止＝黄赤）を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/signs_and_notices',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 33節：標識・掲示板',
    description:
      '危険物乙4 第1章33節。標識・掲示板の基準を整理。標識の寸法（0.3m×0.6m以上・白地黒文字）、移動タンク貯蔵所の「危」標識（正方形・黒地黄色反射）、掲示板の表示5項目、注意掲示の配色（禁水＝青・火気厳禁＝赤・エンジン停止＝黄赤）を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SignsAndNoticesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '33節：標識・掲示板' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 掲示板の配置 */}
        <section className={shared.section}>
          <h2>掲示板の配置</h2>
          <div className={shared.bandCard}>
            <p>
              危険物の製造所・貯蔵所・取扱所では、人の目につきやすい場所に、施設の種別を示す<strong>標識</strong>と、防火上必要な事項を掲示する<strong>掲示板</strong>を設ける。標識は「ここが危険物施設である」ことを即座に識別させるための札、掲示板は「安全な取り扱いのための注意事項や手順をまとめて示す板」として設けられる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>標識</strong>は、「ここが危険物施設だよ」とひと目で分からせるための札である。
              </li>
              <li>
                <strong>掲示板</strong>は、火気厳禁や連絡先などの具体的な注意事項をまとめて示す板だとイメージしておく。
              </li>
              <li>
                どちらも<strong>人の目につきやすい場所</strong>に設置するのがポイント。奥まった場所や物陰に置くのはNG。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>標識と掲示板の目的の違い</strong>：
                <strong>標識＝どんな施設かをパッと示す札</strong>、<strong>掲示板＝防火・安全に関する具体的な注意と手順</strong>。「掲示板で施設の種類を示す」など、目的をごちゃ混ぜにしてくる選択肢は×。
              </li>
              <li>
                <strong>対象施設は3区分ぜんぶ</strong>：製造所・貯蔵所・取扱所の<strong>三つセット</strong>でイメージ。「貯蔵所のみ」「取扱所のみ」など、どれか一つだけに限定している記述は誤り。
              </li>
              <li>
                <strong>設置場所は「見やすい場所」がキーワード</strong>：人の目に入りやすい入口付近や動線上が基本。「人目につきにくい場所」「屋内の奥まった位置」などは配置場所としてNG。
              </li>
              <li>
                <strong>掲示内容の中身</strong>：掲示板に書くのは<strong>火気厳禁・禁止事項・緊急時の連絡先や手順</strong>など。数量・容積の細かい管理表まで<strong>常時掲示させる</strong>ような文言はひっかけだと思っておく。
              </li>
              <li>
                <strong>「任意」ではなく原則マスト</strong>：「必要に応じて設ける」ではなく、<strong>設置が前提</strong>の設備。「あってもなくてもよい」系の表現は迷わず切り捨ててよい。
              </li>
              <li>
                <strong>名称の混同に注意</strong>：「標示」「立札」など言い換え表現で揺さぶってくることもある。用語は<strong>標識</strong>と<strong>掲示板</strong>の2ワードでスッキリ整理しておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 標識 */}
        <section className={shared.section}>
          <h2>標識</h2>
          <div className={shared.bandCard}>
            <p>
              製造所等（<strong>移動タンク貯蔵所を除く</strong>）に掲げる標識は、<strong>幅0.3m以上・長さ0.6m以上</strong>とし、<strong>地は白・文字は黒</strong>で施設の名称（例：「<strong>危険物給油取扱所</strong>」）を表示する。
            </p>
          </div>

          <h3>標識の例（給油取扱所）</h3>
          <figure className={shared.formulaCard}>
            <img
              src="/images/basics/law/Fuel_Dispensing_Facility.svg"
              alt="給油取扱所の標識例（白地に黒字で施設名称を表示）"
              className={shared.circuitSvg}
              width={600}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={shared.figureCaption}>
              <p>標識の例：白地・黒字／横長（0.3m × 0.6m以上）</p>
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              給油取扱所の標識は<strong>白地・黒字・横長・0.3m × 0.6m以上</strong>のセットで覚えておく。移動タンク貯蔵所の「危」標識（黒地＋黄色の反射塗料）とごちゃまぜにされやすいところである。
            </p>
          </div>

          <h3>移動タンク貯蔵所用の「危」標識</h3>
          <div className={shared.bandCard}>
            <p>
              移動タンク貯蔵所の標識は、一辺が<strong>0.3m以上0.4m以下の正方形</strong>とし、<strong>黒地に黄色の反射塗料</strong>で「<strong>危</strong>」と表示する。また、この標識は<strong>車両の前後の見やすい箇所</strong>に掲げる。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <img
              src="/images/basics/law/danger.svg"
              alt="移動タンク貯蔵所の標識例（黒地に黄色の反射塗料で「危」）"
              className={shared.circuitSvg}
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={shared.figureCaption}>
              <p>移動タンク貯蔵所の例：黒地・黄色の反射塗料「危」／正方形（0.3〜0.4m）</p>
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>対象施設</strong>：横長（白地・黒字・名称表示）は<strong>製造所等（移動タンクを除く）</strong>、正方形「危」は<strong>移動タンク専用</strong>。
              </li>
              <li>
                <strong>形と寸法</strong>：製造所等＝<em>長方形0.3×0.6m以上</em>／移動タンク＝<em>正方形0.3〜0.4m</em>。
              </li>
              <li>
                <strong>配色</strong>：製造所等＝<strong>白地黒字</strong>／移動タンク＝<strong>黒地＋黄色の反射塗料</strong>。
              </li>
              <li>
                <strong>掲げる位置・表示内容</strong>：移動タンクは<strong>車両の前後</strong>に「<strong>危</strong>」一字／製造所等は<strong>施設の名称を黒字</strong>で表示。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>配色の逆転</strong>：「黒地白字」や「黄色地黒字」など、公式と逆の配色はすべて誤り。
              </li>
              <li>
                <strong>単位のすり替え</strong>：正方形0.3〜0.4mを<em>30〜40cm</em>などに直して混ぜてくる問題に注意。
              </li>
              <li>
                <strong>掲示位置</strong>：移動タンクの標識を<strong>側面だけ</strong>に掲げる選択肢は×（前後が正しい）。
              </li>
              <li>
                <strong>反射塗料の有無</strong>：反射塗料が必要なのは<strong>移動タンクの黄色文字だけ</strong>。製造所等の標識には反射要件なし。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 掲示板 */}
        <section className={shared.section}>
          <h2>掲示板</h2>
          <div className={shared.bandCard}>
            <p>
              掲示板は<strong>幅0.3m以上・長さ0.6m以上</strong>とし、<strong>地は白・文字は黒</strong>で表示する。
            </p>
          </div>

          <h3>掲示板の外観例</h3>
          <figure className={shared.formulaCard}>
            <img
              src="/images/basics/law/bulletin_board.svg"
              alt="掲示板の例（白地・黒字、幅0.3m以上・長さ0.6m以上）"
              className={shared.circuitSvg}
              width={800}
              height={280}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={shared.figureCaption}>
              <p>掲示板の例：白地・黒字／横長（0.3×0.6m以上）</p>
            </figcaption>
          </figure>

          <h3>掲示板に表示する事項</h3>
          <div className={shared.bandCard}>
            <p>掲示板には、その施設で貯蔵し、または取り扱う危険物について、次の五つの事項を表示する。</p>
            <ol className={styles.orderedCompact}>
              <li>危険物の類別</li>
              <li>危険物の品名</li>
              <li>貯蔵最大数量または取扱最大数量</li>
              <li>指定数量の倍数</li>
              <li>危険物保安監督者の氏名または職名</li>
            </ol>
            <p>上記の「類別・品名など」を示す掲示板とは別に、危険物の性状に応じた注意事項を表示する掲示板も設ける。</p>
          </div>

          <h3>注意掲示の例（禁水・火気関係アイコン）</h3>
          <div className={shared.bandCard}>
            <p>
              危険物の性状に応じて、禁水や火気に関する注意掲示を設ける。
              <br />
              「禁水」は青地に白文字、
              <br />
              「火気厳禁」「火気注意」は赤地に白文字で表示する。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <img
              src="/images/basics/law/no_open_flames.svg"
              alt="注意表示の例：火気に関する掲示（赤地・白文字系統）"
              className={shared.circuitSvg}
              width={800}
              height={280}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={shared.figureCaption}>
              <p>注意表示の例：火気関係（赤系配色）</p>
            </figcaption>
          </figure>

          <h3>給油所向け注意掲示の例（オレンジ地・黒字）</h3>
          <div className={shared.bandCard}>
            <p>給油取扱所では、黄赤（オレンジ）色の地に黒文字で「給油中エンジン停止」と表示した掲示板を設ける。</p>
          </div>

          <figure className={shared.formulaCard}>
            <img
              src="/images/basics/law/no_smoking.svg"
              alt="給油所の注意掲示例：黄赤地に黒字（給油中エンジン停止）"
              className={shared.circuitSvg}
              width={800}
              height={280}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={shared.figureCaption}>
              <p>給油取扱所の例：黄赤地・黒字（給油中エンジン停止）</p>
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                禁水＝<strong>青地・白文字</strong>、火気厳禁／火気注意＝<strong>赤地・白文字</strong>。
              </li>
              <li>
                給油中エンジン停止＝<strong>黄赤（オレンジ）地・黒文字</strong>（給油取扱所専用の掲示）。
              </li>
              <li>色と文言は<strong>セットで覚える</strong>こと。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「禁水」を赤地にしたり、「火気厳禁」「火気注意」を青地にした選択肢。</li>
              <li>「給油中エンジン停止」の文字色を白にしたり、「給油中」だけ／「エンジン停止」だけにした表現。</li>
              <li>「禁煙」など別の注意標識の文言と、ごちゃまぜにしている選択肢。</li>
            </ul>
          </div>
        </section>

        {/* 4. 掲示板・類別・物品表 */}
        <section className={shared.section}>
          <h2>掲示板・類別・物品表</h2>
          <div className={shared.bandCard}>
            <p>掲示板ごとに、どの類別のどんな危険物に対応するかをまとめた一覧である。代表的な物品のみを挙げている。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">掲示板と対応する類別・物品の一覧</caption>
              <colgroup>
                <col className={styles.colBoard} />
                <col className={styles.colClass} />
                <col className={styles.colItems} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>掲示板</th>
                  <th scope="col">類別</th>
                  <th scope="col">物品</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagWater}`}>禁水</span>
                    <br />
                    地 → 青
                    <br />
                    字 → 白
                  </th>
                  <td>第1類</td>
                  <td>アルカリ金属の過酸化物 など</td>
                </tr>
                <tr>
                  <td>第2類</td>
                  <td>鉄粉、金属粉、マグネシウム など</td>
                </tr>
                <tr>
                  <td>第3類</td>
                  <td>禁水性物品（黄リン以外）、アルキルアルミニウム、アルキルリチウム等</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={styles.tag}>火気注意</span>
                  </th>
                  <td>第2類</td>
                  <td>引火性固体以外</td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={4} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagDanger}`}>火気厳禁</span>
                    <br />
                    地 → 赤
                    <br />
                    字 → 白
                    <br />
                    <small>（火気注意も同色）</small>
                  </th>
                  <td>第2類</td>
                  <td>引火性固体</td>
                </tr>
                <tr>
                  <td>第3類</td>
                  <td>自然発火性物質（リチウム以外）、アルキルアルミニウム、アルキルリチウム等</td>
                </tr>
                <tr>
                  <td><strong>第4類</strong></td>
                  <td><strong>すべて</strong></td>
                </tr>
                <tr>
                  <td>第5類</td>
                  <td>すべて</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.legendNote}>
              ※ 色指定：
              <span className={`${styles.chip} ${styles.chipWater}`}>禁水＝地 → 青／字 → 白</span>、
              <span className={`${styles.chip} ${styles.chipDanger}`}>火気厳禁・火気注意＝地 → 赤／字 → 白</span>
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                掲示板は<strong>白地・黒字</strong>で、<strong>幅0.3m以上・長さ0.6m以上</strong>が基本。
              </li>
              <li>
                掲示板に必ず書くのは<strong>類別・品名・貯蔵（取扱）最大数量・指定数量の倍数・危険物保安監督者の氏名または職名</strong>の5項目。
              </li>
              <li>
                給油取扱所の掲示板は<strong>文言「給油中エンジン停止」固定</strong>＋<strong>黄赤（オレンジ）地・黒字</strong>、寸法は高さ0.3m以上・長さ0.6m以上を目安とする。
              </li>
              <li>
                火気表示の色は<strong>「火気厳禁」「火気注意」どちらも赤地・白字</strong>で同じ配色。
              </li>
              <li>
                禁水掲示は<strong>青地・白字</strong>で、対象は<strong>第1類・第2類・第3類</strong>の危険物。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>掲示板は「赤地・白字」や「角丸」でなくてもよい。図中の矢印は寸法説明用で、実物掲示に矢印は不要。</li>
              <li>給油取扱所の標識を「禁煙」だけにしたり、赤地・白字にするのは誤り。</li>
              <li>「第2類は全部火気厳禁」「禁水は第3類だけ」という覚え方は誤り。</li>
              <li>禁水なのに赤地・白字、火気厳禁なのに青地・白字――といった<strong>配色の取り違え</strong>に注意。</li>
            </ul>
          </div>
        </section>

        {/* 5. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SignsAndNoticesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}