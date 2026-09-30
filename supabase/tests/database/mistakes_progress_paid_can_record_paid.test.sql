-- 有料会員は、有料の問題の解答と誤答を記録できること
begin;
create extension if not exists pgtap with schema extensions;
select plan(4);

-- テストの中だけで使う利用者と問題（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'progress-paid-member@example.test');

-- 有料会員にする（subscriptions に active の契約の行を作る）
insert into public.subscriptions (user_id, stripe_subscription_id, status)
values ('66666666-6666-6666-6666-666666666666', 'sub_test_mistakes_paid', 'active');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'progress-paid-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('progress_test_paid_001', '88888888-8888-8888-8888-888888888888', 1, true, 'テスト用の有料問題');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select lives_ok(
  $$ select public.record_progress('progress_test_paid_001', true) $$,
  '有料会員は、有料の問題の解答を記録できる'
);

select is(
  (select count(*)::int from public.user_progress
    where user_id = auth.uid() and question_id = 'progress_test_paid_001'),
  1,
  '解答の記録が1件できる'
);

select lives_ok(
  $$ select public.record_mistake('progress_test_paid_001') $$,
  '有料会員は、有料の問題の誤答を記録できる'
);

select is(
  (select count(*)::int from public.mistakes
    where user_id = auth.uid() and question_id = 'progress_test_paid_001'),
  1,
  '誤答の記録が1件できる'
);

reset role;
select * from finish();
rollback;
