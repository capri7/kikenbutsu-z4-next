-- 本人だけを判定する、引数を取らない has_active_subscription() があること
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select has_function(
  'public',
  'has_active_subscription',
  array[]::name[],
  '引数を取らない has_active_subscription() がある'
);

select * from finish();
rollback;
