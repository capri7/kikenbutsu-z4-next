-- 利用者（anon・authenticated）は、stripe_events を読めないこと（通知の中身には決済の情報が入る）
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);
select throws_ok(
  $$ select * from public.stripe_events $$,
  '42501',
  null,
  '未ログインの人は、stripe_events を読めない'
);
reset role;

set local role authenticated;
select set_config('request.jwt.claims', '{"role":"authenticated","sub":"00000000-0000-0000-0000-000000000001"}', true);
select throws_ok(
  $$ select * from public.stripe_events $$,
  '42501',
  null,
  'ログインした会員も、stripe_events を読めない'
);
reset role;

select * from finish();
rollback;
