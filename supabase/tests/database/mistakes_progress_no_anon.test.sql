-- ログインしていない人（anon）は、誤答と解答の記録の関数を実行できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

-- ログインしていない人になりきる
set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);

select throws_ok(
  $$ select public.record_progress('progress_test_free_001', true) $$,
  '42501',
  null,
  'anon は record_progress を実行できない'
);

select throws_ok(
  $$ select public.record_mistake('mistake_test_free_001') $$,
  '42501',
  null,
  'anon は record_mistake を実行できない'
);

select throws_ok(
  $$ select public.clear_mistake('mistake_test_free_001') $$,
  '42501',
  null,
  'anon は clear_mistake を実行できない'
);

reset role;
select * from finish();
rollback;
