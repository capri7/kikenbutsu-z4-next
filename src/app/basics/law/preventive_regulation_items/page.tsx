import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PreventiveRegulationItemsQuiz from './PreventiveRegulationItemsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 16節：予防規程に定めるべき事項',
  description:
    '危険物乙4 第1章16節。予防規程に定めるべき全16項目を解説。保安業務の統括・職務代行者・自衛消防体制・保安教育・巡視点検から、給油取扱所の専用タンク注入監視・セルフスタンドの保安措置・地震津波時の応急措置・記録管理まで、試験に出るポイントを整理している。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/preventive_regulation_items',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 16節：予防規程に定めるべき事項',
    description:
      '危険物乙4 第1章16節。予防規程に定めるべき全16項目を解説。保安業務の統括・職務代行者・自衛消防体制・保安教育・巡視点検から、給油取扱所の専用タンク注入監視・セルフスタンドの保安措置・地震津波時の応急措置・記録管理まで、試験に出るポイントを整理している。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/preventive_regulation_items',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 16節：予防規程に定めるべき事項',
    description:
      '危険物乙4 第1章16節。予防規程に定めるべき全16項目を解説。保安業務の統括・職務代行者・自衛消防体制・保安教育・巡視点検から、給油取扱所の専用タンク注入監視・セルフスタンドの保安措置・地震津波時の応急措置・記録管理まで、試験に出るポイントを整理している。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PreventiveRegulationItemsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '16節：予防規程に定めるべき事項' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 予防規程の内容 */}
        <section className={shared.section}>
          <h2>予防規程とは</h2>
          <div className={shared.bandCard}>
            <p>予防規程で<strong>必ず定めておく主な事項（全16項目）</strong>は、概ね次のとおりである。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              はじめの<strong>第1・第2項目</strong>は、一言でいうと<strong>「誰が危険物保安を指揮するか」</strong>を決めるパートである。
            </p>
            <ul className={shared.compact}>
              <li><strong>第1項目：</strong>危険物保安の「トップ（統括者）」の職務範囲・責任・組織体制を定める。</li>
              <li>
                <strong>第2項目：</strong>トップ（危険物保安監督者）が<strong>不在のときの代役（職務代行者）</strong>と、その権限・連絡体制を決める。
              </li>
            </ul>
            <p>
              つまりキーワードは<strong>「統括者」と「職務代行者」</strong>。誰が指揮をとるのかを明文化しておくことが、予防規程のスタート地点である。
            </p>
          </div>

          <h3>1. 危険物保安に関する業務の統括</h3>
          <div className={shared.bandCard}>
            <p>
              危険物保安に関する業務を統括する者の<strong>職務の範囲</strong>、<strong>責任分担</strong>および<strong>組織体制</strong>に関すること。
            </p>
            <p>誰がどこまで責任を負うのか、組織図や担当区分も含めて<strong>指揮命令系統をはっきりさせておく</strong>イメージで押さえる。</p>
          </div>

          <h3>2. 危険物保安監督者の不在時対応（職務代行者）</h3>
          <div className={shared.bandCard}>
            <p>
              危険物保安監督者が不在のときに、その職務を代行する者の<strong>選任</strong>、<strong>権限</strong>および<strong>連絡体制</strong>に関すること。
            </p>
            <p>職務代行者の主な要件は、次のとおりである。</p>
            <ul className={shared.compact}>
              <li>甲種または乙種の危険物取扱者免状を有していること。</li>
              <li>危険物保安監督者に相当する能力・権限を備えていること。</li>
              <li>業務遂行に必要な条件（勤務形態・配置など）を満たしていること。</li>
            </ul>
            <p>
              試験では<strong>「誰でも代行できるわけではない」</strong>点と、上の<strong>3つセットで要件</strong>になっているところが、出題のひっかけポイントになりやすい。
            </p>
          </div>

          <h3>3. 自衛消防体制</h3>
          <div className={shared.bandCard}>
            <p>自衛消防組織の整備および運用に関すること。</p>
            <ul className={shared.compact}>
              <li>化学消防自動車等の配置。</li>
              <li>自衛消防組織の編成、役割分担、連絡体制。</li>
            </ul>
          </div>

          <h3>4. 保安教育</h3>
          <div className={shared.bandCard}>
            <p>危険物の保安に係る作業従事者に対する<strong>保安教育</strong>の計画・実施・記録に関すること。</p>
          </div>

          <h3>5. 巡視・点検・検査</h3>
          <div className={shared.bandCard}>
            <p>危険物の保安のための<strong>巡視・点検・検査</strong>の頻度・方法・記録および是正措置に関すること。</p>
          </div>

          <h3>6. 危険物施設の運転・操作</h3>
          <div className={shared.bandCard}>
            <p>
              危険物施設の<strong>運転・操作の標準手順</strong>、運転開始・停止時の許可・承認、異常時の停止手順に関すること。
            </p>
          </div>

          <h3>7. 危険物の取扱作業基準</h3>
          <div className={shared.bandCard}>
            <p>
              危険物の取扱作業の<strong>基準</strong>（準備・実施・終了処置、保護具の使用、静電気対策など）に関すること。
            </p>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        <section className={shared.section}>
          <h3>8. 設備・容器等の補修</h3>
          <div className={shared.bandCard}>
            <p>
              設備・容器等の<strong>補修（修理・交換・改造）</strong>の方法および作業後の品質確認に関すること。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！（運用ルール編）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>第3項目〜第5項目：</strong>自衛消防体制・保安教育・巡視・点検・検査は<strong>「人と組織＋日常の保安活動」</strong>のセットとして押さえる。
              </li>
              <li>
                <strong>第6項目〜第8項目：</strong>危険物施設の<strong>運転</strong>・<strong>作業基準</strong>・<strong>補修</strong>はいわば「運転・作業・補修の三本柱」。試験では<strong>この3つを並べ替えたり、一部だけ抜いた肢</strong>がよく出る。
              </li>
              <li>
                <strong>イメージ暗記：</strong>「人を鍛える（教育）→現場を見る（巡視・点検）→設備を安全に動かす（運転・作業）→壊れたら直す（補修）」という流れでストーリーにして覚えるとラク。
              </li>
            </ul>
          </div>

          <h3>9. 工事時の安全管理</h3>
          <div className={shared.bandCard}>
            <p>工事時における安全管理に関すること。</p>
            <ul className={shared.compact}>
              <li>火気使用の管理および火気作業の許可・監視。</li>
              <li>危険物・可燃物の一時保管・搬出管理。</li>
              <li>養生・防火区画の確保など。</li>
            </ul>
          </div>

          <h3>10. 給油取扱所：専用タンクへの注入作業中の立会い・監視</h3>
          <div className={shared.bandCard}>
            <p>
              専用タンクへの危険物の注入作業中における立会い・監視およびその他の保安措置に関すること（
              <Link href="/basics/law/refueling_station_standards">規則第40条の3の3の2「専用タンクに危険物を注入する時の措置」</Link>
              ）。
            </p>
            <ul className={shared.compact}>
              <li>立会者の資格要件と配置。</li>
              <li>監視範囲・方法、交差作業の可否・時間帯の区分。</li>
              <li>漏えい・静電気対策、緊急停止・通報手順等。</li>
            </ul>
          </div>

          <h3>11. 給油取扱所：非稼働時の保安措置・表示</h3>
          <div className={shared.bandCard}>
            <p>
              給油業務が行われていないときの保安措置および表示に関すること（
              <Link href="/basics/law/refueling_station_standards">規則第40条の3の6の2「給油の業務が行われていない時の措置」</Link>
              ）。
            </p>
            <ul className={shared.compact}>
              <li>緊急時連絡先・通報手順の表示。</li>
              <li>バルブ・電源の遮断および施錠・立入管理。</li>
              <li>監視・巡回方法、漏えい・火災時の初動、消火設備の可用性確保など。</li>
            </ul>
          </div>

          <h3>12. セルフスタンドの監視・保安措置</h3>
          <div className={shared.bandCard}>
            <p>セルフ方式の給油取扱所における監視体制および保安措置に関すること。</p>
            <ul className={shared.compact}>
              <li>監視体制（対面／カメラ／インターホン）。</li>
              <li>緊急停止装置の配置・作動点検。</li>
              <li>給油手順・禁止事項の掲示、静電気・着火源対策。</li>
              <li>容器持込み・年齢等の制限、こぼれ・漏えい時の初動、火気厳禁・喫煙管理など。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>ここだけ押さえよう！（工事＋給油所まわり）</h3>
            <ul className={shared.compact}>
              <li><strong>工事時：</strong> 火気管理・一時保管・搬出管理など、<strong>「工事専用の安全ルール」</strong>をまとめて定める。</li>
              <li><strong>第10項目：</strong> 専用タンクへの<strong>注入作業中</strong>の立会い・監視ルール。</li>
              <li><strong>第11項目：</strong> 給油業務が<strong>止まっているとき</strong>の保安措置と表示。</li>
              <li><strong>第12項目：</strong> セルフ方式では、<strong>顧客監視体制＋緊急停止装置＋掲示</strong>がセットで必須。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>工事時管理：</strong> 「火気管理」と「危険物・可燃物の一時保管」が典型的な出題ポイント。</li>
              <li><strong>専用タンク：</strong> 注入中は<strong>必ず立会い・監視</strong>。立会者の資格要件や監視範囲が問われやすい。</li>
              <li><strong>非稼働時：</strong> 電源・バルブの遮断と施錠、<strong>緊急連絡先の表示</strong>は鉄板ネタ。</li>
              <li>
                <strong>セルフ：</strong> 「対面／カメラ／インターホン＋緊急停止装置＋禁止事項の掲示」で<strong>顧客をどう見守るか</strong>をイメージして覚える。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>専用タンク注入中（第10項目）と、給油業務が行われていない時（第11項目）を<strong>ごちゃまぜにする選択肢</strong>に注意。</li>
              <li>
                セルフスタンドの「顧客監視」は<strong>任意ではなく必須</strong>。「監視は努力義務」「掲示は任意」などの表現は×。
              </li>
              <li>工事時の項目で、在庫管理や賃金など<strong>ビジネス寄りの話</strong>を混ぜてくる選択肢は切り捨ててよい。</li>
            </ul>
          </div>
        </section>

        <section className={shared.section}>
          <h3>13. 非常時（災害・事故等）の措置</h3>
          <div className={shared.bandCard}>
            <p>災害や事故が発生した場合に取るべき措置に関すること。</p>
            <ul className={shared.compact}>
              <li>通報・避難誘導、初期消火。</li>
              <li>電源・ポンプ・バルブの遮断。</li>
              <li>指揮命令系統・連絡網の整備。</li>
              <li>立入禁止・二次災害防止、再開判定・復旧手順など。</li>
            </ul>
          </div>

          <h3>14. 地震・津波時の点検・応急措置</h3>
          <div className={shared.bandCard}>
            <p>地震・津波等が発生した場合の点検および応急措置に関すること。</p>
            <ul className={shared.compact}>
              <li>設備・配管・タンク等の異常点検、漏えい・傾斜・亀裂の確認。</li>
              <li>電源・バルブの遮断、一時停止・再開判定。</li>
              <li>避難・立入規制など。</li>
            </ul>
          </div>

          <h3>15. 記録の作成・保存・管理</h3>
          <div className={shared.bandCard}>
            <p>危険物保安に関する記録の作成、保存および管理に関すること。</p>
            <ul className={shared.compact}>
              <li>巡視・点検・検査の記録。</li>
              <li>教育・訓練の記録。</li>
              <li>異常・事故、補修・改造、是正措置の履歴など。</li>
            </ul>
          </div>

          <h3>16. 図面・書類の整備</h3>
          <div className={shared.bandCard}>
            <p>製造所等の位置・構造・設備を明示する書類・図面の整備に関すること。</p>
            <ul className={shared.compact}>
              <li>配置図・平面図・配管系統図・電気系統図。</li>
              <li>危険物設備の仕様書等の最新版維持および改訂履歴の管理。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>ここだけ押さえよう！（非常時・記録・図面まわり）</h3>
            <ul className={shared.compact}>
              <li><strong>13番：</strong> 災害・事故時は<strong>「通報・避難 → 初期消火 → 遮断 → 二次災害防止」</strong>の流れをイメージ。</li>
              <li><strong>14番：</strong> 地震・津波時は<strong>「点検＋遮断＋避難」</strong>の3本柱。</li>
              <li><strong>15番：</strong> 記録は保安の<strong>「カルテ」</strong>。巡視・教育・事故・補修などを時系列で残す。</li>
              <li><strong>16番：</strong> 図面・書類は<strong>「地図＋取扱説明書」</strong>。常に<strong>最新版</strong>で維持するのがポイント。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>非常時の流れ：</strong> 通報・避難 → 初期消火 → 電源・ポンプ・バルブ遮断 → 二次災害防止・復旧手順、と<strong>順番つきで問われる</strong>ことが多い。
              </li>
              <li>
                <strong>地震・津波：</strong> タンク・配管・基礎などの<strong>点検対象</strong>と、<strong>再開判定を急がない</strong>姿勢（安全確認優先）がよく出題される。
              </li>
              <li>
                <strong>記録：</strong> 「作成・保存・管理」の<strong>三点セット</strong>。異常・事故・是正措置の履歴まで含めて残す点をおさえる。
              </li>
              <li>
                <strong>図面・書類：</strong> 配置図・配管系統図などは<strong>現況と一致</strong>していることが前提。改造したのに図面が古いままは×。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>非常時の項目で、<strong>避難より設備保護を優先</strong>するような記述は×。人命優先が大前提。</li>
              <li>
                記録を「任意で作成してもよい」「保存期間は特に定めない」とする選択肢は×。保安の裏付け資料として<strong>計画的な保存</strong>が求められる。
              </li>
              <li>
                図面・書類について「改造しても図面の更新は不要」とする記述や、「最新のもののみ保存し、改訂履歴は不要」とする記述は×。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <PreventiveRegulationItemsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}