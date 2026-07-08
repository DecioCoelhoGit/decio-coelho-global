/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Archive Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToLedger,
} from "./reasoning.ledger-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningArchiveLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningArchiveLinkResult {
  id: string;
  status: ReasoningArchiveLinkStatus;
  linked: boolean;
  ledger: ReturnType<typeof linkReasoningToLedger>;
  archiveLinkId: string;
  archive: string;
  reason: string;
  linkedAt: string;
}

const reasoningArchiveLinkHistory:
  ReasoningArchiveLinkResult[] = [];

export function linkReasoningToArchive(
  context: ReasoningPolicyContext
): ReasoningArchiveLinkResult {
  const ledger = linkReasoningToLedger(context);

  const status: ReasoningArchiveLinkStatus =
    ledger.status === "unlinked"
      ? "unlinked"
      : ledger.status === "conditional"
        ? "conditional"
        : "linked";

  const archive =
    (context.metadata?.archive as string | undefined)
    ?? "dcglobal-ai-cognitive-archive";

  const result: ReasoningArchiveLinkResult = {
    id: `reasoning-archive-link-${Date.now()}`,
    status,
    linked: status === "linked",
    ledger,
    archiveLinkId:
      `DCG-REASONING-ARCHIVE-${Date.now()}`,
    archive,
    reason: ledger.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningArchiveLinkHistory.push(result);

  return result;
}

export function listReasoningArchiveLinkHistory():
  ReasoningArchiveLinkResult[] {
  return [...reasoningArchiveLinkHistory];
}

export function getLatestReasoningArchiveLink():
  ReasoningArchiveLinkResult | undefined {
  return reasoningArchiveLinkHistory[
    reasoningArchiveLinkHistory.length - 1
  ];
}

export function clearReasoningArchiveLinkHistory():
  void {
  reasoningArchiveLinkHistory.length = 0;
}

export function countReasoningArchiveLinkResults():
  number {
  return reasoningArchiveLinkHistory.length;
}

export function isReasoningLinkedToArchive():
  boolean {
  return (
    getLatestReasoningArchiveLink()
      ?.linked ?? true
  );
}
