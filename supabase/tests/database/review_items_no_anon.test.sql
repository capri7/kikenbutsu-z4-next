-- ログインしていない人（anon）は、復習リストの関数を実行できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- ログインしていない人になりきる
set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);

select throws_ok(
  $$ select public.add_review_item('review_test_free_001') $$,
  '42501',
  null,
  'anon は add_review_item を実行できない'
);

select throws_ok(
  $$ select public.mark_review_item_mastered('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb') $$,
  '42501',
  null,
  'anon は mark_review_item_mastered を実行できない'
);

reset role;
select * from finish();
rollback;
