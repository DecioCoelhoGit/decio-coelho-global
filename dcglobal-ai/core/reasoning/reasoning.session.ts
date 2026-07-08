/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Session oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  allowReasoningAccess,
} from "./reasoning.access";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningSessionStatus =
  | "open"
  | "conditional"
  | "closed";

export interface ReasoningSessionResult {
  id: string;
  status: ReasoningSessionStatus;
  active: boolean;
  access: ReturnType<typeof allowReasoningAccess>;
  sessionId: string;
  reason: string;
  startedAt: string;
}

const reasoningSessionHistory:
  ReasoningSessionResult[] = [];

export function startReasoningSession(
  context: ReasoningPolicyContext
): ReasoningSessionResult {
  const access = allowReasoningAccess(context);

  const status: ReasoningSessionStatus =
    access.status === "denied"
      ? "closed"
      : access.status === "conditional"
        ? "conditional"
        : "open";

  const result: ReasoningSessionResult = {
    id: `reasoning-session-${Date.now()}`,
    status,
    active: status === "open",
    access,
    sessionId: `DCG-REASONING-SESSION-${Date.now()}`,
    reason: access.reason,
    startedAt: new Date().toISOString(),
  };

  reasoningSessionHistory.push(result);

  return result;
}

export function listReasoningSessionHistory():
  ReasoningSessionResult[] {
  return [...reasoningSessionHistory];
}

export function getLatestReasoningSession():
  ReasoningSessionResult | undefined {
  return reasoningSessionHistory[
    reasoningSessionHistory.length - 1
  ];
}

export function clearReasoningSessionHistory():
  void {
  reasoningSessionHistory.length = 0;
}

export function countReasoningSessionResults():
  number {
  return reasoningSessionHistory.length;
}

export function isReasoningSessionActive():
  boolean {
  return (
    getLatestReasoningSession()
      ?.active ?? true
  );
  }
