/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Contract oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningBoundary,
} from "./reasoning.boundary";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningContractStatus =
  | "valid"
  | "conditional"
  | "invalid";

export interface ReasoningContractResult {
  id: string;
  status: ReasoningContractStatus;
  valid: boolean;
  boundary: ReturnType<typeof checkReasoningBoundary>;
  contractId: string;
  terms: string[];
  reason: string;
  validatedAt: string;
}

const reasoningContractHistory:
  ReasoningContractResult[] = [];

export function validateReasoningContract(
  context: ReasoningPolicyContext
): ReasoningContractResult {
  const boundary = checkReasoningBoundary(context);

  const status: ReasoningContractStatus =
    boundary.status === "outside-boundary"
      ? "invalid"
      : boundary.status === "conditional"
        ? "conditional"
        : "valid";

  const terms =
    (context.metadata?.terms as string[] | undefined)
    ?? [
      "reasoning-boundary-respected",
      "policy-context-accepted",
      "cognitive-operation-traceable",
    ];

  const result: ReasoningContractResult = {
    id: `reasoning-contract-${Date.now()}`,
    status,
    valid: status === "valid",
    boundary,
    contractId: `DCG-REASONING-CONTRACT-${Date.now()}`,
    terms,
    reason: boundary.reason,
    validatedAt: new Date().toISOString(),
  };

  reasoningContractHistory.push(result);

  return result;
}

export function listReasoningContractHistory():
  ReasoningContractResult[] {
  return [...reasoningContractHistory];
}

export function getLatestReasoningContract():
  ReasoningContractResult | undefined {
  return reasoningContractHistory[
    reasoningContractHistory.length - 1
  ];
}

export function clearReasoningContractHistory():
  void {
  reasoningContractHistory.length = 0;
}

export function countReasoningContractResults():
  number {
  return reasoningContractHistory.length;
}

export function isReasoningContractValid():
  boolean {
  return (
    getLatestReasoningContract()
      ?.valid ?? true
  );
}
