/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Policy oficial da Camada
 * de Raciocínio Cognitivo.
 */

export type ReasoningPolicyStatus =
  | "enabled"
  | "disabled";

export interface ReasoningPolicyRule {
  id: string;
  name: string;
  enabled: boolean;
  priority: number;
  description: string;
  metadata?: Record<string, unknown>;
}

const reasoningPolicyRules:
  ReasoningPolicyRule[] = [];

let reasoningPolicyStatus:
  ReasoningPolicyStatus = "enabled";

export function enableReasoningPolicy():
  ReasoningPolicyStatus {
  reasoningPolicyStatus = "enabled";
  return reasoningPolicyStatus;
}

export function disableReasoningPolicy():
  ReasoningPolicyStatus {
  reasoningPolicyStatus = "disabled";
  return reasoningPolicyStatus;
}

export function getReasoningPolicyStatus():
  ReasoningPolicyStatus {
  return reasoningPolicyStatus;
}

export function registerReasoningPolicyRule(
  rule: ReasoningPolicyRule
): ReasoningPolicyRule {
  reasoningPolicyRules.push(rule);
  return rule;
}

export function listReasoningPolicyRules():
  ReasoningPolicyRule[] {
  return [...reasoningPolicyRules];
}

export function listEnabledReasoningPolicyRules():
  ReasoningPolicyRule[] {
  return reasoningPolicyRules
    .filter(rule => rule.enabled)
    .sort((a, b) => a.priority - b.priority);
}

export function findReasoningPolicyRule(
  id: string
): ReasoningPolicyRule | undefined {
  return reasoningPolicyRules.find(
    rule => rule.id === id
  );
}

export function removeReasoningPolicyRule(
  id: string
): boolean {
  const index =
    reasoningPolicyRules.findIndex(
      rule => rule.id === id
    );

  if (index === -1) {
    return false;
  }

  reasoningPolicyRules.splice(index, 1);
  return true;
}

export function clearReasoningPolicyRules():
  void {
  reasoningPolicyRules.length = 0;
}

export function countReasoningPolicyRules():
  number {
  return reasoningPolicyRules.length;
}

export function isReasoningPolicyEnabled():
  boolean {
  return reasoningPolicyStatus === "enabled";
}
