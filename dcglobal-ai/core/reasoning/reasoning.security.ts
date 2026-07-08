/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Security oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningCompliance,
} from "./reasoning.compliance";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningSecurityStatus =
  | "secure"
  | "restricted"
  | "blocked";

export interface ReasoningSecurityResult {
  id: string;
  status: ReasoningSecurityStatus;
  secure: boolean;
  compliance: ReturnType<
    typeof checkReasoningCompliance
  >;
  reason: string;
  checkedAt: string;
}

const reasoningSecurityHistory:
  ReasoningSecurityResult[] = [];

export function checkReasoningSecurity(
  context: ReasoningPolicyContext
): ReasoningSecurityResult {
  const compliance =
    checkReasoningCompliance(context);

  const status: ReasoningSecurityStatus =
    compliance.status === "non-compliant"
      ? "blocked"
      : compliance.status === "restricted"
        ? "restricted"
        : "secure";

  const result: ReasoningSecurityResult = {
    id: `reasoning-security-${Date.now()}`,
    status,
    secure: status === "secure",
    compliance,
    reason: compliance.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningSecurityHistory.push(result);

  return result;
}

export function listReasoningSecurityHistory():
  ReasoningSecurityResult[] {
  return [...reasoningSecurityHistory];
}

export function getLatestReasoningSecurity():
  ReasoningSecurityResult | undefined {
  return reasoningSecurityHistory[
    reasoningSecurityHistory.length - 1
  ];
}

export function clearReasoningSecurityHistory():
  void {
  reasoningSecurityHistory.length = 0;
}

export function countReasoningSecurityResults():
  number {
  return reasoningSecurityHistory.length;
}

export function isReasoningSecure():
  boolean {
  return (
    getLatestReasoningSecurity()
      ?.secure ?? true
  );
}
