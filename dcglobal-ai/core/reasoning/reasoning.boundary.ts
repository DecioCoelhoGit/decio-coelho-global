/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Boundary oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  defineReasoningScope,
} from "./reasoning.scope";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningBoundaryStatus =
  | "inside-boundary"
  | "conditional"
  | "outside-boundary";

export interface ReasoningBoundaryResult {
  id: string;
  status: ReasoningBoundaryStatus;
  inside: boolean;
  scope: ReturnType<typeof defineReasoningScope>;
  boundaryId: string;
  boundary: string;
  reason: string;
  checkedAt: string;
}

const reasoningBoundaryHistory:
  ReasoningBoundaryResult[] = [];

export function checkReasoningBoundary(
  context: ReasoningPolicyContext
): ReasoningBoundaryResult {
  const scope = defineReasoningScope(context);

  const status: ReasoningBoundaryStatus =
    scope.status === "out-of-scope"
      ? "outside-boundary"
      : scope.status === "conditional"
        ? "conditional"
        : "inside-boundary";

  const boundary =
    (context.metadata?.boundary as string | undefined)
    ?? "dcglobal-ai-reasoning-boundary";

  const result: ReasoningBoundaryResult = {
    id: `reasoning-boundary-${Date.now()}`,
    status,
    inside: status === "inside-boundary",
    scope,
    boundaryId: `DCG-REASONING-BOUNDARY-${Date.now()}`,
    boundary,
    reason: scope.reason,
    checkedAt: new Date().toISOString(),
  };

  reasoningBoundaryHistory.push(result);

  return result;
}

export function listReasoningBoundaryHistory():
  ReasoningBoundaryResult[] {
  return [...reasoningBoundaryHistory];
}

export function getLatestReasoningBoundary():
  ReasoningBoundaryResult | undefined {
  return reasoningBoundaryHistory[
    reasoningBoundaryHistory.length - 1
  ];
}

export function clearReasoningBoundaryHistory():
  void {
  reasoningBoundaryHistory.length = 0;
}

export function countReasoningBoundaryResults():
  number {
  return reasoningBoundaryHistory.length;
}

export function isReasoningInsideBoundary():
  boolean {
  return (
    getLatestReasoningBoundary()
      ?.inside ?? true
  );
}
