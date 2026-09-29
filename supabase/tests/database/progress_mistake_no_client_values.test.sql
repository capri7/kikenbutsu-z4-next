-- record_progress は解答日時を、record_mistake は小分類を、画面から受け取らないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

select hasnt_function(
  'public', 'record_progress',
  array['text', 'boolean', 'timestamp with time zone', 'uuid'],
  'record_progress は解答日時の引数を持たない'
);

select hasnt_function(
  'public', 'record_mistake',
  array['text', 'uuid', 'uuid'],
  'record_mistake は小分類の引数を持たない'
);

select * from finish();
rollback;
