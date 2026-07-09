/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Outcome Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToCompletion,
} from "./reasoning.completion-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningOutcomeLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningOutcomeLinkResult {
  id: string;
  status: ReasoningOutcomeLinkStatus;
  linked: boolean;
  completion: ReturnType<typeof linkReasoningToCompletion>;
  outcomeLinkId: string;
  outcome: string;
  reason: string;
  linkedAt: string;
}

const reasoningOutcomeLinkHistory:
  ReasoningOutcomeLinkResult[] = [];

export function linkReasoningToOutcome(
  context: ReasoningPolicyContext
): ReasoningOutcomeLinkResult {
  const completion = linkReasoningToCompletion(context);

  const status: ReasoningOutcomeLinkStatus =
    completion.status === "unlinked"
      ? "unlinked"
      : completion.status === "conditional"
        ? "conditional"
        : "linked";

  const outcome =
    (context.metadata?.outcome as string | undefined)
    ?? "dcglobal-ai-cognitive-outcome";

  const result: ReasoningOutcomeLinkResult = {
    id: `reasoning-outcome-link-${Date.now()}`,
    status,
    linked: status === "linked",
    completion,
    outcomeLinkId:
      `DCG-REASONING-OUTCOME-${Date.now()}`,
    outcome,
    reason: completion.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningOutcomeLinkHistory.push(result);

  return result;
}

export function listReasoningOutcomeLinkHistory():
  ReasoningOutcomeLinkResult[] {
  return [...reasoningOutcomeLinkHistory];
}

export function getLatestReasoningOutcomeLink():
  ReasoningOutcomeLinkResult | undefined {
  return reasoningOutcomeLinkHistory[
    reasoningOutcomeLinkHistory.length - 1
  ];
}

export function clearReasoningOutcomeLinkHistory():
  void {
  reasoningOutcomeLinkHistory.length = 0;
}

export function countReasoningOutcomeLinkResults():
  number {
  return reasoningOutcomeLinkHistory.length;
}

export function isReasoningLinkedToOutcome():
  boolean {
  return (
    getLatestReasoningOutcomeLink()
      ?.linked ?? true
  );
}
