-- exam_dates_select_own の対象は authenticated だけであること
-- policy_roles_are は public（ロールの番号 0）を見逃すため、pg_policies で確かめる
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is(
  (select roles from pg_policies
    where schemaname = 'public'
      and tablename = 'exam_dates'
      and policyname = 'exam_dates_select_own'),
  array['authenticated']::name[],
  'exam_dates_select_own の対象は authenticated だけ'
);

select * from finish();
rollback;
