-- public に新しいシーケンスを作っても、anon・authenticated に権限が自動で付かないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使うシーケンス（最後に rollback で消える）
create sequence public._default_privileges_test_seq;

select is(
  has_sequence_privilege('anon', 'public._default_privileges_test_seq', 'USAGE, SELECT, UPDATE'),
  false,
  '新しいシーケンスに、anon の権限が付かない'
);

select is(
  has_sequence_privilege('authenticated', 'public._default_privileges_test_seq', 'USAGE, SELECT, UPDATE'),
  false,
  '新しいシーケンスに、authenticated の権限が付かない'
);

select * from finish();
rollback;
