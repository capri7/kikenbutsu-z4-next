-- public に新しいテーブルを作っても、anon・authenticated に権限が自動で付かないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使うテーブル（最後に rollback で消える）
create table public._default_privileges_test_table (id int);

select is(
  has_table_privilege('anon', 'public._default_privileges_test_table',
    'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'),
  false,
  '新しいテーブルに、anon の権限が付かない'
);

select is(
  has_table_privilege('authenticated', 'public._default_privileges_test_table',
    'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'),
  false,
  '新しいテーブルに、authenticated の権限が付かない'
);

select * from finish();
rollback;
