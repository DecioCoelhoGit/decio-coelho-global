/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Reception Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToDelivery,
} from "./reasoning.delivery-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningReceptionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningReceptionLinkResult {
  id: string;
  status: ReasoningReceptionLinkStatus;
  linked: boolean;
  delivery: ReturnType<typeof linkReasoningToDelivery>;
  receptionLinkId: string;
  reception: string;
  reason: string;
  linkedAt: string;
}

const reasoningReceptionLinkHistory:
  ReasoningReceptionLinkResult[] = [];

export function linkReasoningToReception(
  context: ReasoningPolicyContext
): ReasoningReceptionLinkResult {
  const delivery = linkReasoningToDelivery(context);

  const status: ReasoningReceptionLinkStatus =
    delivery.status === "unlinked"
      ? "unlinked"
      : delivery.status === "conditional"
        ? "conditional"
        : "linked";

  const reception =
    (context.metadata?.reception as string | undefined)
    ?? "dcglobal-ai-cognitive-reception";

  const result: ReasoningReceptionLinkResult = {
    id: `reasoning-reception-link-${Date.now()}`,
    status,
    linked: status === "linked",
    delivery,
    receptionLinkId:
      `DCG-REASONING-RECEPTION-${Date.now()}`,
    reception,
    reason: delivery.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningReceptionLinkHistory.push(result);

  return result;
}

export function listReasoningReceptionLinkHistory():
  ReasoningReceptionLinkResult[] {
  return [...reasoningReceptionLinkHistory];
}

export function getLatestReasoningReceptionLink():
  ReasoningReceptionLinkResult | undefined {
  return reasoningReceptionLinkHistory[
    reasoningReceptionLinkHistory.length - 1
  ];
}

export function clearReasoningReceptionLinkHistory():
  void {
  reasoningReceptionLinkHistory.length = 0;
}

export function countReasoningReceptionLinkResults():
  number {
  return reasoningReceptionLinkHistory.length;
}

export function isReasoningLinkedToReception():
  boolean {
  return (
    getLatestReasoningReceptionLink()
      ?.linked ?? true
  );
}
