-- 残りのテーブル・ビュー・トリガー用の関数から、利用者の書き込みと実行の権限を外す

-- 1. テーブルとビューの書き込みの権限
--    subscriptions は Stripe の Edge Function（service_role）だけが書き込む
--    categories・subcategories は教材の一部で、利用者は書き込まない
--    ビュー3つは読むためのもの（本番の2つはすでに外れているが、migration の履歴と揃える）
revoke insert, update, delete, truncate, references, trigger
  on public.categories,
     public.subcategories,
     public.subscriptions,
     public.user_latest_free_v2,
     public.user_wrong_latest_all,
     public.user_wrong_latest_free_v2
  from anon, authenticated;

-- 2. 何も許さない書き込みのポリシー（anon・authenticated は stripe_events に権限を持たないため不要）
drop policy "stripe_events_block_clients" on public.stripe_events;

-- 3. トリガー用の関数の実行の権限（トリガーとして動くときは実行の権限を見ない）
--    anon・authenticated は public から権限を受け継ぐため、public からも外す
revoke execute on function
  public.ensure_answered_at(),
  public.handle_new_user(),
  public.mistakes_protect_immutable(),
  public.set_updated_at(),
  public.touch_updated_at(),
  public.update_streak_on_progress()
  from public, anon, authenticated;
