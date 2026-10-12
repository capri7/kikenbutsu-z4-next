#!/usr/bin/env bash
# 動いているローカルの Supabase の各サービスの版が、supabase/production-versions/ に書いた本番の版と同じかを確かめる。
# 1つでも違えば、終了コード 1 で終わる（CI を失敗させる）。
set -euo pipefail

project_id=$(sed -n 's/^project_id = "\(.*\)"$/\1/p' supabase/config.toml)
status=0

check() {
  local service="$1" file="$2"
  local expected image actual
  expected=$(tr -d '[:space:]' < "supabase/production-versions/${file}")
  image=$(docker inspect -f '{{.Config.Image}}' "supabase_${service}_${project_id}")
  actual="${image##*:}"
  if [ "${actual}" = "${expected}" ]; then
    echo "ok: ${service} ${actual}"
  else
    echo "::error::${service} の版が本番と違う（動いている版: ${actual}、本番: ${expected}）"
    status=1
  fi
}

check rest rest-version
check auth gotrue-version
check db postgres-version
check storage storage-version
exit "${status}"
