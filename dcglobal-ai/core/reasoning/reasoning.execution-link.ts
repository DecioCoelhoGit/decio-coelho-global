/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Execution Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToOperation,
} from "./reasoning.operation-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningExecutionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningExecutionLinkResult {
  id: string;
  status: ReasoningExecutionLinkStatus;
  linked: boolean;
  operation: ReturnType<typeof linkReasoningToOperation>;
  executionLinkId: string;
  execution: string;
  reason: string;
  linkedAt: string;
}

const reasoningExecutionLinkHistory:
  ReasoningExecutionLinkResult[] = [];

export function linkReasoningToExecution(
  context: ReasoningPolicyContext
): ReasoningExecutionLinkResult {
  const operation = linkReasoningToOperation(context);

  const status: ReasoningExecutionLinkStatus =
    operation.status === "unlinked"
      ? "unlinked"
      : operation.status === "conditional"
        ? "conditional"
        : "linked";

  const execution =
    (context.metadata?.execution as string | undefined)
    ?? "dcglobal-ai-cognitive-execution";

  const result: ReasoningExecutionLinkResult = {
    id: `reasoning-execution-link-${Date.now()}`,
    status,
    linked: status === "linked",
    operation,
    executionLinkId:
      `DCG-REASONING-EXECUTION-${Date.now()}`,
    execution,
    reason: operation.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningExecutionLinkHistory.push(result);

  return result;
}

export function listReasoningExecutionLinkHistory():
  ReasoningExecutionLinkResult[] {
  return [...reasoningExecutionLinkHistory];
}

export function getLatestReasoningExecutionLink():
  ReasoningExecutionLinkResult | undefined {
  return reasoningExecutionLinkHistory[
    reasoningExecutionLinkHistory.length - 1
  ];
}

export function clearReasoningExecutionLinkHistory():
  void {
  reasoningExecutionLinkHistory.length = 0;
}

export function countReasoningExecutionLinkResults():
  number {
  return reasoningExecutionLinkHistory.length;
}

export function isReasoningLinkedToExecution():
  boolean {
  return (
    getLatestReasoningExecutionLink()
      ?.linked ?? true
  );
}
