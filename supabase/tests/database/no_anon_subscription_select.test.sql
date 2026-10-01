-- 未ログインの人は、subscriptions を読めないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- 未ログインの人になりきる
set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);

select throws_ok(
  $$ select * from public.subscriptions $$,
  '42501',
  null,
  '未ログインの人は、subscriptions を読めない'
);

reset role;
select * from finish();
rollback;
