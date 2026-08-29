// supabase/functions/request-account-deletion/decision.ts
export type DeletionDecision =
  | { action: "reject"; error: "SUBSCRIPTION_NOT_CANCELLED" }
  | { action: "schedule"; subscriptionId: string; effectiveDate: string | null }
  | { action: "delete" };

type SubscriptionRow = {
  id: string;
  status: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean | null;
} | null;

const ACTIVE_STATUSES = ["active", "trialing", "past_due"];

export function decideAccountDeletion(subRow: SubscriptionRow): DeletionDecision {
  const status = (subRow?.status ?? "").toLowerCase();
  const isPaid = ACTIVE_STATUSES.includes(status);

  if (isPaid) {
    if (!subRow?.cancel_at_period_end) {
      return { action: "reject", error: "SUBSCRIPTION_NOT_CANCELLED" };
    }
    return {
      action: "schedule",
      subscriptionId: subRow!.id,
      effectiveDate: subRow!.current_period_end,
    };
  }

  return { action: "delete" };
}