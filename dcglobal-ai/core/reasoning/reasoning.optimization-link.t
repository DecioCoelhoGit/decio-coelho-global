/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Optimization Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToMaturity,
} from "./reasoning.maturity-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningOptimizationLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningOptimizationLinkResult {
  id: string;
  status: ReasoningOptimizationLinkStatus;
  linked: boolean;
  maturity: ReturnType<typeof linkReasoningToMaturity>;
  optimizationLinkId: string;
  optimization: string;
  reason: string;
  linkedAt: string;
}

const reasoningOptimizationLinkHistory:
  ReasoningOptimizationLinkResult[] = [];

export function linkReasoningToOptimization(
  context: ReasoningPolicyContext
): ReasoningOptimizationLinkResult {
  const maturity = linkReasoningToMaturity(context);

  const status: ReasoningOptimizationLinkStatus =
    maturity.status === "unlinked"
      ? "unlinked"
      : maturity.status === "conditional"
        ? "conditional"
        : "linked";

  const optimization =
    (context.metadata?.optimization as string | undefined)
    ?? "dcglobal-ai-cognitive-optimization";

  const result: ReasoningOptimizationLinkResult = {
    id: `reasoning-optimization-link-${Date.now()}`,
    status,
    linked: status === "linked",
    maturity,
    optimizationLinkId:
      `DCG-REASONING-OPTIMIZATION-${Date.now()}`,
    optimization,
    reason: maturity.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningOptimizationLinkHistory.push(result);

  return result;
}

export function listReasoningOptimizationLinkHistory():
  ReasoningOptimizationLinkResult[] {
  return [...reasoningOptimizationLinkHistory];
}

export function getLatestReasoningOptimizationLink():
  ReasoningOptimizationLinkResult | undefined {
  return reasoningOptimizationLinkHistory[
    reasoningOptimizationLinkHistory.length - 1
  ];
}

export function clearReasoningOptimizationLinkHistory():
  void {
  reasoningOptimizationLinkHistory.length = 0;
}

export function countReasoningOptimizationLinkResults():
  number {
  return reasoningOptimizationLinkHistory.length;
}

export function isReasoningLinkedToOptimization():
  boolean {
  return (
    getLatestReasoningOptimizationLink()
      ?.linked ?? true
  );
}
