/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Validation Chain oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  verifyReasoningProof,
} from "./reasoning.verification";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningValidationChainStatus =
  | "validated"
  | "conditional"
  | "broken";

export interface ReasoningValidationChainResult {
  id: string;
  status: ReasoningValidationChainStatus;
  validated: boolean;
  verification: ReturnType<
    typeof verifyReasoningProof
  >;
  chainId: string;
  steps: string[];
  reason: string;
  validatedAt: string;
}

const reasoningValidationChainHistory:
  ReasoningValidationChainResult[] = [];

export function validateReasoningChain(
  context: ReasoningPolicyContext
): ReasoningValidationChainResult {
  const verification = verifyReasoningProof(context);

  const status: ReasoningValidationChainStatus =
    verification.status === "unverified"
      ? "broken"
      : verification.status === "conditional"
        ? "conditional"
        : "validated";

  const steps =
    (context.metadata?.steps as string[] | undefined)
    ?? [
      "credential-issued",
      "token-active",
      "claim-validated",
      "proof-proven",
      "verification-confirmed",
    ];

  const result: ReasoningValidationChainResult = {
    id: `reasoning-validation-chain-${Date.now()}`,
    status,
    validated: status === "validated",
    verification,
    chainId: `DCG-REASONING-CHAIN-${Date.now()}`,
    steps,
    reason: verification.reason,
    validatedAt: new Date().toISOString(),
  };

  reasoningValidationChainHistory.push(result);

  return result;
}

export function listReasoningValidationChainHistory():
  ReasoningValidationChainResult[] {
  return [...reasoningValidationChainHistory];
}

export function getLatestReasoningValidationChain():
  ReasoningValidationChainResult | undefined {
  return reasoningValidationChainHistory[
    reasoningValidationChainHistory.length - 1
  ];
}

export function clearReasoningValidationChainHistory():
  void {
  reasoningValidationChainHistory.length = 0;
}

export function countReasoningValidationChainResults():
  number {
  return reasoningValidationChainHistory.length;
}

export function isReasoningValidationChainValid():
  boolean {
  return (
    getLatestReasoningValidationChain()
      ?.validated ?? true
  );
}
