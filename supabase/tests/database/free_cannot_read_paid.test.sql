-- 無料会員は、有料の問題を読めないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email)
values ('22222222-2222-2222-2222-222222222222', 'free-read-paid-test@example.test');
insert into public.categories (id, name, slug)
values ('33333333-3333-3333-3333-333333333333', 'テスト分野', 'free-read-paid-test-category');
insert into public.subcategories (id, name, slug, category_id)
values ('44444444-4444-4444-4444-444444444444', 'テスト節', 'free-read-paid-test-subcategory', '33333333-3333-3333-3333-333333333333');
insert into public.questions (id, subcategory_id, question, answer, is_paid)
values ('free_read_paid_test', '44444444-4444-4444-4444-444444444444', 'テストの有料問題', 1, true);

-- 無料会員になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"22222222-2222-2222-2222-222222222222","role":"authenticated"}', true);

select is(
  (select count(*)::int from public.questions where id = 'free_read_paid_test'),
  0,
  '無料会員は、有料の問題を読めない'
);

reset role;
select * from finish();
rollback;
