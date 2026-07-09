/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Quality Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToExcellence,
} from "./reasoning.excellence-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningQualityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningQualityLinkResult {
  id: string;
  status: ReasoningQualityLinkStatus;
  linked: boolean;
  excellence: ReturnType<typeof linkReasoningToExcellence>;
  qualityLinkId: string;
  quality: string;
  reason: string;
  linkedAt: string;
}

const reasoningQualityLinkHistory:
  ReasoningQualityLinkResult[] = [];

export function linkReasoningToQuality(
  context: ReasoningPolicyContext
): ReasoningQualityLinkResult {
  const excellence = linkReasoningToExcellence(context);

  const status: ReasoningQualityLinkStatus =
    excellence.status === "unlinked"
      ? "unlinked"
      : excellence.status === "conditional"
        ? "conditional"
        : "linked";

  const quality =
    (context.metadata?.quality as string | undefined)
    ?? "dcglobal-ai-cognitive-quality";

  const result: ReasoningQualityLinkResult = {
    id: `reasoning-quality-link-${Date.now()}`,
    status,
    linked: status === "linked",
    excellence,
    qualityLinkId:
      `DCG-REASONING-QUALITY-${Date.now()}`,
    quality,
    reason: excellence.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningQualityLinkHistory.push(result);

  return result;
}

export function listReasoningQualityLinkHistory():
  ReasoningQualityLinkResult[] {
  return [...reasoningQualityLinkHistory];
}

export function getLatestReasoningQualityLink():
  ReasoningQualityLinkResult | undefined {
  return reasoningQualityLinkHistory[
    reasoningQualityLinkHistory.length - 1
  ];
}

export function clearReasoningQualityLinkHistory():
  void {
  reasoningQualityLinkHistory.length = 0;
}

export function countReasoningQualityLinkResults():
  number {
  return reasoningQualityLinkHistory.length;
}

export function isReasoningLinkedToQuality():
  boolean {
  return (
    getLatestReasoningQualityLink()
      ?.linked ?? true
  );
}
