/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Adaptation Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToEvolution,
} from "./reasoning.evolution-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAdaptationLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningAdaptationLinkResult {
  id: string;
  status: ReasoningAdaptationLinkStatus;
  linked: boolean;
  evolution: ReturnType<typeof linkReasoningToEvolution>;
  adaptationLinkId: string;
  adaptation: string;
  reason: string;
  linkedAt: string;
}

const reasoningAdaptationLinkHistory:
  ReasoningAdaptationLinkResult[] = [];

export function linkReasoningToAdaptation(
  context: ReasoningPolicyContext
): ReasoningAdaptationLinkResult {
  const evolution = linkReasoningToEvolution(context);

  const status: ReasoningAdaptationLinkStatus =
    evolution.status === "unlinked"
      ? "unlinked"
      : evolution.status === "conditional"
        ? "conditional"
        : "linked";

  const adaptation =
    (context.metadata?.adaptation as string | undefined)
    ?? "dcglobal-ai-cognitive-adaptation";

  const result: ReasoningAdaptationLinkResult = {
    id: `reasoning-adaptation-link-${Date.now()}`,
    status,
    linked: status === "linked",
    evolution,
    adaptationLinkId:
      `DCG-REASONING-ADAPTATION-${Date.now()}`,
    adaptation,
    reason: evolution.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningAdaptationLinkHistory.push(result);

  return result;
}

export function listReasoningAdaptationLinkHistory():
  ReasoningAdaptationLinkResult[] {
  return [...reasoningAdaptationLinkHistory];
}

export function getLatestReasoningAdaptationLink():
  ReasoningAdaptationLinkResult | undefined {
  return reasoningAdaptationLinkHistory[
    reasoningAdaptationLinkHistory.length - 1
  ];
}

export function clearReasoningAdaptationLinkHistory():
  void {
  reasoningAdaptationLinkHistory.length = 0;
}

export function countReasoningAdaptationLinkResults():
  number {
  return reasoningAdaptationLinkHistory.length;
}

export function isReasoningLinkedToAdaptation():
  boolean {
  return (
    getLatestReasoningAdaptationLink()
      ?.linked ?? true
  );
}
