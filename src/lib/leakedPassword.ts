import { isAuthWeakPasswordError } from '@supabase/supabase-js'

// Supabase Auth の「漏えいしたパスワードの使用を防ぐ」設定で拒否されたときの案内。
// 拒否の理由（reasons）に pwned が入っていれば、漏えい済みのパスワードによる拒否。
export const LEAKED_PASSWORD_MESSAGE =
  'このパスワードは過去に漏えいしたことが確認されているため、使えません。別のパスワードを入力してください。'

export function leakedPasswordMessage(error: unknown): string | null {
  if (isAuthWeakPasswordError(error) && error.reasons.includes('pwned')) {
    return LEAKED_PASSWORD_MESSAGE
  }
  return null
}
