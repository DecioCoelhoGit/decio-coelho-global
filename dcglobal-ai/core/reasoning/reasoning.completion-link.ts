/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Completion Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToClosure,
} from "./reasoning.closure-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCompletionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningCompletionLinkResult {
  id: string;
  status: ReasoningCompletionLinkStatus;
  linked: boolean;
  closure: ReturnType<typeof linkReasoningToClosure>;
  completionLinkId: string;
  completion: string;
  reason: string;
  linkedAt: string;
}

const reasoningCompletionLinkHistory:
  ReasoningCompletionLinkResult[] = [];

export function linkReasoningToCompletion(
  context: ReasoningPolicyContext
): ReasoningCompletionLinkResult {
  const closure = linkReasoningToClosure(context);

  const status: ReasoningCompletionLinkStatus =
    closure.status === "unlinked"
      ? "unlinked"
      : closure.status === "conditional"
        ? "conditional"
        : "linked";

  const completion =
    (context.metadata?.completion as string | undefined)
    ?? "dcglobal-ai-cognitive-completion";

  const result: ReasoningCompletionLinkResult = {
    id: `reasoning-completion-link-${Date.now()}`,
    status,
    linked: status === "linked",
    closure,
    completionLinkId:
      `DCG-REASONING-COMPLETION-${Date.now()}`,
    completion,
    reason: closure.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningCompletionLinkHistory.push(result);

  return result;
}

export function listReasoningCompletionLinkHistory():
  ReasoningCompletionLinkResult[] {
  return [...reasoningCompletionLinkHistory];
}

export function getLatestReasoningCompletionLink():
  ReasoningCompletionLinkResult | undefined {
  return reasoningCompletionLinkHistory[
    reasoningCompletionLinkHistory.length - 1
  ];
}

export function clearReasoningCompletionLinkHistory():
  void {
  reasoningCompletionLinkHistory.length = 0;
}

export function countReasoningCompletionLinkResults():
  number {
  return reasoningCompletionLinkHistory.length;
}

export function isReasoningLinkedToCompletion():
  boolean {
  return (
    getLatestReasoningCompletionLink()
      ?.linked ?? true
  );
}
