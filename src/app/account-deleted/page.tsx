import type { Metadata } from 'next'
import styles from './account-deleted.module.css'

export const metadata: Metadata = {
  title: '退会が完了しました｜危険物乙4 対策',
  robots: 'noindex,nofollow',
}

export default function AccountDeletedPage() {
  return (
    <div className="site-main">
      <div className={styles.container}>
        <h2 className={styles.title}>退会手続きが完了しました</h2>
        <p className={styles.message}>
          ご利用ありがとうございました。退会の手続きが完了しました。
          <br />
          再度ご利用される場合は、新規登録からご利用いただけます。
        </p>
        <a href="/" className={styles.link}>
          トップページへ戻る
        </a>
      </div>
    </div>
  )
}
