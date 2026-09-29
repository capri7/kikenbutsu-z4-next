-- 任意のユーザー ID で有料会員かを判定できる関数がないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select hasnt_function(
  'public',
  'has_active_subscription',
  array['uuid']::name[],
  '引数を取る has_active_subscription(uuid) はない'
);

select * from finish();
rollback;
