-- 利用者は、exam_dates に直接書き込めないこと（書き込みは set_exam_date だけ）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('55555555-5555-5555-5555-555555555555', 'exam-direct-test@example.test');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"55555555-5555-5555-5555-555555555555","role":"authenticated"}', true);

select throws_ok(
  $$ insert into public.exam_dates (user_id, exam_date) values (auth.uid(), '2026-10-01') $$,
  '42501',
  null,
  '利用者は、exam_dates に直接書き込めない'
);

reset role;
select * from finish();
rollback;
