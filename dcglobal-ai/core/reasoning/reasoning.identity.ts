/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Identity oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  startReasoningSession,
} from "./reasoning.session";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningIdentityStatus =
  | "identified"
  | "conditional"
  | "unknown";

export interface ReasoningIdentityResult {
  id: string;
  status: ReasoningIdentityStatus;
  identified: boolean;
  session: ReturnType<typeof startReasoningSession>;
  identityId: string;
  actor?: string;
  source?: string;
  reason: string;
  identifiedAt: string;
}

const reasoningIdentityHistory:
  ReasoningIdentityResult[] = [];

export function identifyReasoning(
  context: ReasoningPolicyContext
): ReasoningIdentityResult {
  const session = startReasoningSession(context);

  const status: ReasoningIdentityStatus =
    session.status === "closed"
      ? "unknown"
      : session.status === "conditional"
        ? "conditional"
        : "identified";

  const result: ReasoningIdentityResult = {
    id: `reasoning-identity-${Date.now()}`,
    status,
    identified: status === "identified",
    session,
    identityId: `DCG-REASONING-ID-${Date.now()}`,
    actor: context.metadata?.actor as string | undefined,
    source: context.source,
    reason: session.reason,
    identifiedAt: new Date().toISOString(),
  };

  reasoningIdentityHistory.push(result);

  return result;
}

export function listReasoningIdentityHistory():
  ReasoningIdentityResult[] {
  return [...reasoningIdentityHistory];
}

export function getLatestReasoningIdentity():
  ReasoningIdentityResult | undefined {
  return reasoningIdentityHistory[
    reasoningIdentityHistory.length - 1
  ];
}

export function clearReasoningIdentityHistory():
  void {
  reasoningIdentityHistory.length = 0;
}

export function countReasoningIdentityResults():
  number {
  return reasoningIdentityHistory.length;
}

export function isReasoningIdentified():
  boolean {
  return (
    getLatestReasoningIdentity()
      ?.identified ?? true
  );
}
