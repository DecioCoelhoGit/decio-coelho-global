/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Strategy Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToVision,
} from "./reasoning.vision-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningStrategyLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningStrategyLinkResult {
  id: string;
  status: ReasoningStrategyLinkStatus;
  linked: boolean;
  vision: ReturnType<typeof linkReasoningToVision>;
  strategyLinkId: string;
  strategy: string;
  reason: string;
  linkedAt: string;
}

const reasoningStrategyLinkHistory:
  ReasoningStrategyLinkResult[] = [];

export function linkReasoningToStrategy(
  context: ReasoningPolicyContext
): ReasoningStrategyLinkResult {
  const vision = linkReasoningToVision(context);

  const status: ReasoningStrategyLinkStatus =
    vision.status === "unlinked"
      ? "unlinked"
      : vision.status === "conditional"
        ? "conditional"
        : "linked";

  const strategy =
    (context.metadata?.strategy as string | undefined)
    ?? "dcglobal-ai-cognitive-strategy";

  const result: ReasoningStrategyLinkResult = {
    id: `reasoning-strategy-link-${Date.now()}`,
    status,
    linked: status === "linked",
    vision,
    strategyLinkId:
      `DCG-REASONING-STRATEGY-${Date.now()}`,
    strategy,
    reason: vision.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningStrategyLinkHistory.push(result);

  return result;
}

export function listReasoningStrategyLinkHistory():
  ReasoningStrategyLinkResult[] {
  return [...reasoningStrategyLinkHistory];
}

export function getLatestReasoningStrategyLink():
  ReasoningStrategyLinkResult | undefined {
  return reasoningStrategyLinkHistory[
    reasoningStrategyLinkHistory.length - 1
  ];
}

export function clearReasoningStrategyLinkHistory():
  void {
  reasoningStrategyLinkHistory.length = 0;
}

export function countReasoningStrategyLinkResults():
  number {
  return reasoningStrategyLinkHistory.length;
}

export function isReasoningLinkedToStrategy():
  boolean {
  return (
    getLatestReasoningStrategyLink()
      ?.linked ?? true
  );
}
