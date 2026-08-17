import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ToastProvider } from '@/lib/toast'
import ReviewClient from './ReviewClient'

export const metadata: Metadata = {
  title: '復習リスト',
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return (
    <ToastProvider>
      <Suspense fallback={null}>
        <ReviewClient />
      </Suspense>
    </ToastProvider>
  )
}