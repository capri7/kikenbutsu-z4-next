'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function HomeCta() {
  const supabase = createClient()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!cancelled) setLoggedIn(!!session)
    }

    checkSession()
    return () => {
      cancelled = true
    }
  }, [supabase])

  if (loggedIn) {
    return (
      <Link href="/mypage#review" className="btn btn-primary" id="btn-resume">
        マイページに移動
      </Link>
    )
  }

  return (
    <Link href="/signup" className="btn btn-primary" id="btn-resume">
      無料登録して100問を解く
    </Link>
  )
}
