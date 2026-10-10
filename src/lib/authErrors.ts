// ログインが切れているときに、lib の関数が投げるエラー。
// lib の関数は画面を移らず、このエラーを受け取った画面の側が、ログインの画面へ移る。
export class NotLoggedInError extends Error {
  constructor() {
    super('NOT_LOGGED_IN')
    this.name = 'NotLoggedInError'
  }
}
