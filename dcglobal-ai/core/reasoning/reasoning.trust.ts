/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Trust oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningIntegrity,
} from "./reasoning.integrity";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningTrustStatus =
  | "trusted"
  | "limited"
  | "untrusted";

export interface ReasoningTrustResult {
  id: string;
  status: ReasoningTrustStatus;
  trusted: boolean;
  integrity: ReturnType<
    typeof checkReasoningIntegrity
  >;
  reason: string;
  checkedAt: string;
}

const reasoningTrustHistory:
  ReasoningTrustResult[] = [];

export function checkReasoningTrust(
  context: ReasoningPolicyContext
): ReasoningTrustResult {
  const integrity =
    checkReasoningIntegrity(context);

  const status: ReasoningTrustStatus =
    integrity.status === "compromised"
      ? "untrusted"
      : integrity.status === "restricted"
        ? "limited"
        : "trusted";

  const result: ReasoningTrustResult = {
    id: `reasoning-trust-${Date.now()}`,
    status,
    trusted: status === "trusted",
    integrity,
    reason: integrity.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningTrustHistory.push(result);

  return result;
}

export function listReasoningTrustHistory():
  ReasoningTrustResult[] {
  return [...reasoningTrustHistory];
}

export function getLatestReasoningTrust():
  ReasoningTrustResult | undefined {
  return reasoningTrustHistory[
    reasoningTrustHistory.length - 1
  ];
}

export function clearReasoningTrustHistory():
  void {
  reasoningTrustHistory.length = 0;
}

export function countReasoningTrustResults():
  number {
  return reasoningTrustHistory.length;
}

export function isReasoningTrusted():
  boolean {
  return (
    getLatestReasoningTrust()
      ?.trusted ?? true
  );
}
