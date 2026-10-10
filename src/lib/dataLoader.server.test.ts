import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// サーバーの Supabase の接続を偽物に差し替える（問題の表を1行読むところだけを使う）
const maybeSingle = vi.fn()
vi.mock('@/lib/supabase/server', () => ({
  createClient: async () => ({
    from: () => ({ select: () => ({ eq: () => ({ maybeSingle }) }) }),
  }),
}))

import { fetchQuestionData } from './dataLoader.server'

let consoleError: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  maybeSingle.mockReset()
  consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  consoleError.mockRestore()
})

describe('fetchQuestionData（問題のページの読み込み）', () => {
  it('問題があれば、その行を返す', async () => {
    maybeSingle.mockResolvedValue({ data: { id: 'q1', title: '問題1' }, error: null })
    await expect(fetchQuestionData('q1')).resolves.toEqual({ id: 'q1', title: '問題1' })
    expect(consoleError).not.toHaveBeenCalled()
  })

  it('見られない問題（0行）は null を返し、エラーとして記録しない', async () => {
    maybeSingle.mockResolvedValue({ data: null, error: null })
    await expect(fetchQuestionData('paid-q')).resolves.toBeNull()
    expect(consoleError).not.toHaveBeenCalled()
  })

  it('読み込みに失敗したら null を返し、エラーを記録する', async () => {
    const error = { code: '08006', message: 'connection failure' }
    maybeSingle.mockResolvedValue({ data: null, error })
    await expect(fetchQuestionData('q1')).resolves.toBeNull()
    expect(consoleError).toHaveBeenCalledWith('[fetchQuestionData:server] error', error)
  })
})
