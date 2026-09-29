-- 利用者は、user_review_items を直接書き換えられないこと（書き換えは関数だけ）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'review-update-test@example.test');

-- 書き換える対象の行を、管理者の権限で先に用意する
insert into public.user_review_items (user_id, question_id, status)
values ('66666666-6666-6666-6666-666666666666', null, 'active');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select throws_ok(
  $$ update public.user_review_items set status = 'mastered' where user_id = auth.uid() $$,
  '42501',
  null,
  '利用者は、user_review_items を直接書き換えられない'
);

reset role;
select * from finish();
rollback;
