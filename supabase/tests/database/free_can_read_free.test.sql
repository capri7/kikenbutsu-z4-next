-- 無料会員は、無料の問題を読めること
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email)
values ('22222222-2222-2222-2222-222222222222', 'free-read-free-test@example.test');
insert into public.categories (id, name, slug)
values ('33333333-3333-3333-3333-333333333333', 'テスト分野', 'free-read-free-test-category');
insert into public.subcategories (id, name, slug, category_id)
values ('44444444-4444-4444-4444-444444444444', 'テスト節', 'free-read-free-test-subcategory', '33333333-3333-3333-3333-333333333333');
insert into public.questions (id, subcategory_id, question, answer, is_paid)
values ('free_read_free_test', '44444444-4444-4444-4444-444444444444', 'テストの無料問題', 1, false);

-- 無料会員になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"22222222-2222-2222-2222-222222222222","role":"authenticated"}', true);

select is(
  (select count(*)::int from public.questions where id = 'free_read_free_test'),
  1,
  '無料会員は、無料の問題を読める'
);

reset role;
select * from finish();
rollback;
