-- has_active_subscription() は SECURITY DEFINER ではなく、RLS の範囲の中だけで読むこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select isnt_definer(
  'public',
  'has_active_subscription',
  array[]::name[],
  'has_active_subscription() は SECURITY DEFINER ではない'
);

select * from finish();
rollback;
