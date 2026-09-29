-- 利用者は、他人の復習リストの行を「覚えた」にできないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う利用者2人（最後に rollback で消える）
insert into auth.users (id, email) values
  ('66666666-6666-6666-6666-666666666666', 'review-me@example.test'),
  ('99999999-9999-9999-9999-999999999999', 'review-other@example.test');

-- 他人の行を、管理者の権限で先に用意する
insert into public.user_review_items (id, user_id, question_id, status)
values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '99999999-9999-9999-9999-999999999999', null, 'active');

-- 自分（66666666…）になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"66666666-6666-6666-6666-666666666666","role":"authenticated"}', true);

select lives_ok(
  $$ select public.mark_review_item_mastered('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa') $$,
  '他人の行を指定しても、エラーにはならない'
);

reset role;

select is(
  (select status from public.user_review_items where id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
  'active',
  '他人の行は active のまま変わらない'
);

select * from finish();
rollback;
