/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Assurance oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningTrust,
} from "./reasoning.trust";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAssuranceStatus =
  | "assured"
  | "limited"
  | "unsafe";

export interface ReasoningAssuranceResult {
  id: string;
  status: ReasoningAssuranceStatus;
  assured: boolean;
  trust: ReturnType<
    typeof checkReasoningTrust
  >;
  reason: string;
  checkedAt: string;
}

const reasoningAssuranceHistory:
  ReasoningAssuranceResult[] = [];

export function checkReasoningAssurance(
  context: ReasoningPolicyContext
): ReasoningAssuranceResult {
  const trust =
    checkReasoningTrust(context);

  const status: ReasoningAssuranceStatus =
    trust.status === "untrusted"
      ? "unsafe"
      : trust.status === "limited"
        ? "limited"
        : "assured";

  const result: ReasoningAssuranceResult = {
    id: `reasoning-assurance-${Date.now()}`,
    status,
    assured: status === "assured",
    trust,
    reason: trust.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningAssuranceHistory.push(result);

  return result;
}

export function listReasoningAssuranceHistory():
  ReasoningAssuranceResult[] {
  return [...reasoningAssuranceHistory];
}

export function getLatestReasoningAssurance():
  ReasoningAssuranceResult | undefined {
  return reasoningAssuranceHistory[
    reasoningAssuranceHistory.length - 1
  ];
}

export function clearReasoningAssuranceHistory():
  void {
  reasoningAssuranceHistory.length = 0;
}

export function countReasoningAssuranceResults():
  number {
  return reasoningAssuranceHistory.length;
}

export function isReasoningAssured():
  boolean {
  return (
    getLatestReasoningAssurance()
      ?.assured ?? true
  );
}
