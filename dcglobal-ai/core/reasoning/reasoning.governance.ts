/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Governance oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  governReasoning,
} from "./reasoning.governor";

import {
  evaluateReasoningPolicy,
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningGovernanceStatus =
  | "approved"
  | "restricted"
  | "blocked";

export interface ReasoningGovernanceDecision {
  id: string;
  status: ReasoningGovernanceStatus;
  allowed: boolean;
  governor: ReturnType<typeof governReasoning>;
  policy: ReturnType<typeof evaluateReasoningPolicy>;
  reason: string;
  governedAt: string;
}

const reasoningGovernanceHistory:
  ReasoningGovernanceDecision[] = [];

export function governReasoningOperation(
  context: ReasoningPolicyContext
): ReasoningGovernanceDecision {
  const governor = governReasoning();
  const policy = evaluateReasoningPolicy(context);

  const allowed =
    governor.allowed && policy.allowed;

  const status: ReasoningGovernanceStatus =
    !allowed
      ? "blocked"
      : governor.status === "restricted" ||
        policy.status === "restricted"
        ? "restricted"
        : "approved";

  const decision: ReasoningGovernanceDecision = {
    id: `reasoning-governance-${Date.now()}`,
    status,
    allowed,
    governor,
    policy,
    reason: `${governor.reason} ${policy.reason}`,
    governedAt: new Date().toISOString(),
  };

  reasoningGovernanceHistory.push(decision);

  return decision;
}

export function listReasoningGovernanceHistory():
  ReasoningGovernanceDecision[] {
  return [...reasoningGovernanceHistory];
}

export function getLatestReasoningGovernanceDecision():
  ReasoningGovernanceDecision | undefined {
  return reasoningGovernanceHistory[
    reasoningGovernanceHistory.length - 1
  ];
}

export function clearReasoningGovernanceHistory():
  void {
  reasoningGovernanceHistory.length = 0;
}

export function countReasoningGovernanceDecisions():
  number {
  return reasoningGovernanceHistory.length;
}

export function isReasoningGovernanceAllowed():
  boolean {
  return (
    getLatestReasoningGovernanceDecision()
      ?.allowed ?? true
  );
}
