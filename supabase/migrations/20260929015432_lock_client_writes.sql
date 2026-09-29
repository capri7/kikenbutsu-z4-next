-- 利用者（anon・authenticated）が、契約の情報と教材を書き換えられないようにする。
-- あわせて、他人の契約・進捗がわかる関数をなくす。

-- 1. user_profiles：本人による追加・更新のポリシーと、書き込みの権限を外す
--    （書き込みは Edge Functions の service_role だけが行う）
drop policy if exists "own profile insert" on public.user_profiles;
drop policy if exists "user_profiles_update_own" on public.user_profiles;
revoke insert, update, delete, truncate on table public.user_profiles from anon, authenticated;

-- 2. questions：利用者による追加・更新・削除のポリシーと、書き込みの権限を外す
drop policy if exists "questions_insert_auth" on public.questions;
drop policy if exists "questions_update_own" on public.questions;
drop policy if exists "questions_delete_own" on public.questions;
revoke insert, update, delete, truncate on table public.questions from anon, authenticated;

-- 3. has_active_subscription：引数をなくし、本人（auth.uid()）だけを判定する
--    SECURITY INVOKER にし、user_profiles の本人の行を RLS の範囲で読む
create or replace function public.has_active_subscription()
returns boolean
language sql
stable
security invoker
set search_path = public
as $$
  select exists (
    select 1
    from public.user_profiles up
    where up.user_id = auth.uid()
      and (
        (up.current_period_end is not null
         and up.current_period_end > now() - interval '60 seconds')
        or lower(coalesce(up.subscription_status, '')) in ('active', 'trialing', 'past_due')
      )
  );
$$;

revoke all on function public.has_active_subscription() from public, anon;
grant execute on function public.has_active_subscription() to authenticated, service_role;

drop policy if exists "read_paid_questions_with_subscription" on public.questions;
create policy "read_paid_questions_with_subscription"
  on public.questions
  for select
  to authenticated
  using (coalesce(is_paid, false) = true and public.has_active_subscription());

drop function if exists public.has_active_subscription(uuid);

-- 4. 任意のユーザーの進捗を返す関数を削除する（アプリからは使っていない）
drop function if exists public.get_free_progress_summary(uuid);
