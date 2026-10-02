-- pick_next_question は、ログイン中の本人が解いていない問題を返すこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email) values
  ('66666666-6666-6666-6666-666666666666', 'next-q-a@example.test'),
  ('77777777-7777-7777-7777-777777777777', 'next-q-b@example.test');

insert into public.categories (id, name, slug, "order")
values ('a1111111-1111-1111-1111-111111111111', 'テスト大分野', 'test-category-pr5', 999);

insert into public.subcategories (id, category_id, name, slug, "order")
values ('b1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'テスト小分野', 'test-subcategory-pr5', 999);

insert into public.questions (id, subcategory_id, answer, is_paid) values
  ('pr5-test-q1', 'b1111111-1111-1111-1111-111111111111', 1, false),
  ('pr5-test-q2', 'b1111111-1111-1111-1111-111111111111', 1, false);

-- A は1問目、B は2問目を解いた
insert into public.user_progress (user_id, question_id, is_correct) values
  ('66666666-6666-6666-6666-666666666666', 'pr5-test-q1', true),
  ('77777777-7777-7777-7777-777777777777', 'pr5-test-q2', true);

-- A になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

-- アプリと同じく、引数の名前を付けて呼ぶ（p_user_id は渡さない）
select results_eq(
  $$ select id from public.pick_next_question(
       p_include_paid => false,
       p_subcategory_id => 'b1111111-1111-1111-1111-111111111111',
       p_category_id => null) $$,
  $$ values ('pr5-test-q2'::text) $$,
  'pick_next_question は、本人が解いていない問題を返す'
);

reset role;
select * from finish();
rollback;
