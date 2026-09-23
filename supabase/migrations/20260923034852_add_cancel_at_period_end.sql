alter table "public"."subscriptions" add column "cancel_at_period_end" boolean not null default false;

create or replace view "public"."user_active_subscriptions" as  SELECT user_id,
    created_at,
    id,
    updated_at,
    stripe_customer_id,
    stripe_subscription_id,
    status,
    current_period_end,
    livemode,
    deletion_requested,
    cancel_at_period_end
   FROM public.subscriptions
  WHERE ((status = 'active'::text) AND ((current_period_end IS NULL) OR (current_period_end > now())));



