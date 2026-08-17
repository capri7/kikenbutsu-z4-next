import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記｜危険物乙4 対策',
  description:
    '危険物乙4 対策の特定商取引法に基づく表記。販売事業者、所在地、連絡先、価格、支払方法、返金・解約等を掲載。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/legal-tokusho',
  },
  robots: 'noindex,nofollow',
}

export default function LegalTokushoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '特定商取引法に基づく表記' },
        ]}
      />
      <div className="site-main">
        <div className={styles.legalContainer}>
          <section className={styles.legalHero}>
            <h2 className={styles.legalTitle}>特定商取引法に基づく表記</h2>
            <p className={styles.legalMeta}>最終更新日：2026年8月5日</p>
          </section>

          <article className={styles.terms}>
            <dl className={styles.legalDef}>
              <dt>販売事業者</dt>
              <dd>早川 和江 （個人事業主）</dd>

              <dt>所在地</dt>
              <dd>所在地は請求があった場合に遅滞なく開示します。</dd>

              <dt>所在地・電話の開示請求方法</dt>
              <dd>
                件名「特定商取引法に基づく開示請求」と明記のうえ、
                <br />
                お名前・ご住所・ご連絡先を添えて下記メール宛にご請求ください。
                <br />
                通常は3営業日以内に開示いたします。
              </dd>

              <dt>連絡先</dt>
              <dd>メール：support@kikenbutsu-z4.com／電話：〔請求時に開示〕</dd>

              <dt>サポート提供について</dt>
              <dd>
                学習内容に関する個別サポート（メール・電話）は提供していません。
                <br />
                ご連絡は購入・決済・アカウントに関するお問い合わせに限り対応します。
              </dd>

              <dt>サイトURL</dt>
              <dd>https://kikenbutsu-z4.com/</dd>

              <dt>販売価格</dt>
              <dd>月額1,280円（税込）</dd>

              <dt>商品代金以外の必要料金</dt>
              <dd>インターネット接続費、通信料 等</dd>

              <dt>申し込みの有効期限</dt>
              <dd>制限はありません</dd>

              <dt>役務の提供時期</dt>
              <dd>決済完了後ただちに利用可能</dd>

              <dt>お支払い方法</dt>
              <dd>クレジットカード（Stripe）</dd>

              <dt>お支払い時期</dt>
              <dd>前払い／毎月自動課金（更新日は各ご契約日の前日までの解約が必要）</dd>

              <dt>返品・キャンセル・解約</dt>
              <dd>
                デジタル役務の性質上、提供開始後の返金はできません。
                <br />
                解約はマイページの「キャンセル」からいつでも可能です。日割り返金はありません。
              </dd>

              <dt>動作環境</dt>
              <dd>最新版の主要ブラウザ（Chrome／Safari／Edge／Firefox）</dd>

              <dt>特別条件（クーリング・オフ）</dt>
              <dd>本サービスは通信販売のためクーリング・オフは適用外です。</dd>
            </dl>
          </article>
        </div>
      </div>
    </>
  )
}

