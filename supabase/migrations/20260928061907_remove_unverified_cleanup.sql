-- メールアドレス未確認のユーザーを削除する定期実行と、その関数を廃止する。
-- 登録と同時に確認済みになる設計に変わり、新しく対象になるユーザーは生まれない。
-- また、関数の中で呼んでいた auth.delete_user は存在せず、一度も削除できていなかった
-- （2026-02-21 以降は毎日失敗していた）。
-- 定期実行の登録は本番にしかないため、登録がある場合だけ外す。

do $$
begin
  if exists (select 1 from cron.job where jobname = 'daily_unverified_cleanup') then
    perform cron.unschedule('daily_unverified_cleanup');
  end if;
end
$$;

drop function if exists maintenance.delete_stale_unverified(integer);
