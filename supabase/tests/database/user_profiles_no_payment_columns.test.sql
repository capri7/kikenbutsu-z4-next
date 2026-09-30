-- user_profiles に、契約の情報の列（subscription_status・current_period_end）がないこと
-- 契約の情報は subscriptions だけに置く
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

select hasnt_column(
  'public', 'user_profiles', 'subscription_status',
  'user_profiles に subscription_status はない'
);

select hasnt_column(
  'public', 'user_profiles', 'current_period_end',
  'user_profiles に current_period_end はない'
);

select * from finish();
rollback;
