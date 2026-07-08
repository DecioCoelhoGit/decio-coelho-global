/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Access oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  permitReasoning,
} from "./reasoning.permission";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAccessStatus =
  | "allowed"
  | "conditional"
  | "denied";

export interface ReasoningAccessResult {
  id: string;
  status: ReasoningAccessStatus;
  allowed: boolean;
  permission: ReturnType<typeof permitReasoning>;
  accessId: string;
  reason: string;
  accessedAt: string;
}

const reasoningAccessHistory:
  ReasoningAccessResult[] = [];

export function allowReasoningAccess(
  context: ReasoningPolicyContext
): ReasoningAccessResult {
  const permission = permitReasoning(context);

  const status: ReasoningAccessStatus =
    permission.status === "rejected"
      ? "denied"
      : permission.status === "conditional"
        ? "conditional"
        : "allowed";

  const result: ReasoningAccessResult = {
    id: `reasoning-access-${Date.now()}`,
    status,
    allowed: status === "allowed",
    permission,
    accessId: `DCG-REASONING-ACCESS-${Date.now()}`,
    reason: permission.reason,
    accessedAt: new Date().toISOString(),
  };

  reasoningAccessHistory.push(result);

  return result;
}

export function listReasoningAccessHistory():
  ReasoningAccessResult[] {
  return [...reasoningAccessHistory];
}

export function getLatestReasoningAccess():
  ReasoningAccessResult | undefined {
  return reasoningAccessHistory[
    reasoningAccessHistory.length - 1
  ];
}

export function clearReasoningAccessHistory():
  void {
  reasoningAccessHistory.length = 0;
}

export function countReasoningAccessResults():
  number {
  return reasoningAccessHistory.length;
}

export function isReasoningAccessAllowed():
  boolean {
  return (
    getLatestReasoningAccess()
      ?.allowed ?? true
  );
}
