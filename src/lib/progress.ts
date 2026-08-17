import { createClient } from '@/lib/supabase/client'

export type SaveProgressParams = {
  questionId: string
  isCorrect: boolean
  clientNonce?: string
  answeredAt?: Date
}

export type ProgressRecordedDetail = {
  questionId: string
  isCorrect: boolean
  answeredAt: string
  clientNonce: string
}

function generateUuidV4(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  const bytes =
    typeof crypto !== 'undefined' && crypto.getRandomValues
      ? crypto.getRandomValues(new Uint8Array(16))
      : Uint8Array.from({ length: 16 }, () => Math.floor(Math.random() * 256))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

function emitProgressRecorded(detail: ProgressRecordedDetail): void {
  window.dispatchEvent(new CustomEvent('progress:recorded', { detail }))
}

export async function saveProgress({
  questionId,
  isCorrect,
  clientNonce,
  answeredAt = new Date(),
}: SaveProgressParams): Promise<void> {
  const supabase = createClient()
  const ts = answeredAt.toISOString()
  const nonce = clientNonce || generateUuidV4()

  const { error } = await supabase.rpc('record_progress', {
    p_question_id: String(questionId),
    p_is_correct: !!isCorrect,
    p_answered_at: ts,
    p_client_nonce: nonce,
  })

  if (error) {
    console.error('[record_progress] error', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })
    throw error
  }

  emitProgressRecorded({ questionId, isCorrect, answeredAt: ts, clientNonce: nonce })
}