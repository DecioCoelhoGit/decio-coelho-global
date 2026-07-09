/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Coherence Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToConsistency,
} from "./reasoning.consistency-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCoherenceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningCoherenceLinkResult {
  id: string;
  status: ReasoningCoherenceLinkStatus;
  linked: boolean;
  consistency: ReturnType<typeof linkReasoningToConsistency>;
  coherenceLinkId: string;
  coherence: string;
  reason: string;
  linkedAt: string;
}

const reasoningCoherenceLinkHistory:
  ReasoningCoherenceLinkResult[] = [];

export function linkReasoningToCoherence(
  context: ReasoningPolicyContext
): ReasoningCoherenceLinkResult {
  const consistency = linkReasoningToConsistency(context);

  const status: ReasoningCoherenceLinkStatus =
    consistency.status === "unlinked"
      ? "unlinked"
      : consistency.status === "conditional"
        ? "conditional"
        : "linked";

  const coherence =
    (context.metadata?.coherence as string | undefined)
    ?? "dcglobal-ai-cognitive-coherence";

  const result: ReasoningCoherenceLinkResult = {
    id: `reasoning-coherence-link-${Date.now()}`,
    status,
    linked: status === "linked",
    consistency,
    coherenceLinkId:
      `DCG-REASONING-COHERENCE-${Date.now()}`,
    coherence,
    reason: consistency.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningCoherenceLinkHistory.push(result);

  return result;
}

export function listReasoningCoherenceLinkHistory():
  ReasoningCoherenceLinkResult[] {
  return [...reasoningCoherenceLinkHistory];
}

export function getLatestReasoningCoherenceLink():
  ReasoningCoherenceLinkResult | undefined {
  return reasoningCoherenceLinkHistory[
    reasoningCoherenceLinkHistory.length - 1
  ];
}

export function clearReasoningCoherenceLinkHistory():
  void {
  reasoningCoherenceLinkHistory.length = 0;
}

export function countReasoningCoherenceLinkResults():
  number {
  return reasoningCoherenceLinkHistory.length;
}

export function isReasoningLinkedToCoherence():
  boolean {
  return (
    getLatestReasoningCoherenceLink()
      ?.linked ?? true
  );
}
