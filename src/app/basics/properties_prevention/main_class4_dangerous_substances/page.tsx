// src/app/basics/properties_prevention/main_class4_dangerous_substances/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import MainClass4DangerousSubstancesQuiz from './MainClass4DangerousSubstancesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '乙種第4類の主な危険物一覧【乙4対策】',
  description:
    '乙4第3章13節：乙種第4類の主な危険物を一覧で解説。特殊引火物・第1〜第4石油類・アルコール類・動植物油類の引火点、発火点、比重、燃焼範囲、水溶性／非水溶性、丙種の取扱い範囲まで試験頻出の代表値を整理。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/main_class4_dangerous_substances',
  },
  robots: 'index,follow',
  openGraph: {
    title: '乙種第4類の主な危険物一覧【乙4対策】',
    description:
      '乙4第3章13節：乙種第4類の主な危険物を一覧で解説。特殊引火物・第1〜第4石油類・アルコール類・動植物油類の引火点、発火点、比重、燃焼範囲、水溶性／非水溶性、丙種の取扱い範囲まで試験頻出の代表値を整理。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/main_class4_dangerous_substances',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '乙種第4類の主な危険物一覧【乙4対策】',
    description:
      '乙4第3章13節：乙種第4類の主な危険物を一覧で解説。特殊引火物・第1〜第4石油類・アルコール類・動植物油類の引火点、発火点、比重、燃焼範囲、水溶性／非水溶性、丙種の取扱い範囲まで試験頻出の代表値を整理。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function MainClass4DangerousSubstancesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '13節：乙種第4類の主な危険物' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 乙種第4類の主な危険物 */}
        <section className={shared.section}>
          <h2>乙種第4類の主な危険物</h2>
          <div className={shared.bandCard}>
            <p>ここでは、乙種第4類に属する主な危険物を品名ごとに示し、その性質や代表的な数値を整理します。</p>
          </div>
        </section>

        {/* 2. 特殊引火物 */}
        <section className={shared.section}>
          <h2>特殊引火物</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatSpecial}`}>特殊引火物</span>
            </div>
            <p className={styles.summaryLead}>
              引火点がすべて<span className={shared.nowrap}>−20℃以下</span>の、乙種第4類の中でもとくに危険度の高いグループです。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>アセトアルデヒド・酸化プロピレン</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>二硫化炭素・イソプレン</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>溶解度</dt>
              <dd>ほとんど溶けない〜少し溶ける：ジエチルエーテル</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>すべて不可（漏えいや飛散を前提に「禁止」で覚える）</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>すべて−20℃以下</dd>
            </div>
          </dl>

          </div>

          <h3>特殊引火物の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">特殊引火物の物理的性質</caption>
              <colgroup>
                <col className={styles.spColItems} />
                <col className={styles.spColFlash} />
                <col className={styles.spColIgnition} />
                <col className={styles.spColBoiling} />
                <col className={styles.spColSpecific} />
                <col className={styles.spColSteam} />
                <col className={styles.spColCombustion} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                  <th scope="col">蒸気比重</th>
                  <th scope="col">燃焼範囲<br />vol%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ジエチルエーテル</th>
                  <td>-45</td><td>160</td><td>35</td><td>0.7</td><td>2.6</td><td>1.9~36</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>二硫化炭素</th>
                  <td>-30以下</td><td>90</td><td>46</td><td>1.3</td><td>2.6</td><td>1.3~50</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アセトアルデヒド</th>
                  <td>-39</td><td>175</td><td>21</td><td>0.8</td><td>1.5</td><td>4.0~60</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化プロピレン</th>
                  <td>-37</td><td>440</td><td>35</td><td>0.8</td><td>2.0</td><td>2.1~39</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>イソプレン</th>
                  <td>-48・-54</td><td>220</td><td>34</td><td>0.68</td><td>2.35</td><td>1.0~9.7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>
        </section>

        {/* 3. 第1石油類 */}
        <section className={shared.section}>
          <h2>第1石油類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatPetroleum}`}>第1石油類</span>
            </div>
            <p className={styles.summaryLead}>
              第1石油類は、引火点が21℃未満の引火性液体です。ガソリンやベンゼン、アセトンなどが代表例で、
              水に溶けやすい水溶性第1石油類と、水に溶けにくい非水溶性第1石油類に分かれます（指定数量：非水溶性200L、水溶性400L）。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>アセトン・ピリジン など（水に溶けやすい第1石油類）</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>ガソリン（自動車用は橙色に着色）・ベンゼン・トルエン など</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>溶解度</dt>
              <dd>ほとんど溶けない〜少し溶ける：酢酸エチル・酢酸メチル・メチルエチルケトン（エチルメチルケトン）</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>ガソリンのみ可（その他の第1石油類は不可）</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>すべて21℃未満（常温で非常に引火しやすい）</dd>
            </div>
          </dl>
          </div>

          <h3>第1石油類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">第1石油類の物理的性質</caption>
              <colgroup>
                <col className={styles.p1ColItems} />
                <col className={styles.p1ColFlash} />
                <col className={styles.p1ColIgnition} />
                <col className={styles.p1ColBoiling} />
                <col className={styles.p1ColSpecific} />
                <col className={styles.p1ColSteam} />
                <col className={styles.p1ColCombustion} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                  <th scope="col">蒸気比重</th>
                  <th scope="col">燃焼範囲<br />vol%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ガソリン</th>
                  <td>-40以下</td><td>300</td><td>38~220</td><td>0.65~0.75</td><td>3~4</td><td>1.4~7.6</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ベンゼン</th>
                  <td>-11</td><td>498</td><td>80</td><td>0.9</td><td>2.8</td><td>1.2~7.8</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>トルエン</th>
                  <td>4</td><td>480</td><td>111</td><td>0.9</td><td>3.1</td><td>1.1~7.1</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酢酸エチル</th>
                  <td>-4</td><td>426</td><td>77</td><td>0.9</td><td>3.0</td><td>2.0~11.5</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酢酸メチル</th>
                  <td>-10</td><td>455</td><td>56.9</td><td>0.9</td><td>2.8</td><td>3.1~16</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>メチルエチルケトン</th>
                  <td>-9</td><td>404</td><td>80</td><td>0.8</td><td>2.5</td><td>1.7~11</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アセトン</th>
                  <td>-20</td><td>465</td><td>56</td><td>0.8</td><td>2.0</td><td>2.5~12.8</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ピリジン</th>
                  <td>20</td><td>482</td><td>115.5</td><td>0.98</td><td>2.7</td><td>1.8~12.4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>
        </section>

        {/* 4. アルコール類 */}
        <section className={shared.section}>
          <h2>アルコール類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatAlcohol}`}>アルコール類</span>
            </div>
            <p className={styles.summaryLead}>
              アルコール類は、すべて水に溶ける第4類危険物で、メタノールやエタノールなどが代表例です。
              引火点は常温付近と低く、こぼれた液体から発生する蒸気への引火に注意が必要です。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>全て</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>すべて不可</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>11℃〜25℃</dd>
            </div>
          </dl>
          </div>

          <h3>アルコール類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">アルコール類の物理的性質</caption>
              <colgroup>
                <col className={styles.alcColItems} />
                <col className={styles.alcColFlash} />
                <col className={styles.alcColIgnition} />
                <col className={styles.alcColBoiling} />
                <col className={styles.alcColSpecific} />
                <col className={styles.alcColSteam} />
                <col className={styles.alcColCombustion} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                  <th scope="col">蒸気比重</th>
                  <th scope="col">燃焼範囲<br />vol%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>メタノール</th>
                  <td>11</td><td>464</td><td>64</td><td>0.8</td><td>1.1</td><td>6.7~37</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>エタノール</th>
                  <td>13</td><td>363</td><td>78</td><td>0.8</td><td>1.6</td><td>3.3~19</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>1-プロパノール<br /><small>（n-プロピルアルコール）</small></th>
                  <td>15</td><td>412</td><td>97.2</td><td>0.8</td><td>2.1</td><td>2.1~13.7</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>2-プロパノール<br /><small>（イソプロピルアルコール）</small></th>
                  <td>12</td><td>399</td><td>82</td><td>0.8</td><td>2.1</td><td>2.0~12.7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>
        </section>

        {/* 5. 第2石油類 */}
        <section className={shared.section}>
          <h2>第2石油類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatPetroleum}`}>第2石油類</span>
            </div>
            <p className={styles.summaryLead}>
              第2石油類は、灯油・軽油など、引火点が21℃以上70℃未満の液体をまとめた区分です。
              常温では第1石油類ほど揮発しませんが、加熱や霧状になると可燃性蒸気を発生しやすく、
              大量に貯蔵・取扱う場合は十分な注意が必要です。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>酢酸（氷酢酸）・アクリル酸</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>灯油（無色〜淡黄色）・軽油（淡黄色〜淡褐色、薄緑色）・キシレン・クロロベンゼン</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>溶解度</dt>
              <dd>ほとんど溶けない〜少し溶ける：1-ブタノール（n-ブチルアルコール）</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>灯油・軽油は可、それ以外は不可</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>21℃〜70℃未満</dd>
            </div>
          </dl>
          </div>

          <h3>第2石油類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">第2石油類の物理的性質</caption>
              <colgroup>
                <col className={styles.p2ColItems} />
                <col className={styles.p2ColFlash} />
                <col className={styles.p2ColIgnition} />
                <col className={styles.p2ColBoiling} />
                <col className={styles.p2ColSpecific} />
                <col className={styles.p2ColSteam} />
                <col className={styles.p2ColCombustion} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                  <th scope="col">蒸気比重</th>
                  <th scope="col">燃焼範囲<br />vol%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>灯油</small></th>
                  <td>40以上</td><td>220</td><td>145~270</td><td>0.8</td><td>4.5</td><td>1.1~6.0</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>軽油</small></th>
                  <td>45以上</td><td>220</td><td>170~370</td><td>0.85</td><td>4.5</td><td>1.0~6.0</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>キシレン</small></th>
                  <td>32</td><td>464</td><td>138~144</td><td>0.9</td><td>3.7</td><td>0.9~7.0</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>クロロベンゼン</small></th>
                  <td>28</td><td>464</td><td>132</td><td>1.1</td><td>3.9</td><td>1.3~10</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>1-ブタノール<br /><small>（n-ブチルアルコール）</small></th>
                  <td>35~37.8</td><td>343~401</td><td>117</td><td>0.8</td><td>2.6</td><td>1.4~11.2</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酢酸（氷酢酸）</th>
                  <td>39~41</td><td>463</td><td>118</td><td>1.05</td><td>2.1</td><td>4.0~19.9</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アクリル酸</th>
                  <td>51</td><td>438</td><td>141</td><td>1.05</td><td>2.45</td><td>3.9~20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>
        </section>

        {/* 6. 第3石油類 */}
        <section className={shared.section}>
          <h2>第3石油類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatPetroleum}`}>第3石油類</span>
            </div>
            <p className={styles.summaryLead}>
              第3石油類は、重油やクレオソート油など、比較的引火点の高い油類を含むグループです。
              代表的な物質と引火点の範囲を、この表で整理して確認しておきましょう。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>エチレングリコール・グリセリン</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>重油（褐色〜暗褐色）・クレオソート油・アニリン・ニトロベンゼン</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>重油・グリセリンは可、それ以外は不可</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>70℃〜200℃未満</dd>
            </div>
          </dl>
          </div>

          <h3>第3石油類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">第3石油類の物理的性質</caption>
              <colgroup>
                <col className={styles.p3ColItems} />
                <col className={styles.p3ColFlash} />
                <col className={styles.p3ColIgnition} />
                <col className={styles.p3ColBoiling} />
                <col className={styles.p3ColSpecific} />
                <col className={styles.p3ColSteam} />
                <col className={styles.p3ColCombustion} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                  <th scope="col">蒸気比重</th>
                  <th scope="col">燃焼範囲<br />vol%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>重油</small></th>
                  <td>60以上</td><td>250~380</td><td>300以上</td><td>0.9~1.0</td><td>ー</td><td>ー</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>クレオソート油</small></th>
                  <td>75</td><td>335</td><td>200以上</td><td>1.1</td><td>ー</td><td>ー</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>アニリン</small></th>
                  <td>70</td><td>615</td><td>185以上</td><td>1.01</td><td>3.2</td><td>1.2~11</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>ニトロベンゼン</small></th>
                  <td>88</td><td>482</td><td>211以上</td><td>1.2</td><td>4.2</td><td>1.8~40</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>エチレングリコール</small></th>
                  <td>111</td><td>413</td><td>197以上</td><td>1.1</td><td>2.1</td><td>3.2~15</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><small>グリセリン</small></th>
                  <td>160~199</td><td>370</td><td>291以上</td><td>1.3</td><td>3.2</td><td>ー</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>
        </section>

        {/* 7. 第4石油類 */}
        <section className={shared.section}>
          <h2>第4石油類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatPetroleum}`}>第4石油類</span>
            </div>
            <p className={styles.summaryLead}>
              第4石油類は、潤滑油や可塑剤などの、常温で粘り気の強い油のグループです。
              いずれも水には溶けず、引火点はおおむね200℃以上と高いことを押さえておきましょう。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>該当なし</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>すべて</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>すべて可</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>200℃〜250℃未満</dd>
            </div>
          </dl>
          </div>

          <h3>第4石油類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">第4石油類の物理的性質</caption>
              <colgroup>
                <col className={styles.p4ColItems} />
                <col className={styles.p4ColFlash} />
                <col className={styles.p4ColIgnition} />
                <col className={styles.p4ColBoiling} />
                <col className={styles.p4ColSpecific} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>物品名</th>
                  <th scope="col">引火点℃</th>
                  <th scope="col">発火点℃</th>
                  <th scope="col">沸点℃</th>
                  <th scope="col">比重</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    潤滑油<br /><small>（ギヤー油/シリンダー油）</small><br />
                    切削油<br /><small>（モーター油/電気絶縁油/マシン油等）</small>
                  </th>
                  <td>200~240</td><td>ー</td><td>ー</td><td>ー</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    可塑剤<br /><small>（リン酸トリクレジル）</small>
                  </th>
                  <td>210</td><td>ー</td><td>241~265</td><td>1.16~1.18</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    可塑剤<br /><small>（フタル酸ジオクチル）</small>
                  </th>
                  <td>205~218</td><td>ー</td><td>385</td><td>0.98</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <small>
              ※ 潤滑油には引火点によって、一部第3石油類に該当するものがあります。
              <br />
              ※ 製品・測定条件で前後します。本表は試験対策上の代表値です。
            </small>
          </p>
        </section>

        {/* 8. 動植物油類 */}
        <section className={shared.section}>
          <h2>動植物油類</h2>

          <div className={`${shared.bandCard} ${styles.summaryHeader}`}>
            <div className={styles.summaryTags}>
              <span className={`${shared.tag} ${shared.category4}`}>第4類</span>
              <span className={`${styles.tagSubcat} ${styles.subcatAnimalVegOil}`}>動植物油類</span>
            </div>
            <p className={styles.summaryLead}>
              動植物油類には、食用油や工業用の植物油・動物油が含まれます。水には溶けず、引火点はおおむね200℃前後と高めです。
              こぼれてもすぐには燃え広がりにくい油とイメージしておくと、整理しやすくなります。
            </p>

          <dl className={shared.summaryGrid}>
            <div className={shared.summaryGridRow}>
              <dt>水溶性</dt>
              <dd>該当なし</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>非水溶性</dt>
              <dd>すべて</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>丙種の取り扱い</dt>
              <dd>すべて可</dd>
            </div>
            <div className={shared.summaryGridRow}>
              <dt>引火点の範囲</dt>
              <dd>250℃未満</dd>
            </div>
          </dl>
          </div>

          <h3>動植物油類の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">動植物油類の物理的性質</caption>
              <colgroup>
                <col className={styles.vegColItems} />
                <col className={styles.vegColDetail} />
                <col className={styles.vegColIodine} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>油種</th>
                  <th scope="col">物品名の例</th>
                  <th scope="col">ヨウ素価</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>乾性油</th>
                  <td>アマニ油・キリ油・紅花油・ヒマワリ油・ケシ油等</td>
                  <td>130以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>半乾性油</th>
                  <td>ナタネ油・ゴマ油・大豆油・綿実油・コーン油等</td>
                  <td>100〜130</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>不乾性油</th>
                  <td>オリーブ油・ヒマシ油・ヤシ油・ツバキ油等</td>
                  <td>100以下</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <small>
              ※ 動植物油類は「動植物から抽出された油脂」をいい、「精油」を含みません。
              精油とは「植物が産出する揮発性の油で、それぞれ特有の芳香を持つもの」です。ハッカ油（第3石油類）やオレンジ油（第2石油類）などが該当します。
              <br />
              ※ 製品・測定条件で前後します。本表は試験対策上の代表値です。
            </small>
          </p>
        </section>

        {/* 9. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <MainClass4DangerousSubstancesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}