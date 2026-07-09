/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Closure Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToFinalization,
} from "./reasoning.finalization-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningClosureLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningClosureLinkResult {
  id: string;
  status: ReasoningClosureLinkStatus;
  linked: boolean;
  finalization: ReturnType<
    typeof linkReasoningToFinalization
  >;
  closureLinkId: string;
  closure: string;
  reason: string;
  linkedAt: string;
}

const reasoningClosureLinkHistory:
  ReasoningClosureLinkResult[] = [];

export function linkReasoningToClosure(
  context: ReasoningPolicyContext
): ReasoningClosureLinkResult {
  const finalization =
    linkReasoningToFinalization(context);

  const status: ReasoningClosureLinkStatus =
    finalization.status === "unlinked"
      ? "unlinked"
      : finalization.status === "conditional"
        ? "conditional"
        : "linked";

  const closure =
    (context.metadata?.closure as string | undefined)
    ?? "dcglobal-ai-cognitive-closure";

  const result: ReasoningClosureLinkResult = {
    id: `reasoning-closure-link-${Date.now()}`,
    status,
    linked: status === "linked",
    finalization,
    closureLinkId:
      `DCG-REASONING-CLOSURE-${Date.now()}`,
    closure,
    reason: finalization.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningClosureLinkHistory.push(result);

  return result;
}

export function listReasoningClosureLinkHistory():
  ReasoningClosureLinkResult[] {
  return [...reasoningClosureLinkHistory];
}

export function getLatestReasoningClosureLink():
  ReasoningClosureLinkResult | undefined {
  return reasoningClosureLinkHistory[
    reasoningClosureLinkHistory.length - 1
  ];
}

export function clearReasoningClosureLinkHistory():
  void {
  reasoningClosureLinkHistory.length = 0;
}

export function countReasoningClosureLinkResults():
  number {
  return reasoningClosureLinkHistory.length;
}

export function isReasoningLinkedToClosure():
  boolean {
  return (
    getLatestReasoningClosureLink()
      ?.linked ?? true
  );
}
