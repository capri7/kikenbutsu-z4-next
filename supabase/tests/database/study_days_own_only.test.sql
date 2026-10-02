-- get_study_days() は、ログイン中の本人の学習日だけを返すこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into auth.users (id, email) values
  ('66666666-6666-6666-6666-666666666666', 'study-days-a@example.test'),
  ('77777777-7777-7777-7777-777777777777', 'study-days-b@example.test');

insert into public.categories (id, name, slug, "order")
values ('a1111111-1111-1111-1111-111111111111', 'テスト大分野', 'test-category-pr5', 999);

insert into public.subcategories (id, category_id, name, slug, "order")
values ('b1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'テスト小分野', 'test-subcategory-pr5', 999);

insert into public.questions (id, subcategory_id, answer, is_paid)
values ('pr5-test-q1', 'b1111111-1111-1111-1111-111111111111', 1, false);

-- A は 9月1日、B は 9月2日に解いた（日本時間）
insert into public.user_progress (user_id, question_id, is_correct, answered_at) values
  ('66666666-6666-6666-6666-666666666666', 'pr5-test-q1', true, '2026-09-01 10:00+09'),
  ('77777777-7777-7777-7777-777777777777', 'pr5-test-q1', true, '2026-09-02 10:00+09');

-- A になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select results_eq(
  $$ select study_date from public.get_study_days() $$,
  $$ values ('2026-09-01'::date) $$,
  'get_study_days() は、本人の学習日だけを返す'
);

reset role;
select * from finish();
rollback;
