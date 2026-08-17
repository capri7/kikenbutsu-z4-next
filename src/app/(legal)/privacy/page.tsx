import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜危険物乙4 対策',
  description:
    '危険物乙4 対策サービスのプライバシーポリシー。取得する情報、利用目的、第三者提供、委託、保管期間、安全管理措置、開示請求方法など。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/privacy',
  },
  robots: 'noindex,nofollow',
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: 'プライバシーポリシー' },
        ]}
      />
      <div className="site-main">
        <div className={styles.legalContainer}>
          <section className={styles.legalHero}>
            <h2 className={styles.legalTitle}>プライバシーポリシー</h2>
            <p className={styles.legalMeta}>最終更新日：2026年8月5日</p>
          </section>

          <nav className={styles.toc} aria-label="目次">
            <ol>
              <li><a href="#p1">1. 取得する情報</a></li>
              <li><a href="#p2">2. 取得方法</a></li>
              <li><a href="#p3">3. 利用目的</a></li>
              <li><a href="#p4">4. クッキー等の利用</a></li>
              <li><a href="#p5">5. 第三者提供</a></li>
              <li><a href="#p6">6. 委託・共同利用・国外移転</a></li>
              <li><a href="#p7">7. 安全管理措置</a></li>
              <li><a href="#p8">8. 保存期間</a></li>
              <li><a href="#p9">9. 開示・訂正・削除等の請求</a></li>
              <li><a href="#p10">10. 未成年の利用</a></li>
              <li><a href="#p11">11. 本ポリシーの変更</a></li>
              <li><a href="#p12">12. お問い合わせ窓口</a></li>
              <li><a href="#appendix">附則</a></li>
            </ol>
          </nav>

          <article className={styles.terms}>
            <h3 id="p1">1. 取得する情報</h3>
            <p>当サービスは以下の情報を取得します。</p>
            <ul>
              <li>アカウント情報（メールアドレス、パスワードハッシュ 等）</li>
              <li>決済関連情報（Stripeの顧客ID、支払い状況等のトークン情報。クレジットカード番号等の生データは保持しません）</li>
              <li>学習履歴（問題の解答・正誤・誤答/復習リスト・ストリーク 等）</li>
              <li>端末情報・ログ（IPアドレス、ブラウザ情報、アクセス日時、Cookie 等）</li>
            </ul>

            <h3 id="p2">2. 取得方法</h3>
            <p>ユーザー入力による直接取得のほか、利用時の操作ログやCookie等により自動的に取得します。</p>

            <h3 id="p3">3. 利用目的</h3>
            <ul>
              <li>本人確認・アカウント管理、認証</li>
              <li>課金・請求・不正利用対策</li>
              <li>学習履歴の保存・進捗表示・復習機能の提供</li>
              <li>品質改善、新機能の開発、問い合わせ対応</li>
              <li>法令遵守、紛争対応</li>
            </ul>

            <h3 id="p4">4. クッキー等の利用</h3>
            <p>当サービスはログイン維持や利便性向上のためCookieを使用します。ブラウザ設定でCookieを無効化できますが、サービスの一部が利用できなくなる場合があります。</p>

            <h3 id="p5">5. 第三者提供</h3>
            <p>以下の場合を除き第三者へ提供しません。（1）法令に基づく場合、（2）人の生命・身体・財産の保護のため必要な場合でご本人の同意が困難なとき 等。</p>

            <h3 id="p6">6. 委託・共同利用・国外移転</h3>
            <p>当サービスは業務の一部を以下の事業者に委託します。</p>
            <ul>
              <li>データ保管・認証：Supabase（国際的に分散されたインフラを利用）</li>
              <li>決済処理：Stripe</li>
              <li>アプリ配信・ホスティング／CDN・ログ：Vercel（IPアドレス・User-Agent・アクセス日時等のアクセスログが運用上の必要期間保存される場合があります）</li>
            </ul>
            <p>これらの事業者のサーバが国外に所在する場合があり、必要な保護措置を講じたうえで個人データを移転することがあります。</p>

            <h3 id="p7">7. 安全管理措置</h3>
            <p>アクセス制御（RLS）、通信暗号化、権限管理、ログ監査等の措置を講じ、個人データの漏えい・滅失・毀損の防止に努めます。</p>

            <h3 id="p8">8. 保存期間</h3>
            <p>利用目的の達成に必要な期間保存し、不要となった情報は適切な方法で削除します。</p>

            <h3 id="p9">9. 開示・訂正・削除等の請求</h3>
            <p>ご本人からの保有個人データに関する開示・訂正・利用停止・削除のご請求を受け付けます。下記窓口までメールでご連絡ください。</p>

            <h3 id="p10">10. 未成年の利用</h3>
            <p>未成年の方は、法定代理人の同意を得たうえで本サービスをご利用ください。</p>

            <h3 id="p11">11. 本ポリシーの変更</h3>
            <p>内容を変更することがあります。重要な変更は本サイトで告知し、変更後のポリシーが適用されます。</p>

            <h3 id="p12">12. お問い合わせ窓口</h3>
            <p>メール：support@kikenbutsu-z4.com（通常3営業日以内に返信します）</p>

            <h3 id="appendix">附則</h3>
            <p>施行日：2026年8月5日</p>
          </article>
        </div>
      </div>
    </>
  )
}