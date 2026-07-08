/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Transfer Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToTransmission,
} from "./reasoning.transmission-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningTransferLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningTransferLinkResult {
  id: string;
  status: ReasoningTransferLinkStatus;
  linked: boolean;
  transmission: ReturnType<
    typeof linkReasoningToTransmission
  >;
  transferLinkId: string;
  transfer: string;
  reason: string;
  linkedAt: string;
}

const reasoningTransferLinkHistory:
  ReasoningTransferLinkResult[] = [];

export function linkReasoningToTransfer(
  context: ReasoningPolicyContext
): ReasoningTransferLinkResult {
  const transmission =
    linkReasoningToTransmission(context);

  const status: ReasoningTransferLinkStatus =
    transmission.status === "unlinked"
      ? "unlinked"
      : transmission.status === "conditional"
        ? "conditional"
        : "linked";

  const transfer =
    (context.metadata?.transfer as string | undefined)
    ?? "dcglobal-ai-cognitive-transfer";

  const result: ReasoningTransferLinkResult = {
    id: `reasoning-transfer-link-${Date.now()}`,
    status,
    linked: status === "linked",
    transmission,
    transferLinkId:
      `DCG-REASONING-TRANSFER-${Date.now()}`,
    transfer,
    reason: transmission.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningTransferLinkHistory.push(result);

  return result;
}

export function listReasoningTransferLinkHistory():
  ReasoningTransferLinkResult[] {
  return [...reasoningTransferLinkHistory];
}

export function getLatestReasoningTransferLink():
  ReasoningTransferLinkResult | undefined {
  return reasoningTransferLinkHistory[
    reasoningTransferLinkHistory.length - 1
  ];
}

export function clearReasoningTransferLinkHistory():
  void {
  reasoningTransferLinkHistory.length = 0;
}

export function countReasoningTransferLinkResults():
  number {
  return reasoningTransferLinkHistory.length;
}

export function isReasoningLinkedToTransfer():
  boolean {
  return (
    getLatestReasoningTransferLink()
      ?.linked ?? true
  );
}
