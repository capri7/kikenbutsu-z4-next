import { describe, it, expect, vi } from 'vitest'
import {
  FunctionsFetchError,
  FunctionsHttpError,
  type SupabaseClient,
} from '@supabase/supabase-js'
import { invokeEdgeFunction } from './edge-functions'

const FALLBACK = '処理に失敗しました'

function makeClient(result: { data: unknown; error: unknown }) {
  const invoke = vi.fn().mockResolvedValue(result)
  const supabase = { functions: { invoke } } as unknown as SupabaseClient
  return { supabase, invoke }
}

function jsonResponse(body: unknown, status = 400) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('invokeEdgeFunction', () => {
  it('成功したら data を返し、POST と body で invoke を呼ぶ', async () => {
    const { supabase, invoke } = makeClient({
      data: { url: 'https://example.com' },
      error: null,
    })

    const result = await invokeEdgeFunction<{ url: string }>(
      supabase,
      'billing-portal',
      FALLBACK,
      { returnUrl: '/mypage' },
    )

    expect(result).toEqual({ url: 'https://example.com' })
    expect(invoke).toHaveBeenCalledWith('billing-portal', {
      method: 'POST',
      body: { returnUrl: '/mypage' },
    })
  })

  it('失敗の応答に error があれば、それをメッセージにして投げる', async () => {
    const { supabase } = makeClient({
      data: null,
      error: new FunctionsHttpError(jsonResponse({ error: 'not_authenticated' }, 401)),
    })

    await expect(
      invokeEdgeFunction(supabase, 'delete-account', FALLBACK),
    ).rejects.toThrow('not_authenticated')
  })

  it('失敗の応答に error がなければ、fallback の文言で投げる', async () => {
    const { supabase } = makeClient({
      data: null,
      error: new FunctionsHttpError(jsonResponse({ message: 'x' }, 500)),
    })

    await expect(
      invokeEdgeFunction(supabase, 'delete-account', FALLBACK),
    ).rejects.toThrow(FALLBACK)
  })

  it('失敗の応答が JSON でなければ、fallback の文言で投げる', async () => {
    const { supabase } = makeClient({
      data: null,
      error: new FunctionsHttpError(new Response('Internal Server Error', { status: 500 })),
    })

    await expect(
      invokeEdgeFunction(supabase, 'delete-account', FALLBACK),
    ).rejects.toThrow(FALLBACK)
  })

  it('通信の失敗（FunctionsFetchError）は fallback の文言で投げる', async () => {
    const { supabase } = makeClient({
      data: null,
      error: new FunctionsFetchError(new TypeError('Failed to fetch')),
    })

    await expect(
      invokeEdgeFunction(supabase, 'delete-account', FALLBACK),
    ).rejects.toThrow(FALLBACK)
  })
})
