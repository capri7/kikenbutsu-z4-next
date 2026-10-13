import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import { putStripeObject } from './fake-stripe';

/**
 * 未処理のまま残った Stripe の通知の処理し直し（stripe-events-retry）
 *
 * 本番では pg_cron が10分ごとに呼ぶ。E2E では、通知の記録（stripe_events）を作ってから、関数を直接呼ぶ。
 * 呼び出しには、新しい形式の秘密の鍵（apikey ヘッダー）が要る。結果は、Better Stack の Heartbeat の代わりに
 * 偽の Heartbeat（e2e/fake-heartbeat-server.mjs）に送られる。
 *
 * 処理し直す対象と、3時間たっても未処理の件数は、DB の中のすべての通知から決まる。ほかのテストの結果に左右されないよう、
 * このファイルのテストは順に実行し、最初に、前の実行で残った古い未処理の通知を消す（ローカルの Supabase だけ）。
 */

const FAKE_HEARTBEAT_URL = 'http://127.0.0.1:54398';

function supabaseUrl(): string {
  const url = process.env.E2E_SUPABASE_URL;
  if (!url) throw new Error('E2E_SUPABASE_URL がありません（playwright.config.ts で設定する）。');
  return url;
}

function secretKey(): string {
  const key = process.env.E2E_SUPABASE_SECRET_KEY;
  if (!key) throw new Error('E2E_SUPABASE_SECRET_KEY がありません（playwright.config.ts で設定する）。');
  return key;
}

function adminClient() {
  const key = process.env.E2E_SUPABASE_SECRET_KEY;
  if (!key) throw new Error('E2E_SUPABASE_SECRET_KEY がありません（playwright.config.ts で設定する）。');
  return createClient(supabaseUrl(), key, { auth: { persistSession: false, autoRefreshToken: false } });
}

async function callRetry(apikey?: string) {
  const res = await fetch(`${supabaseUrl()}/functions/v1/stripe-events-retry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(apikey ? { apikey } : {}) },
    body: '{}',
  });
  return { status: res.status, body: await res.text() };
}

async function heartbeats(): Promise<{ ok: boolean }[]> {
  const res = await fetch(`${FAKE_HEARTBEAT_URL}/__test/heartbeats`);
  return res.json();
}

async function clearHeartbeats() {
  await fetch(`${FAKE_HEARTBEAT_URL}/__test/heartbeats`, { method: 'DELETE' });
}

function minutesAgo(minutes: number): string {
  return new Date(Date.now() - minutes * 60 * 1000).toISOString();
}

// 会員を1人作る（画面は使わない）
async function createMember(): Promise<string> {
  const { data, error } = await adminClient().auth.admin.createUser({
    email: `e2e-test+${randomUUID()}@example.com`,
    password: 'test-password-e2e',
    email_confirm: true,
  });
  if (error) throw error;
  return data.user.id;
}

function subscription(userId: string) {
  const id = randomUUID();
  const periodEnd = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;
  return {
    id: `sub_e2e_${id}`,
    object: 'subscription',
    customer: `cus_e2e_${id}`,
    status: 'active',
    cancel_at_period_end: false,
    current_period_end: periodEnd,
    latest_invoice: null,
    metadata: { user_id: userId },
    items: { object: 'list', data: [{ current_period_end: periodEnd }] },
  };
}

// 通知を、未処理の記録として直接作る（受け取ったときの記録と同じ形）
async function insertUnprocessedEvent(
  event: { id: string; type: string },
  fields: { receivedMinutesAgo: number; attempts: number; lastAttemptMinutesAgo: number | null },
) {
  const { error } = await adminClient()
    .from('stripe_events')
    .insert({
      id: event.id,
      type: event.type,
      livemode: false,
      payload: event,
      received_at: minutesAgo(fields.receivedMinutesAgo),
      processed_at: null,
      attempts: fields.attempts,
      last_attempt_at: fields.lastAttemptMinutesAgo === null ? null : minutesAgo(fields.lastAttemptMinutesAgo),
      last_error: fields.attempts > 0 ? 'E2E：前回の処理が失敗した' : null,
    });
  if (error) throw error;
}

async function eventRow(id: string) {
  const { data, error } = await adminClient()
    .from('stripe_events')
    .select('processed_at, attempts, last_error')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

test.describe('未処理の通知の処理し直し', () => {
  // 1件ずつ順に実行する。serial は1件失敗すると残りを飛ばすため使わない（Playwright の公式の文書「test.describe.configure」）
  test.describe.configure({ mode: 'default' });

  test.beforeAll(async () => {
    // 前の実行で残った、受け取ってから10分以上たった未処理の通知を消す（ローカルの Supabase だけ。接続先は playwright.config.ts で限定している）
    const { error } = await adminClient()
      .from('stripe_events')
      .delete()
      .is('processed_at', null)
      .lt('received_at', minutesAgo(10));
    if (error) throw error;
  });

  test('処理に失敗して未処理のまま残った通知は、処理し直されて反映される（FR-11-8）', async () => {
    const userId = await createMember();
    const sub = subscription(userId);
    await putStripeObject('subscriptions', sub);
    const event = { id: `evt_e2e_${randomUUID()}`, object: 'event', type: 'customer.subscription.updated', livemode: false, data: { object: sub } };
    // 15分前に受け取り、1回失敗して、前回から15分たった通知（処理し直す対象）
    await insertUnprocessedEvent(event, { receivedMinutesAgo: 15, attempts: 1, lastAttemptMinutesAgo: 15 });
    await clearHeartbeats();

    const res = await callRetry(secretKey());
    expect(res.status).toBe(200);

    const row = await eventRow(event.id);
    expect(row.processed_at).not.toBeNull();
    expect(row.attempts).toBe(2);
    expect(row.last_error).toBeNull();

    const { data: subRows, error } = await adminClient()
      .from('subscriptions')
      .select('status, user_id')
      .eq('stripe_subscription_id', sub.id);
    if (error) throw error;
    expect(subRows).toEqual([{ status: 'active', user_id: userId }]);

    // 3時間たっても未処理の通知はないため、Heartbeat には成功が送られる
    expect(await heartbeats()).toEqual([expect.objectContaining({ ok: true })]);
  });

  test('受け取ってから3時間たっても未処理の通知があると、Heartbeat に失敗が送られる（FR-11-9）', async () => {
    // 4時間前に受け取り、5回失敗した通知（上限に達し、処理し直さない）
    const event = { id: `evt_e2e_${randomUUID()}`, object: 'event', type: 'customer.subscription.updated', livemode: false, data: { object: { id: `sub_e2e_${randomUUID()}` } } };
    await insertUnprocessedEvent(event, { receivedMinutesAgo: 240, attempts: 5, lastAttemptMinutesAgo: 60 });
    await clearHeartbeats();
    try {
      const res = await callRetry(secretKey());
      expect(res.status).toBe(200);
      expect(JSON.parse(res.body)).toEqual(expect.objectContaining({ overdue: 1 }));
      expect((await eventRow(event.id)).attempts).toBe(5);
      expect(await heartbeats()).toEqual([expect.objectContaining({ ok: false })]);
    } finally {
      // 次の実行や、ほかのテストの結果に残さない
      await adminClient().from('stripe_events').delete().eq('id', event.id);
    }
  });

  test('鍵のない呼び出しと、違う鍵の呼び出しは拒否され、何も処理されない', async () => {
    await clearHeartbeats();
    expect((await callRetry()).status).toBe(401);
    expect((await callRetry('sb_secret_e2e_wrong_key')).status).toBe(401);
    expect(await heartbeats()).toEqual([]);
  });
});
