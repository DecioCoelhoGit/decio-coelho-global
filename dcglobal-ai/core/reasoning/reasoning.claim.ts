/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Claim oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  issueReasoningToken,
} from "./reasoning.token";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningClaimStatus =
  | "validated"
  | "conditional"
  | "invalidated";

export interface ReasoningClaimResult {
  id: string;
  status: ReasoningClaimStatus;
  valid: boolean;
  token: ReturnType<typeof issueReasoningToken>;
  claimId: string;
  claims: string[];
  reason: string;
  validatedAt: string;
}

const reasoningClaimHistory:
  ReasoningClaimResult[] = [];

export function validateReasoningClaim(
  context: ReasoningPolicyContext
): ReasoningClaimResult {
  const token = issueReasoningToken(context);

  const status: ReasoningClaimStatus =
    token.status === "revoked"
      ? "invalidated"
      : token.status === "conditional"
        ? "conditional"
        : "validated";

  const claims =
    (context.metadata?.claims as string[] | undefined)
    ?? token.claims;

  const result: ReasoningClaimResult = {
    id: `reasoning-claim-${Date.now()}`,
    status,
    valid: status === "validated",
    token,
    claimId: `DCG-REASONING-CLAIM-${Date.now()}`,
    claims,
    reason: token.reason,
    validatedAt: new Date().toISOString(),
  };

  reasoningClaimHistory.push(result);

  return result;
}

export function listReasoningClaimHistory():
  ReasoningClaimResult[] {
  return [...reasoningClaimHistory];
}

export function getLatestReasoningClaim():
  ReasoningClaimResult | undefined {
  return reasoningClaimHistory[
    reasoningClaimHistory.length - 1
  ];
}

export function clearReasoningClaimHistory():
  void {
  reasoningClaimHistory.length = 0;
}

export function countReasoningClaimResults():
  number {
  return reasoningClaimHistory.length;
}

export function isReasoningClaimValid():
  boolean {
  return (
    getLatestReasoningClaim()
      ?.valid ?? true
  );
}
