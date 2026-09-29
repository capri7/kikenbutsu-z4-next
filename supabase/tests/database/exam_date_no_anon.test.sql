-- 未ログインの人は、set_exam_date を実行できないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select function_privs_are(
  'public',
  'set_exam_date',
  array['date']::name[],
  'anon',
  array[]::text[],
  '未ログインの人は、set_exam_date を実行できない'
);

select * from finish();
rollback;
