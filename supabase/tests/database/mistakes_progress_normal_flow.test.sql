-- 無料の問題で、解答・誤答・誤答の消去の普段の動きが変わらないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(6);

-- テストの中だけで使う利用者2人と問題（最後に rollback で消える）
insert into auth.users (id, email) values
  ('66666666-6666-6666-6666-666666666666', 'flow-me@example.test'),
  ('99999999-9999-9999-9999-999999999999', 'flow-other@example.test');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'flow-test-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('flow_test_free_001', '88888888-8888-8888-8888-888888888888', 1, false, 'テスト用の無料問題');

-- 他人の誤答を、管理者の権限で先に用意する
insert into public.mistakes (user_id, question_id)
values ('99999999-9999-9999-9999-999999999999', 'flow_test_free_001');

-- 自分になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

-- 解答の記録と、連続学習日数
select public.record_progress('flow_test_free_001', true, p_client_nonce => 'aaaaaaaa-0000-0000-0000-000000000001');

select isnt(
  (select answered_at from public.user_progress
    where user_id = auth.uid() and question_id = 'flow_test_free_001'),
  null,
  '解答の記録に、解答日時が入る'
);

select is(
  (select streak_days from public.user_profiles where user_id = auth.uid()),
  1,
  '連続学習日数が1になる'
);

-- 誤答の記録：違う nonce なら数が増え、同じ nonce の送り直しでは増えない
select public.record_mistake('flow_test_free_001', 'bbbbbbbb-0000-0000-0000-000000000001');
select public.record_mistake('flow_test_free_001', 'bbbbbbbb-0000-0000-0000-000000000002');
select public.record_mistake('flow_test_free_001', 'bbbbbbbb-0000-0000-0000-000000000002');

select is(
  (select incorrect_count from public.mistakes
    where user_id = auth.uid() and question_id = 'flow_test_free_001'),
  2,
  '誤答の数は、送り直しを数えずに2になる'
);

-- 誤答の消去：自分の分だけ消える
select public.clear_mistake('flow_test_free_001');

select is(
  (select count(*)::int from public.mistakes
    where user_id = auth.uid() and question_id = 'flow_test_free_001'),
  0,
  '自分の誤答が消える'
);

reset role;

select is(
  (select count(*)::int from public.mistakes
    where user_id = '99999999-9999-9999-9999-999999999999' and question_id = 'flow_test_free_001'),
  1,
  '他人の誤答は消えない'
);

select is(
  (select count(*)::int from public.user_progress
    where user_id = '66666666-6666-6666-6666-666666666666' and question_id = 'flow_test_free_001'),
  1,
  '解答の記録は1件'
);

select * from finish();
rollback;
