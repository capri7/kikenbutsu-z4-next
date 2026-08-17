import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdministrativeOrdersAndSuspensionsQuiz from './AdministrativeOrdersAndSuspensionsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '措置命令・許可取消・使用停止命令とは？発動要件【乙4対策】',
  description:
    '危険物乙4。措置命令・許可の取消し・使用停止命令の区分と発動要件。貯蔵取扱基準遵守命令・応急措置命令・緊急使用停止命令・免状返納命令。無許可変更・完成検査前使用による取消事由。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/administrative_orders_and_suspensions',
  },
  robots: 'index,follow',
  openGraph: {
    title: '措置命令・許可取消・使用停止命令とは？発動要件【乙4対策】',
    description:
      '危険物乙4。措置命令・許可の取消し・使用停止命令の区分と発動要件。貯蔵取扱基準遵守命令・応急措置命令・緊急使用停止命令・免状返納命令。無許可変更・完成検査前使用による取消事由。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/administrative_orders_and_suspensions',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '措置命令・許可取消・使用停止命令とは？発動要件【乙4対策】',
    description:
      '危険物乙4。措置命令・許可の取消し・使用停止命令の区分と発動要件。貯蔵取扱基準遵守命令・応急措置命令・緊急使用停止命令・免状返納命令。無許可変更・完成検査前使用による取消事由。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AdministrativeOrdersAndSuspensionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '39節：措置命令・許可の取消・使用停止命令' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 措置命令・許可の取消・使用停止命令 */}
        <section className={shared.section}>
          <h2>措置命令・許可の取消・使用停止命令</h2>
          <div className={shared.bandCard}>
            <p>
              第1章39節では、<strong>措置命令・許可の取消（取消し）・使用停止命令</strong>をセットで整理する。
              <br />
              試験では、<strong>「だれが」「だれに」「何を命じるか」</strong>の3ポイントが鉄板である。ここを一気におさえておく。
            </p>
          </div>

          <h3>措置命令とは</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>市町村長等</strong>が、一定の違反や危険があるときに、製造所等の<strong>所有者・管理者・占有者（以下「所有者等」という）</strong>に対して、危険をなくすための<strong>必要な措置</strong>を命じることである。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              <strong>措置命令は「誰が・誰に・何をさせるか」の3点セットで覚える。</strong>
            </p>
            <ul className={shared.compact}>
              <li><strong>命令する人：</strong>市町村長等</li>
              <li><strong>命令される人：</strong>所有者等（所有者・管理者・占有者）</li>
              <li>
                <strong>中身：</strong>危険を減らすための<strong>「必要な措置をとれ」</strong>という命令
              </li>
            </ul>
          </div>

          <h3>措置命令の種類</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">措置命令の主な類型と発動場面の一覧</caption>
              <colgroup>
                <col className={styles.colOrder} />
                <col className={styles.colMatter} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">命令</th>
                  <th scope="col">該当事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    危険物の貯蔵／
                    <br />
                    取扱基準遵守命令
                  </th>
                  <td>
                    製造所等における危険物の<strong>貯蔵・取扱い</strong>が、技術上の基準に<strong>適合していない</strong>と認められるときに発する命令である。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    危険物施設の基準適合命令
                    <br />
                    <small>（修理・改造・移転の命令）</small>
                  </th>
                  <td>
                    製造所等の<strong>位置・構造・設備</strong>が、技術上の基準に<strong>適合していない</strong>と認められるときに発する命令である。
                    <br />
                    ※ <em>所有者等のうち、修理等を行う権限（権原）を有する者</em>に対して行う。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    危険物保安統括管理者または
                    <br />
                    危険物保安監督者の解任命令
                  </th>
                  <td>
                    これらの者が消防法（または消防法に基づく命令）に<strong>違反した</strong>とき、または引き続き業務を行わせることが<strong>公共の安全の維持</strong>や<strong>災害の発生の防止</strong>に支障を及ぼすおそれがあると認められるときに発する命令である。
                  </td>
                </tr>
                <tr>
                  <th scope="row">予防規定変更命令</th>
                  <td>
                    火災予防上<strong>必要がある</strong>と認められるときに、予防規定の内容を<strong>変更させる</strong>命令である。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    危険物施設の
                    <br />
                    応急措置命令
                  </th>
                  <td>
                    危険物の流出などの事故が発生したにもかかわらず、必要な<strong>応急の措置</strong>が<strong>講じられていない</strong>と認められるときに発する命令である。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    移動タンク貯蔵所の
                    <br />
                    応急措置命令
                  </th>
                  <td>
                    管轄区域内の移動タンク貯蔵所で、危険物の流出・火災・爆発などの事故が発生し、必要な<strong>応急の措置</strong>が<strong>講じられていない</strong>と認められるときに、応急の措置を<strong>講ずべきこと</strong>を命ずる命令である。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>区別</strong>：措置命令＝直せ／使用停止＝止めろ／許可取消＝許可が消える。
              </li>
              <li>
                <strong>相手</strong>：基本は所有者等。基準適合命令は権原を有する者。
              </li>
              <li>
                <strong>基準</strong>：貯蔵・取扱いの基準か、位置・構造・設備の基準か。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「直せ／止めろ／許可が消える」を混ぜて出される。</li>
              <li>「貯蔵・取扱い」と「位置・構造・設備」を取り違えさせにくる。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG!</h3>
            <p>
              移動タンクは「事故が起きた」だけじゃない。<strong>事故＋応急措置してない</strong>がセットである。
            </p>
          </div>
        </section>

        {/* 2. 無許可貯蔵等の危険物に対する措置命令 */}
        <section className={shared.section}>
          <h2>無許可貯蔵等の危険物に対する措置命令</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>指定数量以上</strong>の危険物を、仮貯蔵・仮取扱いの<strong>承認</strong>や、製造所等の<strong>許可</strong>なしで貯蔵・取扱いしていると危ない。
              <br />
              そこで<strong>市町村長等</strong>は、その者に対して<strong>危険物の除去</strong>や<strong>災害防止のための必要な措置</strong>を<strong>命ずることができる</strong>。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>撤去・回収・移送</strong>（その場からどかせ）
              </li>
              <li>
                <strong>封鎖・養生・回収材の設置</strong>（漏れ・流出を止めろ）
              </li>
              <li>
                <strong>掲示・警報・立入管理</strong>（近づけるな／二次災害を防げ）
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>トリガー</strong>：<strong>指定数量以上</strong> × <strong>承認・許可なし</strong>
              </li>
              <li>
                <strong>相手</strong>：無承認・無許可で貯蔵／取扱いしている<strong>その人</strong>
              </li>
              <li>
                <strong>結論</strong>：<strong>撤去（除去）＋漏れ止め＋立入管理</strong>をやらせる
              </li>
            </ul>
            <p>
              ※ 文言が「命ずることが<strong>できる</strong>」＝<strong>裁量</strong>（必ず命令、じゃない）。
            </p>
          </div>
        </section>

        {/* 3. 緊急使用停止命令 */}
        <section className={shared.section}>
          <h2>緊急使用停止命令</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>市町村長等</strong>は、公共の安全の維持や災害の発生を防止するために<strong>緊急の必要</strong>があると認めたとき、製造所等の<strong>所有者・管理者・占有者（以下「所有者等」）</strong>に対して、施設の使用を<strong>一時停止</strong>すること、またはその<strong>使用を制限</strong>することを命じることができる。
            </p>
            <p className={shared.muted}>
              ※トリガーは<strong>「緊急の必要」</strong>。<strong>「できる」＝裁量</strong>（必ず止める命令じゃない）
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>運転停止</strong>（漏えい・爆発のおそれが切迫）
              </li>
              <li>
                <strong>使用制限</strong>（危険区域の立入制限・特定行為の一時禁止）
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 危険物取扱者免状の返納命令 */}
        <section className={shared.section}>
          <h2>危険物取扱者免状の返納命令</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>危険物取扱者</strong>が消防法（または命令）に<strong>違反</strong>していると認められたときは、<strong>免状を交付した都道府県知事</strong>が、当該取扱者に<strong>免状の返納</strong>を命じることができる。
            </p>
            <p>
              ※<strong>返せ</strong>って命令。返したらその資格は<strong>その場でストップ</strong>（実務運用もあり）
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>法令違反</strong>をした（取扱者として危ない、と判断されるケース）
              </li>
              <li>
                <strong>保安講習の未受講</strong>（受講義務者）も対象になり得る
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>緊急使用停止</strong>：トリガーは<strong>「緊急の必要」</strong>
              </li>
              <li>
                <strong>返納命令</strong>：<strong>免状交付知事</strong>が<strong>返せ</strong>と命じる
              </li>
              <li>
                どっちも<strong>「できる」</strong>＝裁量（義務じゃない）
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>使用停止</strong>は「施設を止める」／<strong>返納</strong>は「資格をはく奪」
              </li>
              <li>
                <strong>市町村長等</strong>（施設側）と、<strong>都道府県知事</strong>（免状側）を混ぜない
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG！</h3>
            <p>
              <strong>「できる」</strong>を<strong>「しなければならない」</strong>に脳内変換するのは事故る。
            </p>
          </div>
        </section>

        {/* 5. 罰金または拘留となる違反 */}
        <section className={shared.section}>
          <h2>罰金または拘留となる違反</h2>
          <div className={shared.bandCard}>
            <p>
              次の違反は、<strong>罰金または拘留</strong>の対象である。ただし、ここで挙げるものは、それ自体が直ちに許可の取消や使用停止命令に結びつく類型ではない。「用語」と「対象行為」をセットで押さえる。
            </p>
            <p className={shared.muted}>※拘留＝短期間の身柄拘束（ざっくり理解でOK）</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>用語と対象行為</h3>
            <ul className={shared.compact}>
              <li>
                製造所等の譲渡・引渡し・廃止に関する<span className={styles.tagBadge}>届出義務違反</span>
              </li>
              <li>
                危険物の品名・数量・指定数量の倍数を変更した際の<span className={styles.tagBadge}>届出義務違反</span>
              </li>
              <li>
                危険物保安統括管理者・危険物保安監督者の選任・解任に関する<span className={styles.tagBadge}>届出義務違反</span>
              </li>
              <li>
                製造所等における取扱いで、<strong>立会いなし</strong>
                <small>（甲種・乙種の立会いがない場合）</small>
              </li>
              <li>
                予防規定の変更命令に対する<span className={styles.tagBadge}>命令違反</span>
              </li>
              <li>
                予防規定の作成・認可に関する<span className={styles.tagBadge}>規定違反</span>
              </li>
            </ul>
            <p className={shared.muted}>覚え方：届出義務の違反が3つ、あとは「立会い」「命令」「予防規定」。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                まずは整理：<strong>罰金・拘留＝刑事罰</strong>／取消・停止＝行政処分。
              </li>
              <li>
                「届出義務違反」は軽視しがち。イベントを<strong>時系列</strong>で押さえる（譲渡・引渡し・廃止／品名・数量・指定数量倍数の変更／選任・解任）。
              </li>
              <li>
                覚え方の軸：<strong>人の義務</strong>（選任・解任）と、施設側の手続（譲渡・引渡し・廃止）を分ける。
              </li>
              <li>
                「危険物取扱者以外」の取扱いは、ポイントは一つ。<strong>立会いの有無</strong>。
              </li>
              <li>
                予防規定は論点が2つ：変更命令への違反／作成・認可まわりの違反。用語を混ぜない。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                問題文の否定に注意。「<strong>取消・停止の対象とならない</strong>」を読み落とすと、反射で「処分」に結びつけて落とす。
              </li>
              <li>「危険物取扱者以外＝即アウト」ではない。立会いがあればセーフ、立会いなしがアウト。</li>
              <li>
                「届出の相手」「期限」「様式」が付いた設問は、内容よりも<strong>相手先（市町村長等）</strong>を問うパターンがある。
              </li>
              <li>
                罰則の数字は条文依存。数字丸暗記より、まずは<strong>違反の類型</strong>をセットで整理（数字を聞かれた時だけピンポイント暗記）。
              </li>
              <li>予防規定の用語トラップ：変更命令違反と、作成・認可の違反を取り違えると一気に崩れる。</li>
            </ul>
          </div>
        </section>

        {/* 6. 許可の取消しまたは使用停止命令 */}
        <section className={shared.section}>
          <h2>許可の取消しまたは使用停止命令</h2>
          <div className={shared.bandCard}>
            <p>許可の取消し・使用停止命令につながる代表的な類型を、試験で出やすいものから整理する。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">許可の取消し・使用停止命令の主な該当類型と要点の一覧</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colMatter} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">類型</th>
                  <th scope="col">該当事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>無許可変更</strong></span>
                  </th>
                  <td>
                    製造所等の<strong>位置・構造・設備</strong>を<strong>許可を受けずに変更</strong>した場合に該当する。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>完成検査前の使用</strong></span>
                  </th>
                  <td>
                    <strong>完成検査済証の交付前に使用</strong>した場合、または<strong>仮使用の承認を受けずに使用</strong>した場合に該当する。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>措置命令違反</strong></span>
                  </th>
                  <td>
                    <strong>位置・構造・設備に係る措置命令</strong>に違反した場合に該当する。
                    <br />
                    （例：<strong>修理・改造・移転の命令</strong>に従わない場合）
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>保安検査未実施</strong></span>
                  </th>
                  <td>
                    政令で定める<strong>屋外タンク貯蔵所</strong>または<strong>移送取扱所</strong>について、<strong>保安の検査</strong>を受けていない場合に該当する。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>定期点検未実施</strong></span>
                  </th>
                  <td>
                    <strong>定期点検の未実施</strong>や、<strong>点検記録の作成・保存がない</strong>場合に該当する。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>行政処分の重さは「取消し ＞ 使用停止」である。取消しは戻すのが大変だから、ここは要注意。</li>
              <li>無許可変更は「位置・構造・設備」が合図。ここが見えたらまず無許可変更を疑う。</li>
              <li>完成検査前の使用は「完成検査済証の前」か「仮使用の承認なし」がサインである。</li>
              <li>措置命令違反は「修理」「改造」「移転」みたいな具体ワードで出やすい。しかも命令の対象は「位置・構造・設備」とセットで覚える。</li>
              <li>保安検査は対象が決まっている（屋外タンク貯蔵所・移送取扱所）。施設名を読み飛ばすと一発で落とすやつ。</li>
              <li>定期点検は「実施・記録作成・記録保存」の3点セット。どれか欠けたらアウト、と覚えておけばOK。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>無許可変更は「モノ（位置・構造・設備）を変えた」話。取扱基準違反は「扱い方ルール」の話。まず「どっちの話？」を切り分ける。</li>
              <li>「取消し／使用停止」と「罰金／拘留」は混ぜない。前者は行政処分、後者は刑事罰である。</li>
              <li>語尾が「〜できる」なら「やってもいい（裁量）」。「〜しなければならない」と真逆だから、ここで引っかからない。</li>
            </ul>
          </div>
        </section>

        {/* 7. 使用停止命令の該当類型 */}
        <section className={shared.section}>
          <h2>使用停止命令の該当類型</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>市町村長等</strong>は、製造所等の所有者・管理者・占有者（以下「所有者等」という）が次のいずれかに当てはまるとき、当該製造所等について<strong>一定期間、施設の使用停止</strong>を命じることができる。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">使用停止命令の主な該当類型と要点の一覧</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colMatter} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">類型</th>
                  <th scope="col">該当事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}>
                      <strong>
                        貯蔵／
                        <br />
                        取扱基準遵守命令違反
                      </strong>
                    </span>
                  </th>
                  <td>
                    危険物の貯蔵・取扱い基準に関する<strong>遵守命令</strong>に違反した場合に該当する。
                    <br />
                    ※ <em>移動タンク貯蔵所</em>については、当該市町村長の管轄区域内で命令違反があったときが対象である。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>未選任等</strong></span>
                  </th>
                  <td>
                    <strong>危険物保安統括管理者</strong>を選任していない場合、または選任していても、保安に関する業務を統括管理させていない場合に該当する。
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles.tagOrder}><strong>解任命令違反</strong></span>
                  </th>
                  <td>
                    危険物保安統括管理者または危険物保安監督者に対する<strong>解任命令</strong>に従わなかった場合に該当する。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「期間を定めて」</strong>がキーワードである。「ずっと停止」じゃなくて、期間付きの停止だと押さえておく。
              </li>
              <li>
                行政処分の重さは<strong>「使用停止命令 ＜ 許可の取消し」</strong>のイメージでよい。取消しはほぼ復活できない最終カードである。
              </li>
              <li>
                <strong>遵守命令違反</strong>は「危険物の<strong>貯蔵・取扱い基準</strong>」に関する命令である。「位置・構造・設備」に関する命令とは別物として覚える。
              </li>
              <li>
                <strong>未選任等</strong>は「選んでいない」だけじゃなく、選んでいても<strong>統括管理させていない</strong>とアウトになるパターンもセットで出る。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>移動タンク貯蔵所</strong>は、<strong>市町村長の管轄区域内</strong>での違反だけが対象である。場所の条件を問題文でチェックする。
              </li>
              <li>
                <strong>解任命令違反</strong>は、<strong>統括管理者</strong>だけじゃなく<strong>保安監督者</strong>もセットで問われる。どっちが対象か読み飛ばさないように。
              </li>
              <li>
                問題文の「〜<strong>することができる</strong>」は<strong>裁量</strong>あり、「〜しなければならない」は義務である。ここを取り違えると一気に持っていかれる。
              </li>
              <li>
                この条文の<strong>「使用停止命令」</strong>と、別のセクションの<strong>「罰金・拘留」</strong>はジャンル違いである。行政処分と刑事罰をごっちゃにしない。
              </li>
            </ul>
          </div>
        </section>

        {/* 8. 立入検査 */}
        <section className={shared.section}>
          <h2>立入検査</h2>
          <div className={shared.bandCard}>
            <p>
              立入検査は、危険物の貯蔵・取扱いで火災を起こさないよう、<strong>必要があると認めたとき</strong>に現場の状況をチェックするための制度である。
            </p>

            <h3>市町村長等による立入検査</h3>
            <p>
              <strong>市町村長等</strong>は、指定数量以上の危険物を貯蔵・取扱っていると認められる<strong>すべての場所（貯蔵所等）</strong>について、所有者等に<strong>資料の提出</strong>や<strong>報告</strong>を求めることができる。また、消防職員を立ち入らせて<strong>検査・質問</strong>を行わせ、必要に応じて危険物を<strong>収去（取り去る）</strong>させることができる。
            </p>
            <ul className={shared.compact}>
              <li>帳票の提出や、設備・管理状況の報告を求める。</li>
              <li>職員が現場に入り、位置・構造・設備・管理状況を確認する。</li>
              <li>安全確保のため、必要な範囲で危険物を収去する。</li>
            </ul>
            <p>
              ここでの<strong>「必要があると認めるとき」</strong>は、<strong>市町村長等の裁量</strong>で判断する、という意味である。
            </p>

            <h3>消防長・消防署長による立入検査</h3>
            <p>
              <strong>消防長</strong>または<strong>消防署長</strong>も、火災予防のため必要があるときは、関係者に<strong>資料の提出</strong>や<strong>報告</strong>を求めることができる。さらに、消防職員を<strong>仕事場・工場・公衆の出入りする場所</strong>などに立ち入らせ、対象物の<strong>位置・構造・設備・管理の状況</strong>を検査させたり、関係者に<strong>質問</strong>させたりできる。
            </p>
            <p>
              消防職員が関係場所に立ち入るときは、<strong>市町村長が定める証票</strong>を携帯しなければならない。ここは頻出ポイントである。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <p>
              立入検査を<strong>断ったり</strong>、<strong>資料を出せという命令を無視</strong>したりすると、<strong>30万円以下の罰金または拘留</strong>になることがある。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                立入検査の権限者は<strong>市町村長等</strong>と<strong>消防長・消防署長</strong>。誰が動く話かセットで覚えておく。
              </li>
              <li>
                <strong>対象になる場所</strong>は「指定数量以上を<strong>貯蔵・取扱うと認められるすべての場所</strong>」。ざっくり「怪しそうな場所は一通りチェックできる」とイメージする。
              </li>
              <li>
                立入の<strong>目的</strong>はあくまで<strong>火災予防</strong>。刑事事件の捜査じゃなくて「火事を起こさせないためのチェック」だと押さえておく。
              </li>
              <li>
                <strong>所有者・管理者・占有者</strong>のどの立場に向けた話なのか、問題文の<strong>主語</strong>を見るクセをつけておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「〜<strong>することができる</strong>」は<strong>やってもいい（裁量）</strong>、「〜<strong>しなければならない</strong>」は<strong>絶対やる（義務）</strong>。この向き違いはよく聞かれる。
              </li>
              <li>
                <strong>収去</strong>は「その場所から<strong>取り去る</strong>」こと。押収（証拠として取り上げる）とは別モノだからごっちゃにしない。
              </li>
              <li>
                立入のときに<strong>証票を持つ</strong>のは<strong>消防職員</strong>。誰の証票か入れ替えてくる問題に注意する。
              </li>
              <li>
                立入検査を<strong>拒否・無視</strong>すると、さっきの<strong>罰金・拘留コース</strong>。単なる「注意されて終わり」じゃないところも要注意。
              </li>
            </ul>
          </div>
        </section>

        {/* インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <AdministrativeOrdersAndSuspensionsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}