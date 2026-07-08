/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Authority oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  certifyReasoning,
} from "./reasoning.certification";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAuthorityStatus =
  | "authorized"
  | "conditional"
  | "unauthorized";

export interface ReasoningAuthorityResult {
  id: string;
  status: ReasoningAuthorityStatus;
  authorized: boolean;
  certification: ReturnType<
    typeof certifyReasoning
  >;
  authorityId: string;
  reason: string;
  authorizedAt: string;
}

const reasoningAuthorityHistory:
  ReasoningAuthorityResult[] = [];

export function authorizeReasoning(
  context: ReasoningPolicyContext
): ReasoningAuthorityResult {
  const certification =
    certifyReasoning(context);

  const status: ReasoningAuthorityStatus =
    certification.status === "denied"
      ? "unauthorized"
      : certification.status === "conditional"
        ? "conditional"
        : "authorized";

  const result: ReasoningAuthorityResult = {
    id: `reasoning-authority-${Date.now()}`,
    status,
    authorized: status === "authorized",
    certification,
    authorityId: `DCG-REASONING-AUTH-${Date.now()}`,
    reason: certification.reason,
    authorizedAt: new Date().toISOString(),
  };

  reasoningAuthorityHistory.push(result);

  return result;
}

export function listReasoningAuthorityHistory():
  ReasoningAuthorityResult[] {
  return [...reasoningAuthorityHistory];
}

export function getLatestReasoningAuthority():
  ReasoningAuthorityResult | undefined {
  return reasoningAuthorityHistory[
    reasoningAuthorityHistory.length - 1
  ];
}

export function clearReasoningAuthorityHistory():
  void {
  reasoningAuthorityHistory.length = 0;
}

export function countReasoningAuthorityResults():
  number {
  return reasoningAuthorityHistory.length;
}

export function isReasoningAuthorized():
  boolean {
  return (
    getLatestReasoningAuthority()
      ?.authorized ?? true
  );
}
