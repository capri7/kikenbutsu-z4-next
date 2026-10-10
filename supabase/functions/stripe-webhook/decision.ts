// supabase/functions/stripe-webhook/decision.ts

/**
 * customer.subscription.deleted受信時、実際にauth.usersを物理削除すべきか判定する。
 * user_idが解決できていない、またはdeletion_requestedフラグが立っていない場合は削除しない。
 */
export function shouldPhysicallyDeleteUser(
  userId: string | null,
  deletionRequested: boolean | null | undefined,
): boolean {
  return !!userId && !!deletionRequested;
}

/**
 * 退会の予約に従ってアカウントを削除したときの結果が、失敗かどうかを判定する。
 * すでに削除されている（user_not_found）場合は、削除が済んでいるので失敗としない
 * （前回の処理で削除した後、結果の記録だけが失敗して処理し直す場合がある）。
 * それ以外のエラーは失敗とし、通知を未処理のまま残して処理し直す。
 */
export function isUserDeletionFailure(
  error: { code?: string | null } | null | undefined,
): boolean {
  if (!error) return false;
  return error.code !== "user_not_found";
}
