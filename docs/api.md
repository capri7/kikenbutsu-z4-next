# API 設計（Supabase Edge Functions）

[← README に戻る](../README.md)

## API設計（Supabase Edge Functions）

Next.js側にはAPI Routesを持たず、Stripe秘密鍵の使用や外部API連携が必要な処理のみをSupabase Edge Functions（Deno）に集約している。誤答リスト・復習リスト等の読み取りは、Row Level Security（RLS）を前提にクライアントから直接PostgRESTへ問い合わせ、書き込みは本人の行だけを書くDBの関数を通す（本章「設計判断のハイライト ⑥ DB の権限の設計」参照）。Edge Functionsの呼び出しは、`supabase.functions.invoke`を包んだ共通の関数`invokeEdgeFunction`（`src/lib/edge-functions.ts`）にまとめ、URLをコードに直接書かない（PR #62）。

| エンドポイント | メソッド | 認証 | 用途 |
|---|---|---|---|
| `create-checkout-session` | POST | 不要（`verify_jwt: false`） | Stripe Checkoutセッションを作成し、決済ページのURLを返す |
| `checkout-session-info` | POST | 不要（`verify_jwt: false`） | 決済完了後、`session_id`から決済ステータス・メールアドレスを取得（`/success`ページで使用） |
| `billing-portal` | POST | 必須（Supabase JWT） | Stripeカスタマーポータルのセッションを作成し、請求情報確認・サブスク解約導線を提供 |
| `check-guest-subscription` | POST | 必須（Supabase JWT） | ログイン前に決済したゲストユーザーのStripe契約を、メールアドレス突合でアカウントに紐付け |
| `request-account-deletion` | POST | 必須（Supabase JWT） | 退会予約。有料会員は契約終了日まで猶予する`deletion_requested`フラグを立て、無料会員は即時削除 |
| `cancel-account-deletion` | POST | 必須（Supabase JWT） | 退会予約の取り消し（`deletion_requested`フラグを戻す） |
| `stripe-webhook` | POST | Stripe署名検証（`verify_jwt: false`） | Stripeからのイベント通知を受信し、サブスク状態をDBに同期 |

### リクエスト/レスポンス型定義

全エンドポイント共通のエラー形式を先に定義し、各エンドポイントの型はこれを参照する。

```typescript
// 全エンドポイント共通のエラーレスポンス形式
type ErrorResponse = {
  error: string;    // UPPER_SNAKE_CASEのエラーコード（例: MISSING_PRICE_ID）
  message?: string; // Stripe/DBエラー時の詳細メッセージ（人間可読な補足情報）
};
```

### `create-checkout-session`

Stripe Checkoutセッションを作成する。本人はAuthorizationヘッダーのJWTから確定し、`user_id`・`email`はリクエストボディから受け取らない（他人の`user_id`を指定して決済すると、その人の`user_profiles`の`email`・`stripe_customer_id`が支払った人のものに書き換わるため）。JWTがない、または無効なときは未ログイン状態での購入（ゲスト決済）として扱い、ログイン後に`check-guest-subscription`でメールアドレス突合による紐付けを行う。

```typescript
type CreateCheckoutSessionRequest = {
  priceId: string;
  success_url: string;
  cancel_url: string;
};
// 本人：AuthorizationヘッダーのJWT（なければゲスト決済）

type CreateCheckoutSessionResponse = {
  url: string;  // Stripe Checkoutへのリダイレクト先
  id: string;   // Checkout Session ID
};
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `MISSING_PRICE_ID` | 400 | `priceId`が未指定 |
| `MISSING_REDIRECT_URL` | 400 | `success_url`/`cancel_url`のいずれかが未指定 |
| `PRICE_NOT_ALLOWED` | 400 | 環境変数`PRICE_IDS`の許可リストに含まれない`priceId`（`priceId`を含めて返却） |
| `INVALID_JSON` | 400 | リクエストボディがJSONとしてパース不能 |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |
| `STRIPE_ERROR` | 500 | Stripe API呼び出し失敗（`message`に詳細） |

### `checkout-session-info`

決済完了後の`/success`ページで、Stripe Checkoutの`session_id`から決済結果を取得する。メールアドレスは`customer_details.email`を優先し、取得できない場合のみ追加でCustomerオブジェクトを取得する（Checkout完了直後は`customer_details`が未確定なケースがあるための保険的フォールバック）。このエンドポイントはセッション個人情報を返すため、`cache-control: no-store`を明示している。

```typescript
type CheckoutSessionInfoRequest = {
  session_id: string;
};

type CheckoutSessionInfoResponse = {
  email: string | null;
  customer_id: string | null;
  status: string;           // Stripe Checkout Sessionのstatus（'open' | 'complete' | 'expired' など）
  payment_status: string;   // 'paid' | 'unpaid' | 'no_payment_required'
  subscription_id: string | null;
};
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `MISSING_SESSION_ID` | 400 | `session_id`が未指定 |
| `INVALID_JSON` | 400 | リクエストボディがJSONとしてパース不能 |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |
| `STRIPE_ERROR` | 500 | Stripe API呼び出し失敗（`message`に詳細） |

### `request-account-deletion`

退会予約。リクエストボディは持たず、Supabase JWTのみで本人を特定する（`user_id`等をボディから受け取らない設計。フロントから偽装されたIDを信用しない）。

有料会員（`active`/`trialing`/`past_due`）と無料会員でレスポンスの形が分岐する。有料会員の場合、即時削除はしない。Stripe側の契約終了日（`current_period_end`）まで猶予を持たせる`deletion_requested`フラグを立て、ユーザー希望で退会予約（Stripe側の契約終了日での退会）をすることができる。無料会員は猶予する契約が存在しないため`auth.users`を即時削除する。この非対称性を1つのエンドポイントに集約したのは、フロント側が会員種別を意識せず同じボタン・同じAPI呼び出しで退会フローを完結できるようにするため。

```typescript
// リクエストボディなし（Authorizationヘッダーのみ）

type RequestAccountDeletionResponse =
  | { scheduled: true; effective_date: string | null } // 有料会員：契約終了日まで猶予
  | { deleted: true };                                  // 無料会員：即時削除
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `UNAUTHORIZED` | 401 | JWTが無い、または無効 |
| `DB_ERROR` | 500 | `subscriptions`テーブルへの問い合わせ・更新失敗（`message`に詳細） |
| `SUBSCRIPTION_NOT_CANCELLED` | 400 | 有料会員かつStripe側で`cancel_at_period_end`が未設定（フロントのボタン制御がバイパスされても、Stripe側で解約手続きが完了していない退会予約を拒否する保険） |
| `DELETE_FAILED` | 500 | `auth.users`削除失敗（`message`に詳細） |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |


### `stripe-webhook`

Stripeからのイベント通知を受信する。**リクエスト/レスポンスとも、他6エンドポイントとは形式が異なる。**

- リクエスト：JSONではなくStripeが生成する生のイベントペイロード。`stripe-signature`ヘッダーの署名検証（`stripe.webhooks.constructEventAsync`）でのみ認証し、Supabase JWTは使わない（呼び出し元がStripeのみで、フロントから直接叩かれることがないため）
- レスポンス：JSONではなく**プレーンテキスト**。Stripeはレスポンスのステータスコードのみを見てリトライ要否を判断するため、構造化されたエラーコードを返す必要がない

```typescript
// リクエストボディ：Stripe.Event（stripe-signatureヘッダーで署名検証）

// レスポンス（プレーンテキスト、Content-Type指定なし）
// 200 "ok"              : 正常受理（実処理はバックグラウンドで継続）
// 200 "ok (duplicate)"  : stripe_eventsテーブルに同一event.idが既存（Stripeのリトライによる重複配信を無視）
// 400 "invalid signature" : 署名検証失敗
// 400 "handler error: ${message}" : 署名検証〜冪等性チェックまでの間の未捕捉例外
```

**処理するイベント種別**

| イベント | 処理内容 |
|---|---|
| `checkout.session.completed` | `session.metadata.user_id`または`client_reference_id`から会員を特定し、`user_profiles`を更新。紐づくサブスクリプションがあれば同期 |
| `customer.subscription.created`/`updated`/`deleted` | Stripeの最新状態に合わせて、`subscriptions`（状態・契約終了日・期間末の解約の予約）と`user_profiles`（メールアドレス・Stripeの顧客ID）を更新。`deleted`の場合、`deletion_requested`フラグが立っていれば`auth.users`を物理削除する（`request-account-deletion`が立てた予約フラグを、実際の契約終了タイミングでここが実行に移す2段階構成） |
| `invoice.paid`/`invoice.payment_succeeded` | 紐づくサブスクリプションを取得し同期 |
| それ以外 | 何もしない |

**冪等性の仕組み**

Stripeは同一イベントを複数回配信することがあるため、`stripe_events`テーブルに`event.id`を記録し、既存であれば処理をスキップする。

**設計判断：即時レスポンスとバックグラウンド処理の分離**

署名検証・冪等性チェック・イベント記録は同期的に完了させて`200`を即座に返し、Stripe APIへの追加呼び出しを伴う実同期処理（`user_profiles`/`subscriptions`更新、`auth.users`削除）は`EdgeRuntime.waitUntil()`でバックグラウンドに回している。Stripeの10秒タイムアウト・リトライ設計に対して、処理が重い場合でも安定してレスポンスできるようにするための対応。

### `cancel-account-deletion`

`request-account-deletion`で立てた退会予約を取り消す。リクエストボディは持たず、JWTのみで本人を特定する点は`request-account-deletion`と同じ。

`request-account-deletion`との非対称性が1点ある：`request-account-deletion`は「サブスクリプション未登録＝無料会員」として即時削除に倒すが、`cancel-account-deletion`は行が無ければ`NO_SUBSCRIPTION`（404）で明示的に拒否する。これは「取り消す対象の予約が存在しない」ことを黙って200で返すと、フロントが誤操作に気づけなくなるための設計。既に取り消し済み（`deletion_requested`が既に`false`）の場合はエラーにせず、`already: true`を付けて200で返す（二重送信・多重クリックを異常系として扱わないため）。

```typescript
// リクエストボディなし（Authorizationヘッダーのみ）

type CancelAccountDeletionResponse =
  | { cancelled: true; already?: true } // 取り消し成功（already: trueは元々取り消し済みだった場合）
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `UNAUTHORIZED` | 401 | JWTが無い、または無効 |
| `NO_SUBSCRIPTION` | 404 | `subscriptions`テーブルに該当ユーザーの行が存在しない |
| `DB_ERROR` | 500 | `subscriptions`テーブルへの問い合わせ・更新失敗（`message`に詳細） |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |

### `check-guest-subscription`

未ログイン状態で決済したゲストユーザーが、後からログイン（会員登録）した際に、メールアドレス突合でStripeの契約をアカウントに紐付ける。リクエストボディは持たず、JWTから取得したログイン中ユーザーのメールアドレスのみで検索する（`email`をリクエストボディから受け取らない設計。他人のメールアドレスを指定して契約を横取りされないようにするため）。

Stripe Customer検索→該当顧客ごとにサブスクリプション検索、という2段階のStripe API呼び出しを行い、`active`/`trialing`状態の契約が見つかった時点で`user_profiles`/`subscriptions`に同期して返す。複数のStripe顧客が同じメールアドレスを持つケース（ゲスト決済を複数回行った等）を想定し、ループで全顧客を走査している。

```typescript
// リクエストボディなし（Authorizationヘッダーのみ）

type CheckGuestSubscriptionResponse =
  | { matched: true; subscription_id: string }
  | { matched: false; reason: "NO_CUSTOMER" | "NO_ACTIVE_SUBSCRIPTION" };
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `UNAUTHORIZED` | 401 | JWTが無い、または無効 |
| `NO_EMAIL_ON_ACCOUNT` | 400 | ログイン中ユーザーにメールアドレスが設定されていない |
| `STRIPE_ERROR` | 500 | Stripe API呼び出し失敗（`message`に詳細） |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |


### `billing-portal`

Stripeカスタマーポータル（請求情報の確認・支払い方法の変更・サブスク解約）へのセッションURLを発行する。呼び出し前に、ログイン中ユーザーの`user_profiles.stripe_customer_id`をDBから引いており、リクエストボディからは`return_url`のみを受け取る（`customer_id`をクライアントから信用しない設計は他エンドポイントと共通）。

```typescript
type BillingPortalRequest = {
  return_url: string; // ポータルから戻ってくる先のURL
};

type BillingPortalResponse = {
  url: string; // Stripeカスタマーポータルへのリダイレクト先
};
```

**エラー**

| コード | ステータス | 発生条件 |
|---|---|---|
| `UNAUTHORIZED` | 401 | JWTが無い、または無効 |
| `PROFILE_LOOKUP_FAILED` | 500 | `user_profiles`テーブルへの問い合わせ失敗（`message`に詳細） |
| `NO_STRIPE_CUSTOMER` | 400 | `stripe_customer_id`が未登録（一度もStripe決済をしていないユーザー） |
| `MISSING_RETURN_URL` | 400 | `return_url`が未指定 |
| `STRIPE_ERROR` | 500 | Stripe API呼び出し失敗（`message`に詳細） |
| `METHOD_NOT_ALLOWED` | 405 | POST以外のメソッド |
