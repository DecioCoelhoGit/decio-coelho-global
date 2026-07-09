/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Effectiveness Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToEfficiency,
} from "./reasoning.efficiency-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningEffectivenessLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningEffectivenessLinkResult {
  id: string;
  status: ReasoningEffectivenessLinkStatus;
  linked: boolean;
  efficiency: ReturnType<typeof linkReasoningToEfficiency>;
  effectivenessLinkId: string;
  effectiveness: string;
  reason: string;
  linkedAt: string;
}

const reasoningEffectivenessLinkHistory:
  ReasoningEffectivenessLinkResult[] = [];

export function linkReasoningToEffectiveness(
  context: ReasoningPolicyContext
): ReasoningEffectivenessLinkResult {
  const efficiency = linkReasoningToEfficiency(context);

  const status: ReasoningEffectivenessLinkStatus =
    efficiency.status === "unlinked"
      ? "unlinked"
      : efficiency.status === "conditional"
        ? "conditional"
        : "linked";

  const effectiveness =
    (context.metadata?.effectiveness as string | undefined)
    ?? "dcglobal-ai-cognitive-effectiveness";

  const result: ReasoningEffectivenessLinkResult = {
    id: `reasoning-effectiveness-link-${Date.now()}`,
    status,
    linked: status === "linked",
    efficiency,
    effectivenessLinkId:
      `DCG-REASONING-EFFECTIVENESS-${Date.now()}`,
    effectiveness,
    reason: efficiency.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningEffectivenessLinkHistory.push(result);

  return result;
}

export function listReasoningEffectivenessLinkHistory():
  ReasoningEffectivenessLinkResult[] {
  return [...reasoningEffectivenessLinkHistory];
}

export function getLatestReasoningEffectivenessLink():
  ReasoningEffectivenessLinkResult | undefined {
  return reasoningEffectivenessLinkHistory[
    reasoningEffectivenessLinkHistory.length - 1
  ];
}

export function clearReasoningEffectivenessLinkHistory():
  void {
  reasoningEffectivenessLinkHistory.length = 0;
}

export function countReasoningEffectivenessLinkResults():
  number {
  return reasoningEffectivenessLinkHistory.length;
}

export function isReasoningLinkedToEffectiveness():
  boolean {
  return (
    getLatestReasoningEffectivenessLink()
      ?.linked ?? true
  );
}
