/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Notarization oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  attestReasoning,
} from "./reasoning.attestation";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningNotarizationStatus =
  | "notarized"
  | "conditional"
  | "not-notarized";

export interface ReasoningNotarizationResult {
  id: string;
  status: ReasoningNotarizationStatus;
  notarized: boolean;
  attestation: ReturnType<typeof attestReasoning>;
  notarizationId: string;
  seal: string;
  reason: string;
  notarizedAt: string;
}

const reasoningNotarizationHistory:
  ReasoningNotarizationResult[] = [];

export function notarizeReasoning(
  context: ReasoningPolicyContext
): ReasoningNotarizationResult {
  const attestation = attestReasoning(context);

  const status: ReasoningNotarizationStatus =
    attestation.status === "not-attested"
      ? "not-notarized"
      : attestation.status === "conditional"
        ? "conditional"
        : "notarized";

  const seal =
    (context.metadata?.seal as string | undefined)
    ?? "DCGLOBAL-AI-COGNITIVE-REASONING-SEAL";

  const result: ReasoningNotarizationResult = {
    id: `reasoning-notarization-${Date.now()}`,
    status,
    notarized: status === "notarized",
    attestation,
    notarizationId:
      `DCG-REASONING-NOTARY-${Date.now()}`,
    seal,
    reason: attestation.reason,
    notarizedAt: new Date().toISOString(),
  };

  reasoningNotarizationHistory.push(result);

  return result;
}

export function listReasoningNotarizationHistory():
  ReasoningNotarizationResult[] {
  return [...reasoningNotarizationHistory];
}

export function getLatestReasoningNotarization():
  ReasoningNotarizationResult | undefined {
  return reasoningNotarizationHistory[
    reasoningNotarizationHistory.length - 1
  ];
}

export function clearReasoningNotarizationHistory():
  void {
  reasoningNotarizationHistory.length = 0;
}

export function countReasoningNotarizationResults():
  number {
  return reasoningNotarizationHistory.length;
}

export function isReasoningNotarized():
  boolean {
  return (
    getLatestReasoningNotarization()
      ?.notarized ?? true
  );
}
