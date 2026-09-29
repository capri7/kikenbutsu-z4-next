-- 利用者は、user_review_items に直接追加できないこと（追加は add_review_item だけ）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('66666666-6666-6666-6666-666666666666', 'review-direct-test@example.test');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

-- question_id は空でも入る列なので、問題のデータに頼らずに権限だけを確かめられる
select throws_ok(
  $$ insert into public.user_review_items (user_id, question_id, status) values (auth.uid(), null, 'active') $$,
  '42501',
  null,
  '利用者は、user_review_items に直接追加できない'
);

reset role;
select * from finish();
rollback;
