-- 未ログインの人は、ビュー user_wrong_latest_all を読む権限がないこと
-- ビューは security_invoker=true で user_progress を読むため、
-- throws_ok だと user_progress の権限で 42501 になり、ビューの権限を確かめられない
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select ok(
  not has_table_privilege('anon', 'public.user_wrong_latest_all', 'SELECT'),
  '未ログインの人は、user_wrong_latest_all を読む権限がない'
);

select * from finish();
rollback;
