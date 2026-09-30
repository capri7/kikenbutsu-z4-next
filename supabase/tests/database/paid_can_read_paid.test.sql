-- 有料会員は、有料の問題を読めること
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email)
values ('11111111-1111-1111-1111-111111111111', 'paid-read-test@example.test');
insert into public.subscriptions (user_id, stripe_subscription_id, status)
values ('11111111-1111-1111-1111-111111111111', 'sub_test_paid_read', 'active');
insert into public.categories (id, name, slug)
values ('33333333-3333-3333-3333-333333333333', 'テスト分野', 'paid-read-test-category');
insert into public.subcategories (id, name, slug, category_id)
values ('44444444-4444-4444-4444-444444444444', 'テスト節', 'paid-read-test-subcategory', '33333333-3333-3333-3333-333333333333');
insert into public.questions (id, subcategory_id, question, answer, is_paid)
values ('paid_read_test', '44444444-4444-4444-4444-444444444444', 'テストの有料問題', 1, true);

-- 有料会員になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"11111111-1111-1111-1111-111111111111","role":"authenticated"}', true);

select is(
  (select count(*)::int from public.questions where id = 'paid_read_test'),
  1,
  '有料会員は、有料の問題を読める'
);

reset role;
select * from finish();
rollback;
