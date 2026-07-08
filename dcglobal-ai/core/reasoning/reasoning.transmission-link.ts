/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Transmission Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToSuccession,
} from "./reasoning.succession-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningTransmissionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningTransmissionLinkResult {
  id: string;
  status: ReasoningTransmissionLinkStatus;
  linked: boolean;
  succession: ReturnType<
    typeof linkReasoningToSuccession
  >;
  transmissionLinkId: string;
  transmission: string;
  reason: string;
  linkedAt: string;
}

const reasoningTransmissionLinkHistory:
  ReasoningTransmissionLinkResult[] = [];

export function linkReasoningToTransmission(
  context: ReasoningPolicyContext
): ReasoningTransmissionLinkResult {
  const succession =
    linkReasoningToSuccession(context);

  const status: ReasoningTransmissionLinkStatus =
    succession.status === "unlinked"
      ? "unlinked"
      : succession.status === "conditional"
        ? "conditional"
        : "linked";

  const transmission =
    (context.metadata?.transmission as string | undefined)
    ?? "dcglobal-ai-cognitive-transmission";

  const result: ReasoningTransmissionLinkResult = {
    id: `reasoning-transmission-link-${Date.now()}`,
    status,
    linked: status === "linked",
    succession,
    transmissionLinkId:
      `DCG-REASONING-TRANSMISSION-${Date.now()}`,
    transmission,
    reason: succession.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningTransmissionLinkHistory.push(result);

  return result;
}

export function listReasoningTransmissionLinkHistory():
  ReasoningTransmissionLinkResult[] {
  return [...reasoningTransmissionLinkHistory];
}

export function getLatestReasoningTransmissionLink():
  ReasoningTransmissionLinkResult | undefined {
  return reasoningTransmissionLinkHistory[
    reasoningTransmissionLinkHistory.length - 1
  ];
}

export function clearReasoningTransmissionLinkHistory():
  void {
  reasoningTransmissionLinkHistory.length = 0;
}

export function countReasoningTransmissionLinkResults():
  number {
  return reasoningTransmissionLinkHistory.length;
}

export function isReasoningLinkedToTransmission():
  boolean {
  return (
    getLatestReasoningTransmissionLink()
      ?.linked ?? true
  );
}
