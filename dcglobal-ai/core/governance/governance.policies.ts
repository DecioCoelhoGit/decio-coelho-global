/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Políticas oficiais da Governança Cognitiva.
 * Responsável por definir, registrar,
 * listar e validar políticas institucionais.
 */

import { GovernancePolicy } from "./governance.types";

export const governancePolicies: GovernancePolicy[] = [];

export function registerPolicy(
  policy: GovernancePolicy
): GovernancePolicy {
  governancePolicies.push(policy);
  return policy;
}

export function listPolicies(): GovernancePolicy[] {
  return [...governancePolicies];
}

export function findPolicy(
  id: string
): GovernancePolicy | undefined {
  return governancePolicies.find(
    policy => policy.id === id
  );
}

export function enablePolicy(id: string): boolean {
  const policy = findPolicy(id);

  if (!policy) {
    return false;
  }

  policy.enabled = true;
  policy.updatedAt = new Date().toISOString();

  return true;
}

export function disablePolicy(id: string): boolean {
  const policy = findPolicy(id);

  if (!policy) {
    return false;
  }

  policy.enabled = false;
  policy.updatedAt = new Date().toISOString();

  return true;
}

export function listEnabledPolicies(): GovernancePolicy[] {
  return governancePolicies.filter(
    policy => policy.enabled
  );
}

export function seedDefaultPolicies(): GovernancePolicy[] {
  const now = new Date().toISOString();

  registerPolicy({
    id: "policy-audit-required",
    name: "Audit Required Policy",
    scope: "system",
    description:
      "Toda operação crítica deve possuir registro de auditoria.",
    enabled: true,
    version: "1.0.0",
    createdAt: now,
    updatedAt: now,
  });

  registerPolicy({
    id: "policy-critical-approval",
    name: "Critical Approval Policy",
    scope: "security",
    description:
      "Ações críticas exigem aprovação explícita antes da execução.",
    enabled: true,
    version: "1.0.0",
    createdAt: now,
    updatedAt: now,
  });

  registerPolicy({
    id: "policy-context-required",
    name: "Context Required Policy",
    scope: "context",
    description:
      "Toda decisão cognitiva deve possuir contexto associado.",
    enabled: true,
    version: "1.0.0",
    createdAt: now,
    updatedAt: now,
  });

  return listPolicies();
}
