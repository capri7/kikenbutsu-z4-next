ALTER TABLE public.subscriptions
ADD COLUMN cancel_at_period_end boolean DEFAULT false NOT NULL;