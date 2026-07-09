/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Performance Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToProgress,
} from "./reasoning.progress-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPerformanceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningPerformanceLinkResult {
  id: string;
  status: ReasoningPerformanceLinkStatus;
  linked: boolean;
  progress: ReturnType<typeof linkReasoningToProgress>;
  performanceLinkId: string;
  performance: string;
  reason: string;
  linkedAt: string;
}

const reasoningPerformanceLinkHistory:
  ReasoningPerformanceLinkResult[] = [];

export function linkReasoningToPerformance(
  context: ReasoningPolicyContext
): ReasoningPerformanceLinkResult {
  const progress = linkReasoningToProgress(context);

  const status: ReasoningPerformanceLinkStatus =
    progress.status === "unlinked"
      ? "unlinked"
      : progress.status === "conditional"
        ? "conditional"
        : "linked";

  const performance =
    (context.metadata?.performance as string | undefined)
    ?? "dcglobal-ai-cognitive-performance";

  const result: ReasoningPerformanceLinkResult = {
    id: `reasoning-performance-link-${Date.now()}`,
    status,
    linked: status === "linked",
    progress,
    performanceLinkId:
      `DCG-REASONING-PERFORMANCE-${Date.now()}`,
    performance,
    reason: progress.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningPerformanceLinkHistory.push(result);

  return result;
}

export function listReasoningPerformanceLinkHistory():
  ReasoningPerformanceLinkResult[] {
  return [...reasoningPerformanceLinkHistory];
}

export function getLatestReasoningPerformanceLink():
  ReasoningPerformanceLinkResult | undefined {
  return reasoningPerformanceLinkHistory[
    reasoningPerformanceLinkHistory.length - 1
  ];
}

export function clearReasoningPerformanceLinkHistory():
  void {
  reasoningPerformanceLinkHistory.length = 0;
}

export function countReasoningPerformanceLinkResults():
  number {
  return reasoningPerformanceLinkHistory.length;
}

export function isReasoningLinkedToPerformance():
  boolean {
  return (
    getLatestReasoningPerformanceLink()
      ?.linked ?? true
  );
}
