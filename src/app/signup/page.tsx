import type { Metadata } from 'next'
import SignupForm from './SignupForm'

export const metadata: Metadata = {
  title: '新規登録 ｜ 乙種4類危険物取扱者試験対策',
  description: '新規で登録するページ。',
  robots: 'noindex,nofollow',
}

export default function SignupPage() {
  return (
    <main className="site-main">
      <SignupForm />
    </main>
  )
}