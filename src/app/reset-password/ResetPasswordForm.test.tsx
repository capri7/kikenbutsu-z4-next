// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResetPasswordForm from './ResetPasswordForm'

// コンポーネントは [supabase] を依存にしているため、createClient は毎回同じオブジェクトを返す
const mocks = vi.hoisted(() => {
  const unsubscribe = vi.fn()
  const auth = {
    getSession: vi.fn(),
    setSession: vi.fn(),
    exchangeCodeForSession: vi.fn(),
    updateUser: vi.fn(),
    verifyOtp: vi.fn(),
    onAuthStateChange: vi.fn(),
  }
  return { unsubscribe, auth, client: { auth }, push: vi.fn() }
})

vi.mock('@/lib/supabase/client', () => ({
  createClient: () => mocks.client,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mocks.push }),
}))

beforeEach(() => {
  vi.resetAllMocks()
  mocks.auth.onAuthStateChange.mockReturnValue({
    data: { subscription: { unsubscribe: mocks.unsubscribe } },
  })
  mocks.auth.getSession.mockResolvedValue({ data: { session: null } })
  mocks.auth.updateUser.mockResolvedValue({ error: null })
  mocks.auth.verifyOtp.mockResolvedValue({ data: {}, error: null })
})

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

async function renderReady() {
  mocks.auth.getSession.mockResolvedValue({ data: { session: { access_token: 't' } } })
  const user = userEvent.setup()
  render(<ResetPasswordForm />)
  const button = screen.getByRole('button', { name: '更新する' }) as HTMLButtonElement
  await waitFor(() => expect(button.disabled).toBe(false))
  return {
    user,
    button,
    pw1: screen.getByLabelText('新しいパスワード'),
    pw2: screen.getByLabelText('新しいパスワード（確認）'),
  }
}

describe('ResetPasswordForm', () => {
  it('回復のセッションがないと、リンクの警告が出て、フォームが使えない', async () => {
    render(<ResetPasswordForm />)
    const button = screen.getByRole('button', { name: '更新する' }) as HTMLButtonElement

    expect(await screen.findByRole('alert')).toBeTruthy()
    expect(button.disabled).toBe(true)
  })

  it('回復のセッションがあると、フォームが使える', async () => {
    const { button } = await renderReady()

    expect(button.disabled).toBe(false)
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('6文字未満だと、通信せずにエラーを出す', async () => {
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcde')
    await user.type(pw2, 'abcde')
    await user.click(button)

    expect(await screen.findByText('パスワードは6文字以上で入力してください。')).toBeTruthy()
    expect(mocks.auth.updateUser).not.toHaveBeenCalled()
  })

  it('確認用と一致しないと、通信せずにエラーを出す', async () => {
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdeg')
    await user.click(button)

    expect(await screen.findByText('確認用のパスワードが一致しません。')).toBeTruthy()
    expect(mocks.auth.updateUser).not.toHaveBeenCalled()
  })

  it('更新に成功すると、入力を空にして、ログイン画面へ移る', async () => {
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(
      await screen.findByText('パスワードを更新しました。ログイン画面からサインインしてください。'),
    ).toBeTruthy()
    expect(mocks.auth.updateUser).toHaveBeenCalledWith({ password: 'abcdef' })
    expect((pw1 as HTMLInputElement).value).toBe('')
    expect((pw2 as HTMLInputElement).value).toBe('')
    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith('/login'), { timeout: 3000 })
  })

  it('以前と同じパスワードだと、日本語の案内を出す（失敗の経路）', async () => {
    mocks.auth.updateUser.mockResolvedValue({
      error: { code: 'same_password', message: 'New password should be different from the old password.' },
    })
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(
      await screen.findByText('新しいパスワードは以前のパスワードと異なる必要があります。'),
    ).toBeTruthy()
    expect(mocks.push).not.toHaveBeenCalled()
  })

  it('セッションの期限切れだと、リンクの警告を出す（失敗の経路）', async () => {
    mocks.auth.updateUser.mockResolvedValue({
      error: { code: 'session_not_found', message: 'Auth session missing!' },
    })
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(
      await screen.findByText('リンクの有効期限が切れているか無効です。メールのリンクからもう一度お試しください。'),
    ).toBeTruthy()
    expect(await screen.findByRole('alert')).toBeTruthy()
  })

  it('通信が例外で失敗しても、エラーを出して、もう一度押せる（失敗の経路）', async () => {
    mocks.auth.updateUser.mockRejectedValue(new Error('network down'))
    const { user, button, pw1, pw2 } = await renderReady()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(await screen.findByText('更新に失敗しました：Error: network down')).toBeTruthy()
    await waitFor(() => expect(button.disabled).toBe(false))
  })

  it('画面を閉じると、認証の監視を解除する', async () => {
    const { unmount } = render(<ResetPasswordForm />)
    await screen.findByRole('alert')

    unmount()

    expect(mocks.unsubscribe).toHaveBeenCalledTimes(1)
  })
})

describe('ResetPasswordForm（メールのリンクが token_hash の形のとき）', () => {
  async function renderWithTokenHash() {
    window.history.replaceState({}, '', '/reset-password?token_hash=hash123&type=recovery')
    const user = userEvent.setup()
    render(<ResetPasswordForm />)
    const button = screen.getByRole('button', { name: '更新する' }) as HTMLButtonElement
    await waitFor(() => expect(button.disabled).toBe(false))
    return {
      user,
      button,
      pw1: screen.getByLabelText('新しいパスワード'),
      pw2: screen.getByLabelText('新しいパスワード（確認）'),
    }
  }

  it('開いただけでは鍵を使わず、フォームが使える', async () => {
    const { button } = await renderWithTokenHash()

    expect(button.disabled).toBe(false)
    expect(screen.queryByRole('alert')).toBeNull()
    expect(mocks.auth.verifyOtp).not.toHaveBeenCalled()
  })

  it('押すと、鍵を確かめてからパスワードを更新する', async () => {
    const { user, button, pw1, pw2 } = await renderWithTokenHash()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(
      await screen.findByText('パスワードを更新しました。ログイン画面からサインインしてください。'),
    ).toBeTruthy()
    expect(mocks.auth.verifyOtp).toHaveBeenCalledWith({ token_hash: 'hash123', type: 'recovery' })
    expect(mocks.auth.verifyOtp.mock.invocationCallOrder[0]).toBeLessThan(
      mocks.auth.updateUser.mock.invocationCallOrder[0],
    )
  })

  it('鍵が無効なら、更新せずにリンクの警告を出す（失敗の経路）', async () => {
    mocks.auth.verifyOtp.mockResolvedValue({
      data: {},
      error: { code: 'otp_expired', message: 'Email link is invalid or has expired' },
    })
    const { user, button, pw1, pw2 } = await renderWithTokenHash()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)

    expect(await screen.findByRole('alert')).toBeTruthy()
    expect(mocks.auth.updateUser).not.toHaveBeenCalled()
  })

  it('更新が失敗してやり直すときは、使い終わった鍵をもう一度使わない（失敗の経路）', async () => {
    mocks.auth.updateUser.mockResolvedValueOnce({
      error: { code: 'same_password', message: 'New password should be different from the old password.' },
    })
    const { user, button, pw1, pw2 } = await renderWithTokenHash()

    await user.type(pw1, 'abcdef')
    await user.type(pw2, 'abcdef')
    await user.click(button)
    expect(
      await screen.findByText('新しいパスワードは以前のパスワードと異なる必要があります。'),
    ).toBeTruthy()

    await user.clear(pw1)
    await user.clear(pw2)
    await user.type(pw1, 'ghijkl')
    await user.type(pw2, 'ghijkl')
    await user.click(button)

    expect(
      await screen.findByText('パスワードを更新しました。ログイン画面からサインインしてください。'),
    ).toBeTruthy()
    expect(mocks.auth.verifyOtp).toHaveBeenCalledTimes(1)
    expect(mocks.auth.updateUser).toHaveBeenCalledTimes(2)
  })
})
