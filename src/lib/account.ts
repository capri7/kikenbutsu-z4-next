import { createClient } from '@/lib/supabase/client'
import { invokeEdgeFunction } from '@/lib/edge-functions'
import { NotLoggedInError } from '@/lib/authErrors'

export type AccountDeletionResult =
  | { deleted: true }
  | { scheduled: true; effective_date: string | null }

// ログインが切れていたら NotLoggedInError を投げる（画面は移らない。移るのは呼び出す側の画面）
export async function requestAccountDeletion(): Promise<AccountDeletionResult> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    throw new NotLoggedInError()
  }

  return invokeEdgeFunction<AccountDeletionResult>(
    supabase,
    'request-account-deletion',
    'Account deletion request failed',
  )
}

export type CancelAccountDeletionResult = { cancelled: true; already?: boolean }

// ログインが切れていたら NotLoggedInError を投げる（画面は移らない。移るのは呼び出す側の画面）
export async function cancelAccountDeletion(): Promise<CancelAccountDeletionResult> {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    throw new NotLoggedInError()
  }

  return invokeEdgeFunction<CancelAccountDeletionResult>(
    supabase,
    'cancel-account-deletion',
    'Cancel account deletion failed',
  )
}
