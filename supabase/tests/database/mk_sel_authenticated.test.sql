-- mk_sel（mistakes）の対象は authenticated だけであること
-- policy_roles_are は public（ロールの番号 0）を見逃すため、pg_policies で確かめる
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is(
  (select roles from pg_policies
    where schemaname = 'public'
      and tablename = 'mistakes'
      and policyname = 'mk_sel'),
  array['authenticated']::name[],
  'mk_sel の対象は authenticated だけ'
);

select * from finish();
rollback;
