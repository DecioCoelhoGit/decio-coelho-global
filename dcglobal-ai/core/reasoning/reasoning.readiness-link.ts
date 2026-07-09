/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Readiness Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToCapacity,
} from "./reasoning.capacity-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningReadinessLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningReadinessLinkResult {
  id: string;
  status: ReasoningReadinessLinkStatus;
  linked: boolean;
  capacity: ReturnType<typeof linkReasoningToCapacity>;
  readinessLinkId: string;
  readiness: string;
  reason: string;
  linkedAt: string;
}

const reasoningReadinessLinkHistory:
  ReasoningReadinessLinkResult[] = [];

export function linkReasoningToReadiness(
  context: ReasoningPolicyContext
): ReasoningReadinessLinkResult {
  const capacity = linkReasoningToCapacity(context);

  const status: ReasoningReadinessLinkStatus =
    capacity.status === "unlinked"
      ? "unlinked"
      : capacity.status === "conditional"
        ? "conditional"
        : "linked";

  const readiness =
    (context.metadata?.readiness as string | undefined)
    ?? "dcglobal-ai-cognitive-readiness";

  const result: ReasoningReadinessLinkResult = {
    id: `reasoning-readiness-link-${Date.now()}`,
    status,
    linked: status === "linked",
    capacity,
    readinessLinkId:
      `DCG-REASONING-READINESS-${Date.now()}`,
    readiness,
    reason: capacity.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningReadinessLinkHistory.push(result);

  return result;
}

export function listReasoningReadinessLinkHistory():
  ReasoningReadinessLinkResult[] {
  return [...reasoningReadinessLinkHistory];
}

export function getLatestReasoningReadinessLink():
  ReasoningReadinessLinkResult | undefined {
  return reasoningReadinessLinkHistory[
    reasoningReadinessLinkHistory.length - 1
  ];
}

export function clearReasoningReadinessLinkHistory():
  void {
  reasoningReadinessLinkHistory.length = 0;
}

export function countReasoningReadinessLinkResults():
  number {
  return reasoningReadinessLinkHistory.length;
}

export function isReasoningLinkedToReadiness():
  boolean {
  return (
    getLatestReasoningReadinessLink()
      ?.linked ?? true
  );
}
