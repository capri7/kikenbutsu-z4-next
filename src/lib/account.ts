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
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- 画面の部品の外の関数で router を使えないため。ログインが切れているので、ページ全体を読み込み直して、画面に残った会員の情報も消す
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
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- 画面の部品の外の関数で router を使えないため。ログインが切れているので、ページ全体を読み込み直して、画面に残った会員の情報も消す
    window.location.href = '/login'
    throw new Error('not logged in')
  }

  return invokeEdgeFunction<CancelAccountDeletionResult>(
    supabase,
    'cancel-account-deletion',
    'Cancel account deletion failed',
  )
}
