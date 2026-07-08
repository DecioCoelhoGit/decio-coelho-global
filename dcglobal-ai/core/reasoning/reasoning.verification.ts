/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Verification oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  proveReasoningClaim,
} from "./reasoning.proof";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningVerificationStatus =
  | "verified"
  | "conditional"
  | "unverified";

export interface ReasoningVerificationResult {
  id: string;
  status: ReasoningVerificationStatus;
  verified: boolean;
  proof: ReturnType<typeof proveReasoningClaim>;
  verificationId: string;
  checks: string[];
  reason: string;
  verifiedAt: string;
}

const reasoningVerificationHistory:
  ReasoningVerificationResult[] = [];

export function verifyReasoningProof(
  context: ReasoningPolicyContext
): ReasoningVerificationResult {
  const proof = proveReasoningClaim(context);

  const status: ReasoningVerificationStatus =
    proof.status === "unproven"
      ? "unverified"
      : proof.status === "conditional"
        ? "conditional"
        : "verified";

  const checks =
    (context.metadata?.checks as string[] | undefined)
    ?? [
      "proof-present",
      "claim-valid",
      "evidence-linked",
    ];

  const result: ReasoningVerificationResult = {
    id: `reasoning-verification-${Date.now()}`,
    status,
    verified: status === "verified",
    proof,
    verificationId:
      `DCG-REASONING-VERIFY-${Date.now()}`,
    checks,
    reason: proof.reason,
    verifiedAt: new Date().toISOString(),
  };

  reasoningVerificationHistory.push(result);

  return result;
}

export function listReasoningVerificationHistory():
  ReasoningVerificationResult[] {
  return [...reasoningVerificationHistory];
}

export function getLatestReasoningVerification():
  ReasoningVerificationResult | undefined {
  return reasoningVerificationHistory[
    reasoningVerificationHistory.length - 1
  ];
}

export function clearReasoningVerificationHistory():
  void {
  reasoningVerificationHistory.length = 0;
}

export function countReasoningVerificationResults():
  number {
  return reasoningVerificationHistory.length;
}

export function isReasoningVerificationVerified():
  boolean {
  return (
    getLatestReasoningVerification()
      ?.verified ?? true
  );
}
