import { describe, it, expect } from 'vitest'
import { AuthWeakPasswordError } from '@supabase/supabase-js'
import { leakedPasswordMessage, LEAKED_PASSWORD_MESSAGE } from './leakedPassword'

describe('leakedPasswordMessage', () => {
  it('漏えい済み（pwned）で拒否されたときは、日本語の案内を返す', () => {
    const error = new AuthWeakPasswordError('Password is known to be weak', 422, ['pwned'])
    expect(leakedPasswordMessage(error)).toBe(LEAKED_PASSWORD_MESSAGE)
  })

  it('弱いパスワードでも、理由が漏えい以外（短すぎる）なら null を返す', () => {
    const error = new AuthWeakPasswordError('Password should be at least 6 characters', 422, ['length'])
    expect(leakedPasswordMessage(error)).toBeNull()
  })

  it('弱いパスワード以外のエラーは null を返す', () => {
    expect(leakedPasswordMessage({ code: 'user_already_exists', message: 'User already registered' })).toBeNull()
    expect(leakedPasswordMessage(null)).toBeNull()
  })
})
