/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Learning Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToAdaptation,
} from "./reasoning.adaptation-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningLearningLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningLearningLinkResult {
  id: string;
  status: ReasoningLearningLinkStatus;
  linked: boolean;
  adaptation: ReturnType<typeof linkReasoningToAdaptation>;
  learningLinkId: string;
  learning: string;
  reason: string;
  linkedAt: string;
}

const reasoningLearningLinkHistory:
  ReasoningLearningLinkResult[] = [];

export function linkReasoningToLearning(
  context: ReasoningPolicyContext
): ReasoningLearningLinkResult {
  const adaptation = linkReasoningToAdaptation(context);

  const status: ReasoningLearningLinkStatus =
    adaptation.status === "unlinked"
      ? "unlinked"
      : adaptation.status === "conditional"
        ? "conditional"
        : "linked";

  const learning =
    (context.metadata?.learning as string | undefined)
    ?? "dcglobal-ai-cognitive-learning";

  const result: ReasoningLearningLinkResult = {
    id: `reasoning-learning-link-${Date.now()}`,
    status,
    linked: status === "linked",
    adaptation,
    learningLinkId:
      `DCG-REASONING-LEARNING-${Date.now()}`,
    learning,
    reason: adaptation.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningLearningLinkHistory.push(result);

  return result;
}

export function listReasoningLearningLinkHistory():
  ReasoningLearningLinkResult[] {
  return [...reasoningLearningLinkHistory];
}

export function getLatestReasoningLearningLink():
  ReasoningLearningLinkResult | undefined {
  return reasoningLearningLinkHistory[
    reasoningLearningLinkHistory.length - 1
  ];
}

export function clearReasoningLearningLinkHistory():
  void {
  reasoningLearningLinkHistory.length = 0;
}

export function countReasoningLearningLinkResults():
  number {
  return reasoningLearningLinkHistory.length;
}

export function isReasoningLinkedToLearning():
  boolean {
  return (
    getLatestReasoningLearningLink()
      ?.linked ?? true
  );
}
