import { admin } from "./stripeSync.ts";

export async function getAuthenticatedUser(req: Request) {
  const jwt = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!jwt) return { user: null, error: "UNAUTHORIZED" as const };

  const { data: { user }, error } = await admin.auth.getUser(jwt);
  if (error || !user) return { user: null, error: "UNAUTHORIZED" as const };

  return { user, error: null };
}