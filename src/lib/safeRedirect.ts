// ログイン後の移動先（?next=）を、このサイトの中のパスだけに限定する。
// 外部のサイトへ誘導されること（オープンリダイレクト）を防ぐ。
// ブラウザと同じ仕組み（new URL）で解釈し、行き先がサイトの外なら既定の移動先を返す。

const DEFAULT_PATH = '/mypage'
const BASE = 'http://localhost'

export function getSafeNextPath(value: string | string[] | undefined): string {
  if (typeof value !== 'string' || !value.startsWith('/')) return DEFAULT_PATH

  try {
    const url = new URL(value, BASE)
    if (url.origin !== BASE) return DEFAULT_PATH
    return url.pathname + url.search + url.hash
  } catch {
    return DEFAULT_PATH
  }
}
