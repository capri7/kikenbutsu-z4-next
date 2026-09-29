-- 受験日を保存すると、受験日が保存されること（画面の「保存」と同じ呼び方）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('55555555-5555-5555-5555-555555555555', 'exam-save-test@example.test');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"55555555-5555-5555-5555-555555555555","role":"authenticated"}', true);

select public.set_exam_date('2026-10-01');

select is(
  (select exam_date from public.exam_dates where user_id = auth.uid()),
  '2026-10-01'::date,
  '保存すると、受験日が保存される'
);

reset role;
select * from finish();
rollback;
