/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Operation Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToAction,
} from "./reasoning.action-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningOperationLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningOperationLinkResult {
  id: string;
  status: ReasoningOperationLinkStatus;
  linked: boolean;
  action: ReturnType<typeof linkReasoningToAction>;
  operationLinkId: string;
  operation: string;
  reason: string;
  linkedAt: string;
}

const reasoningOperationLinkHistory:
  ReasoningOperationLinkResult[] = [];

export function linkReasoningToOperation(
  context: ReasoningPolicyContext
): ReasoningOperationLinkResult {
  const action = linkReasoningToAction(context);

  const status: ReasoningOperationLinkStatus =
    action.status === "unlinked"
      ? "unlinked"
      : action.status === "conditional"
        ? "conditional"
        : "linked";

  const operation =
    (context.metadata?.operation as string | undefined)
    ?? "dcglobal-ai-cognitive-operation";

  const result: ReasoningOperationLinkResult = {
    id: `reasoning-operation-link-${Date.now()}`,
    status,
    linked: status === "linked",
    action,
    operationLinkId:
      `DCG-REASONING-OPERATION-${Date.now()}`,
    operation,
    reason: action.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningOperationLinkHistory.push(result);

  return result;
}

export function listReasoningOperationLinkHistory():
  ReasoningOperationLinkResult[] {
  return [...reasoningOperationLinkHistory];
}

export function getLatestReasoningOperationLink():
  ReasoningOperationLinkResult | undefined {
  return reasoningOperationLinkHistory[
    reasoningOperationLinkHistory.length - 1
  ];
}

export function clearReasoningOperationLinkHistory():
  void {
  reasoningOperationLinkHistory.length = 0;
}

export function countReasoningOperationLinkResults():
  number {
  return reasoningOperationLinkHistory.length;
}

export function isReasoningLinkedToOperation():
  boolean {
  return (
    getLatestReasoningOperationLink()
      ?.linked ?? true
  );
}
