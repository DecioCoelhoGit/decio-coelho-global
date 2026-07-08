/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Entitlement oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  acceptReasoningAgreement,
} from "./reasoning.agreement";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningEntitlementStatus =
  | "entitled"
  | "conditional"
  | "not-entitled";

export interface ReasoningEntitlementResult {
  id: string;
  status: ReasoningEntitlementStatus;
  entitled: boolean;
  agreement: ReturnType<
    typeof acceptReasoningAgreement
  >;
  entitlementId: string;
  rights: string[];
  reason: string;
  grantedAt: string;
}

const reasoningEntitlementHistory:
  ReasoningEntitlementResult[] = [];

export function grantReasoningEntitlement(
  context: ReasoningPolicyContext
): ReasoningEntitlementResult {
  const agreement =
    acceptReasoningAgreement(context);

  const status: ReasoningEntitlementStatus =
    agreement.status === "rejected"
      ? "not-entitled"
      : agreement.status === "conditional"
        ? "conditional"
        : "entitled";

  const rights =
    (context.metadata?.rights as string[] | undefined)
    ?? [
      "reasoning-access",
      "reasoning-execution",
      "reasoning-traceability",
    ];

  const result: ReasoningEntitlementResult = {
    id: `reasoning-entitlement-${Date.now()}`,
    status,
    entitled: status === "entitled",
    agreement,
    entitlementId: `DCG-REASONING-ENT-${Date.now()}`,
    rights,
    reason: agreement.reason,
    grantedAt: new Date().toISOString(),
  };

  reasoningEntitlementHistory.push(result);

  return result;
}

export function listReasoningEntitlementHistory():
  ReasoningEntitlementResult[] {
  return [...reasoningEntitlementHistory];
}

export function getLatestReasoningEntitlement():
  ReasoningEntitlementResult | undefined {
  return reasoningEntitlementHistory[
    reasoningEntitlementHistory.length - 1
  ];
}

export function clearReasoningEntitlementHistory():
  void {
  reasoningEntitlementHistory.length = 0;
}

export function countReasoningEntitlementResults():
  number {
  return reasoningEntitlementHistory.length;
}

export function isReasoningEntitled():
  boolean {
  return (
    getLatestReasoningEntitlement()
      ?.entitled ?? true
  );
}
