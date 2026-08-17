import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-1：各種手続きと申請先',
  description:
    '危険物乙4 第1章41節-1。製造所等の各種手続きと申請先を一覧で整理。設置・変更の許可、仮貯蔵・仮取扱いの承認、仮使用の承認、予防規定の認可、完成検査前検査、完成検査、保安検査を収録。申請先は市町村長・都道府県知事・総務大臣・消防長・消防署長・市町村長等の区分で確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/proc_and_offices',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-1：各種手続きと申請先',
    description:
      '危険物乙4 第1章41節-1。製造所等の各種手続きと申請先を一覧で整理。設置・変更の許可、仮貯蔵・仮取扱いの承認、仮使用の承認、予防規定の認可、完成検査前検査、完成検査、保安検査を収録。申請先は市町村長・都道府県知事・総務大臣・消防長・消防署長・市町村長等の区分で確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/proc_and_offices',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-1：各種手続きと申請先',
    description:
      '危険物乙4 第1章41節-1。製造所等の各種手続きと申請先を一覧で整理。設置・変更の許可、仮貯蔵・仮取扱いの承認、仮使用の承認、予防規定の認可、完成検査前検査、完成検査、保安検査を収録。申請先は市町村長・都道府県知事・総務大臣・消防長・消防署長・市町村長等の区分で確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ProcAndOfficesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-1：各種手続きと申請先' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>1. 各種手続きと申請先（許可）</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">各種手続きと申請先（許可）</caption>
              <colgroup>
                <col className={styles.colProcedure} />
                <col className={styles.colItems} />
                <col className={styles.colPurpose} />
                <col className={styles.colApply} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>手続</th>
                  <th scope="col">項目</th>
                  <th scope="col">目的等</th>
                  <th scope="col">申請先</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={5} className={shared.stickyCol}>許可</th>
                  <th scope="row" rowSpan={2}>
                    設置または変更
                    <br />
                    （製造所等）
                  </th>
                  <td>消防本部及び消防署を設置している市町村に施設を設置・変更するとき</td>
                  <td>市町村長</td>
                </tr>
                <tr>
                  <td>
                    消防本部及び消防署を設置していない市町村に施設を設置・変更するとき
                    <br />
                    （移送取扱所を除く）
                  </td>
                  <td>都道府県知事</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={3}>
                    設置または変更
                    <br />
                    （移送取扱所）
                  </th>
                  <td>消防本部及び消防署を設置している1つの市町村に施設を設置・変更するとき</td>
                  <td>市町村長</td>
                </tr>
                <tr>
                  <td>消防本部及び消防署を設置していない市町村、または2つ以上の市町村にまたがる場所に施設を設置・変更するとき</td>
                  <td>都道府県知事</td>
                </tr>
                <tr>
                  <td>2つ以上の都道府県にまたがる場所に施設を設置・変更するとき</td>
                  <td>総務大臣</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>承認</th>
                  <th scope="row">仮貯蔵仮取扱い</th>
                  <td>製造所等以外の場所で、指定数量以上の危険物を、10日以内の期間に仮貯蔵または仮取扱いをするとき</td>
                  <td>
                    消防長
                    <br />
                    または
                    <br />
                    消防署長
                  </td>
                </tr>
                <tr>
                  <th scope="row">仮使用</th>
                  <td>製造所等の位置・構造・設備を変更するとき、変更工事に係る部分以外の部分の全部または一部を仮に使用するとき</td>
                  <td>市町村長等</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol}>認可</th>
                  <th scope="row">予防規定</th>
                  <td>法令で指定された製造所等において、予防規定を制定・変更するとき</td>
                  <td>市町村長等</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>検査</th>
                  <th scope="row">
                    完成検査
                    <br />
                    前検査
                  </th>
                  <td>液体危険物タンクの水圧試験や水張試験を受けるとき</td>
                  <td>市町村長等</td>
                </tr>
                <tr>
                  <th scope="row">完成検査</th>
                  <td>設置または変更の許可を受けた製造所等の工事が完了したとき</td>
                  <td>市町村長等</td>
                </tr>
                <tr>
                  <th scope="row">保安検査</th>
                  <td>一部の屋外タンク貯蔵所や特定移送取扱所が政令で定める時期ごとに受ける検査</td>
                  <td>市町村長等</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>製造所等の許可</strong>… 消防本部ありなら<strong>市町村長</strong> ／ なしなら<strong>都道府県知事</strong>。
              </li>
              <li>
                <strong>移送取扱所の許可</strong>… <strong>1市町村内→市町村長</strong> ／ <strong>複数市町村 or 消防本部なし→都道府県知事</strong> ／ <strong>複数都道府県→総務大臣</strong>。
              </li>
              <li>
                <strong>仮貯蔵・仮取扱い</strong>… <strong>製造所以外＋指定数量以上＋10日以内</strong>で<strong>消防長または消防署長の承認</strong>。
              </li>
              <li>
                <strong>仮使用</strong>… 変更工事中、<strong>工事していない部分だけ仮に使う</strong>ときは<strong>市町村長等の承認</strong>。
              </li>
              <li>
                <strong>予防規定</strong>… 指定された製造所等でのルールの<strong>制定・変更</strong>は<strong>市町村長等の認可</strong>。
              </li>
              <li>
                <strong>完成検査前検査</strong>… 液体タンクの<strong>水圧試験・水張試験</strong>を受ける検査。<strong>市町村長等</strong>。
              </li>
              <li>
                <strong>完成検査</strong>… 設置・変更<strong>許可工事が完了したとき</strong>に受ける検査。<strong>市町村長等</strong>。
              </li>
              <li>
                <strong>保安検査</strong>… <strong>一部の屋外タンク・特定移送取扱所</strong>が、<strong>決められた時期ごとに受ける検査</strong>。<strong>市町村長等</strong>。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>製造所等か移送取扱所か</strong>で、同じ「設置・変更」でも申請先が変わる。
              </li>
              <li>
                <strong>仮貯蔵・仮取扱い</strong>は「製造所以外」「指定数量以上」「10日以内」の<strong>3点セット</strong>で覚える。
              </li>
              <li>
                <strong>予防規定は承認ではなく認可</strong>。用語を取り違える問題がよく出る。
              </li>
              <li>
                <strong>完成検査前検査＝水圧試験・水張試験</strong>。完成検査（工事完了時）とゴッチャにしない。
              </li>
              <li>
                <strong>保安検査</strong>は「全部の製造所」ではない。<strong>屋外タンクの一部＋特定移送取扱所だけ</strong>が定期検査、というところが罠。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}