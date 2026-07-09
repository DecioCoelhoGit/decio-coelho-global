/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Refinement Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToFeedback,
} from "./reasoning.feedback-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningRefinementLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningRefinementLinkResult {
  id: string;
  status: ReasoningRefinementLinkStatus;
  linked: boolean;
  feedback: ReturnType<typeof linkReasoningToFeedback>;
  refinementLinkId: string;
  refinement: string;
  reason: string;
  linkedAt: string;
}

const reasoningRefinementLinkHistory:
  ReasoningRefinementLinkResult[] = [];

export function linkReasoningToRefinement(
  context: ReasoningPolicyContext
): ReasoningRefinementLinkResult {
  const feedback = linkReasoningToFeedback(context);

  const status: ReasoningRefinementLinkStatus =
    feedback.status === "unlinked"
      ? "unlinked"
      : feedback.status === "conditional"
        ? "conditional"
        : "linked";

  const refinement =
    (context.metadata?.refinement as string | undefined)
    ?? "dcglobal-ai-cognitive-refinement";

  const result: ReasoningRefinementLinkResult = {
    id: `reasoning-refinement-link-${Date.now()}`,
    status,
    linked: status === "linked",
    feedback,
    refinementLinkId:
      `DCG-REASONING-REFINEMENT-${Date.now()}`,
    refinement,
    reason: feedback.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningRefinementLinkHistory.push(result);

  return result;
}

export function listReasoningRefinementLinkHistory():
  ReasoningRefinementLinkResult[] {
  return [...reasoningRefinementLinkHistory];
}

export function getLatestReasoningRefinementLink():
  ReasoningRefinementLinkResult | undefined {
  return reasoningRefinementLinkHistory[
    reasoningRefinementLinkHistory.length - 1
  ];
}

export function clearReasoningRefinementLinkHistory():
  void {
  reasoningRefinementLinkHistory.length = 0;
}

export function countReasoningRefinementLinkResults():
  number {
  return reasoningRefinementLinkHistory.length;
}

export function isReasoningLinkedToRefinement():
  boolean {
  return (
    getLatestReasoningRefinementLink()
      ?.linked ?? true
  );
}
