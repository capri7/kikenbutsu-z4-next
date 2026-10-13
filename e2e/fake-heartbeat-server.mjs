// e2e/fake-heartbeat-server.mjs
//
// E2E 用の偽の Heartbeat（Better Stack の Heartbeat の代わり）。stripe-events-retry（ローカルの Supabase の Edge Functions のコンテナ）が、
// 本物の Better Stack の代わりにここへ送る（BETTERSTACK_HEARTBEAT_URL=http://host.docker.internal:54398/heartbeat/e2e）。
// 本番の Heartbeat を手元や CI のテストから呼ばないため。
//
// - GET・POST・HEAD /heartbeat/<token>：成功として記録する
// - GET・POST・HEAD /heartbeat/<token>/fail：失敗として記録する（Better Stack の公式の文書「Cron and heartbeat monitor」の /fail）
// - GET /__test/heartbeats：記録を返す。DELETE /__test/heartbeats：記録を消す
// - GET /health：Playwright が起動を待つための確認
//
// コンテナから届くよう 0.0.0.0 で待ち受ける。記録はメモリにだけ置き、E2E の間だけ動く。
import { createServer } from 'node:http';

const PORT = 54398;
let heartbeats = [];

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  const parts = url.pathname.split('/').filter(Boolean);

  if (req.method === 'GET' && url.pathname === '/health') return send(res, 200, { ok: true });

  if (url.pathname === '/__test/heartbeats') {
    if (req.method === 'GET') return send(res, 200, heartbeats);
    if (req.method === 'DELETE') {
      heartbeats = [];
      return send(res, 200, { ok: true });
    }
  }

  if (parts[0] === 'heartbeat' && parts[1] && (parts.length === 2 || (parts.length === 3 && parts[2] === 'fail'))) {
    heartbeats.push({ token: parts[1], ok: parts.length === 2, at: new Date().toISOString() });
    return send(res, 200, { ok: true });
  }

  return send(res, 404, { error: `not found: ${req.method} ${url.pathname}` });
}).listen(PORT, '0.0.0.0', () => {
  console.log(`偽の Heartbeat：http://0.0.0.0:${PORT}`);
});
