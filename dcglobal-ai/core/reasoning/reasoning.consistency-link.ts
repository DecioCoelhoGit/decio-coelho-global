/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Consistency Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToIntegrity,
} from "./reasoning.integrity-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningConsistencyLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningConsistencyLinkResult {
  id: string;
  status: ReasoningConsistencyLinkStatus;
  linked: boolean;
  integrity: ReturnType<typeof linkReasoningToIntegrity>;
  consistencyLinkId: string;
  consistency: string;
  reason: string;
  linkedAt: string;
}

const reasoningConsistencyLinkHistory:
  ReasoningConsistencyLinkResult[] = [];

export function linkReasoningToConsistency(
  context: ReasoningPolicyContext
): ReasoningConsistencyLinkResult {
  const integrity = linkReasoningToIntegrity(context);

  const status: ReasoningConsistencyLinkStatus =
    integrity.status === "unlinked"
      ? "unlinked"
      : integrity.status === "conditional"
        ? "conditional"
        : "linked";

  const consistency =
    (context.metadata?.consistency as string | undefined)
    ?? "dcglobal-ai-cognitive-consistency";

  const result: ReasoningConsistencyLinkResult = {
    id: `reasoning-consistency-link-${Date.now()}`,
    status,
    linked: status === "linked",
    integrity,
    consistencyLinkId:
      `DCG-REASONING-CONSISTENCY-${Date.now()}`,
    consistency,
    reason: integrity.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningConsistencyLinkHistory.push(result);

  return result;
}

export function listReasoningConsistencyLinkHistory():
  ReasoningConsistencyLinkResult[] {
  return [...reasoningConsistencyLinkHistory];
}

export function getLatestReasoningConsistencyLink():
  ReasoningConsistencyLinkResult | undefined {
  return reasoningConsistencyLinkHistory[
    reasoningConsistencyLinkHistory.length - 1
  ];
}

export function clearReasoningConsistencyLinkHistory():
  void {
  reasoningConsistencyLinkHistory.length = 0;
}

export function countReasoningConsistencyLinkResults():
  number {
  return reasoningConsistencyLinkHistory.length;
}

export function isReasoningLinkedToConsistency():
  boolean {
  return (
    getLatestReasoningConsistencyLink()
      ?.linked ?? true
  );
}
