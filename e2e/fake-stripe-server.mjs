// e2e/fake-stripe-server.mjs
//
// E2E 用の偽の Stripe API。stripe-webhook（ローカルの Supabase の Edge Functions のコンテナ）が、
// 本物の Stripe の代わりにここへ契約・顧客・請求書を取りに来る（STRIPE_API_BASE_URL=http://host.docker.internal:54399）。
// Stripe 公式の stripe-mock は、作ったものを覚えず（ID を指定しても登録した中身を返さない）、
// 最新の API の版にしか対応しないため使わない（https://github.com/stripe/stripe-mock）。
//
// - PUT /__test/<subscriptions|customers|invoices>/<id>：テストが、取り出されたときに返す中身を登録する
// - GET /v1/<subscriptions|customers|invoices>/<id>：登録した中身を返す。なければ Stripe と同じ形の 404
// - GET /health：Playwright が起動を待つための確認
//
// コンテナから届くよう 0.0.0.0 で待ち受ける。登録した中身はメモリにだけ置き、E2E の間だけ動く。
import { createServer } from 'node:http';

const PORT = 54399;
const API_KEY = 'sk_test_e2e_dummy'; // supabase/functions/.env の STRIPE_SECRET_KEY と同じテスト専用の値
const RESOURCES = new Set(['subscriptions', 'customers', 'invoices']);
const store = new Map();

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

function stripeError(res, status, message, code) {
  send(res, status, { error: { type: 'invalid_request_error', message, ...(code ? { code } : {}) } });
}

async function readJson(req) {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  return JSON.parse(raw);
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  const [scope, resource, id, ...rest] = url.pathname.split('/').filter(Boolean);

  if (req.method === 'GET' && url.pathname === '/health') return send(res, 200, { ok: true });

  if (req.method === 'PUT' && scope === '__test' && RESOURCES.has(resource) && id && rest.length === 0) {
    store.set(`${resource}/${id}`, await readJson(req));
    return send(res, 200, { ok: true });
  }

  if (scope === 'v1') {
    if (req.headers.authorization !== `Bearer ${API_KEY}`) {
      return stripeError(res, 401, 'Invalid API Key provided');
    }
    if (req.method === 'GET' && RESOURCES.has(resource) && id && rest.length === 0) {
      const object = store.get(`${resource}/${id}`);
      if (!object) return stripeError(res, 404, `No such ${resource.slice(0, -1)}: '${id}'`, 'resource_missing');
      return send(res, 200, object);
    }
  }

  return stripeError(res, 404, `Unrecognized request URL (${req.method}: ${url.pathname})`);
}).listen(PORT, '0.0.0.0', () => {
  console.log(`偽の Stripe API：http://0.0.0.0:${PORT}`);
});
