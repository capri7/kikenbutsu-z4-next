'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import styles from './mypage.module.css'
import ExamCountdown from './ExamCountdown'
import StudyCalendar from './StudyCalendar'
import PracticeSection from './PracticeSection'
import PaidUpsellSection from './PaidUpsellSection'
import CategoryProgress from './CategoryProgress'
import ReviewMistakesSection from './ReviewMistakesSection'
import BillingCard from './BillingCard'

export default function MypageClient({ userEmail, userId }: { userEmail: string; userId: string }) {
  return (
    <>
      <Breadcrumbs items={[{ label: 'トップ', href: '/' }, { label: 'マイページ' }]} />

      <main className="site-main mypage-page">
        <div className={styles.mainContainer}>
          <div className={styles.mypageMain}>
            <h2 className={styles.pageTitle}>
              <span className={styles.userEmoji} aria-hidden="true">
                😀
              </span>
              <span className={styles.userLabel}>
                <span id="user-email">{userEmail}</span> さんの
                <br />
                合格ルート
              </span>
            </h2>

            <div className={styles.dashboard}>
              <ExamCountdown userId={userId} />
              <StudyCalendar userId={userId} />
              <PracticeSection userId={userId} />
              <PaidUpsellSection userId={userId} />
              <CategoryProgress userId={userId} />
              <ReviewMistakesSection userId={userId} />
              <BillingCard userId={userId} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}