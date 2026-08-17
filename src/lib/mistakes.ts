import { createClient } from '@/lib/supabase/client'

export async function recordMistake(
  questionId: string,
  clientNonce?: string,
  subcategoryId?: string | null
): Promise<unknown> {
  if (!questionId) throw new Error('questionId is required')
  const supabase = createClient()
  const params: { p_question_id: string; p_client_nonce?: string; p_subcategory_id?: string } = {
    p_question_id: String(questionId),
  }
  if (clientNonce) params.p_client_nonce = String(clientNonce)
  if (subcategoryId) params.p_subcategory_id = String(subcategoryId)
  const { data, error } = await supabase.rpc('record_mistake', params)
  if (error) throw error
  return data
}

export async function clearMistake(questionId: string): Promise<unknown> {
  if (!questionId) throw new Error('questionId is required')

  const supabase = createClient()
  const params = { p_question_id: String(questionId) }

  const { data, error } = await supabase.rpc('clear_mistake', params)
  if (error) throw error

  return data
}

export type MistakeItem = {
  id: string
  questionId: string
  title: string | null
  subcategoryId: string | null
  incorrectCount: number
  lastSeenAt: string
  order: number | null
}

export async function getMistakeItems(): Promise<MistakeItem[]> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('mistakes')
    .select(`
      id, question_id, incorrect_count, last_seen_at, subcategory_id,
      questions(title, order)
    `)
    .eq('user_id', user.id)
    .is('deleted_at', null)
    .order('last_seen_at', { ascending: false })

  if (error || !data) return []

  return data.map((r) => {
    const q = Array.isArray(r.questions) ? r.questions[0] : r.questions
    return {
      id: r.id,
      questionId: r.question_id,
      title: q?.title ?? null,
      subcategoryId: r.subcategory_id,
      incorrectCount: r.incorrect_count,
      lastSeenAt: r.last_seen_at,
      order: q?.order ?? null,
    }
  })
}

export async function getOrderedMistakeQuestionIds(): Promise<string[]> {
  const items = await getMistakeItems()
  return items.map((it) => it.questionId)
}

