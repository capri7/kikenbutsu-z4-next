-- 使われなくなったビュー user_active_subscriptions を削除する。
-- 唯一の利用者だった maintenance.delete_stale_unverified を、
-- 20260928061907_remove_unverified_cleanup.sql で廃止したため。
-- 削除の前に、リポジトリ（画面・Edge Functions・テスト）と本番（他のビュー・関数・RLS のポリシー）の
-- どこからも参照されていないことを確認した。
-- 参照が残っていた場合に気づけるよう、cascade は付けない（参照があれば失敗して止まる）。

drop view if exists public.user_active_subscriptions;
