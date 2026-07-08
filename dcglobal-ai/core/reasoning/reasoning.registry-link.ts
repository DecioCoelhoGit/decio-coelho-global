/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Registry Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  certifyReasoning,
} from "./reasoning.certificate";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningRegistryLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningRegistryLinkResult {
  id: string;
  status: ReasoningRegistryLinkStatus;
  linked: boolean;
  certificate: ReturnType<typeof certifyReasoning>;
  registryLinkId: string;
  registry: string;
  reason: string;
  linkedAt: string;
}

const reasoningRegistryLinkHistory:
  ReasoningRegistryLinkResult[] = [];

export function linkReasoningToRegistry(
  context: ReasoningPolicyContext
): ReasoningRegistryLinkResult {
  const certificate = certifyReasoning(context);

  const status: ReasoningRegistryLinkStatus =
    certificate.status === "uncertified"
      ? "unlinked"
      : certificate.status === "conditional"
        ? "conditional"
        : "linked";

  const registry =
    (context.metadata?.registry as string | undefined)
    ?? "dcglobal-ai-cognitive-registry";

  const result: ReasoningRegistryLinkResult = {
    id: `reasoning-registry-link-${Date.now()}`,
    status,
    linked: status === "linked",
    certificate,
    registryLinkId:
      `DCG-REASONING-REGISTRY-${Date.now()}`,
    registry,
    reason: certificate.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningRegistryLinkHistory.push(result);

  return result;
}

export function listReasoningRegistryLinkHistory():
  ReasoningRegistryLinkResult[] {
  return [...reasoningRegistryLinkHistory];
}

export function getLatestReasoningRegistryLink():
  ReasoningRegistryLinkResult | undefined {
  return reasoningRegistryLinkHistory[
    reasoningRegistryLinkHistory.length - 1
  ];
}

export function clearReasoningRegistryLinkHistory():
  void {
  reasoningRegistryLinkHistory.length = 0;
}

export function countReasoningRegistryLinkResults():
  number {
  return reasoningRegistryLinkHistory.length;
}

export function isReasoningLinkedToRegistry():
  boolean {
  return (
    getLatestReasoningRegistryLink()
      ?.linked ?? true
  );
}
