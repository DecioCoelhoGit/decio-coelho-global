/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Preparedness Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToReadiness,
} from "./reasoning.readiness-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPreparednessLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningPreparednessLinkResult {
  id: string;
  status: ReasoningPreparednessLinkStatus;
  linked: boolean;
  readiness: ReturnType<typeof linkReasoningToReadiness>;
  preparednessLinkId: string;
  preparedness: string;
  reason: string;
  linkedAt: string;
}

const reasoningPreparednessLinkHistory:
  ReasoningPreparednessLinkResult[] = [];

export function linkReasoningToPreparedness(
  context: ReasoningPolicyContext
): ReasoningPreparednessLinkResult {
  const readiness = linkReasoningToReadiness(context);

  const status: ReasoningPreparednessLinkStatus =
    readiness.status === "unlinked"
      ? "unlinked"
      : readiness.status === "conditional"
        ? "conditional"
        : "linked";

  const preparedness =
    (context.metadata?.preparedness as string | undefined)
    ?? "dcglobal-ai-cognitive-preparedness";

  const result: ReasoningPreparednessLinkResult = {
    id: `reasoning-preparedness-link-${Date.now()}`,
    status,
    linked: status === "linked",
    readiness,
    preparednessLinkId:
      `DCG-REASONING-PREPAREDNESS-${Date.now()}`,
    preparedness,
    reason: readiness.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningPreparednessLinkHistory.push(result);

  return result;
}

export function listReasoningPreparednessLinkHistory():
  ReasoningPreparednessLinkResult[] {
  return [...reasoningPreparednessLinkHistory];
}

export function getLatestReasoningPreparednessLink():
  ReasoningPreparednessLinkResult | undefined {
  return reasoningPreparednessLinkHistory[
    reasoningPreparednessLinkHistory.length - 1
  ];
}

export function clearReasoningPreparednessLinkHistory():
  void {
  reasoningPreparednessLinkHistory.length = 0;
}

export function countReasoningPreparednessLinkResults():
  number {
  return reasoningPreparednessLinkHistory.length;
}

export function isReasoningLinkedToPreparedness():
  boolean {
  return (
    getLatestReasoningPreparednessLink()
      ?.linked ?? true
  );
}
