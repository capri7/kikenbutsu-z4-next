-- 受験日をクリアすると、受験日が消えること（画面の「クリア」と同じ呼び方）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('55555555-5555-5555-5555-555555555555', 'exam-clear-test@example.test');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"55555555-5555-5555-5555-555555555555","role":"authenticated"}', true);

-- 画面の「保存」と「クリア」と同じ呼び方
select public.set_exam_date('2026-10-01');
select public.set_exam_date(null);

select is(
  (select count(*)::int from public.exam_dates where user_id = auth.uid()),
  0,
  'クリアすると、受験日が消える'
);

reset role;
select * from finish();
rollback;
