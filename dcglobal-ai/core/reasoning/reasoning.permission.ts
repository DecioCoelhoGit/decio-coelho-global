/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Permission oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  grantReasoningAuthorization,
} from "./reasoning.authorization";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningPermissionStatus =
  | "permitted"
  | "conditional"
  | "rejected";

export interface ReasoningPermissionResult {
  id: string;
  status: ReasoningPermissionStatus;
  permitted: boolean;
  authorization: ReturnType<
    typeof grantReasoningAuthorization
  >;
  permissionId: string;
  reason: string;
  permittedAt: string;
}

const reasoningPermissionHistory:
  ReasoningPermissionResult[] = [];

export function permitReasoning(
  context: ReasoningPolicyContext
): ReasoningPermissionResult {
  const authorization =
    grantReasoningAuthorization(context);

  const status: ReasoningPermissionStatus =
    authorization.status === "denied"
      ? "rejected"
      : authorization.status === "conditional"
        ? "conditional"
        : "permitted";

  const result: ReasoningPermissionResult = {
    id: `reasoning-permission-${Date.now()}`,
    status,
    permitted: status === "permitted",
    authorization,
    permissionId: `DCG-REASONING-PERM-${Date.now()}`,
    reason: authorization.reason,
    permittedAt: new Date().toISOString(),
  };

  reasoningPermissionHistory.push(result);

  return result;
}

export function listReasoningPermissionHistory():
  ReasoningPermissionResult[] {
  return [...reasoningPermissionHistory];
}

export function getLatestReasoningPermission():
  ReasoningPermissionResult | undefined {
  return reasoningPermissionHistory[
    reasoningPermissionHistory.length - 1
  ];
}

export function clearReasoningPermissionHistory():
  void {
  reasoningPermissionHistory.length = 0;
}

export function countReasoningPermissionResults():
  number {
  return reasoningPermissionHistory.length;
}

export function isReasoningPermitted():
  boolean {
  return (
    getLatestReasoningPermission()
      ?.permitted ?? true
  );
}
