/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Finalization Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToConfirmation,
} from "./reasoning.confirmation-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningFinalizationLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningFinalizationLinkResult {
  id: string;
  status: ReasoningFinalizationLinkStatus;
  linked: boolean;
  confirmation: ReturnType<typeof linkReasoningToConfirmation>;
  finalizationLinkId: string;
  finalization: string;
  reason: string;
  linkedAt: string;
}

const reasoningFinalizationLinkHistory:
  ReasoningFinalizationLinkResult[] = [];

export function linkReasoningToFinalization(
  context: ReasoningPolicyContext
): ReasoningFinalizationLinkResult {
  const confirmation =
    linkReasoningToConfirmation(context);

  const status: ReasoningFinalizationLinkStatus =
    confirmation.status === "unlinked"
      ? "unlinked"
      : confirmation.status === "conditional"
        ? "conditional"
        : "linked";

  const finalization =
    (context.metadata?.finalization as string | undefined)
    ?? "dcglobal-ai-cognitive-finalization";

  const result: ReasoningFinalizationLinkResult = {
    id: `reasoning-finalization-link-${Date.now()}`,
    status,
    linked: status === "linked",
    confirmation,
    finalizationLinkId:
      `DCG-REASONING-FINALIZATION-${Date.now()}`,
    finalization,
    reason: confirmation.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningFinalizationLinkHistory.push(result);

  return result;
}

export function listReasoningFinalizationLinkHistory():
  ReasoningFinalizationLinkResult[] {
  return [...reasoningFinalizationLinkHistory];
}

export function getLatestReasoningFinalizationLink():
  ReasoningFinalizationLinkResult | undefined {
  return reasoningFinalizationLinkHistory[
    reasoningFinalizationLinkHistory.length - 1
  ];
}

export function clearReasoningFinalizationLinkHistory():
  void {
  reasoningFinalizationLinkHistory.length = 0;
}

export function countReasoningFinalizationLinkResults():
  number {
  return reasoningFinalizationLinkHistory.length;
}

export function isReasoningLinkedToFinalization():
  boolean {
  return (
    getLatestReasoningFinalizationLink()
      ?.linked ?? true
  );
}
