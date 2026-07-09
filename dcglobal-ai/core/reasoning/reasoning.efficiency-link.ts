/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Efficiency Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToPerformance,
} from "./reasoning.performance-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningEfficiencyLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningEfficiencyLinkResult {
  id: string;
  status: ReasoningEfficiencyLinkStatus;
  linked: boolean;
  performance: ReturnType<typeof linkReasoningToPerformance>;
  efficiencyLinkId: string;
  efficiency: string;
  reason: string;
  linkedAt: string;
}

const reasoningEfficiencyLinkHistory:
  ReasoningEfficiencyLinkResult[] = [];

export function linkReasoningToEfficiency(
  context: ReasoningPolicyContext
): ReasoningEfficiencyLinkResult {
  const performance = linkReasoningToPerformance(context);

  const status: ReasoningEfficiencyLinkStatus =
    performance.status === "unlinked"
      ? "unlinked"
      : performance.status === "conditional"
        ? "conditional"
        : "linked";

  const efficiency =
    (context.metadata?.efficiency as string | undefined)
    ?? "dcglobal-ai-cognitive-efficiency";

  const result: ReasoningEfficiencyLinkResult = {
    id: `reasoning-efficiency-link-${Date.now()}`,
    status,
    linked: status === "linked",
    performance,
    efficiencyLinkId:
      `DCG-REASONING-EFFICIENCY-${Date.now()}`,
    efficiency,
    reason: performance.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningEfficiencyLinkHistory.push(result);

  return result;
}

export function listReasoningEfficiencyLinkHistory():
  ReasoningEfficiencyLinkResult[] {
  return [...reasoningEfficiencyLinkHistory];
}

export function getLatestReasoningEfficiencyLink():
  ReasoningEfficiencyLinkResult | undefined {
  return reasoningEfficiencyLinkHistory[
    reasoningEfficiencyLinkHistory.length - 1
  ];
}

export function clearReasoningEfficiencyLinkHistory():
  void {
  reasoningEfficiencyLinkHistory.length = 0;
}

export function countReasoningEfficiencyLinkResults():
  number {
  return reasoningEfficiencyLinkHistory.length;
}

export function isReasoningLinkedToEfficiency():
  boolean {
  return (
    getLatestReasoningEfficiencyLink()
      ?.linked ?? true
  );
}
