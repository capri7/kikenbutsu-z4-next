import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NotLoggedInError } from './authErrors'

// Supabase の接続を偽物に差し替える（ログインの状態と、Edge Function の呼び出しだけを使う）
const getSession = vi.fn()
const invoke = vi.fn()
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({ auth: { getSession }, functions: { invoke } }),
}))

import { cancelAccountDeletion, requestAccountDeletion } from './account'

const LOGGED_IN = { data: { session: { user: { id: 'user-1' } } } }
const LOGGED_OUT = { data: { session: null } }

beforeEach(() => {
  getSession.mockReset()
  invoke.mockReset()
})

describe('requestAccountDeletion（退会）', () => {
  it('ログインが切れていたら NotLoggedInError を投げ、退会の処理（Edge Function）を呼ばない', async () => {
    getSession.mockResolvedValue(LOGGED_OUT)
    await expect(requestAccountDeletion()).rejects.toBeInstanceOf(NotLoggedInError)
    expect(invoke).not.toHaveBeenCalled()
  })

  it('ログインしていれば request-account-deletion を呼び、結果を返す', async () => {
    getSession.mockResolvedValue(LOGGED_IN)
    invoke.mockResolvedValue({ data: { deleted: true }, error: null })
    await expect(requestAccountDeletion()).resolves.toEqual({ deleted: true })
    expect(invoke).toHaveBeenCalledWith('request-account-deletion', { method: 'POST', body: undefined })
  })
})

describe('cancelAccountDeletion（退会の取り消し）', () => {
  it('ログインが切れていたら NotLoggedInError を投げ、取り消しの処理（Edge Function）を呼ばない', async () => {
    getSession.mockResolvedValue(LOGGED_OUT)
    await expect(cancelAccountDeletion()).rejects.toBeInstanceOf(NotLoggedInError)
    expect(invoke).not.toHaveBeenCalled()
  })

  it('ログインしていれば cancel-account-deletion を呼び、結果を返す', async () => {
    getSession.mockResolvedValue(LOGGED_IN)
    invoke.mockResolvedValue({ data: { cancelled: true }, error: null })
    await expect(cancelAccountDeletion()).resolves.toEqual({ cancelled: true })
    expect(invoke).toHaveBeenCalledWith('cancel-account-deletion', { method: 'POST', body: undefined })
  })
})
