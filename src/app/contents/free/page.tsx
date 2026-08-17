import type { Metadata } from 'next'
import { Suspense } from 'react'
import FreeQuizClient from './FreeQuizClient'

export const metadata: Metadata = {
  title: '無料32問の乙4問題にチャレンジ｜危険物乙4試験対策',
  description:
    '危険物乙4。登録不要・無料で32問に挑戦できる練習問題。法令・物化・性消の頻出問題を厳選。本番レベルの問題で実力を確認。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/contents/free',
  },
  robots: 'index,follow',
  openGraph: {
    title: '無料32問の乙4問題にチャレンジ｜危険物乙4試験対策',
    description:
      '危険物乙4。登録不要・無料で32問に挑戦できる練習問題。法令・物化・性消の頻出問題を厳選。本番レベルの問題で実力を確認。',
    type: 'website',
    url: 'https://kikenbutsu-z4.com/contents/free',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
}

export default function FreePage() {

  return (
    <Suspense fallback={null}>
      <FreeQuizClient />
    </Suspense>
  )
}