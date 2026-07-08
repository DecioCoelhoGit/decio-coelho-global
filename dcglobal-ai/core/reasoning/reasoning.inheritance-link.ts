/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Inheritance Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToLegacy,
} from "./reasoning.legacy-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningInheritanceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningInheritanceLinkResult {
  id: string;
  status: ReasoningInheritanceLinkStatus;
  linked: boolean;
  legacy: ReturnType<typeof linkReasoningToLegacy>;
  inheritanceLinkId: string;
  inheritance: string;
  reason: string;
  linkedAt: string;
}

const reasoningInheritanceLinkHistory:
  ReasoningInheritanceLinkResult[] = [];

export function linkReasoningToInheritance(
  context: ReasoningPolicyContext
): ReasoningInheritanceLinkResult {
  const legacy = linkReasoningToLegacy(context);

  const status: ReasoningInheritanceLinkStatus =
    legacy.status === "unlinked"
      ? "unlinked"
      : legacy.status === "conditional"
        ? "conditional"
        : "linked";

  const inheritance =
    (context.metadata?.inheritance as string | undefined)
    ?? "dcglobal-ai-cognitive-inheritance";

  const result: ReasoningInheritanceLinkResult = {
    id: `reasoning-inheritance-link-${Date.now()}`,
    status,
    linked: status === "linked",
    legacy,
    inheritanceLinkId:
      `DCG-REASONING-INHERITANCE-${Date.now()}`,
    inheritance,
    reason: legacy.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningInheritanceLinkHistory.push(result);

  return result;
}

export function listReasoningInheritanceLinkHistory():
  ReasoningInheritanceLinkResult[] {
  return [...reasoningInheritanceLinkHistory];
}

export function getLatestReasoningInheritanceLink():
  ReasoningInheritanceLinkResult | undefined {
  return reasoningInheritanceLinkHistory[
    reasoningInheritanceLinkHistory.length - 1
  ];
}

export function clearReasoningInheritanceLinkHistory():
  void {
  reasoningInheritanceLinkHistory.length = 0;
}

export function countReasoningInheritanceLinkResults():
  number {
  return reasoningInheritanceLinkHistory.length;
}

export function isReasoningLinkedToInheritance():
  boolean {
  return (
    getLatestReasoningInheritanceLink()
      ?.linked ?? true
  );
}
