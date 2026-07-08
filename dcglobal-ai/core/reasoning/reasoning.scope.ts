/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Scope oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  assignReasoningRole,
} from "./reasoning.role";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningScopeStatus =
  | "scoped"
  | "conditional"
  | "out-of-scope";

export interface ReasoningScopeResult {
  id: string;
  status: ReasoningScopeStatus;
  scoped: boolean;
  role: ReturnType<typeof assignReasoningRole>;
  scopeId: string;
  scope: string;
  reason: string;
  scopedAt: string;
}

const reasoningScopeHistory:
  ReasoningScopeResult[] = [];

export function defineReasoningScope(
  context: ReasoningPolicyContext
): ReasoningScopeResult {
  const role = assignReasoningRole(context);

  const status: ReasoningScopeStatus =
    role.status === "unassigned"
      ? "out-of-scope"
      : role.status === "conditional"
        ? "conditional"
        : "scoped";

  const scope =
    (context.metadata?.scope as string | undefined)
    ?? "cognitive-reasoning";

  const result: ReasoningScopeResult = {
    id: `reasoning-scope-${Date.now()}`,
    status,
    scoped: status === "scoped",
    role,
    scopeId: `DCG-REASONING-SCOPE-${Date.now()}`,
    scope,
    reason: role.reason,
    scopedAt: new Date().toISOString(),
  };

  reasoningScopeHistory.push(result);

  return result;
}

export function listReasoningScopeHistory():
  ReasoningScopeResult[] {
  return [...reasoningScopeHistory];
}

export function getLatestReasoningScope():
  ReasoningScopeResult | undefined {
  return reasoningScopeHistory[
    reasoningScopeHistory.length - 1
  ];
}

export function clearReasoningScopeHistory():
  void {
  reasoningScopeHistory.length = 0;
}

export function countReasoningScopeResults():
  number {
  return reasoningScopeHistory.length;
}

export function isReasoningScoped():
  boolean {
  return (
    getLatestReasoningScope()
      ?.scoped ?? true
  );
}
