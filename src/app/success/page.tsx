import type { Metadata } from 'next'
import { Suspense } from 'react'
import SuccessClient from './SuccessClient'

export const metadata: Metadata = {
  title: 'お申し込み完了｜危険物乙4 対策',
  robots: 'noindex,nofollow',
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessClient />
    </Suspense>
  )
}