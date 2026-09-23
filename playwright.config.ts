import { defineConfig, devices } from '@playwright/test';
import { execSync } from 'node:child_process';

/**
 * E2E はローカルの Supabase（supabase start）に対してだけ実行する。
 * 接続先は .env.local（本番）ではなく、supabase status から取得する。
 */
function loadLocalSupabaseEnv(): { url: string; anonKey: string } {
  let output: string;
  try {
    output = execSync('supabase status -o env', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    throw new Error(
      'ローカルの Supabase が起動していません。`supabase start` を実行してから E2E を実行してください。'
    );
  }

  const env: Record<string, string> = {};
  for (const line of output.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/);
    if (m) env[m[1]] = m[2];
  }

  const url = env.API_URL;
  const anonKey = env.ANON_KEY;
  if (!url || !anonKey) {
    throw new Error('supabase status から API_URL または ANON_KEY を取得できませんでした。');
  }

  const host = new URL(url).hostname;
  if (host !== '127.0.0.1' && host !== 'localhost') {
    throw new Error(`E2E の接続先がローカルではありません（${url}）。本番に対しては実行しません。`);
  }

  return { url, anonKey };
}

const localSupabase = loadLocalSupabaseEnv();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // firefox・webkitはブラウザバイナリ未導入のため対象外（導入済みはchromiumのみ）
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* E2E 用に本番ビルドを起動する（接続先はローカルの Supabase） */
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    // 本番に接続したサーバーを誤って使い回さないよう、常に新しく起動する
    reuseExistingServer: false,
    timeout: 180 * 1000,
    env: {
      NEXT_PUBLIC_SUPABASE_URL: localSupabase.url,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: localSupabase.anonKey,
    },
  },
});