/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Integrity oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningSecurity,
} from "./reasoning.security";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningIntegrityStatus =
  | "intact"
  | "restricted"
  | "compromised";

export interface ReasoningIntegrityResult {
  id: string;
  status: ReasoningIntegrityStatus;
  intact: boolean;
  security: ReturnType<
    typeof checkReasoningSecurity
  >;
  reason: string;
  checkedAt: string;
}

const reasoningIntegrityHistory:
  ReasoningIntegrityResult[] = [];

export function checkReasoningIntegrity(
  context: ReasoningPolicyContext
): ReasoningIntegrityResult {
  const security =
    checkReasoningSecurity(context);

  const status: ReasoningIntegrityStatus =
    security.status === "blocked"
      ? "compromised"
      : security.status === "restricted"
        ? "restricted"
        : "intact";

  const result: ReasoningIntegrityResult = {
    id: `reasoning-integrity-${Date.now()}`,
    status,
    intact: status === "intact",
    security,
    reason: security.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningIntegrityHistory.push(result);

  return result;
}

export function listReasoningIntegrityHistory():
  ReasoningIntegrityResult[] {
  return [...reasoningIntegrityHistory];
}

export function getLatestReasoningIntegrity():
  ReasoningIntegrityResult | undefined {
  return reasoningIntegrityHistory[
    reasoningIntegrityHistory.length - 1
  ];
}

export function clearReasoningIntegrityHistory():
  void {
  reasoningIntegrityHistory.length = 0;
}

export function countReasoningIntegrityResults():
  number {
  return reasoningIntegrityHistory.length;
}

export function isReasoningIntegrityIntact():
  boolean {
  return (
    getLatestReasoningIntegrity()
      ?.intact ?? true
  );
}
