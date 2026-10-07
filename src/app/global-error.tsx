"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

// ルートの layout を含め、どの画面でも捕まえられなかった描画のエラーを記録する
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="ja">
      <body>
        {/* App Router は状態コードを渡さないため、0 で共通のエラー画面を出す */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
