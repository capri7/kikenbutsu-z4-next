-- PR 4: 使われていないものの削除と権限の整理（アプリの変更なし）

-- スキーマ（中身0。中身があれば CASCADE なしのため失敗する）
DROP SCHEMA maintenance;

-- 関数（どこからも呼ばれていない）
DROP FUNCTION public.get_free_progress_summary();
DROP FUNCTION public.get_mypage_progress(uuid);
DROP FUNCTION public.pick_next_question(uuid, boolean);

-- 索引
DROP INDEX public.ix_subscriptions_customer_id;
DROP INDEX public.ix_subscriptions_livemode;
DROP INDEX public.idx_user_progress_user;

-- service_role 向けのポリシー（service_role は RLS を無視するため効果がない）
DROP POLICY "Enable insert for authenticated users only" ON public.categories;
DROP POLICY "Authenticated users can update their own categories" ON public.categories;
DROP POLICY "Enable delete for users based on user_id" ON public.categories;
DROP POLICY questions_service_full ON public.questions;
DROP POLICY "POLICY subcategories_service_write" ON public.subcategories;
DROP POLICY subscriptions_service_full ON public.subscriptions;

-- 対象を public から authenticated に
ALTER POLICY exam_dates_select_own ON public.exam_dates TO authenticated;
ALTER POLICY mk_sel ON public.mistakes TO authenticated;
ALTER POLICY "user_review_items.select.own" ON public.user_review_items TO authenticated;

-- anon の SELECT を外す
REVOKE SELECT ON
  public.exam_dates,
  public.mistake_attempts,
  public.subscriptions,
  public.user_profiles,
  public.user_progress,
  public.user_review_items,
  public.user_wrong_latest_all
FROM anon;

-- REFERENCES・TRIGGER を外す（DDL でしか使わない権限）
REVOKE REFERENCES, TRIGGER ON public.exam_dates, public.user_profiles FROM anon, authenticated;
REVOKE REFERENCES, TRIGGER ON public.questions FROM authenticated;
