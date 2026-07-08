/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Vault Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToArchive,
} from "./reasoning.archive-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningVaultLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningVaultLinkResult {
  id: string;
  status: ReasoningVaultLinkStatus;
  linked: boolean;
  archive: ReturnType<typeof linkReasoningToArchive>;
  vaultLinkId: string;
  vault: string;
  reason: string;
  linkedAt: string;
}

const reasoningVaultLinkHistory:
  ReasoningVaultLinkResult[] = [];

export function linkReasoningToVault(
  context: ReasoningPolicyContext
): ReasoningVaultLinkResult {
  const archive = linkReasoningToArchive(context);

  const status: ReasoningVaultLinkStatus =
    archive.status === "unlinked"
      ? "unlinked"
      : archive.status === "conditional"
        ? "conditional"
        : "linked";

  const vault =
    (context.metadata?.vault as string | undefined)
    ?? "dcglobal-ai-cognitive-vault";

  const result: ReasoningVaultLinkResult = {
    id: `reasoning-vault-link-${Date.now()}`,
    status,
    linked: status === "linked",
    archive,
    vaultLinkId:
      `DCG-REASONING-VAULT-${Date.now()}`,
    vault,
    reason: archive.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningVaultLinkHistory.push(result);

  return result;
}

export function listReasoningVaultLinkHistory():
  ReasoningVaultLinkResult[] {
  return [...reasoningVaultLinkHistory];
}

export function getLatestReasoningVaultLink():
  ReasoningVaultLinkResult | undefined {
  return reasoningVaultLinkHistory[
    reasoningVaultLinkHistory.length - 1
  ];
}

export function clearReasoningVaultLinkHistory():
  void {
  reasoningVaultLinkHistory.length = 0;
}

export function countReasoningVaultLinkResults():
  number {
  return reasoningVaultLinkHistory.length;
}

export function isReasoningLinkedToVault():
  boolean {
  return (
    getLatestReasoningVaultLink()
      ?.linked ?? true
  );
}
