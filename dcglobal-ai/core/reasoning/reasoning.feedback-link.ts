/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Feedback Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToLearning,
} from "./reasoning.learning-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningFeedbackLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningFeedbackLinkResult {
  id: string;
  status: ReasoningFeedbackLinkStatus;
  linked: boolean;
  learning: ReturnType<typeof linkReasoningToLearning>;
  feedbackLinkId: string;
  feedback: string;
  reason: string;
  linkedAt: string;
}

const reasoningFeedbackLinkHistory:
  ReasoningFeedbackLinkResult[] = [];

export function linkReasoningToFeedback(
  context: ReasoningPolicyContext
): ReasoningFeedbackLinkResult {
  const learning = linkReasoningToLearning(context);

  const status: ReasoningFeedbackLinkStatus =
    learning.status === "unlinked"
      ? "unlinked"
      : learning.status === "conditional"
        ? "conditional"
        : "linked";

  const feedback =
    (context.metadata?.feedback as string | undefined)
    ?? "dcglobal-ai-cognitive-feedback";

  const result: ReasoningFeedbackLinkResult = {
    id: `reasoning-feedback-link-${Date.now()}`,
    status,
    linked: status === "linked",
    learning,
    feedbackLinkId:
      `DCG-REASONING-FEEDBACK-${Date.now()}`,
    feedback,
    reason: learning.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningFeedbackLinkHistory.push(result);

  return result;
}

export function listReasoningFeedbackLinkHistory():
  ReasoningFeedbackLinkResult[] {
  return [...reasoningFeedbackLinkHistory];
}

export function getLatestReasoningFeedbackLink():
  ReasoningFeedbackLinkResult | undefined {
  return reasoningFeedbackLinkHistory[
    reasoningFeedbackLinkHistory.length - 1
  ];
}

export function clearReasoningFeedbackLinkHistory():
  void {
  reasoningFeedbackLinkHistory.length = 0;
}

export function countReasoningFeedbackLinkResults():
  number {
  return reasoningFeedbackLinkHistory.length;
}

export function isReasoningLinkedToFeedback():
  boolean {
  return (
    getLatestReasoningFeedbackLink()
      ?.linked ?? true
  );
}
