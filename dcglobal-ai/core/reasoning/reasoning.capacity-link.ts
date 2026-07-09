/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Capacity Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToCapability,
} from "./reasoning.capability-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCapacityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningCapacityLinkResult {
  id: string;
  status: ReasoningCapacityLinkStatus;
  linked: boolean;
  capability: ReturnType<typeof linkReasoningToCapability>;
  capacityLinkId: string;
  capacity: string;
  reason: string;
  linkedAt: string;
}

const reasoningCapacityLinkHistory:
  ReasoningCapacityLinkResult[] = [];

export function linkReasoningToCapacity(
  context: ReasoningPolicyContext
): ReasoningCapacityLinkResult {
  const capability = linkReasoningToCapability(context);

  const status: ReasoningCapacityLinkStatus =
    capability.status === "unlinked"
      ? "unlinked"
      : capability.status === "conditional"
        ? "conditional"
        : "linked";

  const capacity =
    (context.metadata?.capacity as string | undefined)
    ?? "dcglobal-ai-cognitive-capacity";

  const result: ReasoningCapacityLinkResult = {
    id: `reasoning-capacity-link-${Date.now()}`,
    status,
    linked: status === "linked",
    capability,
    capacityLinkId:
      `DCG-REASONING-CAPACITY-${Date.now()}`,
    capacity,
    reason: capability.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningCapacityLinkHistory.push(result);

  return result;
}

export function listReasoningCapacityLinkHistory():
  ReasoningCapacityLinkResult[] {
  return [...reasoningCapacityLinkHistory];
}

export function getLatestReasoningCapacityLink():
  ReasoningCapacityLinkResult | undefined {
  return reasoningCapacityLinkHistory[
    reasoningCapacityLinkHistory.length - 1
  ];
}

export function clearReasoningCapacityLinkHistory():
  void {
  reasoningCapacityLinkHistory.length = 0;
}

export function countReasoningCapacityLinkResults():
  number {
  return reasoningCapacityLinkHistory.length;
}

export function isReasoningLinkedToCapacity():
  boolean {
  return (
    getLatestReasoningCapacityLink()
      ?.linked ?? true
  );
}
