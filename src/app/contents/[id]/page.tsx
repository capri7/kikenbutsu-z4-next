import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ToastProvider } from '@/lib/toast'
import QuestionClient from './QuestionClient'
import { fetchQuestionData } from '@/lib/dataLoader.server'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const question = await fetchQuestionData(id)
  return {
    title: question?.title || '練習問題',
  }
}

export default async function QuestionPage({ params }: Props) {
  const { id } = await params
  const question = await fetchQuestionData(id)

  if (!question) {
    notFound()
  }

  return (
    <ToastProvider>
      <QuestionClient question={question} />
    </ToastProvider>
  )
}