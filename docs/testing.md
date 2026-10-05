# テスト・品質保証

[← README に戻る](../README.md)

## ケーススタディ：`useSearchParams`とSuspense境界（本番ビルドでのみ発生する不具合）

`/contents/[id]`ページで、URLのクエリパラメータを読む`useSearchParams()`をClient Component（`QuestionClient`）内で使用していたが、`<Suspense>`で囲んでいなかった。

**症状**：`npm run dev`（開発サーバー）では一切エラーが出ないが、`next build`（本番ビルド）でのみビルドが失敗する。

**原因**：`useSearchParams()`が返すクエリパラメータは、URLへのリクエストが来て初めて確定するリクエスト時点のデータであり、ビルド時に静的プリレンダリングを行う際には値が存在しない。Next.jsは、この「静的にプリレンダリングできる部分」と「リクエストが来るまで確定しないクライアント側の部分」を`<Suspense>`境界で切り分けることを要求しており、境界が無いとどこで区切ればいいか判断できずビルドを失敗させる。開発サーバーはページをオンデマンドでレンダリングするため、この問題が起きない。

**対応**：`useSearchParams()`を使う`QuestionClient`を`<Suspense fallback={null}>`で囲み、静的にレンダリングできる殻（Suspense外側）と、クライアント側で解決するクエリパラメータ依存部分（Suspense内側）を分離した。

**教訓**：`npm run dev`で問題が無くても、本番ビルド（`next build`）でしか顕在化しない不具合がある。ローカルの開発サーバーでの目視確認に頼らず、PR ごとに本番ビルドを実行する仕組み（GitHub Actions・Vercel）で、マージ前に検知する。

## ケーススタディ：E2E のテスト環境を本番から分離する

**問題**：E2E（Playwright）は `.env.local` を通じて本番の Supabase に接続しており、実行のたびに本番の `auth.users` にテストユーザーが作られていた。

**対応**：

- テスト専用の架空の問題データを `supabase/seed.sql` に用意した（公開リポジトリのため、本番の教材や会員のデータは含めない）。形式は本番の問題に合わせた
- `playwright.config.ts` で、接続先を `supabase status` から取得するようにした。ローカルの Supabase が起動していない場合や、接続先がローカルでない場合は、テストを始める前に止まる
- 本番に接続したサーバーを誤って使い回さないよう、`reuseExistingServer: false` にした

**確認**：E2E の前後で、本番のテストユーザーの数が変わらず（5 → 5）、ローカルに3人作られたことを確認した。その後、本番に残っていたテストユーザー5人を削除した。関連するプロフィールも `ON DELETE CASCADE` で消えたことを確認している。

**同時に見つかった不具合**：並行して動く2件のテストが、同じミリ秒に `Date.now()` からメールアドレスを作り、同じアドレスで登録していた。後から登録した側が 500（`Database error saving new user`）になっていた。Postgres のログで、`auth.users` のメールアドレスの一意制約（`users_email_partial_key`）違反を確認し、メールアドレスを `randomUUID()` で作るように直した。

**その後**：本番に接続していた時期に、マイページのボタンを押しても画面が移動しない失敗が、実行ごとに出たり出なかったりしていた。この原因は、ローカルで条件を変えた再現実験によって特定し、修正した（次のケーススタディ）。

## ケーススタディ：表示されているのに押せないボタン（ハイドレーション前のクリックの消失）

**現象**：E2E で、マイページの「スタート」「誤答リストを開く」を押しても画面が移動しない失敗が、実行ごとに出たり出なかったりしていた（本番の Supabase に接続していた時期）。ローカルの Supabase では、30回繰り返しても再現しなかった。

**仮説**：これらのボタンは、サーバーで作った HTML の時点で表示される。クリックの処理が付くのは、ブラウザに JavaScript が届き、ハイドレーションが終わった後である。その前に押されたクリックが失われている。

**切り分け**：ローカルで、条件を1つずつ変えて再現を試した。

| 条件 | 結果 |
|---|---|
| ブラウザの CPU を6倍遅くする | 10回すべて成功（再現せず） |
| 通信を遅くする（遅延 400ms、上り下りとも 400kbps） | 10回すべて失敗（再現） |

**証拠**：失敗したテストのトレースで、クリックは 9.1〜9.6 秒目、マイページ用の JavaScript（76.4KB）の到着は約 11.1 秒目だった。クリックの後、移動先への通信は一度も起きていなかった。登録画面と共通の JavaScript はブラウザのキャッシュからすぐに読み込まれるが、マイページで初めて使う JavaScript の到着を待つ間に、「見えているが押せない」時間ができていた。CPU を遅くしても再現しなかったのは、この時間の長さが、JavaScript の実行ではなく到着で決まっていたためである。

**修正**：ボタンの役割ごとに、方式を選んだ。

- 「誤答リストを開く」「復習リストを開く」：ページを移動するだけなので、`<Link>` に変更した。リンクは、JavaScript が届く前でも、ブラウザだけで移動できる
- 「スタート」：問題の選択と、無料問題を解き終わったときの確認（`confirm()`）に JavaScript が必要なため、リンクにはできない。確認の動作は仕様として残し、ハイドレーションが終わるまでボタンを無効にした

**効果**：同じ低速回線の条件で、修正前は10回すべて失敗、修正後は10回すべて成功した。E2E 全体でも25回すべて成功した。本番でも、見た目と動作に変化がないことを確認した。

**再発防止**：低速回線での回帰テスト（`e2e/slow-network.spec.ts`、2件）と、誤答リスト・復習リストからマイページに戻った後に「スタート」が動くことの回帰テスト（`e2e/return-to-mypage.spec.ts`、4件）を追加した。

**残る不確かさ**：本番の Supabase に接続していた時期の失敗は、トレースが残っていないため、同じ仕組みで起きたとまでは証明できていない。

## テスト戦略

Edge Functions（Deno）・Next.js（Node/Vite）・DB（PostgreSQL）で実行環境が異なるため、4層に分けている。

| 層 | 対象 | ツール |
|---|---|---|
| Edge Functions | 分岐ロジック（判定関数として切り出したもの） | `Deno.test` |
| Next.js単体テスト | ユーティリティ関数・同期Client Components | Vitest + React Testing Library |
| DB | ロールの権限・RLS・関数が本人の記録だけを使うこと | pgTAP（`supabase test db`） |
| E2Eテスト | 無料登録〜マイページ〜練習問題〜誤答リストの一連の動作（コアフロー、ローカルの Supabase で実装・合格確認済み）、有料会員の画面の出し分け（有料の問題・ヘッダー・退会のカード。契約の行はテストの中で作り、決済は通さない）、ゲスト決済〜Webhook〜マイページ解放（有料転換フロー、未実装）、非同期Server Components | Playwright |

Edge Functionsは実際のSupabase/Stripe呼び出しと分岐ロジックが密結合しており、そのままではDB・外部APIに接続しないとテストできない。そこで各関数の分岐ロジックだけを`decision.ts`として切り出し、実際の接続を挟まず全パターンを検証できる形にした。全関数を同じ密度でテストするのではなく、金銭・個人情報の削除が絡み誤りの影響が大きい関数（`request-account-deletion`・`cancel-account-deletion`・`stripe-webhook`）から優先的に着手している。

## 現在のテストカバレッジ

| 対象 | 状態 |
|---|---|
| `request-account-deletion` | ✅ 7パターン |
| `cancel-account-deletion` | ✅ 4パターン |
| `_shared/periodEnd.ts`（`stripe-webhook`・`check-guest-subscription`共通） | ✅ 7パターン |
| `stripe-webhook` | ✅ 6パターン |
| `check-guest-subscription` | ✅ 6パターン |
| `create-checkout-session` | ✅ 10パターン |
| `_shared/activeSubscription.ts` | ✅ 5パターン |
| `checkout-session-info`・`billing-portal` | 対象外（判定ロジックがほぼ無いため。呼び出し側の `invokeEdgeFunction` は Vitest で検証） |
| Next.js側（Vitest） | ✅ 31パターン（`feedback.ts` 9・`safeRedirect.ts` 10・`edge-functions.ts` 5・`questionImage.ts` 4・`leakedPassword.ts` 3） |
| DB（pgTAP） | ✅ 62ファイル・102件（ロールの権限・RLS・関数） |
| E2E（Playwright） | コアフロー3件 ✅・低速回線の回帰テスト2件 ✅・マイページへの戻りの回帰テスト4件 ✅・無料32問の回帰テスト8件 ✅・有料会員の画面の出し分け3件 ✅（いずれもローカルの Supabase）・有料転換フロー（決済〜Webhook）未実装・Suspense境界ケーススタディ 未実装・`checkout-session-info`/`billing-portal` 未実装 |

## `request-account-deletion`（7パターン）

有料会員（`active`/`trialing`/`past_due`）と無料会員の分岐、Stripe側で解約手続きが完了していない場合の拒否（`SUBSCRIPTION_NOT_CANCELLED`）、サブスクリプション未登録ユーザーの扱い、`status`の大文字小文字を検証している。退会は個人情報の削除に直結するため、判定を誤ると「削除すべきでないユーザーを消す」「削除すべきユーザーを消し損なう」のどちらの事故も起こり得る。

## `cancel-account-deletion`（4パターン）

退会予約が存在しない場合の拒否（`NO_SUBSCRIPTION`）、既に取り消し済みの場合の冪等な扱い（`already: true`）、実際の取り消し処理を検証している。

## 共通ロジックの抽出とテストの重複排除（`_shared/periodEnd.ts`、7パターン）

`stripe-webhook`のテストを書く過程で、`check-guest-subscription`にも同一の契約終了日解決ロジックが存在していることに気づいた。当時は「stripe-webhookと同じ取得順に統一」というコメントを残すことで整合性を保とうとしていたが、コメントによる手動同期は、片方を修正してもう片方を直し忘れた場合にそれを検知する仕組みを何も提供しない、壊れやすいパターンである。テストを書く過程でこの重複に気づいたこと自体が、テストを書く価値を示している。

ロジックを`supabase/functions/_shared/periodEnd.ts`に切り出し、`stripe-webhook`・`check-guest-subscription`の両方が同じ関数を参照する形にした。優先順位（`items.data[0].current_period_end` → `current_period_end` → `cancel_at` → `trial_end` → `ended_at`）を誤るとユーザーに見せる契約終了日がずれるため、境界値（Unixエポック`0`）を含めて検証している。

同じロジックを2箇所に置いたまま個別にテストすると、片方だけ修正した場合、修正していない側のテストは古い実装に対して通り続けるため、両方とも green のまま、2つの実装がズレたこと自体を検知する仕組みがない。1箇所に集約してから1回だけテストすることで、「ロジックが1つしか存在しない」こと自体が正しさの担保になる。

## `stripe-webhook`（6パターン）

契約終了日の解決ロジックは上記の`_shared/periodEnd.ts`に集約したため、`stripe-webhook`固有では残り2つの判定を検証している。

- **冪等性チェックの応答決定**：Stripeは同一イベントを複数回配信することがあり、重複を後続処理に進めてしまうと二重同期につながる
- **アカウント物理削除の実行条件**：`deletion_requested`フラグと`user_id`解決の両方が揃った場合のみ`auth.users`を削除する。片方だけでは削除しないことを個別に検証し、退会予約と無関係なユーザーが誤って削除されることを防ぐ

いずれの関数も実装ロジック自体は変更せず、既存の分岐を関数として切り出した上でテストを追加した。

## `check-guest-subscription`（6パターン）

未ログイン状態で決済したゲストユーザーが、後からログインした際にメールアドレス突合でStripeの契約を紐付ける機能。複数のStripe顧客の契約一覧から、`active`/`trialing`状態の契約を探す選択ロジックを検証している。

判定対象を1顧客分のサブスクリプション配列に絞ることで、複数顧客をループする実際のAPI呼び出しから選択ロジックだけを独立してテストできる形にした。ジェネリクス（`<T extends { status: string }>`）を使い、渡した配列の要素の型をそのまま返す設計にしたことで、呼び出し側で契約IDによる再検索が発生しない。

このテストを書く過程で、契約終了日の解決ロジックが`stripe-webhook`と重複していることに気づき、`_shared/periodEnd.ts`への共通化につながった（詳細は「共通ロジックの抽出とテストの重複排除」の節）。

## `create-checkout-session`（10パターン）

Stripe Checkoutセッション作成前のリクエストバリデーション（`priceId`必須、`success_url`/`cancel_url`必須、環境変数`PRICE_IDS`による価格許可リスト）と、決済のセッションに載せる本人の決め方（JWTから確定したユーザーだけを使い、未ログインならIDもメールアドレスも載せない、3パターン）を検証している。

チェック順序（`priceId`→リダイレクトURL→許可リスト）を意図的にテストで固定した。優先度の低いチェックが先に実行されて誤ったエラーコードを返す、という将来の実装変更によるリグレッションを防ぐため。`checkout-session-info`・`billing-portal`は判定ロジックがほぼ無いので、ユニットテストの対象外とし、E2Eで確かめる方針とした（E2Eは未実装。README の「今後の課題」に挙げている）。

## Next.js側（Vitest、31パターン）

クイズの正誤判定ロジック（`src/lib/feedback.ts`）を検証している。既にSupabaseへの呼び出しを含まない純粋関数として実装されていたため、Edge Functionsのような切り出し作業は不要だった。

このロジックには、否定形問題（「適切でないものを選べ」形式）特有の注意点がある。例えば「ガソリンの性質として誤っているものを選べ」という設問で、選択肢3が「誤った内容」＝公式の正解だとする。受験者が選択肢3を選んだ場合、「設問に正解した」ことにはなるが、「選んだ選択肢3自体の内容」は誤りである。この2つは別物であり、`questionIsCorrect`（設問に正解したか）と`contentIsCorrect`（選んだ内容自体が正しいか）という2つの値に分けて管理している。否定形問題でこの2つが逆転することを取り違えると、成績記録が反転しかねないため、通常問題・否定形問題それぞれで正解/不正解の4パターンを個別に検証した。

ログイン後の移動先（`?next=`）を決める`src/lib/safeRedirect.ts`（10パターン）は、移動先をサイトの中のパスだけに限り、外部のサイトへの誘導（オープンリダイレクト）を防ぐ。ブラウザと同じ`new URL`で解釈して判定しているため、`//`で始まる値のように、文字列の見た目ではサイトの中か外か見分けにくい行き先もはじく。

Edge Functionsの呼び出しの共通関数`src/lib/edge-functions.ts`（5パターン）は、`supabase.functions.invoke`を偽物に差し替え、成功時に結果を返すこと、失敗の応答に含まれるエラーの内容を呼び出し側へ渡すこと、エラーの内容を取り出せない場合（JSONでない応答・通信の失敗など）は呼び出し側が渡した既定の文言になることを検証している。

問題の図の URL を組み立てる`src/lib/questionImage.ts`（4パターン）は、DB に保存している Storage の中の場所（`basics_of_chemistry/…svg` など）から公開 URL を作る。Next.js への移行のときにこの組み立てが抜け、有料の問題36問の図が表示されていなかったため、関数に切り出してテストを付けた。

`src/lib/leakedPassword.ts`（3パターン）は、Supabase Auth の「漏えいしたパスワードの使用を防ぐ」設定（HaveIBeenPwned の照合）で登録やパスワードの再設定が拒否されたとき、拒否の理由（`reasons` に `pwned`）を見て、英語のエラー文の代わりに日本語の案内を返す。新規登録と再設定の2つの画面から使う。

**セットアップ**：Next.js公式ドキュメントに沿って、Vitest・React Testing Library・jsdomを導入した。`vitest.config.mts`で`supabase/**`を検索対象から除外している（Edge Functions側は`Deno.test`という別のテストランナーを使っており、混在させるとVitestが誤って実行しようとしてエラーになるため）。

## E2E の構成と方針

コアフロー（無料登録〜マイページ〜練習問題への回答〜誤答リストへの遷移）3件を実装し、ローカルの Supabase に対して合格を確認済み（`--repeat-each=10` で30回連続合格）。E2E は本番ビルドを起動して実行する設定（`webServer`）とした。開発サーバーでは、初回のコンパイル待ちで間欠的にタイムアウトするため。次に実装するのは有料転換フロー（ゲスト決済〜Webhook による会員ステータスの反映〜マイページでの有料問題の解放）。Stripe の公式ドキュメントは、Checkout などの Stripe の決済画面には自動操作を防ぐ仕組みがあるため、自動テストでは結果を模擬するよう案内している。そのため E2E では、Checkout のセッション作成（決済画面への移動）までと、決済完了後の Webhook の処理を検証する。決済画面そのものの操作（テストカードでの支払い）は、テストモードで手動で確認する方針とする。

E2E は、Vitest・Deno.test・pgTAP・ESLint とあわせて、PR ごとと main への push ごとに GitHub Actions で実行している（`.github/workflows/test.yml`）。CI の中で `supabase start` を実行し、migrations と `seed.sql` を適用したローカルの Supabase に接続するため、本番には触れない。その先の候補として、`useSearchParams`とSuspense境界のケーススタディと、`checkout-session-info`・`billing-portal`（判定ロジックが薄くユニットテストの価値が低いためE2E対象とした2関数）が残っている。

## 単体テストの対象の選び方（Next.js 側）

`src/lib/feedback.ts`・`src/lib/safeRedirect.ts`・`src/lib/edge-functions.ts`・`src/lib/questionImage.ts`・`src/lib/leakedPassword.ts`は着手済み。`src/lib/subscription.ts`の`isSubscribed()`は、判定を DB の関数 `has_active_subscription()` に任せ、呼び出した結果を返すだけになったため、判定の検証は pgTAP で行っている（[詳細設計](design.md) の「⑦ 有料会員の判定」参照）。他（`account.ts`・`mistakes.ts`・`review.ts`・`progress.ts`）は主にSupabase呼び出しのラッパーで、判定ロジックの比率が低いため優先度は下がる。
