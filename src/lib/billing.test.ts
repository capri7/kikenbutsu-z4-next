import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NotLoggedInError } from './authErrors'

// Supabase の接続を偽物に差し替える（ログインの状態、user_profiles の読み取り、Edge Function の呼び出し）
const getSession = vi.fn()
const maybeSingle = vi.fn()
const invoke = vi.fn()
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    auth: { getSession },
    from: () => ({ select: () => ({ eq: () => ({ maybeSingle }) }) }),
    functions: { invoke },
  }),
}))

import { getBillingPortalUrl } from './billing'

beforeEach(() => {
  getSession.mockReset()
  maybeSingle.mockReset()
  invoke.mockReset()
  getSession.mockResolvedValue({ data: { session: { user: { id: 'user-1' } } } })
})

describe('getBillingPortalUrl（請求情報）', () => {
  it('ログインが切れていたら NotLoggedInError を投げ、請求の画面を作らない', async () => {
    getSession.mockResolvedValue({ data: { session: null } })
    await expect(getBillingPortalUrl()).rejects.toBeInstanceOf(NotLoggedInError)
    expect(invoke).not.toHaveBeenCalled()
  })

  it('Stripe の顧客 ID がなければ no_customer を返し、請求の画面を作らない', async () => {
    maybeSingle.mockResolvedValue({ data: { stripe_customer_id: null } })
    await expect(getBillingPortalUrl()).resolves.toEqual({ kind: 'no_customer' })
    expect(invoke).not.toHaveBeenCalled()
  })

  it('顧客 ID があれば、戻り先を付けて billing-portal を呼び、請求の画面の URL を返す', async () => {
    maybeSingle.mockResolvedValue({ data: { stripe_customer_id: 'cus_1' } })
    invoke.mockResolvedValue({ data: { url: 'https://billing.stripe.com/session/x' }, error: null })
    await expect(getBillingPortalUrl('/mypage')).resolves.toEqual({
      kind: 'portal',
      url: 'https://billing.stripe.com/session/x',
    })
    expect(invoke).toHaveBeenCalledWith('billing-portal', {
      method: 'POST',
      body: { return_url: `${window.location.origin}/mypage` },
    })
  })

  it('billing-portal が URL を返さなければ、エラーにする', async () => {
    maybeSingle.mockResolvedValue({ data: { stripe_customer_id: 'cus_1' } })
    invoke.mockResolvedValue({ data: {}, error: null })
    await expect(getBillingPortalUrl()).rejects.toThrow('No portal URL')
  })
})
