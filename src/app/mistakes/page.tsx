import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ToastProvider } from '@/lib/toast'
import MistakesClient from './MistakesClient'

export const metadata: Metadata = {
  title: '誤答リスト',
  robots: { index: false, follow: false },
}

export default function MistakesPage() {
  return (
    <ToastProvider>
      <Suspense fallback={null}>
        <MistakesClient />
      </Suspense>
    </ToastProvider>
  )
}