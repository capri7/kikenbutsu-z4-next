-- 未ログインの人は、user_profiles を書き換えられないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- 未ログインの人になりきる
set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);

select throws_ok(
  $$ update public.user_profiles set subscription_status = 'active' $$,
  '42501',
  null,
  '未ログインの人は、user_profiles を書き換えられない'
);

reset role;
select * from finish();
rollback;
