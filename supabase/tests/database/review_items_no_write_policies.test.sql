-- user_review_items に、書き込みのポリシーが1つもないこと（読み取りの select.own だけ残す）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is(
  (select count(*)::int from pg_policies
    where schemaname = 'public' and tablename = 'user_review_items' and cmd <> 'SELECT'),
  0,
  'user_review_items に書き込みのポリシーがない'
);

select * from finish();
rollback;
