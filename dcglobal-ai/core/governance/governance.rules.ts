/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Regras oficiais da Governança Cognitiva.
 * Responsável por registrar, listar,
 * localizar e avaliar regras institucionais.
 */

import { GovernanceRule } from "./governance.types";

export const governanceRules: GovernanceRule[] = [];

export function registerRule(
  rule: GovernanceRule
): GovernanceRule {
  governanceRules.push(rule);
  return rule;
}

export function listRules(): GovernanceRule[] {
  return [...governanceRules];
}

export function findRule(
  id: string
): GovernanceRule | undefined {
  return governanceRules.find(
    rule => rule.id === id
  );
}

export function listEnabledRules(): GovernanceRule[] {
  return governanceRules.filter(
    rule => rule.enabled
  );
}

export function enableRule(id: string): boolean {
  const rule = findRule(id);

  if (!rule) {
    return false;
  }

  rule.enabled = true;
  return true;
}

export function disableRule(id: string): boolean {
  const rule = findRule(id);

  if (!rule) {
    return false;
  }

  rule.enabled = false;
  return true;
}

export function evaluateRule(
  rule: GovernanceRule,
  context: Record<string, unknown>
): boolean {
  if (!rule.enabled) {
    return false;
  }

  if (!rule.condition) {
    return true;
  }

  return Boolean(context[rule.condition]);
}

export function evaluateEnabledRules(
  context: Record<string, unknown>
): GovernanceRule[] {
  return listEnabledRules().filter(
    rule => evaluateRule(rule, context)
  );
}

export function seedDefaultRules(): GovernanceRule[] {
  registerRule({
    id: "rule-audit-critical",
    policyId: "policy-audit-required",
    name: "Audit Critical Operations",
    condition: "isCritical",
    action: "requireAudit",
    priority: "critical",
    enabled: true,
  });

  registerRule({
    id: "rule-approval-critical",
    policyId: "policy-critical-approval",
    name: "Require Critical Approval",
    condition: "isCritical",
    action: "requireApproval",
    priority: "critical",
    enabled: true,
  });

  registerRule({
    id: "rule-context-required",
    policyId: "policy-context-required",
    name: "Require Cognitive Context",
    condition: "hasContext",
    action: "validateContext",
    priority: "high",
    enabled: true,
  });

  return listRules();
}
