/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Purpose Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToUtility,
} from "./reasoning.utility-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPurposeLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningPurposeLinkResult {
  id: string;
  status: ReasoningPurposeLinkStatus;
  linked: boolean;
  utility: ReturnType<typeof linkReasoningToUtility>;
  purposeLinkId: string;
  purpose: string;
  reason: string;
  linkedAt: string;
}

const reasoningPurposeLinkHistory:
  ReasoningPurposeLinkResult[] = [];

export function linkReasoningToPurpose(
  context: ReasoningPolicyContext
): ReasoningPurposeLinkResult {
  const utility = linkReasoningToUtility(context);

  const status: ReasoningPurposeLinkStatus =
    utility.status === "unlinked"
      ? "unlinked"
      : utility.status === "conditional"
        ? "conditional"
        : "linked";

  const purpose =
    (context.metadata?.purpose as string | undefined)
    ?? "dcglobal-ai-cognitive-purpose";

  const result: ReasoningPurposeLinkResult = {
    id: `reasoning-purpose-link-${Date.now()}`,
    status,
    linked: status === "linked",
    utility,
    purposeLinkId:
      `DCG-REASONING-PURPOSE-${Date.now()}`,
    purpose,
    reason: utility.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningPurposeLinkHistory.push(result);

  return result;
}

export function listReasoningPurposeLinkHistory():
  ReasoningPurposeLinkResult[] {
  return [...reasoningPurposeLinkHistory];
}

export function getLatestReasoningPurposeLink():
  ReasoningPurposeLinkResult | undefined {
  return reasoningPurposeLinkHistory[
    reasoningPurposeLinkHistory.length - 1
  ];
}

export function clearReasoningPurposeLinkHistory():
  void {
  reasoningPurposeLinkHistory.length = 0;
}

export function countReasoningPurposeLinkResults():
  number {
  return reasoningPurposeLinkHistory.length;
}

export function isReasoningLinkedToPurpose():
  boolean {
  return (
    getLatestReasoningPurposeLink()
      ?.linked ?? true
  );
    }
