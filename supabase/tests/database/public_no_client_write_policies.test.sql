-- public の全テーブルで、利用者（anon・authenticated・public）向けの書き込みのポリシーが1つもないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$
    select tablename::text || ' : ' || policyname::text
      from pg_policies
     where schemaname = 'public'
       and cmd <> 'SELECT'
       and roles && array['anon', 'authenticated', 'public']::name[]
  $$,
  'public のテーブルに、利用者向けの書き込みのポリシーがない'
);

select * from finish();
rollback;
