-- ログイン中の利用者は、誤答の一覧で本人の誤答だけを読めること（RLS の mk_sel）
-- アプリは user_id で絞って読んでいるが、絞らずに読んでも他人の行が見えないことを確かめる
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う利用者2人と問題（最後に rollback で消える）
insert into auth.users (id, email) values
  ('66666666-6666-6666-6666-666666666666', 'mistakes-own-a@example.test'),
  ('99999999-9999-9999-9999-999999999999', 'mistakes-own-b@example.test');

insert into public.categories (id)
values ('77777777-7777-7777-7777-777777777777');

insert into public.subcategories (id, name, slug, category_id)
values ('88888888-8888-8888-8888-888888888888', 'テスト用', 'mistakes-own-sub', '77777777-7777-7777-7777-777777777777');

insert into public.questions (id, subcategory_id, answer, is_paid, title)
values ('mistakes_own_free_001', '88888888-8888-8888-8888-888888888888', 1, false, 'テスト用の無料問題');

-- 2人の誤答を、管理者の権限で用意する
insert into public.mistakes (user_id, question_id) values
  ('66666666-6666-6666-6666-666666666666', 'mistakes_own_free_001'),
  ('99999999-9999-9999-9999-999999999999', 'mistakes_own_free_001');

-- A になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select results_eq(
  $$ select user_id from public.mistakes $$,
  $$ values ('66666666-6666-6666-6666-666666666666'::uuid) $$,
  '絞らずに読んでも、本人の誤答だけが返る'
);

select is_empty(
  $$ select 1 from public.mistakes where user_id = '99999999-9999-9999-9999-999999999999' $$,
  '他人の user_id を指定しても、他人の誤答は読めない'
);

reset role;
select * from finish();
rollback;
