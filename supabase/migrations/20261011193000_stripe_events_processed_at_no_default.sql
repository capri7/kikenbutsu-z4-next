-- stripe_events.processed_at の、移行のあいだだけ付けていた既定値（now()）を外す
-- 20261010201500 では、変更の前の stripe-webhook（処理の前に記録する作り）が足す行も処理済みになるよう、既定値を now() にしていた。
-- 今の stripe-webhook は、record_stripe_event() で未処理（processed_at が空）と明示して記録し、
-- finish_stripe_event() で処理済みにする（20261010203000。2026-10-11 に本番へ反映済み）。
-- 既定値が残っていると、processed_at を指定せずに足した行が、処理していないのに処理済みになるため外す。
alter table public.stripe_events
  alter column processed_at drop default;
