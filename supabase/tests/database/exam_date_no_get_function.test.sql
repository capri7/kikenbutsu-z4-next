-- 受験日の読み込みはテーブルから直接行うため、get_exam_date がないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select hasnt_function(
  'public',
  'get_exam_date',
  array[]::name[],
  'get_exam_date はない'
);

select * from finish();
rollback;
