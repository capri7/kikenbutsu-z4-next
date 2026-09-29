-- 無料会員は、問題を追加できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email)
values ('22222222-2222-2222-2222-222222222222', 'question-insert-test@example.test');
insert into public.categories (id, name, slug)
values ('33333333-3333-3333-3333-333333333333', 'テスト分野', 'question-insert-test-category');
insert into public.subcategories (id, name, slug, category_id)
values ('44444444-4444-4444-4444-444444444444', 'テスト節', 'question-insert-test-subcategory', '33333333-3333-3333-3333-333333333333');

-- 無料会員になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"22222222-2222-2222-2222-222222222222","role":"authenticated"}', true);

select throws_ok(
  $$ insert into public.questions (id, subcategory_id, question, answer, is_paid)
     values ('question_insert_test', '44444444-4444-4444-4444-444444444444', '追加された問題', 1, false) $$,
  '42501',
  null,
  '無料会員は、問題を追加できない'
);

reset role;
select * from finish();
rollback;
