/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Excellence Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToEffectiveness,
} from "./reasoning.effectiveness-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningExcellenceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningExcellenceLinkResult {
  id: string;
  status: ReasoningExcellenceLinkStatus;
  linked: boolean;
  effectiveness: ReturnType<typeof linkReasoningToEffectiveness>;
  excellenceLinkId: string;
  excellence: string;
  reason: string;
  linkedAt: string;
}

const reasoningExcellenceLinkHistory:
  ReasoningExcellenceLinkResult[] = [];

export function linkReasoningToExcellence(
  context: ReasoningPolicyContext
): ReasoningExcellenceLinkResult {
  const effectiveness = linkReasoningToEffectiveness(context);

  const status: ReasoningExcellenceLinkStatus =
    effectiveness.status === "unlinked"
      ? "unlinked"
      : effectiveness.status === "conditional"
        ? "conditional"
        : "linked";

  const excellence =
    (context.metadata?.excellence as string | undefined)
    ?? "dcglobal-ai-cognitive-excellence";

  const result: ReasoningExcellenceLinkResult = {
    id: `reasoning-excellence-link-${Date.now()}`,
    status,
    linked: status === "linked",
    effectiveness,
    excellenceLinkId:
      `DCG-REASONING-EXCELLENCE-${Date.now()}`,
    excellence,
    reason: effectiveness.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningExcellenceLinkHistory.push(result);

  return result;
}

export function listReasoningExcellenceLinkHistory():
  ReasoningExcellenceLinkResult[] {
  return [...reasoningExcellenceLinkHistory];
}

export function getLatestReasoningExcellenceLink():
  ReasoningExcellenceLinkResult | undefined {
  return reasoningExcellenceLinkHistory[
    reasoningExcellenceLinkHistory.length - 1
  ];
}

export function clearReasoningExcellenceLinkHistory():
  void {
  reasoningExcellenceLinkHistory.length = 0;
}

export function countReasoningExcellenceLinkResults():
  number {
  return reasoningExcellenceLinkHistory.length;
}

export function isReasoningLinkedToExcellence():
  boolean {
  return (
    getLatestReasoningExcellenceLink()
      ?.linked ?? true
  );
}
