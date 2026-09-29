-- mistakes・mistake_attempts・user_progress に、書き込みのポリシーが1つもないこと（読み取りだけ残す）
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

select is(
  (select count(*)::int from pg_policies
    where schemaname = 'public' and tablename = 'mistakes' and cmd <> 'SELECT'),
  0,
  'mistakes に書き込みのポリシーがない'
);

select is(
  (select count(*)::int from pg_policies
    where schemaname = 'public' and tablename = 'mistake_attempts' and cmd <> 'SELECT'),
  0,
  'mistake_attempts に書き込みのポリシーがない'
);

select is(
  (select count(*)::int from pg_policies
    where schemaname = 'public' and tablename = 'user_progress' and cmd <> 'SELECT'),
  0,
  'user_progress に書き込みのポリシーがない'
);

select * from finish();
rollback;
