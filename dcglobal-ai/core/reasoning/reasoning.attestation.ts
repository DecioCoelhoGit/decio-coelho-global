/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Attestation oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  validateReasoningChain,
} from "./reasoning.validation-chain";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAttestationStatus =
  | "attested"
  | "conditional"
  | "not-attested";

export interface ReasoningAttestationResult {
  id: string;
  status: ReasoningAttestationStatus;
  attested: boolean;
  validation: ReturnType<typeof validateReasoningChain>;
  attestationId: string;
  statement: string;
  reason: string;
  attestedAt: string;
}

const reasoningAttestationHistory:
  ReasoningAttestationResult[] = [];

export function attestReasoning(
  context: ReasoningPolicyContext
): ReasoningAttestationResult {
  const validation = validateReasoningChain(context);

  const status: ReasoningAttestationStatus =
    validation.status === "broken"
      ? "not-attested"
      : validation.status === "conditional"
        ? "conditional"
        : "attested";

  const statement =
    (context.metadata?.statement as string | undefined)
    ?? "Reasoning validation chain attested.";

  const result: ReasoningAttestationResult = {
    id: `reasoning-attestation-${Date.now()}`,
    status,
    attested: status === "attested",
    validation,
    attestationId:
      `DCG-REASONING-ATTEST-${Date.now()}`,
    statement,
    reason: validation.reason,
    attestedAt: new Date().toISOString(),
  };

  reasoningAttestationHistory.push(result);

  return result;
}

export function listReasoningAttestationHistory():
  ReasoningAttestationResult[] {
  return [...reasoningAttestationHistory];
}

export function getLatestReasoningAttestation():
  ReasoningAttestationResult | undefined {
  return reasoningAttestationHistory[
    reasoningAttestationHistory.length - 1
  ];
}

export function clearReasoningAttestationHistory():
  void {
  reasoningAttestationHistory.length = 0;
}

export function countReasoningAttestationResults():
  number {
  return reasoningAttestationHistory.length;
}

export function isReasoningAttested():
  boolean {
  return (
    getLatestReasoningAttestation()
      ?.attested ?? true
  );
}
