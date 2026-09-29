-- 無料会員は、有料の問題の解答を記録できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者と問題（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'progress-paid-test@example.test');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'progress-test-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('progress_test_paid_001', '88888888-8888-8888-8888-888888888888', 1, true, 'テスト用の有料問題');

-- 無料会員（契約なし）になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select throws_ok(
  $$ select public.record_progress('progress_test_paid_001', true) $$,
  '42501',
  null,
  '無料会員は、有料の問題の解答を記録できない'
);

reset role;
select * from finish();
rollback;
