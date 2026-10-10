import { createClient } from '@/lib/supabase/server'
import type { QuestionRow } from '@/lib/dataLoader'

export async function fetchQuestionData(id: string): Promise<QuestionRow | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('id', id)
    // 見られない問題（存在しない、または無料会員に有料の問題）は 0 行になる。正常な場合なので、エラーにしない
    .maybeSingle()
  if (error) {
    console.error('[fetchQuestionData:server] error', error)
    return null
  }
  return data
}