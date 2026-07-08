/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Authorization oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  authorizeReasoning,
} from "./reasoning.authority";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAuthorizationStatus =
  | "granted"
  | "conditional"
  | "denied";

export interface ReasoningAuthorizationResult {
  id: string;
  status: ReasoningAuthorizationStatus;
  granted: boolean;
  authority: ReturnType<
    typeof authorizeReasoning
  >;
  authorizationId: string;
  reason: string;
  grantedAt: string;
}

const reasoningAuthorizationHistory:
  ReasoningAuthorizationResult[] = [];

export function grantReasoningAuthorization(
  context: ReasoningPolicyContext
): ReasoningAuthorizationResult {
  const authority =
    authorizeReasoning(context);

  const status: ReasoningAuthorizationStatus =
    authority.status === "unauthorized"
      ? "denied"
      : authority.status === "conditional"
        ? "conditional"
        : "granted";

  const result: ReasoningAuthorizationResult = {
    id: `reasoning-authorization-${Date.now()}`,
    status,
    granted: status === "granted",
    authority,
    authorizationId: `DCG-REASONING-AUTHZ-${Date.now()}`,
    reason: authority.reason,
    grantedAt: new Date().toISOString(),
  };

  reasoningAuthorizationHistory.push(result);

  return result;
}

export function listReasoningAuthorizationHistory():
  ReasoningAuthorizationResult[] {
  return [...reasoningAuthorizationHistory];
}

export function getLatestReasoningAuthorization():
  ReasoningAuthorizationResult | undefined {
  return reasoningAuthorizationHistory[
    reasoningAuthorizationHistory.length - 1
  ];
}

export function clearReasoningAuthorizationHistory():
  void {
  reasoningAuthorizationHistory.length = 0;
}

export function countReasoningAuthorizationResults():
  number {
  return reasoningAuthorizationHistory.length;
}

export function isReasoningAuthorizationGranted():
  boolean {
  return (
    getLatestReasoningAuthorization()
      ?.granted ?? true
  );
}
