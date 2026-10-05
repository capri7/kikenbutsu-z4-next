# 運用

[← README に戻る](../README.md)

### 本番の環境変数

Next.js（Vercel）

| 変数 | 用途 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase のプロジェクト URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 公開用の anon キー（RLS でアクセスを制御する前提でクライアントに渡す） |
| `NEXT_PUBLIC_STRIPE_PRICE_ID` | 購入ページで使う Stripe の Price ID。Edge Functions 側の `PRICE_IDS` に含まれていること |

Supabase Edge Functions（`supabase secrets set` で登録）

| 変数 | 用途 |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe API の呼び出し |
| `STRIPE_WEBHOOK_SECRET` | `stripe-webhook` の署名検証 |
| `PRICE_IDS` | `create-checkout-session` で許可する Price ID の一覧 |

`SUPABASE_URL` と `SUPABASE_SERVICE_ROLE_KEY` は Supabase が自動で設定する。

#### 運用上の学び：`verify_jwt`とWebhook認証の落とし穴

`stripe-webhook`は、SupabaseのJWTではなく、Stripe独自の署名（`stripe-signature`ヘッダー）で認証する。SupabaseのJWT検証（`verify_jwt`）が有効だと、関数のコードに届く前に全リクエストが`401 UNAUTHORIZED_NO_AUTH_HEADER`で拒否されるため、この関数ではJWT検証を無効にする必要がある。開発の初期にこの401を特定し、JWT検証を無効にして解消したが、設定をリポジトリに書いていなかった。そのため、後に本番で再発した。

**再発した障害の要約**

| 項目 | 内容 |
|---|---|
| 期間 | 2026-07-31〜08-27（ログで401を確認した範囲。開始は6/30〜7/31の間） |
| 検知 | 2026-08-03、Stripe から Webhook の失敗を知らせるメールが届いていたが、大量の受信メールに埋もれて見落とした。2026-08-27、作業中に `stripe-webhook` の401に気づき、その日のうちに修正した。7/31から続いていたことは、2026-09-22 にファンクションログを調べて確認した |
| 影響（利用者） | なし。有料の問題の読み取りは、契約終了日に加えて契約の状態（`active` など）でも許可する判定のため、止まらなかった。期間中の有料会員は、期間中も有料の問題を利用していた（回答の記録で確認） |
| 影響（データ） | 7/31の月次更新イベントを受信できず、`stripe_events` の記録が欠落した。`current_period_end` は、この期間は更新されなかったと考えられる |
| 影響（決済） | なし。決済は Stripe 側で正常に完了していた |
| 原因 | JWT 検証を無効にする設定がリポジトリに書かれておらず、再デプロイ（関数の版 59 → 61）で有効に戻ったと考えられる |
| 対処 | 2026-08-27、設定を `config.toml` に書き、自動デプロイの対象に追加した（コミット `1ae39a5`）。直後から200を返すようになった |
| 再発防止 | 設定をリポジトリで管理し、デプロイのたびに同じ設定が適用されるようにした。GitHub Actions で1時間ごとに `stripe-webhook` の応答を確かめ、期待どおりでなければ GitHub からメールで知らせるようにした（`.github/workflows/webhook-health-check.yml`）。Stripe と GitHub の失敗の通知は、メールのフィルタで他のメールと分け、見落とさないようにした |

**詳細**

ファンクションログでは、2026-06-30（UTC）に版59の`stripe-webhook`が200を返しており、正常に動いていた。2026-07-31 06:04（UTC）以降は、版61が401を返していた。この間に私が関数を再デプロイしている。最初にJWT検証を無効にしたときと、この再デプロイの、方法と日時の記録は残っていない。

7/31の請求書作成時刻（06:04:01）と401の発生時刻（06:04:02）が1秒差で一致しており、この日の月次更新イベント（`invoice.payment_succeeded`）の受信に失敗したと考えられる。Stripe側ではWebhookの配信が試行された記録（`webhooks_delivered_at`）が残っている。

2026-08-27のコミット`1ae39a5`で、`supabase/config.toml`に`[functions.stripe-webhook] verify_jwt = false`を書き、GitHub Actionsの自動デプロイのトリガーパスに`supabase/config.toml`を追加した（それまでは`supabase/functions/**`のみを監視しており、`config.toml`だけを変更してもデプロイが走らなかった）。ファンクションログでは、同日04:18（UTC）に関数の版が78から79に変わり、その時点から401が200に変わった。版79がこのコミットのデプロイであることは、時刻の一致からの推測である。

StripeのWebhookの再送は最大3日で打ち切られるため、7/31に失敗したイベント自体は再送されず、`stripe_events`の記録は欠落したままである。データが正しい状態に戻ったのは、復旧後に届いた`customer.subscription.updated`（サブスクリプションの最新状態そのものを運ぶイベント）によって、欠落したイベントを経由せず直接追いついたためである。

**教訓**：関数の設定は、リポジトリに書かなければ、再デプロイで意図せず元に戻りうる。GitHub Actionsのデプロイが成功（緑）していても、それは「デプロイ処理が成功した」ことの証明であって、「関数が正しく動作している」ことの証明ではない。また、状態を運ぶイベントが後から届けばデータのずれは直るが、欠落した記録は戻らない。外部サービス側の記録（Stripeの請求書一覧）と自システムの記録を定期的に突き合わせる仕組みがないと、この種の欠落は気づかれずに残る。

#### 運用上の学び：migration のファイルと本番の履歴のずれ

E2E をローカルの Supabase に移す準備として、`supabase db diff --linked` で、リポジトリの migrations から作ったスキーマと本番を比べた。本番にだけ、`subscriptions.cancel_at_period_end` 列と、その列を含む `user_active_subscriptions` ビューがあった。この列は、退会予約の判定（`request-account-deletion` の `SUBSCRIPTION_NOT_CANCELLED`）と `stripe-webhook` が使っている。

`supabase migration list --linked` で履歴を比べると、本番にだけ `20260826100947` の記録があった。本番の履歴の表（`supabase_migrations.schema_migrations`）から SQL を確認すると、中身は列の追加だけだった。ずれは2種類あったことになる。

| 差分 | 実際に起きていたこと | 対応 |
|---|---|---|
| 列の追加 | 2026-08-26 に migration で適用済み。ファイルがリポジトリに無かった | 本番の履歴にある SQL から、ファイルを復元 |
| ビューの作り直し | migration を使わずに、本番で直接変更されていた | ビューの作り直しを migration にし、本番の履歴に適用済みとして記録（`supabase migration repair`）。本番のスキーマは変更していない |

対応後、4つの migration から作ったスキーマが本番と一致すること（`No schema changes found`）と、ローカルで migrations と seed がエラーなく適用できること（`supabase db reset`）を確認した。

**教訓**：リポジトリの migrations から本番のスキーマを再現できなければ、テスト環境は本番と違うスキーマで動く。ダッシュボードでの直接の変更は、リポジトリに痕跡を残さない。`db diff` と `migration list` は、どちらも本番を変更せずに実行できるため、スキーマに触れる作業の前に確認する。
