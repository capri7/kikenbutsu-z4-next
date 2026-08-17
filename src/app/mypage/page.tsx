import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import MypageClient from './MypageClient'

export const metadata: Metadata = {
  title: 'マイページ｜乙種4類危険物取扱者試験対策',
  description:
    '本試験までのカウントダウン、進捗カレンダーを設置。総合・分野別・節別の練習問題をバーグラフで確認でき、誤答リストと復習リストで苦手を集中的に潰せるマイページです。',
  robots: 'noindex,nofollow',
}

export default async function MypagePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

  return <MypageClient userEmail={data.user.email ?? ''} userId={data.user.id} />
}