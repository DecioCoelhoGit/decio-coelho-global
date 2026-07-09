/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Action Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToPlan,
} from "./reasoning.plan-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningActionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningActionLinkResult {
  id: string;
  status: ReasoningActionLinkStatus;
  linked: boolean;
  plan: ReturnType<typeof linkReasoningToPlan>;
  actionLinkId: string;
  action: string;
  reason: string;
  linkedAt: string;
}

const reasoningActionLinkHistory:
  ReasoningActionLinkResult[] = [];

export function linkReasoningToAction(
  context: ReasoningPolicyContext
): ReasoningActionLinkResult {
  const plan = linkReasoningToPlan(context);

  const status: ReasoningActionLinkStatus =
    plan.status === "unlinked"
      ? "unlinked"
      : plan.status === "conditional"
        ? "conditional"
        : "linked";

  const action =
    (context.metadata?.action as string | undefined)
    ?? "dcglobal-ai-cognitive-action";

  const result: ReasoningActionLinkResult = {
    id: `reasoning-action-link-${Date.now()}`,
    status,
    linked: status === "linked",
    plan,
    actionLinkId:
      `DCG-REASONING-ACTION-${Date.now()}`,
    action,
    reason: plan.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningActionLinkHistory.push(result);

  return result;
}

export function listReasoningActionLinkHistory():
  ReasoningActionLinkResult[] {
  return [...reasoningActionLinkHistory];
}

export function getLatestReasoningActionLink():
  ReasoningActionLinkResult | undefined {
  return reasoningActionLinkHistory[
    reasoningActionLinkHistory.length - 1
  ];
}

export function clearReasoningActionLinkHistory():
  void {
  reasoningActionLinkHistory.length = 0;
}

export function countReasoningActionLinkResults():
  number {
  return reasoningActionLinkHistory.length;
}

export function isReasoningLinkedToAction():
  boolean {
  return (
    getLatestReasoningActionLink()
      ?.linked ?? true
  );
}
