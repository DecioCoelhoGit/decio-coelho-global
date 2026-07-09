/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Value Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToImpact,
} from "./reasoning.impact-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningValueLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningValueLinkResult {
  id: string;
  status: ReasoningValueLinkStatus;
  linked: boolean;
  impact: ReturnType<typeof linkReasoningToImpact>;
  valueLinkId: string;
  value: string;
  reason: string;
  linkedAt: string;
}

const reasoningValueLinkHistory:
  ReasoningValueLinkResult[] = [];

export function linkReasoningToValue(
  context: ReasoningPolicyContext
): ReasoningValueLinkResult {
  const impact = linkReasoningToImpact(context);

  const status: ReasoningValueLinkStatus =
    impact.status === "unlinked"
      ? "unlinked"
      : impact.status === "conditional"
        ? "conditional"
        : "linked";

  const value =
    (context.metadata?.value as string | undefined)
    ?? "dcglobal-ai-cognitive-value";

  const result: ReasoningValueLinkResult = {
    id: `reasoning-value-link-${Date.now()}`,
    status,
    linked: status === "linked",
    impact,
    valueLinkId:
      `DCG-REASONING-VALUE-${Date.now()}`,
    value,
    reason: impact.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningValueLinkHistory.push(result);

  return result;
}

export function listReasoningValueLinkHistory():
  ReasoningValueLinkResult[] {
  return [...reasoningValueLinkHistory];
}

export function getLatestReasoningValueLink():
  ReasoningValueLinkResult | undefined {
  return reasoningValueLinkHistory[
    reasoningValueLinkHistory.length - 1
  ];
}

export function clearReasoningValueLinkHistory():
  void {
  reasoningValueLinkHistory.length = 0;
}

export function countReasoningValueLinkResults():
  number {
  return reasoningValueLinkHistory.length;
}

export function isReasoningLinkedToValue():
  boolean {
  return (
    getLatestReasoningValueLink()
      ?.linked ?? true
  );
}
