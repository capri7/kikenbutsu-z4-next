import type { Metadata } from 'next'
import ResetPasswordForm from './ResetPasswordForm'

export const metadata: Metadata = {
  title: 'パスワード再設定 ｜ 乙種4類危険物取扱者試験対策',
  description:
    'パスワードを再設定するページです。新しいパスワードを入力して更新してください。設定後はログインページへお進みください。',
  robots: 'noindex,nofollow',
}

export default function ResetPasswordPage() {
  return <ResetPasswordForm />
}