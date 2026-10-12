// supabase/functions/stripe-webhook/invoice.ts

/** 請求書のうち、紐づく契約を探すのに使う欄（Basil 以降の API の版の形） */
export type InvoiceParentSource = {
  parent?: {
    type?: string | null;
    subscription_details?: {
      subscription?: string | { id: string } | null;
    } | null;
  } | null;
};

/**
 * 請求書から、紐づく契約の ID を取り出す。
 * Basil（2025-03-31）で invoice.subscription はなくなり、parent.subscription_details.subscription に移った。
 * 契約から作られた請求書（parent.type が subscription_details）でなければ null を返す。
 */
export function subscriptionIdFromInvoice(inv: InvoiceParentSource): string | null {
  const parent = inv.parent;
  if (!parent || parent.type !== "subscription_details") return null;
  const subscription = parent.subscription_details?.subscription;
  if (!subscription) return null;
  return typeof subscription === "string" ? subscription : subscription.id;
}
