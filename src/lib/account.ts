import { createClient } from '@/lib/supabase/client'
import { invokeEdgeFunction } from '@/lib/edge-functions'

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

  return invokeEdgeFunction<AccountDeletionResult>(
    supabase,
    'request-account-deletion',
    'Account deletion request failed',
  )
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

  return invokeEdgeFunction<CancelAccountDeletionResult>(
    supabase,
    'cancel-account-deletion',
    'Cancel account deletion failed',
  )
}
