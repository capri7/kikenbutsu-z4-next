-- record_mistake の小分類は、問題の情報から決まること（画面から受け取らない）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者と問題（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'mistake-sub-test@example.test');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'mistake-sub-test', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('mistake_test_free_001', '88888888-8888-8888-8888-888888888888', 1, false, 'テスト用の無料問題');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select public.record_mistake('mistake_test_free_001');

select is(
  (select subcategory_id from public.mistakes
    where user_id = auth.uid() and question_id = 'mistake_test_free_001'),
  '88888888-8888-8888-8888-888888888888'::uuid,
  '誤答の小分類は、問題の小分類になる'
);

reset role;
select * from finish();
rollback;
