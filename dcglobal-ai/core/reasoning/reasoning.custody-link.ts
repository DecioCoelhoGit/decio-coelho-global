/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Custody Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToVault,
} from "./reasoning.vault-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCustodyLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningCustodyLinkResult {
  id: string;
  status: ReasoningCustodyLinkStatus;
  linked: boolean;
  vault: ReturnType<typeof linkReasoningToVault>;
  custodyLinkId: string;
  custodian: string;
  reason: string;
  linkedAt: string;
}

const reasoningCustodyLinkHistory:
  ReasoningCustodyLinkResult[] = [];

export function linkReasoningToCustody(
  context: ReasoningPolicyContext
): ReasoningCustodyLinkResult {
  const vault = linkReasoningToVault(context);

  const status: ReasoningCustodyLinkStatus =
    vault.status === "unlinked"
      ? "unlinked"
      : vault.status === "conditional"
        ? "conditional"
        : "linked";

  const custodian =
    (context.metadata?.custodian as string | undefined)
    ?? "dcglobal-ai-cognitive-custody";

  const result: ReasoningCustodyLinkResult = {
    id: `reasoning-custody-link-${Date.now()}`,
    status,
    linked: status === "linked",
    vault,
    custodyLinkId:
      `DCG-REASONING-CUSTODY-${Date.now()}`,
    custodian,
    reason: vault.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningCustodyLinkHistory.push(result);

  return result;
}

export function listReasoningCustodyLinkHistory():
  ReasoningCustodyLinkResult[] {
  return [...reasoningCustodyLinkHistory];
}

export function getLatestReasoningCustodyLink():
  ReasoningCustodyLinkResult | undefined {
  return reasoningCustodyLinkHistory[
    reasoningCustodyLinkHistory.length - 1
  ];
}

export function clearReasoningCustodyLinkHistory():
  void {
  reasoningCustodyLinkHistory.length = 0;
}

export function countReasoningCustodyLinkResults():
  number {
  return reasoningCustodyLinkHistory.length;
}

export function isReasoningLinkedToCustody():
  boolean {
  return (
    getLatestReasoningCustodyLink()
      ?.linked ?? true
  );
}
