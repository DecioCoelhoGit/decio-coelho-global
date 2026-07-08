/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Succession Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToContinuity,
} from "./reasoning.continuity-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningSuccessionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningSuccessionLinkResult {
  id: string;
  status: ReasoningSuccessionLinkStatus;
  linked: boolean;
  continuity: ReturnType<typeof linkReasoningToContinuity>;
  successionLinkId: string;
  succession: string;
  reason: string;
  linkedAt: string;
}

const reasoningSuccessionLinkHistory:
  ReasoningSuccessionLinkResult[] = [];

export function linkReasoningToSuccession(
  context: ReasoningPolicyContext
): ReasoningSuccessionLinkResult {
  const continuity =
    linkReasoningToContinuity(context);

  const status: ReasoningSuccessionLinkStatus =
    continuity.status === "unlinked"
      ? "unlinked"
      : continuity.status === "conditional"
        ? "conditional"
        : "linked";

  const succession =
    (context.metadata?.succession as string | undefined)
    ?? "dcglobal-ai-cognitive-succession";

  const result: ReasoningSuccessionLinkResult = {
    id: `reasoning-succession-link-${Date.now()}`,
    status,
    linked: status === "linked",
    continuity,
    successionLinkId:
      `DCG-REASONING-SUCCESSION-${Date.now()}`,
    succession,
    reason: continuity.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningSuccessionLinkHistory.push(result);

  return result;
}

export function listReasoningSuccessionLinkHistory():
  ReasoningSuccessionLinkResult[] {
  return [...reasoningSuccessionLinkHistory];
}

export function getLatestReasoningSuccessionLink():
  ReasoningSuccessionLinkResult | undefined {
  return reasoningSuccessionLinkHistory[
    reasoningSuccessionLinkHistory.length - 1
  ];
}

export function clearReasoningSuccessionLinkHistory():
  void {
  reasoningSuccessionLinkHistory.length = 0;
}

export function countReasoningSuccessionLinkResults():
  number {
  return reasoningSuccessionLinkHistory.length;
}

export function isReasoningLinkedToSuccession():
  boolean {
  return (
    getLatestReasoningSuccessionLink()
      ?.linked ?? true
  );
}
