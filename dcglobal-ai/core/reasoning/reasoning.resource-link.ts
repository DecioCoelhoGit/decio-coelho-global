/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Resource Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToAsset,
} from "./reasoning.asset-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningResourceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningResourceLinkResult {
  id: string;
  status: ReasoningResourceLinkStatus;
  linked: boolean;
  asset: ReturnType<typeof linkReasoningToAsset>;
  resourceLinkId: string;
  resource: string;
  reason: string;
  linkedAt: string;
}

const reasoningResourceLinkHistory:
  ReasoningResourceLinkResult[] = [];

export function linkReasoningToResource(
  context: ReasoningPolicyContext
): ReasoningResourceLinkResult {
  const asset = linkReasoningToAsset(context);

  const status: ReasoningResourceLinkStatus =
    asset.status === "unlinked"
      ? "unlinked"
      : asset.status === "conditional"
        ? "conditional"
        : "linked";

  const resource =
    (context.metadata?.resource as string | undefined)
    ?? "dcglobal-ai-cognitive-resource";

  const result: ReasoningResourceLinkResult = {
    id: `reasoning-resource-link-${Date.now()}`,
    status,
    linked: status === "linked",
    asset,
    resourceLinkId:
      `DCG-REASONING-RESOURCE-${Date.now()}`,
    resource,
    reason: asset.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningResourceLinkHistory.push(result);

  return result;
}

export function listReasoningResourceLinkHistory():
  ReasoningResourceLinkResult[] {
  return [...reasoningResourceLinkHistory];
}

export function getLatestReasoningResourceLink():
  ReasoningResourceLinkResult | undefined {
  return reasoningResourceLinkHistory[
    reasoningResourceLinkHistory.length - 1
  ];
}

export function clearReasoningResourceLinkHistory():
  void {
  reasoningResourceLinkHistory.length = 0;
}

export function countReasoningResourceLinkResults():
  number {
  return reasoningResourceLinkHistory.length;
}

export function isReasoningLinkedToResource():
  boolean {
  return (
    getLatestReasoningResourceLink()
      ?.linked ?? true
  );
}
