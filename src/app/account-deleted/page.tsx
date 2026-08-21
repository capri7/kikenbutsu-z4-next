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
        <div className={styles.icon} aria-hidden="true">
          ✓
        </div>
        <h2 className={styles.title}>退会手続きが完了しました</h2>
        <p className={styles.message}>
          ご利用ありがとうございました。
          <br />
          またのご利用をお待ちしております。
          <br />
          再度ご利用の際は、新規登録からお申し込みください。
        </p>
        <a href="/" className={styles.link}>
          トップページへ戻る
        </a>
      </div>
    </div>
  )
}