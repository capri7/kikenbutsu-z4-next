import { createClient } from '@/lib/supabase/client'
import { isSubscribed } from '@/lib/subscription'

export async function getRandomAnyQuestionId(): Promise<string | null> {
  const supabase = createClient()
  const { count, error: cerr } = await supabase
    .from('questions')
    .select('id', { head: true, count: 'exact' })
  if (cerr || !count) {
    console.error(cerr)
    return null
  }

  const offset = Math.floor(Math.random() * count)
  const { data, error } = await supabase
    .from('questions')
    .select('id')
    .order('id', { ascending: true })
    .range(offset, offset)
  if (error) {
    console.error(error)
    return null
  }
  return data?.[0]?.id ?? null
}

export async function getOrderedFreeQuestionIds(): Promise<string[]> {
  const supabase = createClient()
  const { data: cats } = await supabase.from('categories').select('id, order')
  const catOrderMap = new Map(
    (cats ?? []).map((c: { id: string; order: number | null }) => [c.id, c.order ?? 9999])
  )

  const { data: subs } = await supabase
    .from('subcategories')
    .select('id, order, category_id')
  const subInfoMap = new Map(
    (subs ?? []).map((s: { id: string; order: number | null; category_id: string }) => [
      s.id,
      { order: s.order ?? 9999, category_id: s.category_id },
    ])
  )

  const { data: qs } = await supabase
    .from('questions')
    .select('id, subcategory_id, order, is_paid')
    .eq('is_paid', false)

  type Row = { id: string; subcategory_id: string; order: number | null }

  return (qs ?? [])
    .slice()
    .sort((a: Row, b: Row) => {
      const sa = subInfoMap.get(a.subcategory_id) ?? { order: 9999, category_id: '' }
      const sb = subInfoMap.get(b.subcategory_id) ?? { order: 9999, category_id: '' }
      const coA = catOrderMap.get(sa.category_id) ?? 9999
      const coB = catOrderMap.get(sb.category_id) ?? 9999
      if (coA !== coB) return coA - coB
      if (sa.order !== sb.order) return sa.order - sb.order
      return (a.order ?? 0) - (b.order ?? 0)
    })
    .map((r: Row) => r.id)
}

export type ChapterInfo = {
  slug: string
  categoryId: string
  categoryName: string
  name: string
}

export type ChapterMap = Record<string, ChapterInfo>

export async function buildSubcategoryMap(): Promise<ChapterMap> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('subcategories')
    .select(`
      id, slug, name, category_id,
      categories(name)
    `)
    .order('order', { ascending: true })

  if (error || !data) return {}

  const map: ChapterMap = {}
  for (const r of data as {
    id: string
    slug: string
    name: string
    category_id: string
    categories: { name: string } | { name: string }[] | null
  }[]) {
    const catObj = Array.isArray(r.categories) ? r.categories[0] : r.categories
    map[r.id] = {
      slug: r.slug,
      categoryId: r.category_id,
      categoryName: catObj?.name ?? '(不明な分野)',
      name: r.name,
    }
  }
  return map
}

async function fetchAllQuestionRows(paid: boolean): Promise<{ id: string; subcategory_id: string }[]> {
  const supabase = createClient()
  const PAGE_SIZE = 1000
  let from = 0
  let all: { id: string; subcategory_id: string }[] = []

  while (true) {
    let q = supabase
      .from('questions')
      .select('id, subcategory_id')
      .range(from, from + PAGE_SIZE - 1)

    if (!paid) q = q.eq('is_paid', false)

    const { data, error } = await q
    if (error) {
      console.error('[fetchAllQuestionRows] error:', error)
      break
    }
    const rows = data ?? []
    all = all.concat(rows)
    if (rows.length < PAGE_SIZE) break
    from += PAGE_SIZE
  }

  return all
}

export type CategoryData = Record<
  string,
  {
    correct: number
    total: number
    chapters: Record<string, { name: string; correct: number; total: number }>
  }
>

export async function fetchUserProgress(
  userId: string,
  paid: boolean,
  chapterMap: ChapterMap
): Promise<CategoryData> {
  const supabase = createClient()

  const qrows = await fetchAllQuestionRows(paid)
  if (!qrows.length) {
    console.warn('[fetchUserProgress] no question rows fetched')
    return {}
  }

  const totalsBySub: Record<string, number> = {}
  for (const q of qrows) {
    if (!q.subcategory_id) continue
    totalsBySub[q.subcategory_id] = (totalsBySub[q.subcategory_id] || 0) + 1
  }

  const categoryData: CategoryData = {}
  for (const [subId, info] of Object.entries(chapterMap)) {
    const { categoryName, name: chapterName } = info
    if (!categoryData[categoryName]) {
      categoryData[categoryName] = { correct: 0, total: 0, chapters: {} }
    }
    const subTotal = totalsBySub[subId] || 0
    categoryData[categoryName].chapters[subId] = { name: chapterName, correct: 0, total: subTotal }
    categoryData[categoryName].total += subTotal
  }

  let q2 = supabase
    .from('user_progress')
    .select(`
      id, question_id, is_correct, answered_at, updated_at,
      questions!inner ( subcategory_id, is_paid )
    `)
    .eq('user_id', userId)
    .order('answered_at', { ascending: false, nullsFirst: false })
    .order('updated_at', { ascending: false, nullsFirst: false })
    .order('id', { ascending: false })
  if (!paid) q2 = q2.eq('questions.is_paid', false)

  const { data: logs, error: lerr } = await q2
  if (lerr || !logs) return categoryData

  type LogRow = {
    question_id: string
    is_correct: boolean
    questions: { subcategory_id: string } | { subcategory_id: string }[] | null
  }

  const lastByQuestion = new Map<string, LogRow>()
  for (const row of logs as LogRow[]) {
    if (!lastByQuestion.has(row.question_id)) {
      lastByQuestion.set(row.question_id, row)
    }
  }

  for (const row of lastByQuestion.values()) {
    const qObj = Array.isArray(row.questions) ? row.questions[0] : row.questions
    const subId = qObj?.subcategory_id
    const chap = subId ? chapterMap[subId] : undefined
    if (!chap || !subId) continue
    if (row.is_correct) {
      const cat = categoryData[chap.categoryName]
      if (!cat.chapters[subId]) {
        cat.chapters[subId] = { name: chap.name, correct: 0, total: 0 }
      }
      cat.correct += 1
      cat.chapters[subId].correct += 1
    }
  }

  return categoryData
}

export async function fetchQuestionIdsByCategory(
  categoryId: string,
  nowPaid: boolean,
  chapterMap: ChapterMap
): Promise<string[]> {
  const supabase = createClient()
  const subIds = Object.entries(chapterMap)
    .filter(([, info]) => String(info.categoryId) === String(categoryId))
    .map(([sid]) => sid)
  if (!subIds.length) return []
  let q = supabase.from('questions').select('id').in('subcategory_id', subIds)
  if (!nowPaid) q = q.eq('is_paid', false)
  const { data, error } = await q
  if (error) {
    console.error(error)
    return []
  }
  return (data ?? []).map((r: { id: string }) => String(r.id))
}

export async function getLatestCorrectMap(
  userId: string,
  ids: string[]
): Promise<Map<string, boolean>> {
  if (!ids.length) return new Map()
  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_progress')
    .select('question_id, is_correct, answered_at, updated_at, id')
    .eq('user_id', userId)
    .in('question_id', ids)
    .order('answered_at', { ascending: false, nullsFirst: false })
    .order('updated_at', { ascending: false, nullsFirst: false })
    .order('id', { ascending: false })

  if (error) {
    console.error(error)
    return new Map()
  }
  const m = new Map<string, boolean>()
  for (const r of (data ?? []) as { question_id: string; is_correct: boolean }[]) {
    const qid = String(r.question_id)
    if (!m.has(qid)) m.set(qid, r.is_correct)
  }
  return m
}

export async function pickOnePreferNotCorrect(userId: string, ids: string[]): Promise<string> {
  const latest = await getLatestCorrectMap(userId, ids)
  const notYetCorrect = ids.filter((id) => latest.get(String(id)) !== true)
  const pool = notYetCorrect.length ? notYetCorrect : ids
  return pool[Math.floor(Math.random() * pool.length)]
}

export async function areAllCorrect(userId: string, ids: string[]): Promise<boolean> {
  if (!ids.length) return false
  const latest = await getLatestCorrectMap(userId, ids)
  return ids.every((id) => latest.get(String(id)) === true)
}

export async function fetchWrongCountGlobal(userId: string, paid: boolean): Promise<number> {
  const supabase = createClient()
  const view = paid ? 'user_wrong_latest_all' : 'user_wrong_latest_free_v2'
  const { count, error } = await supabase
    .from(view)
    .select('question_id', { head: true, count: 'exact' })
    .eq('user_id', userId)
  if (error) {
    console.error('[fetchWrongCountGlobal] error', error)
    return 0
  }
  return Number(count || 0)
}

export async function fetchReviewCountGlobal(userId: string): Promise<number> {
  const supabase = createClient()
  const { count, error } = await supabase
    .from('user_review_items')
    .select('id', { head: true, count: 'exact' })
    .eq('user_id', userId)
    .eq('status', 'active')
  if (error) {
    console.error('[fetchReviewCountGlobal] error', error)
    return 0
  }
  return Number(count || 0)
}

export type QuestionRow = {
  id: string
  subcategory_id: string
  question: string | null
  choices: unknown
  answer: number
  order: number | null
  is_paid: boolean | null
  hint: string | null
  difficulty: string | null
  tags: unknown
  explanation: unknown
  title: string | null
  fields: unknown
  headers: unknown
  feedback_mode: string
  image: string | null
  statement_explanations: unknown
}

export function getSectionTopUrl(currentPath: string): string {
  const parts = currentPath.split('/').filter(Boolean)
  parts.pop()
  return '/' + parts.join('/') + '/'
}

async function getAnsweredSetForUser(questionIds: string[]): Promise<Set<string>> {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user || !questionIds?.length) return new Set()
  const { data, error } = await supabase
    .from('user_progress')
    .select('question_id')
    .eq('user_id', user.id)
    .in('question_id', questionIds)
  if (error) return new Set()
  return new Set((data ?? []).map((r: { question_id: string }) => String(r.question_id)))
}

async function getQuestionPoolIds(scope: 'all' | 'free' = 'all'): Promise<string[]> {
  const supabase = createClient()
  const query = supabase.from('questions').select('id').order('id', { ascending: true })
  const { data, error } = scope === 'free' ? await query.eq('is_paid', false) : await query
  if (error || !data?.length) return []
  return data.map((r: { id: string }) => r.id)
}

// 乱数（決定論的）: mulberry32
function mulberry32(a: number): () => number {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// 文字列→数値ハッシュ（簡易）
function cyrb53(str: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed
  let h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

function todayLocalYYYYMMDD(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function seededShuffle<T>(arr: T[], seedStr: string): T[] {
  const seed = cyrb53(seedStr)
  const rand = mulberry32(seed)
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export async function getNextRandomQuestionId(
  currentId: string,
  scope: 'all' | 'free' = 'all'
): Promise<string | null> {
  const supabase = createClient()
  const cur = String(currentId ?? '')
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  const paidUser = await isSubscribed(user.id)

  const allIdsRaw = await getQuestionPoolIds(scope)
  const allIds = allIdsRaw.map(String)
  if (!allIds.length) return null

  const answered = await getAnsweredSetForUser(allIds)
  const today = todayLocalYYYYMMDD()
  const deck = seededShuffle(allIds, `${user.id}|${today}|${scope}`)

  const pos = deck.indexOf(cur)
  const rotated = pos >= 0 ? deck.slice(pos + 1).concat(deck.slice(0, pos)) : deck

  const next = rotated.find((id) => !answered.has(id)) ?? rotated[0] ?? null
  if (!next && scope === 'free' && paidUser) {
    return await getNextRandomQuestionId(currentId, 'all')
  }
  return next
}



export async function getNextForUser(
  currentId: string,
  mode: 'free' | 'all' | null,
  subcategoryId?: string | null,
  categoryId?: string | null
): Promise<string | null> {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const paid = user ? await isSubscribed(user.id) : false
  const includePaid = mode !== 'free' && !!paid

  try {
    if (user) {
      const { data, error } = await supabase.rpc('pick_next_question', {
        p_user_id: user.id,
        p_include_paid: includePaid,
        p_subcategory_id: subcategoryId ?? null,
        p_category_id: categoryId ?? null,
      })
      if (!error) {
        const nextId = Array.isArray(data) ? data[0]?.id : (data?.id ?? null)
        if (nextId) return nextId
        if (!includePaid && paid) {
          const r2 = await supabase.rpc('pick_next_question', {
            p_user_id: user.id,
            p_include_paid: true,
            p_subcategory_id: subcategoryId ?? null,
            p_category_id: categoryId ?? null,
          })
          const next2 = Array.isArray(r2.data) ? r2.data[0]?.id : (r2.data?.id ?? null)
          if (next2) return next2
        }
      } else {
        console.warn('pick_next_question RPC error', error)
      }
    }
  } catch (e) {
    console.warn('pick_next_question RPC exception', e)
  }

  const scope = includePaid ? 'all' : 'free'
  return await getNextRandomQuestionId(currentId, scope)
}

export async function getNextInScope(
  currentId: string,
  userId: string,
  paid: boolean,
  opts: { subcategoryId?: string | null; categoryId?: string | null }
): Promise<string | null> {
  const supabase = createClient()

  let subIds: string[] | null = null
  if (opts.categoryId) {
    const { data: subs } = await supabase
      .from('subcategories')
      .select('id')
      .eq('category_id', opts.categoryId)
    subIds = (subs ?? []).map((s: { id: string }) => s.id)
  }

  let q = supabase
    .from('questions')
    .select('id, order')
    .order('order', { ascending: true })
    .order('id', { ascending: true })

  if (!paid) q = q.eq('is_paid', false)

  if (opts.subcategoryId) {
    q = q.eq('subcategory_id', opts.subcategoryId)
  } else if (subIds) {
    if (!subIds.length) return null
    q = q.in('subcategory_id', subIds)
  }

  const { data, error } = await q
  if (error || !data?.length) return null

  const ids = data.map((r: { id: string }) => String(r.id))
  const latest = await getLatestCorrectMap(userId, ids)
  const notCorrect = ids.filter((id) => latest.get(id) !== true)

  const curPos = ids.indexOf(String(currentId))
  const pool = notCorrect.length ? notCorrect : ids

  if (curPos === -1) {
    return pool[0] ?? null
  }

  for (let i = curPos + 1; i < ids.length; i++) {
    if (pool.includes(ids[i])) return ids[i]
  }
  for (let i = 0; i <= curPos; i++) {
    if (pool.includes(ids[i])) return ids[i]
  }

  return pool[0] ?? null
}







