-- user_profiles から契約の情報の列を消す（契約の情報は subscriptions だけに置く）
-- 列を消すと付いている制約と索引も消えるが、何が消えるかが読んで分かるように明示する
drop index public.idx_user_profiles_sub_status;
alter table public.user_profiles drop constraint user_profiles_subscription_status_check;
alter table public.user_profiles drop column subscription_status;
alter table public.user_profiles drop column current_period_end;
