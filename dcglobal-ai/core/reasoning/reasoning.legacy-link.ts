/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Legacy Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToHeritage,
} from "./reasoning.heritage-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningLegacyLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningLegacyLinkResult {
  id: string;
  status: ReasoningLegacyLinkStatus;
  linked: boolean;
  heritage: ReturnType<typeof linkReasoningToHeritage>;
  legacyLinkId: string;
  legacy: string;
  reason: string;
  linkedAt: string;
}

const reasoningLegacyLinkHistory:
  ReasoningLegacyLinkResult[] = [];

export function linkReasoningToLegacy(
  context: ReasoningPolicyContext
): ReasoningLegacyLinkResult {
  const heritage = linkReasoningToHeritage(context);

  const status: ReasoningLegacyLinkStatus =
    heritage.status === "unlinked"
      ? "unlinked"
      : heritage.status === "conditional"
        ? "conditional"
        : "linked";

  const legacy =
    (context.metadata?.legacy as string | undefined)
    ?? "dcglobal-ai-cognitive-legacy";

  const result: ReasoningLegacyLinkResult = {
    id: `reasoning-legacy-link-${Date.now()}`,
    status,
    linked: status === "linked",
    heritage,
    legacyLinkId:
      `DCG-REASONING-LEGACY-${Date.now()}`,
    legacy,
    reason: heritage.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningLegacyLinkHistory.push(result);

  return result;
}

export function listReasoningLegacyLinkHistory():
  ReasoningLegacyLinkResult[] {
  return [...reasoningLegacyLinkHistory];
}

export function getLatestReasoningLegacyLink():
  ReasoningLegacyLinkResult | undefined {
  return reasoningLegacyLinkHistory[
    reasoningLegacyLinkHistory.length - 1
  ];
}

export function clearReasoningLegacyLinkHistory():
  void {
  reasoningLegacyLinkHistory.length = 0;
}

export function countReasoningLegacyLinkResults():
  number {
  return reasoningLegacyLinkHistory.length;
}

export function isReasoningLinkedToLegacy():
  boolean {
  return (
    getLatestReasoningLegacyLink()
      ?.linked ?? true
  );
}
