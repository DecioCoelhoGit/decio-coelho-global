/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Agreement oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  validateReasoningContract,
} from "./reasoning.contract";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAgreementStatus =
  | "accepted"
  | "conditional"
  | "rejected";

export interface ReasoningAgreementResult {
  id: string;
  status: ReasoningAgreementStatus;
  accepted: boolean;
  contract: ReturnType<typeof validateReasoningContract>;
  agreementId: string;
  parties: string[];
  reason: string;
  acceptedAt: string;
}

const reasoningAgreementHistory:
  ReasoningAgreementResult[] = [];

export function acceptReasoningAgreement(
  context: ReasoningPolicyContext
): ReasoningAgreementResult {
  const contract = validateReasoningContract(context);

  const status: ReasoningAgreementStatus =
    contract.status === "invalid"
      ? "rejected"
      : contract.status === "conditional"
        ? "conditional"
        : "accepted";

  const parties =
    (context.metadata?.parties as string[] | undefined)
    ?? [
      "dcglobal-ai",
      "cognitive-reasoning-layer",
    ];

  const result: ReasoningAgreementResult = {
    id: `reasoning-agreement-${Date.now()}`,
    status,
    accepted: status === "accepted",
    contract,
    agreementId: `DCG-REASONING-AGREEMENT-${Date.now()}`,
    parties,
    reason: contract.reason,
    acceptedAt: new Date().toISOString(),
  };

  reasoningAgreementHistory.push(result);

  return result;
}

export function listReasoningAgreementHistory():
  ReasoningAgreementResult[] {
  return [...reasoningAgreementHistory];
}

export function getLatestReasoningAgreement():
  ReasoningAgreementResult | undefined {
  return reasoningAgreementHistory[
    reasoningAgreementHistory.length - 1
  ];
}

export function clearReasoningAgreementHistory():
  void {
  reasoningAgreementHistory.length = 0;
}

export function countReasoningAgreementResults():
  number {
  return reasoningAgreementHistory.length;
}

export function isReasoningAgreementAccepted():
  boolean {
  return (
    getLatestReasoningAgreement()
      ?.accepted ?? true
  );
}
