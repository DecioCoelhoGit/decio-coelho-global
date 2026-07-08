/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Principal oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  identifyReasoning,
} from "./reasoning.identity";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPrincipalStatus =
  | "recognized"
  | "conditional"
  | "anonymous";

export interface ReasoningPrincipalResult {
  id: string;
  status: ReasoningPrincipalStatus;
  recognized: boolean;
  identity: ReturnType<typeof identifyReasoning>;
  principalId: string;
  actor?: string;
  source?: string;
  reason: string;
  recognizedAt: string;
}

const reasoningPrincipalHistory:
  ReasoningPrincipalResult[] = [];

export function recognizeReasoningPrincipal(
  context: ReasoningPolicyContext
): ReasoningPrincipalResult {
  const identity = identifyReasoning(context);

  const status: ReasoningPrincipalStatus =
    identity.status === "unknown"
      ? "anonymous"
      : identity.status === "conditional"
        ? "conditional"
        : "recognized";

  const result: ReasoningPrincipalResult = {
    id: `reasoning-principal-${Date.now()}`,
    status,
    recognized: status === "recognized",
    identity,
    principalId: `DCG-REASONING-PRINCIPAL-${Date.now()}`,
    actor: identity.actor,
    source: identity.source,
    reason: identity.reason,
    recognizedAt: new Date().toISOString(),
  };

  reasoningPrincipalHistory.push(result);

  return result;
}

export function listReasoningPrincipalHistory():
  ReasoningPrincipalResult[] {
  return [...reasoningPrincipalHistory];
}

export function getLatestReasoningPrincipal():
  ReasoningPrincipalResult | undefined {
  return reasoningPrincipalHistory[
    reasoningPrincipalHistory.length - 1
  ];
}

export function clearReasoningPrincipalHistory():
  void {
  reasoningPrincipalHistory.length = 0;
}

export function countReasoningPrincipalResults():
  number {
  return reasoningPrincipalHistory.length;
}

export function isReasoningPrincipalRecognized():
  boolean {
  return (
    getLatestReasoningPrincipal()
      ?.recognized ?? true
  );
}
