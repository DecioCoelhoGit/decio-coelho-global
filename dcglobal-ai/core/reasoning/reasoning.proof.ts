/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Proof oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  validateReasoningClaim,
} from "./reasoning.claim";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningProofStatus =
  | "proven"
  | "conditional"
  | "unproven";

export interface ReasoningProofResult {
  id: string;
  status: ReasoningProofStatus;
  proven: boolean;
  claim: ReturnType<typeof validateReasoningClaim>;
  proofId: string;
  evidence: string[];
  reason: string;
  provenAt: string;
}

const reasoningProofHistory:
  ReasoningProofResult[] = [];

export function proveReasoningClaim(
  context: ReasoningPolicyContext
): ReasoningProofResult {
  const claim = validateReasoningClaim(context);

  const status: ReasoningProofStatus =
    claim.status === "invalidated"
      ? "unproven"
      : claim.status === "conditional"
        ? "conditional"
        : "proven";

  const evidence =
    (context.metadata?.evidence as string[] | undefined)
    ?? [
      "validated-claim",
      "active-token",
      "issued-credential",
    ];

  const result: ReasoningProofResult = {
    id: `reasoning-proof-${Date.now()}`,
    status,
    proven: status === "proven",
    claim,
    proofId: `DCG-REASONING-PROOF-${Date.now()}`,
    evidence,
    reason: claim.reason,
    provenAt: new Date().toISOString(),
  };

  reasoningProofHistory.push(result);

  return result;
}

export function listReasoningProofHistory():
  ReasoningProofResult[] {
  return [...reasoningProofHistory];
}

export function getLatestReasoningProof():
  ReasoningProofResult | undefined {
  return reasoningProofHistory[
    reasoningProofHistory.length - 1
  ];
}

export function clearReasoningProofHistory():
  void {
  reasoningProofHistory.length = 0;
}

export function countReasoningProofResults():
  number {
  return reasoningProofHistory.length;
}

export function isReasoningProofProven():
  boolean {
  return (
    getLatestReasoningProof()
      ?.proven ?? true
  );
}
