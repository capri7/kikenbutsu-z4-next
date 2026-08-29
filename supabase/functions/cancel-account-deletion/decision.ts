// supabase/functions/cancel-account-deletion/decision.ts
export type CancelDecision =
  | { action: "reject"; error: "NO_SUBSCRIPTION" }
  | { action: "noop" }
  | { action: "cancel"; subscriptionId: string };

type SubscriptionRow = { id: string; deletion_requested: boolean | null } | null;

export function decideCancelDeletion(subRow: SubscriptionRow): CancelDecision {
  if (!subRow) {
    return { action: "reject", error: "NO_SUBSCRIPTION" };
  }
  if (!subRow.deletion_requested) {
    return { action: "noop" };
  }
  return { action: "cancel", subscriptionId: subRow.id };
}