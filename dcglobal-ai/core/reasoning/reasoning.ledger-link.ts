/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Ledger Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToRegistry,
} from "./reasoning.registry-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningLedgerLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningLedgerLinkResult {
  id: string;
  status: ReasoningLedgerLinkStatus;
  linked: boolean;
  registry: ReturnType<typeof linkReasoningToRegistry>;
  ledgerLinkId: string;
  ledger: string;
  reason: string;
  linkedAt: string;
}

const reasoningLedgerLinkHistory:
  ReasoningLedgerLinkResult[] = [];

export function linkReasoningToLedger(
  context: ReasoningPolicyContext
): ReasoningLedgerLinkResult {
  const registry = linkReasoningToRegistry(context);

  const status: ReasoningLedgerLinkStatus =
    registry.status === "unlinked"
      ? "unlinked"
      : registry.status === "conditional"
        ? "conditional"
        : "linked";

  const ledger =
    (context.metadata?.ledger as string | undefined)
    ?? "dcglobal-ai-cognitive-ledger";

  const result: ReasoningLedgerLinkResult = {
    id: `reasoning-ledger-link-${Date.now()}`,
    status,
    linked: status === "linked",
    registry,
    ledgerLinkId:
      `DCG-REASONING-LEDGER-${Date.now()}`,
    ledger,
    reason: registry.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningLedgerLinkHistory.push(result);

  return result;
}

export function listReasoningLedgerLinkHistory():
  ReasoningLedgerLinkResult[] {
  return [...reasoningLedgerLinkHistory];
}

export function getLatestReasoningLedgerLink():
  ReasoningLedgerLinkResult | undefined {
  return reasoningLedgerLinkHistory[
    reasoningLedgerLinkHistory.length - 1
  ];
}

export function clearReasoningLedgerLinkHistory():
  void {
  reasoningLedgerLinkHistory.length = 0;
}

export function countReasoningLedgerLinkResults():
  number {
  return reasoningLedgerLinkHistory.length;
}

export function isReasoningLinkedToLedger():
  boolean {
  return (
    getLatestReasoningLedgerLink()
      ?.linked ?? true
  );
}
