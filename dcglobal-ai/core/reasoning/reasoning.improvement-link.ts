/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Improvement Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToRefinement,
} from "./reasoning.refinement-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningImprovementLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningImprovementLinkResult {
  id: string;
  status: ReasoningImprovementLinkStatus;
  linked: boolean;
  refinement: ReturnType<typeof linkReasoningToRefinement>;
  improvementLinkId: string;
  improvement: string;
  reason: string;
  linkedAt: string;
}

const reasoningImprovementLinkHistory:
  ReasoningImprovementLinkResult[] = [];

export function linkReasoningToImprovement(
  context: ReasoningPolicyContext
): ReasoningImprovementLinkResult {
  const refinement = linkReasoningToRefinement(context);

  const status: ReasoningImprovementLinkStatus =
    refinement.status === "unlinked"
      ? "unlinked"
      : refinement.status === "conditional"
        ? "conditional"
        : "linked";

  const improvement =
    (context.metadata?.improvement as string | undefined)
    ?? "dcglobal-ai-cognitive-improvement";

  const result: ReasoningImprovementLinkResult = {
    id: `reasoning-improvement-link-${Date.now()}`,
    status,
    linked: status === "linked",
    refinement,
    improvementLinkId:
      `DCG-REASONING-IMPROVEMENT-${Date.now()}`,
    improvement,
    reason: refinement.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningImprovementLinkHistory.push(result);

  return result;
}

export function listReasoningImprovementLinkHistory():
  ReasoningImprovementLinkResult[] {
  return [...reasoningImprovementLinkHistory];
}

export function getLatestReasoningImprovementLink():
  ReasoningImprovementLinkResult | undefined {
  return reasoningImprovementLinkHistory[
    reasoningImprovementLinkHistory.length - 1
  ];
}

export function clearReasoningImprovementLinkHistory():
  void {
  reasoningImprovementLinkHistory.length = 0;
}

export function countReasoningImprovementLinkResults():
  number {
  return reasoningImprovementLinkHistory.length;
}

export function isReasoningLinkedToImprovement():
  boolean {
  return (
    getLatestReasoningImprovementLink()
      ?.linked ?? true
  );
}
