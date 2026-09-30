-- 有料の判定を subscriptions の status だけで行う
create or replace function public.has_active_subscription()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (
    select 1
    from public.subscriptions s
    where s.user_id = (select auth.uid())
      and lower(coalesce(s.status, '')) in ('active', 'trialing', 'past_due')
  );
$$;
