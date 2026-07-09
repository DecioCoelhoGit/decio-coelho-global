/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Progress Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToImprovement,
} from "./reasoning.improvement-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningProgressLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningProgressLinkResult {
  id: string;
  status: ReasoningProgressLinkStatus;
  linked: boolean;
  improvement: ReturnType<typeof linkReasoningToImprovement>;
  progressLinkId: string;
  progress: string;
  reason: string;
  linkedAt: string;
}

const reasoningProgressLinkHistory:
  ReasoningProgressLinkResult[] = [];

export function linkReasoningToProgress(
  context: ReasoningPolicyContext
): ReasoningProgressLinkResult {
  const improvement = linkReasoningToImprovement(context);

  const status: ReasoningProgressLinkStatus =
    improvement.status === "unlinked"
      ? "unlinked"
      : improvement.status === "conditional"
        ? "conditional"
        : "linked";

  const progress =
    (context.metadata?.progress as string | undefined)
    ?? "dcglobal-ai-cognitive-progress";

  const result: ReasoningProgressLinkResult = {
    id: `reasoning-progress-link-${Date.now()}`,
    status,
    linked: status === "linked",
    improvement,
    progressLinkId:
      `DCG-REASONING-PROGRESS-${Date.now()}`,
    progress,
    reason: improvement.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningProgressLinkHistory.push(result);

  return result;
}

export function listReasoningProgressLinkHistory():
  ReasoningProgressLinkResult[] {
  return [...reasoningProgressLinkHistory];
}

export function getLatestReasoningProgressLink():
  ReasoningProgressLinkResult | undefined {
  return reasoningProgressLinkHistory[
    reasoningProgressLinkHistory.length - 1
  ];
}

export function clearReasoningProgressLinkHistory():
  void {
  reasoningProgressLinkHistory.length = 0;
}

export function countReasoningProgressLinkResults():
  number {
  return reasoningProgressLinkHistory.length;
}

export function isReasoningLinkedToProgress():
  boolean {
  return (
    getLatestReasoningProgressLink()
      ?.linked ?? true
  );
}
