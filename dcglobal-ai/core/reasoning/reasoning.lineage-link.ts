/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Lineage Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToProvenance,
} from "./reasoning.provenance-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningLineageLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningLineageLinkResult {
  id: string;
  status: ReasoningLineageLinkStatus;
  linked: boolean;
  provenance: ReturnType<
    typeof linkReasoningToProvenance
  >;
  lineageLinkId: string;
  lineage: string;
  reason: string;
  linkedAt: string;
}

const reasoningLineageLinkHistory:
  ReasoningLineageLinkResult[] = [];

export function linkReasoningToLineage(
  context: ReasoningPolicyContext
): ReasoningLineageLinkResult {
  const provenance =
    linkReasoningToProvenance(context);

  const status: ReasoningLineageLinkStatus =
    provenance.status === "unlinked"
      ? "unlinked"
      : provenance.status === "conditional"
        ? "conditional"
        : "linked";

  const lineage =
    (context.metadata?.lineage as string | undefined)
    ?? "dcglobal-ai-cognitive-lineage";

  const result: ReasoningLineageLinkResult = {
    id: `reasoning-lineage-link-${Date.now()}`,
    status,
    linked: status === "linked",
    provenance,
    lineageLinkId:
      `DCG-REASONING-LINEAGE-${Date.now()}`,
    lineage,
    reason: provenance.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningLineageLinkHistory.push(result);

  return result;
}

export function listReasoningLineageLinkHistory():
  ReasoningLineageLinkResult[] {
  return [...reasoningLineageLinkHistory];
}

export function getLatestReasoningLineageLink():
  ReasoningLineageLinkResult | undefined {
  return reasoningLineageLinkHistory[
    reasoningLineageLinkHistory.length - 1
  ];
}

export function clearReasoningLineageLinkHistory():
  void {
  reasoningLineageLinkHistory.length = 0;
}

export function countReasoningLineageLinkResults():
  number {
  return reasoningLineageLinkHistory.length;
}

export function isReasoningLinkedToLineage():
  boolean {
  return (
    getLatestReasoningLineageLink()
      ?.linked ?? true
  );
}
