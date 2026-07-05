/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Auditoria oficial da Governança Cognitiva.
 * Responsável por registrar, listar,
 * localizar e consultar trilhas de auditoria.
 */

import { GovernanceAudit } from "./governance.types";

export const governanceAudits: GovernanceAudit[] = [];

export function registerAudit(
  audit: GovernanceAudit
): GovernanceAudit {
  governanceAudits.push(audit);
  return audit;
}

export function listAudits(): GovernanceAudit[] {
  return [...governanceAudits];
}

export function findAudit(
  id: string
): GovernanceAudit | undefined {
  return governanceAudits.find(
    audit => audit.id === id
  );
}

export function listAuditsByActor(
  actor: string
): GovernanceAudit[] {
  return governanceAudits.filter(
    audit => audit.actor === actor
  );
}

export function listAuditsByAction(
  action: string
): GovernanceAudit[] {
  return governanceAudits.filter(
    audit => audit.action === action
  );
}

export function listSuccessfulAudits(): GovernanceAudit[] {
  return governanceAudits.filter(
    audit => audit.success
  );
}

export function listFailedAudits(): GovernanceAudit[] {
  return governanceAudits.filter(
    audit => !audit.success
  );
}

export function createAudit(
  action: string,
  actor: string,
  scope: GovernanceAudit["scope"],
  success: boolean
): GovernanceAudit {
  return registerAudit({
    id: `audit-${Date.now()}`,
    action,
    actor,
    scope,
    success,
    timestamp: new Date().toISOString(),
  });
}

export function clearAudits(): void {
  governanceAudits.length = 0;
}

export function countAudits(): number {
  return governanceAudits.length;
}
