// supabase/functions/_shared/stripe-events/invoice.test.ts
import { assertEquals } from "jsr:@std/assert";
import { subscriptionIdFromInvoice } from "./invoice.ts";

// 本番に届いた invoice.payment_succeeded（API の版 2025-05-28.basil）と同じ形
Deno.test("契約から作られた請求書なら、parent.subscription_details.subscription の契約の ID を返す", () => {
  const inv = {
    billing_reason: "subscription_cycle",
    parent: {
      type: "subscription_details",
      quote_details: null,
      subscription_details: { metadata: {}, subscription: "sub_123" },
    },
  };
  assertEquals(subscriptionIdFromInvoice(inv), "sub_123");
});

Deno.test("契約が展開されたオブジェクトで入っていても、その ID を返す", () => {
  const inv = {
    parent: {
      type: "subscription_details",
      subscription_details: { subscription: { id: "sub_456" } },
    },
  };
  assertEquals(subscriptionIdFromInvoice(inv), "sub_456");
});

Deno.test("parent がない請求書は、契約と関係がないので null を返す", () => {
  assertEquals(subscriptionIdFromInvoice({ parent: null }), null);
  assertEquals(subscriptionIdFromInvoice({}), null);
});

Deno.test("見積もりから作られた請求書（parent.type が quote_details）は null を返す", () => {
  const inv = {
    parent: {
      type: "quote_details",
      quote_details: { quote: "qt_123" },
      subscription_details: null,
    },
  };
  assertEquals(subscriptionIdFromInvoice(inv), null);
});

Deno.test("parent.type が subscription_details でも、契約の ID がなければ null を返す", () => {
  const inv = {
    parent: { type: "subscription_details", subscription_details: null },
  };
  assertEquals(subscriptionIdFromInvoice(inv), null);
});
