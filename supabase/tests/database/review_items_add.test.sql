-- 利用者は、add_review_item で無料の問題を復習リストに追加できること
begin;
create extension if not exists pgtap with schema extensions;
select plan(4);

-- テストの中だけで使う利用者と問題（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'review-add-test@example.test');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'review-test-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('review_test_free_001', '88888888-8888-8888-8888-888888888888', 1, false, 'テスト用の無料問題');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select lives_ok(
  $$ select public.add_review_item('review_test_free_001') $$,
  '無料の問題を復習リストに追加できる'
);

select lives_ok(
  $$ select public.add_review_item('review_test_free_001') $$,
  '同じ問題をもう一度追加しても、エラーにならない'
);

select is(
  (select count(*)::int from public.user_review_items
    where user_id = auth.uid() and question_id = 'review_test_free_001' and status = 'active'),
  1,
  '復習中の行は1つだけ'
);

select is(
  (select title || '|' || subcategory_id || '|' || content_path from public.user_review_items
    where user_id = auth.uid() and question_id = 'review_test_free_001' and status = 'active'),
  'テスト用の無料問題|88888888-8888-8888-8888-888888888888|/contents/review_test_free_001',
  '題名・小分類・リンク先は、問題の情報から決まる'
);

reset role;
select * from finish();
rollback;
