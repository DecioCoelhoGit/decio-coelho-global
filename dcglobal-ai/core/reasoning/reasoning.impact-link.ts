/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Impact Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToOutcome,
} from "./reasoning.outcome-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningImpactLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningImpactLinkResult {
  id: string;
  status: ReasoningImpactLinkStatus;
  linked: boolean;
  outcome: ReturnType<typeof linkReasoningToOutcome>;
  impactLinkId: string;
  impact: string;
  reason: string;
  linkedAt: string;
}

const reasoningImpactLinkHistory:
  ReasoningImpactLinkResult[] = [];

export function linkReasoningToImpact(
  context: ReasoningPolicyContext
): ReasoningImpactLinkResult {
  const outcome = linkReasoningToOutcome(context);

  const status: ReasoningImpactLinkStatus =
    outcome.status === "unlinked"
      ? "unlinked"
      : outcome.status === "conditional"
        ? "conditional"
        : "linked";

  const impact =
    (context.metadata?.impact as string | undefined)
    ?? "dcglobal-ai-cognitive-impact";

  const result: ReasoningImpactLinkResult = {
    id: `reasoning-impact-link-${Date.now()}`,
    status,
    linked: status === "linked",
    outcome,
    impactLinkId:
      `DCG-REASONING-IMPACT-${Date.now()}`,
    impact,
    reason: outcome.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningImpactLinkHistory.push(result);

  return result;
}

export function listReasoningImpactLinkHistory():
  ReasoningImpactLinkResult[] {
  return [...reasoningImpactLinkHistory];
}

export function getLatestReasoningImpactLink():
  ReasoningImpactLinkResult | undefined {
  return reasoningImpactLinkHistory[
    reasoningImpactLinkHistory.length - 1
  ];
}

export function clearReasoningImpactLinkHistory():
  void {
  reasoningImpactLinkHistory.length = 0;
}

export function countReasoningImpactLinkResults():
  number {
  return reasoningImpactLinkHistory.length;
}

export function isReasoningLinkedToImpact():
  boolean {
  return (
    getLatestReasoningImpactLink()
      ?.linked ?? true
  );
}
