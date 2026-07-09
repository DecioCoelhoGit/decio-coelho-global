/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Utility Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToBenefit,
} from "./reasoning.benefit-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningUtilityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningUtilityLinkResult {
  id: string;
  status: ReasoningUtilityLinkStatus;
  linked: boolean;
  benefit: ReturnType<typeof linkReasoningToBenefit>;
  utilityLinkId: string;
  utility: string;
  reason: string;
  linkedAt: string;
}

const reasoningUtilityLinkHistory:
  ReasoningUtilityLinkResult[] = [];

export function linkReasoningToUtility(
  context: ReasoningPolicyContext
): ReasoningUtilityLinkResult {
  const benefit = linkReasoningToBenefit(context);

  const status: ReasoningUtilityLinkStatus =
    benefit.status === "unlinked"
      ? "unlinked"
      : benefit.status === "conditional"
        ? "conditional"
        : "linked";

  const utility =
    (context.metadata?.utility as string | undefined)
    ?? "dcglobal-ai-cognitive-utility";

  const result: ReasoningUtilityLinkResult = {
    id: `reasoning-utility-link-${Date.now()}`,
    status,
    linked: status === "linked",
    benefit,
    utilityLinkId:
      `DCG-REASONING-UTILITY-${Date.now()}`,
    utility,
    reason: benefit.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningUtilityLinkHistory.push(result);

  return result;
}

export function listReasoningUtilityLinkHistory():
  ReasoningUtilityLinkResult[] {
  return [...reasoningUtilityLinkHistory];
}

export function getLatestReasoningUtilityLink():
  ReasoningUtilityLinkResult | undefined {
  return reasoningUtilityLinkHistory[
    reasoningUtilityLinkHistory.length - 1
  ];
}

export function clearReasoningUtilityLinkHistory():
  void {
  reasoningUtilityLinkHistory.length = 0;
}

export function countReasoningUtilityLinkResults():
  number {
  return reasoningUtilityLinkHistory.length;
}

export function isReasoningLinkedToUtility():
  boolean {
  return (
    getLatestReasoningUtilityLink()
      ?.linked ?? true
  );
}
