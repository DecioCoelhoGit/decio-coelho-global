/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Result Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToExecution,
} from "./reasoning.execution-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningResultLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningResultLinkResult {
  id: string;
  status: ReasoningResultLinkStatus;
  linked: boolean;
  execution: ReturnType<typeof linkReasoningToExecution>;
  resultLinkId: string;
  result: string;
  reason: string;
  linkedAt: string;
}

const reasoningResultLinkHistory:
  ReasoningResultLinkResult[] = [];

export function linkReasoningToResult(
  context: ReasoningPolicyContext
): ReasoningResultLinkResult {
  const execution = linkReasoningToExecution(context);

  const status: ReasoningResultLinkStatus =
    execution.status === "unlinked"
      ? "unlinked"
      : execution.status === "conditional"
        ? "conditional"
        : "linked";

  const resultValue =
    (context.metadata?.result as string | undefined)
    ?? "dcglobal-ai-cognitive-result";

  const result: ReasoningResultLinkResult = {
    id: `reasoning-result-link-${Date.now()}`,
    status,
    linked: status === "linked",
    execution,
    resultLinkId:
      `DCG-REASONING-RESULT-${Date.now()}`,
    result: resultValue,
    reason: execution.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningResultLinkHistory.push(result);

  return result;
}

export function listReasoningResultLinkHistory():
  ReasoningResultLinkResult[] {
  return [...reasoningResultLinkHistory];
}

export function getLatestReasoningResultLink():
  ReasoningResultLinkResult | undefined {
  return reasoningResultLinkHistory[
    reasoningResultLinkHistory.length - 1
  ];
}

export function clearReasoningResultLinkHistory():
  void {
  reasoningResultLinkHistory.length = 0;
}

export function countReasoningResultLinkResults():
  number {
  return reasoningResultLinkHistory.length;
}

export function isReasoningLinkedToResult():
  boolean {
  return (
    getLatestReasoningResultLink()
      ?.linked ?? true
  );
}
