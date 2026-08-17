import { createClient } from '@/lib/supabase/server'
import type { QuestionRow } from '@/lib/dataLoader'

export async function fetchQuestionData(id: string): Promise<QuestionRow | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('id', id)
    .single()
  if (error) {
    console.error('[fetchQuestionData:server] error', error)
    return null
  }
  return data
}