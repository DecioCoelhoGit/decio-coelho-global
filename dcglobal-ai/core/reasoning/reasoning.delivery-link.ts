/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Delivery Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToTransfer,
} from "./reasoning.transfer-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningDeliveryLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningDeliveryLinkResult {
  id: string;
  status: ReasoningDeliveryLinkStatus;
  linked: boolean;
  transfer: ReturnType<typeof linkReasoningToTransfer>;
  deliveryLinkId: string;
  delivery: string;
  reason: string;
  linkedAt: string;
}

const reasoningDeliveryLinkHistory:
  ReasoningDeliveryLinkResult[] = [];

export function linkReasoningToDelivery(
  context: ReasoningPolicyContext
): ReasoningDeliveryLinkResult {
  const transfer = linkReasoningToTransfer(context);

  const status: ReasoningDeliveryLinkStatus =
    transfer.status === "unlinked"
      ? "unlinked"
      : transfer.status === "conditional"
        ? "conditional"
        : "linked";

  const delivery =
    (context.metadata?.delivery as string | undefined)
    ?? "dcglobal-ai-cognitive-delivery";

  const result: ReasoningDeliveryLinkResult = {
    id: `reasoning-delivery-link-${Date.now()}`,
    status,
    linked: status === "linked",
    transfer,
    deliveryLinkId:
      `DCG-REASONING-DELIVERY-${Date.now()}`,
    delivery,
    reason: transfer.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningDeliveryLinkHistory.push(result);

  return result;
}

export function listReasoningDeliveryLinkHistory():
  ReasoningDeliveryLinkResult[] {
  return [...reasoningDeliveryLinkHistory];
}

export function getLatestReasoningDeliveryLink():
  ReasoningDeliveryLinkResult | undefined {
  return reasoningDeliveryLinkHistory[
    reasoningDeliveryLinkHistory.length - 1
  ];
}

export function clearReasoningDeliveryLinkHistory():
  void {
  reasoningDeliveryLinkHistory.length = 0;
}

export function countReasoningDeliveryLinkResults():
  number {
  return reasoningDeliveryLinkHistory.length;
}

export function isReasoningLinkedToDelivery():
  boolean {
  return (
    getLatestReasoningDeliveryLink()
      ?.linked ?? true
  );
}
