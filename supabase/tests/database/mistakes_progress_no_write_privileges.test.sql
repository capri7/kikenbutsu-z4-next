-- anon・authenticated に、mistakes・mistake_attempts・user_progress への書き込みの権限が1つもないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(6);

select is(has_table_privilege('anon', 'public.mistakes', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'anon は mistakes に書き込みの権限を持たない');
select is(has_table_privilege('authenticated', 'public.mistakes', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'authenticated は mistakes に書き込みの権限を持たない');

select is(has_table_privilege('anon', 'public.mistake_attempts', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'anon は mistake_attempts に書き込みの権限を持たない');
select is(has_table_privilege('authenticated', 'public.mistake_attempts', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'authenticated は mistake_attempts に書き込みの権限を持たない');

select is(has_table_privilege('anon', 'public.user_progress', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'anon は user_progress に書き込みの権限を持たない');
select is(has_table_privilege('authenticated', 'public.user_progress', 'INSERT, UPDATE, DELETE, TRUNCATE'), false,
  'authenticated は user_progress に書き込みの権限を持たない');

select * from finish();
rollback;
