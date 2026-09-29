-- public の全テーブル・ビューで、anon・authenticated に書き込みの権限が1つもないこと
-- （書き込みは関数だけ。今後テーブルやビューを足したときも、このテストが見張る）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$
    select c.relname::text || ' : ' || r
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
     cross join unnest(array['anon', 'authenticated']) as r
     where n.nspname = 'public'
       and c.relkind in ('r', 'v', 'm', 'p')
       and has_table_privilege(r, c.oid, 'INSERT, UPDATE, DELETE, TRUNCATE')
  $$,
  'public のテーブル・ビューに、利用者の書き込みの権限がない'
);

select * from finish();
rollback;
