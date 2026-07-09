/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Enhancement Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToOptimization,
} from "./reasoning.optimization-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningEnhancementLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningEnhancementLinkResult {
  id: string;
  status: ReasoningEnhancementLinkStatus;
  linked: boolean;
  optimization: ReturnType<typeof linkReasoningToOptimization>;
  enhancementLinkId: string;
  enhancement: string;
  reason: string;
  linkedAt: string;
}

const reasoningEnhancementLinkHistory:
  ReasoningEnhancementLinkResult[] = [];

export function linkReasoningToEnhancement(
  context: ReasoningPolicyContext
): ReasoningEnhancementLinkResult {
  const optimization = linkReasoningToOptimization(context);

  const status: ReasoningEnhancementLinkStatus =
    optimization.status === "unlinked"
      ? "unlinked"
      : optimization.status === "conditional"
        ? "conditional"
        : "linked";

  const enhancement =
    (context.metadata?.enhancement as string | undefined)
    ?? "dcglobal-ai-cognitive-enhancement";

  const result: ReasoningEnhancementLinkResult = {
    id: `reasoning-enhancement-link-${Date.now()}`,
    status,
    linked: status === "linked",
    optimization,
    enhancementLinkId:
      `DCG-REASONING-ENHANCEMENT-${Date.now()}`,
    enhancement,
    reason: optimization.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningEnhancementLinkHistory.push(result);

  return result;
}

export function listReasoningEnhancementLinkHistory():
  ReasoningEnhancementLinkResult[] {
  return [...reasoningEnhancementLinkHistory];
}

export function getLatestReasoningEnhancementLink():
  ReasoningEnhancementLinkResult | undefined {
  return reasoningEnhancementLinkHistory[
    reasoningEnhancementLinkHistory.length - 1
  ];
}

export function clearReasoningEnhancementLinkHistory():
  void {
  reasoningEnhancementLinkHistory.length = 0;
}

export function countReasoningEnhancementLinkResults():
  number {
  return reasoningEnhancementLinkHistory.length;
}

export function isReasoningLinkedToEnhancement():
  boolean {
  return (
    getLatestReasoningEnhancementLink()
      ?.linked ?? true
  );
}
