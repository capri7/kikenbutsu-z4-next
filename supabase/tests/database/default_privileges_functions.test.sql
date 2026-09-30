-- public に新しい関数を作っても、anon・authenticated が実行できないこと
-- （PUBLIC に付く実行の権限も含めて確かめる。anon・authenticated は PUBLIC から権限を受け継ぐため）
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う関数（最後に rollback で消える）
create function public._default_privileges_test_function()
returns int
language sql
as $$ select 1 $$;

select is(
  has_function_privilege('anon', 'public._default_privileges_test_function()', 'EXECUTE'),
  false,
  '新しい関数を、anon が実行できない'
);

select is(
  has_function_privilege('authenticated', 'public._default_privileges_test_function()', 'EXECUTE'),
  false,
  '新しい関数を、authenticated が実行できない'
);

select * from finish();
rollback;
