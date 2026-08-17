import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SafetySupervisorsQuiz from './SafetySupervisorsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '危険物保安監督者とは？選任が必要な施設・条件・業務【乙4対策】',
  description:
    '危険物乙4。保安監督者の選任が必要な施設6種類・選任条件（甲種または乙種・実務6か月以上）・業務・届出義務を整理。「丙種はNG」「屋外貯蔵所は30倍超」など試験頻出のひっかけポイントも解説。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/safety_supervisors',
  },
  robots: 'index,follow',
  openGraph: {
    title: '危険物保安監督者とは？選任が必要な施設・条件・業務【乙4対策】',
    description:
      '危険物乙4。保安監督者の選任が必要な施設6種類・選任条件（甲種または乙種・実務6か月以上）・業務・届出義務を整理。「丙種はNG」「屋外貯蔵所は30倍超」など試験頻出のひっかけポイントも解説。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/safety_supervisors',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '危険物保安監督者とは？選任が必要な施設・条件・業務【乙4対策】',
    description:
      '危険物乙4。保安監督者の選任が必要な施設6種類・選任条件（甲種または乙種・実務6か月以上）・業務・届出義務を整理。「丙種はNG」「屋外貯蔵所は30倍超」など試験頻出のひっかけポイントも解説。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SafetySupervisorsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '12節：危険物保安監督者' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 概要 */}
        <section className={shared.section}>
          <h2>概要</h2>
          <div className={shared.bandCard}>
            <p>
              法令で定める製造所等の<strong>所有者等</strong>は、その施設における危険物の取扱作業について<strong>保安の監督</strong>を行わせるため、<strong>危険物保安監督者</strong>を<strong>選任</strong>しなければならない。
            </p>
            <p>
              所有者等が危険物保安監督者を<strong>選任したとき</strong>、または<strong>解任したとき</strong>は、その旨を<strong>遅滞なく市町村長等に届け出る義務</strong>がある。
            </p>
            <p><strong>危険物保安監督者</strong>になれるのは、次の条件を満たす人である。</p>
            <ul className={shared.compact}>
              <li><strong>甲種または乙種</strong>の危険物取扱者であること。</li>
              <li>製造所等における<strong>実務経験が通算6か月以上</strong>あること。</li>
              <li><strong>乙種</strong>の場合、監督できるのは<strong>免状で指定された類</strong>の危険物に限られること。</li>
            </ul>
          </div>

          <h3>6か月以上の実務経験について</h3>
          <div className={shared.bandCard}>
            <p>6か月以上の実務経験として認められるのは、次の内容である。</p>
            <ol className={shared.compact}>
              <li>経験として算入できるのは、<strong>製造所等における危険物の取扱作業に関する実務</strong>に限る。</li>
              <li><strong>免状交付後の経験に限定されない</strong>（免状交付前の実務も算入できる）。</li>
              <li>
                <strong>複数の製造所等での経験を通算して6か月以上</strong>あればよい。
                <br />
                （その場合は、各製造所等の<strong>実務経験証明書</strong>が必要となる）
              </li>
            </ol>
            <p>
              ※危険物保安監督者は、危険物の取扱作業に関する保安の監督にあたり、<strong>誠実に職務を遂行</strong>しなければならない。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>危険物保安監督者を<strong>選任する義務</strong>があるのは、製造所等の<strong>所有者等</strong>。</li>
              <li>選任・解任をしたときは、<strong>遅滞なく市町村長等へ届け出</strong>る。</li>
              <li>監督者になれるのは、<strong>甲種または乙種</strong>の取扱者で、<strong>実務経験6か月以上</strong>ある人だけ。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>「所有者等 → 監督者を選任 → 市町村長等に届け出」の流れを<strong>セットで暗記</strong>しておく。</li>
              <li><strong>実務経験の期間は6か月以上</strong>。「1年」「2年」とズラしてくる選択肢に注意。</li>
              <li><strong>乙種</strong>保安監督者が監督できるのは、<strong>免状で指定された類の危険物のみ</strong>という点も頻出。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>届け出義務があるのは<strong>監督者本人</strong>ではなく、あくまで<strong>製造所等の所有者等</strong>。</li>
              <li><strong>丙種</strong>だけでは保安監督者になれない。「危険物取扱者なら誰でもOK」ではない。</li>
              <li><strong>甲種</strong>はすべての類を監督できるが、<strong>乙種は自分の免状の類だけ</strong>という範囲の違いを取り違えない。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 2. 危険物保安監督者の選任を必要とする製造所等 */}
        <section className={shared.section}>
          <h2>危険物保安監督者の選任を必要とする製造所等</h2>
          <div className={shared.bandCard}>
            <p>
              次の施設は、<strong>危険物の品名や指定数量の倍数にかかわらず</strong>、常に<strong>危険物保安監督者の選任が必要</strong>となる。ただし、<strong>屋外貯蔵所</strong>は<strong>指定数量の倍数が30倍を超える場合</strong>に限り選任が必要である。
            </p>
          </div>

          <h3>危険物保安監督者の選任が必要となる施設（原則）</h3>
          <div className={shared.bandCard}>
            <p>危険物保安監督者の<strong>選任が必要となる主な施設</strong>は、次の6種類である。</p>
            <ol className={shared.compact}>
              <li><strong>製造所</strong></li>
              <li><strong>屋外タンク貯蔵所</strong></li>
              <li>
                <strong>屋外貯蔵所</strong>
                <br />
                （<strong>指定数量の30倍を超える</strong>場合に必要）
              </li>
              <li><strong>給油取扱所</strong></li>
              <li><strong>移送取扱所</strong></li>
              <li>
                <strong>一般取扱所</strong>
                <br />
                （<strong>一部の形態を除き</strong>選任が必要）
              </li>
            </ol>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <p>※上記の6施設は、<strong>原則として危険物保安監督者の選任が必要</strong>なグループ。</p>
            <p>
              ※それ以外の施設（販売取扱所・屋内タンク貯蔵所・移動タンク貯蔵所など）は、<strong>危険物の品名・引火点・指定数量の倍数</strong>によって要否が決まる。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                試験では、<strong>「原則として常に必要な6施設」</strong>と、<strong>「条件付きで必要になる施設」</strong>をグループ分けして覚えているかが問われやすい。
              </li>
              <li>
                原則グループは<strong>製造所・屋外タンク貯蔵所・屋外貯蔵所（30倍超）・給油・移送・一般取扱所</strong>の6つとセットで押さえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                <strong>屋外タンク貯蔵所</strong>は、危険物の種類や数量にかかわらず<strong>常に選任が必要</strong>。条件付きなのは<strong>屋外貯蔵所（指定数量の30倍超）</strong>の方。
              </li>
              <li>
                <strong>移送取扱所は「必要」・移動タンク貯蔵所は「不要」</strong>。「タンク」という言葉だけ見て、どちらも必要と判断してしまうと誤り。
              </li>
              <li>
                <strong>販売取扱所・屋内タンク貯蔵所</strong>は、<strong>「引火点40℃未満の第4類」または「第4類以外」</strong>を扱う場合だけ選任が必要。「<strong>第4類ならすべて必要</strong>」と書いてあったらひっかけ問題。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 危険物保安監督者の業務 */}
        <section className={shared.section}>
          <h2>危険物保安監督者の業務</h2>
          <div className={shared.bandCard}>
            <p>
              危険物の取扱作業にあたり、当該作業が<strong>法第10条第3項の技術上の基準</strong>および<strong>予防規定等の保安に関する規定</strong>に適合するよう、現場の<strong>作業者に必要な指示</strong>を与える（<strong>規則第48条</strong>）。
            </p>
            <p>
              <small>
                ※製造所等における<strong>危険物の貯蔵・取扱い</strong>は、政令で定める<strong>技術上の基準</strong>に従って行う必要がある（<strong>法第10条第3項</strong>）。
              </small>
            </p>
            <p>
              火災等の災害が発生した場合は、作業者を指揮して<strong>応急の措置</strong>を講ずるとともに、直ちに<strong>消防機関</strong>その他の関係者へ<strong>連絡</strong>する。
            </p>
            <p>
              <strong>危険物施設保安員</strong>を置く製造所等にあっては、当該保安員に<strong>必要な指示</strong>を与える。危険物施設保安員を置いていない製造所等にあっては、法令で定める<strong>危険物施設保安員の業務を代行</strong>する。
            </p>
            <p>
              <small>
                例：施設の<strong>定期・臨時点検</strong>の実施、<strong>計測装置・制御装置・安全装置</strong>等の保安管理など。詳しくは「第1章14節：危険物施設保安員」を参照。
              </small>
            </p>
            <p>
              火災等の災害の防止に関し、<strong>隣接する製造所等</strong>その他の<strong>関連施設の関係者</strong>と<strong>連絡を保つ</strong>。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>根拠条文は<strong>法第10条第3項</strong>（技術上の基準）＋<strong>規則第48条</strong>（指示義務）のセット。</li>
              <li>役割の柱は<strong>「作業者への必要な指示」</strong>と<strong>「災害時の応急措置・消防機関への連絡」</strong>の2つ。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                火災等の災害時の流れは<strong>「作業者を指揮」→「応急の措置」→「消防機関等へ連絡」</strong>の順番でイメージしておく。
              </li>
              <li>
                <strong>危険物施設保安員がいる場合</strong>は「必要な指示を与える」、いない場合は<strong>その業務を代行</strong>する、という2パターンを区別して覚える。
              </li>
              <li>代行する業務の例として、定期・臨時点検や計測装置・安全装置等の保安管理がある。「第1章14節：危険物施設保安員」とリンクさせて整理する。</li>
              <li>
                火災等の災害の防止のため、<strong>隣接する製造所等や関連施設との連絡調整</strong>も業務に含まれる点に注意。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>設備の保守・点検そのもの</strong>は「危険物施設保安員」の主な業務。危険物保安監督者は、これらを<strong>指示・監督する立場</strong>である点を押さえる。
              </li>
              <li>
                所有者等の義務である<strong>「危険物保安監督者の選任・解任の届出」</strong>と、危険物保安監督者自身の<strong>業務</strong>を混同しないようにする。
              </li>
              <li>
                試験では「危険物取扱者」「危険物施設保安員」「危険物保安監督者」の役割を入れ替えた肢が頻出。誰が<strong>現場で作業・点検する側</strong>で、誰が<strong>指示・監督する側</strong>かをイメージして区別する。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SafetySupervisorsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}