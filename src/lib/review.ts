import { createClient } from '@/lib/supabase/client'


export type AddToReviewParams = {
  questionId: string
}

export type AddToReviewResult =
  | { ok: true }
  | { ok: false; reason: 'auth' }
  | { ok: false; error: unknown }


export async function addToReview({
  questionId,
}: AddToReviewParams): Promise<AddToReviewResult> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, reason: 'auth' }

  const { error } = await supabase.rpc('add_review_item', {
    p_question_id: questionId,
  })

  if (error) return { ok: false, error }
  return { ok: true }
}

export type ReviewItem = {
  id: string
  questionId: string
  title: string | null
  subcategoryId: string | null
  contentPath: string
  lastReviewedAt: string | null
  createdAt: string
  order: number | null
}

export async function getReviewItems(): Promise<ReviewItem[]> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('user_review_items')
    .select(`
      id, question_id, title, subcategory_id, content_path, created_at, last_reviewed_at,
      questions(order)
    `)
    .eq('user_id', user.id)
    .eq('status', 'active')
    .order('last_reviewed_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error || !data) return []

  return data.map((r) => {
    const q = Array.isArray(r.questions) ? r.questions[0] : r.questions
    return {
      id: r.id,
      questionId: r.question_id,
      title: r.title,
      subcategoryId: r.subcategory_id,
      contentPath: r.content_path,
      lastReviewedAt: r.last_reviewed_at,
      createdAt: r.created_at,
      order: q?.order ?? null,
    }
  })
}

export async function markReviewItemMastered(id: string): Promise<{ ok: boolean }> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false }

  const { error } = await supabase.rpc('mark_review_item_mastered', {
    p_id: id,
  })

  if (error) return { ok: false }
  return { ok: true }
}

export async function isInReviewList(questionId: string): Promise<boolean> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return false

  const { data, error } = await supabase
    .from('user_review_items')
    .select('id')
    .eq('user_id', user.id)
    .eq('question_id', questionId)
    .eq('status', 'active')
    .maybeSingle()

  if (error) return false
  return !!data
}

export async function getOrderedReviewQuestionIds(): Promise<string[]> {
  const items = await getReviewItems()
  return items.map((it) => it.questionId)
}
