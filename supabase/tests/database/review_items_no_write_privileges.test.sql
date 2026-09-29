-- anon・authenticated に、user_review_items への書き込みの権限が1つもないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

select is(
  has_table_privilege('anon', 'public.user_review_items', 'INSERT, UPDATE, DELETE, TRUNCATE'),
  false,
  'anon は user_review_items に書き込みの権限を持たない'
);

select is(
  has_table_privilege('authenticated', 'public.user_review_items', 'INSERT, UPDATE, DELETE, TRUNCATE'),
  false,
  'authenticated は user_review_items に書き込みの権限を持たない'
);

select * from finish();
rollback;
