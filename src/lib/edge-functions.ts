import { FunctionsHttpError, type SupabaseClient } from '@supabase/supabase-js'

export async function invokeEdgeFunction<T>(
  supabase: SupabaseClient,
  name: string,
  fallbackMessage: string,
  body?: Record<string, unknown>,
): Promise<T> {
  const { data, error } = await supabase.functions.invoke<T>(name, { method: 'POST', body })
  if (error) {
    let message = fallbackMessage
    if (error instanceof FunctionsHttpError) {
      const json = await error.context.json().catch(() => ({}))
      if (json.error) message = json.error
    }
    throw new Error(message)
  }
  return data as T
}
