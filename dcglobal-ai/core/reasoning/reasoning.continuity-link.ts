/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Continuity Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToInheritance,
} from "./reasoning.inheritance-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningContinuityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningContinuityLinkResult {
  id: string;
  status: ReasoningContinuityLinkStatus;
  linked: boolean;
  inheritance: ReturnType<
    typeof linkReasoningToInheritance
  >;
  continuityLinkId: string;
  continuity: string;
  reason: string;
  linkedAt: string;
}

const reasoningContinuityLinkHistory:
  ReasoningContinuityLinkResult[] = [];

export function linkReasoningToContinuity(
  context: ReasoningPolicyContext
): ReasoningContinuityLinkResult {
  const inheritance =
    linkReasoningToInheritance(context);

  const status: ReasoningContinuityLinkStatus =
    inheritance.status === "unlinked"
      ? "unlinked"
      : inheritance.status === "conditional"
        ? "conditional"
        : "linked";

  const continuity =
    (context.metadata?.continuity as string | undefined)
    ?? "dcglobal-ai-cognitive-continuity";

  const result: ReasoningContinuityLinkResult = {
    id: `reasoning-continuity-link-${Date.now()}`,
    status,
    linked: status === "linked",
    inheritance,
    continuityLinkId:
      `DCG-REASONING-CONTINUITY-${Date.now()}`,
    continuity,
    reason: inheritance.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningContinuityLinkHistory.push(result);

  return result;
}

export function listReasoningContinuityLinkHistory():
  ReasoningContinuityLinkResult[] {
  return [...reasoningContinuityLinkHistory];
}

export function getLatestReasoningContinuityLink():
  ReasoningContinuityLinkResult | undefined {
  return reasoningContinuityLinkHistory[
    reasoningContinuityLinkHistory.length - 1
  ];
}

export function clearReasoningContinuityLinkHistory():
  void {
  reasoningContinuityLinkHistory.length = 0;
}

export function countReasoningContinuityLinkResults():
  number {
  return reasoningContinuityLinkHistory.length;
}

export function isReasoningLinkedToContinuity():
  boolean {
  return (
    getLatestReasoningContinuityLink()
      ?.linked ?? true
  );
}
