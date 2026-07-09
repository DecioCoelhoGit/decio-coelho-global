/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Evolution Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToEnhancement,
} from "./reasoning.enhancement-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningEvolutionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningEvolutionLinkResult {
  id: string;
  status: ReasoningEvolutionLinkStatus;
  linked: boolean;
  enhancement: ReturnType<typeof linkReasoningToEnhancement>;
  evolutionLinkId: string;
  evolution: string;
  reason: string;
  linkedAt: string;
}

const reasoningEvolutionLinkHistory:
  ReasoningEvolutionLinkResult[] = [];

export function linkReasoningToEvolution(
  context: ReasoningPolicyContext
): ReasoningEvolutionLinkResult {
  const enhancement = linkReasoningToEnhancement(context);

  const status: ReasoningEvolutionLinkStatus =
    enhancement.status === "unlinked"
      ? "unlinked"
      : enhancement.status === "conditional"
        ? "conditional"
        : "linked";

  const evolution =
    (context.metadata?.evolution as string | undefined)
    ?? "dcglobal-ai-cognitive-evolution";

  const result: ReasoningEvolutionLinkResult = {
    id: `reasoning-evolution-link-${Date.now()}`,
    status,
    linked: status === "linked",
    enhancement,
    evolutionLinkId:
      `DCG-REASONING-EVOLUTION-${Date.now()}`,
    evolution,
    reason: enhancement.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningEvolutionLinkHistory.push(result);

  return result;
}

export function listReasoningEvolutionLinkHistory():
  ReasoningEvolutionLinkResult[] {
  return [...reasoningEvolutionLinkHistory];
}

export function getLatestReasoningEvolutionLink():
  ReasoningEvolutionLinkResult | undefined {
  return reasoningEvolutionLinkHistory[
    reasoningEvolutionLinkHistory.length - 1
  ];
}

export function clearReasoningEvolutionLinkHistory():
  void {
  reasoningEvolutionLinkHistory.length = 0;
}

export function countReasoningEvolutionLinkResults():
  number {
  return reasoningEvolutionLinkHistory.length;
}

export function isReasoningLinkedToEvolution():
  boolean {
  return (
    getLatestReasoningEvolutionLink()
      ?.linked ?? true
  );
}
