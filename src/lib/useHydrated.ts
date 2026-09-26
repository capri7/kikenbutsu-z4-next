import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

// ハイドレーションが終わったかを返す。サーバーでの描画とハイドレーションの間は false、その後は true。
// 使い道：
// - false の間はボタンを無効にし、クリックの処理が付く前のクリックが失われるのを防ぐ（マイページ）
// - ブラウザの保存領域はサーバーでは読めないため、true になってから読む（無料32問）
export function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false)
}