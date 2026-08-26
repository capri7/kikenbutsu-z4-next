import { createClient } from '@/lib/supabase/client'

export type AccountDeletionResult =
  | { deleted: true }
  | { scheduled: true; effective_date: string | null }

export async function requestAccountDeletion(): Promise<AccountDeletionResult> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = '/login'
    throw new Error('not logged in')
  }

  const endpoint = 'https://vyzkkkskmwyctznbczzr.functions.supabase.co/request-account-deletion'
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${session.access_token}`,
    },
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || 'Account deletion request failed')
  return json
}

export type CancelAccountDeletionResult = { cancelled: true; already?: boolean }

export async function cancelAccountDeletion(): Promise<CancelAccountDeletionResult> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = '/login'
    throw new Error('not logged in')
  }

  const endpoint = 'https://vyzkkkskmwyctznbczzr.functions.supabase.co/cancel-account-deletion'
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${session.access_token}`,
    },
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(json.error || 'Cancel account deletion failed')
  return json
}