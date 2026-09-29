-- 未ログインの人は、has_active_subscription() を実行できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select function_privs_are(
  'public',
  'has_active_subscription',
  array[]::name[],
  'anon',
  array[]::text[],
  '未ログインの人は、has_active_subscription() を実行できない'
);

select * from finish();
rollback;
