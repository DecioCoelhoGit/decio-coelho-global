/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Seal oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  notarizeReasoning,
} from "./reasoning.notarization";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningSealStatus =
  | "sealed"
  | "conditional"
  | "unsealed";

export interface ReasoningSealResult {
  id: string;
  status: ReasoningSealStatus;
  sealed: boolean;
  notarization: ReturnType<
    typeof notarizeReasoning
  >;
  sealId: string;
  seal: string;
  reason: string;
  sealedAt: string;
}

const reasoningSealHistory:
  ReasoningSealResult[] = [];

export function sealReasoning(
  context: ReasoningPolicyContext
): ReasoningSealResult {
  const notarization = notarizeReasoning(context);

  const status: ReasoningSealStatus =
    notarization.status === "not-notarized"
      ? "unsealed"
      : notarization.status === "conditional"
        ? "conditional"
        : "sealed";

  const seal =
    notarization.seal
    ?? "DCGLOBAL-AI-REASONING-SEAL";

  const result: ReasoningSealResult = {
    id: `reasoning-seal-${Date.now()}`,
    status,
    sealed: status === "sealed",
    notarization,
    sealId: `DCG-REASONING-SEAL-${Date.now()}`,
    seal,
    reason: notarization.reason,
    sealedAt: new Date().toISOString(),
  };

  reasoningSealHistory.push(result);

  return result;
}

export function listReasoningSealHistory():
  ReasoningSealResult[] {
  return [...reasoningSealHistory];
}

export function getLatestReasoningSeal():
  ReasoningSealResult | undefined {
  return reasoningSealHistory[
    reasoningSealHistory.length - 1
  ];
}

export function clearReasoningSealHistory():
  void {
  reasoningSealHistory.length = 0;
}

export function countReasoningSealResults():
  number {
  return reasoningSealHistory.length;
}

export function isReasoningSealed():
  boolean {
  return (
    getLatestReasoningSeal()
      ?.sealed ?? true
  );
}
