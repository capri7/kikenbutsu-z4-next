-- 有料会員は、有料の問題を復習リストに追加できること
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う利用者と問題（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'review-paid-member@example.test');

-- 有料会員にする（user_profiles の行はトリガーで自動で作られている）
update public.user_profiles set subscription_status = 'active'
where user_id = '66666666-6666-6666-6666-666666666666';

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'review-test-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('review_test_paid_001', '88888888-8888-8888-8888-888888888888', 1, true, 'テスト用の有料問題');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select lives_ok(
  $$ select public.add_review_item('review_test_paid_001') $$,
  '有料会員は、有料の問題を復習リストに追加できる'
);

select is(
  (select count(*)::int from public.user_review_items
    where user_id = auth.uid() and question_id = 'review_test_paid_001' and status = 'active'),
  1,
  '有料の問題の行が1つできる'
);

reset role;
select * from finish();
rollback;
