/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Compliance oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  governReasoningOperation,
} from "./reasoning.governance";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningComplianceStatus =
  | "compliant"
  | "restricted"
  | "non-compliant";

export interface ReasoningComplianceResult {
  id: string;
  status: ReasoningComplianceStatus;
  compliant: boolean;
  governance: ReturnType<
    typeof governReasoningOperation
  >;
  reason: string;
  checkedAt: string;
}

const reasoningComplianceHistory:
  ReasoningComplianceResult[] = [];

export function checkReasoningCompliance(
  context: ReasoningPolicyContext
): ReasoningComplianceResult {
  const governance =
    governReasoningOperation(context);

  const status: ReasoningComplianceStatus =
    governance.status === "blocked"
      ? "non-compliant"
      : governance.status === "restricted"
        ? "restricted"
        : "compliant";

  const result: ReasoningComplianceResult = {
    id: `reasoning-compliance-${Date.now()}`,
    status,
    compliant: status !== "non-compliant",
    governance,
    reason: governance.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningComplianceHistory.push(result);

  return result;
}

export function listReasoningComplianceHistory():
  ReasoningComplianceResult[] {
  return [...reasoningComplianceHistory];
}

export function getLatestReasoningCompliance():
  ReasoningComplianceResult | undefined {
  return reasoningComplianceHistory[
    reasoningComplianceHistory.length - 1
  ];
}

export function clearReasoningComplianceHistory():
  void {
  reasoningComplianceHistory.length = 0;
}

export function countReasoningComplianceResults():
  number {
  return reasoningComplianceHistory.length;
}

export function isReasoningCompliant():
  boolean {
  return (
    getLatestReasoningCompliance()
      ?.compliant ?? true
  );
}
