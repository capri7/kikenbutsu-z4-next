-- 利用者は、自分の復習リストの行を「覚えた」にできること
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'review-master-test@example.test');

-- 自分の行を、管理者の権限で先に用意する
insert into public.user_review_items (id, user_id, question_id, status)
values ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '66666666-6666-6666-6666-666666666666', null, 'active');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select lives_ok(
  $$ select public.mark_review_item_mastered('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb') $$,
  '自分の行を「覚えた」にできる'
);

select is(
  (select status from public.user_review_items where id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
  'mastered',
  '状態が mastered になる'
);

select isnt(
  (select last_reviewed_at from public.user_review_items where id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
  null,
  '最後に復習した日時が入る'
);

reset role;
select * from finish();
rollback;
