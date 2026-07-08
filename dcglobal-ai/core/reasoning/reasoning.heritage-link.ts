/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Heritage Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToLineage,
} from "./reasoning.lineage-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningHeritageLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningHeritageLinkResult {
  id: string;
  status: ReasoningHeritageLinkStatus;
  linked: boolean;
  lineage: ReturnType<typeof linkReasoningToLineage>;
  heritageLinkId: string;
  heritage: string;
  reason: string;
  linkedAt: string;
}

const reasoningHeritageLinkHistory:
  ReasoningHeritageLinkResult[] = [];

export function linkReasoningToHeritage(
  context: ReasoningPolicyContext
): ReasoningHeritageLinkResult {
  const lineage = linkReasoningToLineage(context);

  const status: ReasoningHeritageLinkStatus =
    lineage.status === "unlinked"
      ? "unlinked"
      : lineage.status === "conditional"
        ? "conditional"
        : "linked";

  const heritage =
    (context.metadata?.heritage as string | undefined)
    ?? "dcglobal-ai-cognitive-heritage";

  const result: ReasoningHeritageLinkResult = {
    id: `reasoning-heritage-link-${Date.now()}`,
    status,
    linked: status === "linked",
    lineage,
    heritageLinkId:
      `DCG-REASONING-HERITAGE-${Date.now()}`,
    heritage,
    reason: lineage.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningHeritageLinkHistory.push(result);

  return result;
}

export function listReasoningHeritageLinkHistory():
  ReasoningHeritageLinkResult[] {
  return [...reasoningHeritageLinkHistory];
}

export function getLatestReasoningHeritageLink():
  ReasoningHeritageLinkResult | undefined {
  return reasoningHeritageLinkHistory[
    reasoningHeritageLinkHistory.length - 1
  ];
}

export function clearReasoningHeritageLinkHistory():
  void {
  reasoningHeritageLinkHistory.length = 0;
}

export function countReasoningHeritageLinkResults():
  number {
  return reasoningHeritageLinkHistory.length;
}

export function isReasoningLinkedToHeritage():
  boolean {
  return (
    getLatestReasoningHeritageLink()
      ?.linked ?? true
  );
}
