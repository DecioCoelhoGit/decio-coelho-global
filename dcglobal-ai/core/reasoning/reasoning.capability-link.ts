/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Capability Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToResource,
} from "./reasoning.resource-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCapabilityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningCapabilityLinkResult {
  id: string;
  status: ReasoningCapabilityLinkStatus;
  linked: boolean;
  resource: ReturnType<typeof linkReasoningToResource>;
  capabilityLinkId: string;
  capability: string;
  reason: string;
  linkedAt: string;
}

const reasoningCapabilityLinkHistory:
  ReasoningCapabilityLinkResult[] = [];

export function linkReasoningToCapability(
  context: ReasoningPolicyContext
): ReasoningCapabilityLinkResult {
  const resource = linkReasoningToResource(context);

  const status: ReasoningCapabilityLinkStatus =
    resource.status === "unlinked"
      ? "unlinked"
      : resource.status === "conditional"
        ? "conditional"
        : "linked";

  const capability =
    (context.metadata?.capability as string | undefined)
    ?? "dcglobal-ai-cognitive-capability";

  const result: ReasoningCapabilityLinkResult = {
    id: `reasoning-capability-link-${Date.now()}`,
    status,
    linked: status === "linked",
    resource,
    capabilityLinkId:
      `DCG-REASONING-CAPABILITY-${Date.now()}`,
    capability,
    reason: resource.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningCapabilityLinkHistory.push(result);

  return result;
}

export function listReasoningCapabilityLinkHistory():
  ReasoningCapabilityLinkResult[] {
  return [...reasoningCapabilityLinkHistory];
}

export function getLatestReasoningCapabilityLink():
  ReasoningCapabilityLinkResult | undefined {
  return reasoningCapabilityLinkHistory[
    reasoningCapabilityLinkHistory.length - 1
  ];
}

export function clearReasoningCapabilityLinkHistory():
  void {
  reasoningCapabilityLinkHistory.length = 0;
}

export function countReasoningCapabilityLinkResults():
  number {
  return reasoningCapabilityLinkHistory.length;
}

export function isReasoningLinkedToCapability():
  boolean {
  return (
    getLatestReasoningCapabilityLink()
      ?.linked ?? true
  );
}
