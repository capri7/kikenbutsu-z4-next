import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: '利用規約｜危険物乙4 対策',
  description: '危険物乙4 対策サービスの利用規約。料金・自動更新・解約・禁止事項・免責などをご確認ください。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/terms',
  },
  robots: 'noindex,nofollow',
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '利用規約' },
        ]}
      />
      <div className="site-main">
        <div className={styles.legalContainer}>
          <section className={styles.legalHero}>
            <h2 className={styles.legalTitle}>利用規約</h2>
            <p className={styles.legalMeta}>最終更新日：2026年8月5日</p>
          </section>

          <nav className={styles.toc} aria-label="目次">
            <ol>
              <li><a href="#a1">第1条（適用）</a></li>
              <li><a href="#a2">第2条（アカウント）</a></li>
              <li><a href="#a3">第3条（料金と支払い）</a></li>
              <li><a href="#a4">第4条（自動更新と解約）</a></li>
              <li><a href="#a5">第5条（禁止事項）</a></li>
              <li><a href="#a6">第6条（知的財産）</a></li>
              <li><a href="#a7">第7条（保証の否認・免責）</a></li>
              <li><a href="#a8">第8条（サポート範囲）</a></li>
              <li><a href="#a9">第9条（規約の変更）</a></li>
              <li><a href="#a10">第10条（準拠法・管轄）</a></li>
              <li><a href="#a11">第11条（お問い合わせ）</a></li>
              <li><a href="#appendix">附則</a></li>
            </ol>
          </nav>

          <article className={styles.terms}>
            <h3 id="a1">第1条（適用）</h3>
            <p>本規約は、本サービスの利用条件を定めるものです。ユーザーは本規約に同意のうえ本サービスを利用します。</p>

            <h3 id="a2">第2条（アカウント）</h3>
            <p>登録情報は正確に管理し、第三者と共有しないでください。アカウントの不正利用が判明した場合は直ちに当方へ通知してください。</p>

            <h3 id="a3">第3条（料金と支払い）</h3>
            <p>月額：1280円（税込）。Stripeで前払い決済します。利用料金は消費税込の表示です。</p>

            <h3 id="a4">第4条（自動更新と解約）</h3>
            <p>各請求期間の終了前日までに解約手続がない限り自動更新します。解約の効力は次回更新日から適用され、日割り返金は行いません。解約はマイページの『キャンセル』から手続できます。翌請求日前日23:59までの操作が必要です。</p>

            <h3 id="a5">第5条（禁止事項）</h3>
            <p>不正アクセス、複製・転載、アカウントの共有、営利目的の再配布等を禁じます。</p>

            <h3 id="a6">第6条（知的財産）</h3>
            <p>本サービスのコンテンツその他一切の知的財産権は当方またはライセンサーに帰属します。</p>

            <h3 id="a7">第7条（保証の否認・免責）</h3>
            <p>合格の保証は行いません。保守・障害・天災等により本サービスを中断・停止することがあり、これにより生じた損害について当方は責任を負いません。</p>

            <h3 id="a8">第8条（サポート範囲）</h3>
            <p>当方が提供するサポートは、購入・決済・アカウントに関するお問い合わせに限ります。学習内容・合否・学習計画等に関する個別の助言・指導は行いません。</p>

            <h3 id="a9">第9条（規約の変更）</h3>
            <p>当方は必要に応じ本規約を変更できます。変更後の規約は本サイトでの告知時から適用します。</p>

            <h3 id="a10">第10条（準拠法・管轄）</h3>
            <p>日本法を準拠法とし、当方の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</p>

            <h3 id="a11">第11条（お問い合わせ）</h3>
            <p>お問い合わせ先：support@kikenbutsu-z4.com（通常3営業日以内に返信します。）</p>

            <h3 id="appendix">附則</h3>
            <p>施行日：2026年8月5日</p>
          </article>
        </div>
      </div>
    </>
  )
}