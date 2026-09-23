#!/bin/bash
# next.config.ts の LEGACY_URL_REDIRECTS を全件、本番サイトに対してcurlでチェックする。
# リポジトリのルート（next.config.ts がある場所）で実行してください。
#
# 使い方:
#   chmod +x check_redirects.sh
#   ./check_redirects.sh

set -euo pipefail

CONFIG_FILE="next.config.ts"
BASE_URL="https://kikenbutsu-z4.com"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "エラー: $CONFIG_FILE が見つかりません。リポジトリのルートで実行してください。"
  exit 1
fi

# source: '...' の行から旧URLだけを抜き出す
sources=$(grep -oE "source: '[^']+'" "$CONFIG_FILE" | sed -E "s/source: '(.+)'/\1/")

total=0
ok_308=0
fail=()

echo "旧URL一覧を本番サイトに対して確認します..."
echo "----------------------------------------"

while IFS= read -r path; do
  total=$((total + 1))
  url="${BASE_URL}${path}"
  status=$(curl -s -o /dev/null -w "%{http_code}" -I "$url")

  if [ "$status" = "308" ]; then
    ok_308=$((ok_308 + 1))
    echo "OK   308  $path"
  else
    fail+=("$status  $path")
    echo "NG   $status  $path"
  fi
done <<< "$sources"

echo "----------------------------------------"
echo "合計: $total 件 / 308成功: $ok_308 件 / それ以外: $((total - ok_308)) 件"

if [ ${#fail[@]} -gt 0 ]; then
  echo ""
  echo "308以外だった項目:"
  for f in "${fail[@]}"; do
    echo "  $f"
  done
  exit 1
else
  echo ""
  echo "全件308リダイレクトを確認しました。"
fi
