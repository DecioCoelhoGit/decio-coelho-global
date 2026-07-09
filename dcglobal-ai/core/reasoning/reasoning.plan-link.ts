/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Plan Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToStrategy,
} from "./reasoning.strategy-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPlanLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningPlanLinkResult {
  id: string;
  status: ReasoningPlanLinkStatus;
  linked: boolean;
  strategy: ReturnType<typeof linkReasoningToStrategy>;
  planLinkId: string;
  plan: string;
  reason: string;
  linkedAt: string;
}

const reasoningPlanLinkHistory:
  ReasoningPlanLinkResult[] = [];

export function linkReasoningToPlan(
  context: ReasoningPolicyContext
): ReasoningPlanLinkResult {
  const strategy = linkReasoningToStrategy(context);

  const status: ReasoningPlanLinkStatus =
    strategy.status === "unlinked"
      ? "unlinked"
      : strategy.status === "conditional"
        ? "conditional"
        : "linked";

  const plan =
    (context.metadata?.plan as string | undefined)
    ?? "dcglobal-ai-cognitive-plan";

  const result: ReasoningPlanLinkResult = {
    id: `reasoning-plan-link-${Date.now()}`,
    status,
    linked: status === "linked",
    strategy,
    planLinkId:
      `DCG-REASONING-PLAN-${Date.now()}`,
    plan,
    reason: strategy.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningPlanLinkHistory.push(result);

  return result;
}

export function listReasoningPlanLinkHistory():
  ReasoningPlanLinkResult[] {
  return [...reasoningPlanLinkHistory];
}

export function getLatestReasoningPlanLink():
  ReasoningPlanLinkResult | undefined {
  return reasoningPlanLinkHistory[
    reasoningPlanLinkHistory.length - 1
  ];
}

export function clearReasoningPlanLinkHistory():
  void {
  reasoningPlanLinkHistory.length = 0;
}

export function countReasoningPlanLinkResults():
  number {
  return reasoningPlanLinkHistory.length;
}

export function isReasoningLinkedToPlan():
  boolean {
  return (
    getLatestReasoningPlanLink()
      ?.linked ?? true
  );
}
