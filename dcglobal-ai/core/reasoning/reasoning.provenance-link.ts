/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Provenance Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToCustody,
} from "./reasoning.custody-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningProvenanceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningProvenanceLinkResult {
  id: string;
  status: ReasoningProvenanceLinkStatus;
  linked: boolean;
  custody: ReturnType<typeof linkReasoningToCustody>;
  provenanceLinkId: string;
  provenance: string;
  reason: string;
  linkedAt: string;
}

const reasoningProvenanceLinkHistory:
  ReasoningProvenanceLinkResult[] = [];

export function linkReasoningToProvenance(
  context: ReasoningPolicyContext
): ReasoningProvenanceLinkResult {
  const custody = linkReasoningToCustody(context);

  const status: ReasoningProvenanceLinkStatus =
    custody.status === "unlinked"
      ? "unlinked"
      : custody.status === "conditional"
        ? "conditional"
        : "linked";

  const provenance =
    (context.metadata?.provenance as string | undefined)
    ?? "dcglobal-ai-cognitive-provenance";

  const result: ReasoningProvenanceLinkResult = {
    id: `reasoning-provenance-link-${Date.now()}`,
    status,
    linked: status === "linked",
    custody,
    provenanceLinkId:
      `DCG-REASONING-PROVENANCE-${Date.now()}`,
    provenance,
    reason: custody.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningProvenanceLinkHistory.push(result);

  return result;
}

export function listReasoningProvenanceLinkHistory():
  ReasoningProvenanceLinkResult[] {
  return [...reasoningProvenanceLinkHistory];
}

export function getLatestReasoningProvenanceLink():
  ReasoningProvenanceLinkResult | undefined {
  return reasoningProvenanceLinkHistory[
    reasoningProvenanceLinkHistory.length - 1
  ];
}

export function clearReasoningProvenanceLinkHistory():
  void {
  reasoningProvenanceLinkHistory.length = 0;
}

export function countReasoningProvenanceLinkResults():
  number {
  return reasoningProvenanceLinkHistory.length;
}

export function isReasoningLinkedToProvenance():
  boolean {
  return (
    getLatestReasoningProvenanceLink()
      ?.linked ?? true
  );
}
