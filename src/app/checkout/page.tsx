import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import CheckoutClient from './CheckoutClient'

export const metadata: Metadata = {
  title: '有料プランのお申し込み',
  robots: { index: false, follow: false },
}

export default async function CheckoutPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <CheckoutClient isLoggedIn={!!user} userEmail={user?.email ?? null} />
}