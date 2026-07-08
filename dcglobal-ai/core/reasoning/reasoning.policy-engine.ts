/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Policy Engine oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningPolicyRule,
  isReasoningPolicyEnabled,
  listEnabledReasoningPolicyRules,
} from "./reasoning.policy";

export type ReasoningPolicyDecisionStatus =
  | "approved"
  | "restricted"
  | "blocked";

export interface ReasoningPolicyContext {
  action: string;
  source?: string;
  priority?: number;
  metadata?: Record<string, unknown>;
}

export interface ReasoningPolicyDecision {
  id: string;
  status: ReasoningPolicyDecisionStatus;
  allowed: boolean;
  reason: string;
  appliedRules: ReasoningPolicyRule[];
  decidedAt: string;
}

const reasoningPolicyDecisions:
  ReasoningPolicyDecision[] = [];

export function evaluateReasoningPolicy(
  context: ReasoningPolicyContext
): ReasoningPolicyDecision {
  if (!isReasoningPolicyEnabled()) {
    const decision: ReasoningPolicyDecision = {
      id: `reasoning-policy-decision-${Date.now()}`,
      status: "restricted",
      allowed: true,
      reason:
        "Reasoning policy disabled; operation allowed with restriction.",
      appliedRules: [],
      decidedAt: new Date().toISOString(),
    };

    reasoningPolicyDecisions.push(decision);
    return decision;
  }

  const rules =
    listEnabledReasoningPolicyRules();

  const blockingRules =
    rules.filter(rule =>
      rule.metadata?.block === true
    );

  const restrictedRules =
    rules.filter(rule =>
      rule.metadata?.restrict === true
    );

  const status:
    ReasoningPolicyDecisionStatus =
    blockingRules.length > 0
      ? "blocked"
      : restrictedRules.length > 0
        ? "restricted"
        : "approved";

  const decision: ReasoningPolicyDecision = {
    id: `reasoning-policy-decision-${Date.now()}`,
    status,
    allowed: status !== "blocked",
    reason:
      status === "blocked"
        ? "Reasoning operation blocked by active policy rule."
        : status === "restricted"
          ? "Reasoning operation allowed with policy restriction."
          : "Reasoning operation approved by policy engine.",
    appliedRules:
      status === "approved"
        ? rules
        : [...blockingRules, ...restrictedRules],
    decidedAt: new Date().toISOString(),
  };

  reasoningPolicyDecisions.push(decision);

  return decision;
}

export function listReasoningPolicyDecisions():
  ReasoningPolicyDecision[] {
  return [...reasoningPolicyDecisions];
}

export function getLatestReasoningPolicyDecision():
  ReasoningPolicyDecision | undefined {
  return reasoningPolicyDecisions[
    reasoningPolicyDecisions.length - 1
  ];
}

export function clearReasoningPolicyDecisions():
  void {
  reasoningPolicyDecisions.length = 0;
}

export function countReasoningPolicyDecisions():
  number {
  return reasoningPolicyDecisions.length;
}
