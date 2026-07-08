/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Role oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  recognizeReasoningPrincipal,
} from "./reasoning.principal";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningRoleStatus =
  | "assigned"
  | "conditional"
  | "unassigned";

export interface ReasoningRoleResult {
  id: string;
  status: ReasoningRoleStatus;
  assigned: boolean;
  principal: ReturnType<
    typeof recognizeReasoningPrincipal
  >;
  roleId: string;
  role: string;
  reason: string;
  assignedAt: string;
}

const reasoningRoleHistory:
  ReasoningRoleResult[] = [];

export function assignReasoningRole(
  context: ReasoningPolicyContext
): ReasoningRoleResult {
  const principal =
    recognizeReasoningPrincipal(context);

  const status: ReasoningRoleStatus =
    principal.status === "anonymous"
      ? "unassigned"
      : principal.status === "conditional"
        ? "conditional"
        : "assigned";

  const role =
    (context.metadata?.role as string | undefined)
    ?? "reasoning-operator";

  const result: ReasoningRoleResult = {
    id: `reasoning-role-${Date.now()}`,
    status,
    assigned: status === "assigned",
    principal,
    roleId: `DCG-REASONING-ROLE-${Date.now()}`,
    role,
    reason: principal.reason,
    assignedAt: new Date().toISOString(),
  };

  reasoningRoleHistory.push(result);

  return result;
}

export function listReasoningRoleHistory():
  ReasoningRoleResult[] {
  return [...reasoningRoleHistory];
}

export function getLatestReasoningRole():
  ReasoningRoleResult | undefined {
  return reasoningRoleHistory[
    reasoningRoleHistory.length - 1
  ];
}

export function clearReasoningRoleHistory():
  void {
  reasoningRoleHistory.length = 0;
}

export function countReasoningRoleResults():
  number {
  return reasoningRoleHistory.length;
}

export function isReasoningRoleAssigned():
  boolean {
  return (
    getLatestReasoningRole()
      ?.assigned ?? true
  );
}
