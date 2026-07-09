/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Integrity Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToQuality,
} from "./reasoning.quality-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningIntegrityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningIntegrityLinkResult {
  id: string;
  status: ReasoningIntegrityLinkStatus;
  linked: boolean;
  quality: ReturnType<typeof linkReasoningToQuality>;
  integrityLinkId: string;
  integrity: string;
  reason: string;
  linkedAt: string;
}

const reasoningIntegrityLinkHistory:
  ReasoningIntegrityLinkResult[] = [];

export function linkReasoningToIntegrity(
  context: ReasoningPolicyContext
): ReasoningIntegrityLinkResult {
  const quality = linkReasoningToQuality(context);

  const status: ReasoningIntegrityLinkStatus =
    quality.status === "unlinked"
      ? "unlinked"
      : quality.status === "conditional"
        ? "conditional"
        : "linked";

  const integrity =
    (context.metadata?.integrity as string | undefined)
    ?? "dcglobal-ai-cognitive-integrity";

  const result: ReasoningIntegrityLinkResult = {
    id: `reasoning-integrity-link-${Date.now()}`,
    status,
    linked: status === "linked",
    quality,
    integrityLinkId:
      `DCG-REASONING-INTEGRITY-${Date.now()}`,
    integrity,
    reason: quality.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningIntegrityLinkHistory.push(result);

  return result;
}

export function listReasoningIntegrityLinkHistory():
  ReasoningIntegrityLinkResult[] {
  return [...reasoningIntegrityLinkHistory];
}

export function getLatestReasoningIntegrityLink():
  ReasoningIntegrityLinkResult | undefined {
  return reasoningIntegrityLinkHistory[
    reasoningIntegrityLinkHistory.length - 1
  ];
}

export function clearReasoningIntegrityLinkHistory():
  void {
  reasoningIntegrityLinkHistory.length = 0;
}

export function countReasoningIntegrityLinkResults():
  number {
  return reasoningIntegrityLinkHistory.length;
}

export function isReasoningLinkedToIntegrity():
  boolean {
  return (
    getLatestReasoningIntegrityLink()
      ?.linked ?? true
  );
}
