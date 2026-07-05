/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Audit oficial da
 * Camada de Identidade Cognitiva.
 */

import { CognitiveIdentityAudit } from "./identity.types";

export const identityAudits: CognitiveIdentityAudit[] = [];

export function registerAudit(
  audit: CognitiveIdentityAudit
): CognitiveIdentityAudit {
  identityAudits.push(audit);
  return audit;
}

export function listAudits(): CognitiveIdentityAudit[] {
  return [...identityAudits];
}

export function findAudit(
  id: string
): CognitiveIdentityAudit | undefined {
  return identityAudits.find(
    audit => audit.id === id
  );
}

export function listAuditsByActor(
  actor: string
): CognitiveIdentityAudit[] {
  return identityAudits.filter(
    audit => audit.actor === actor
  );
}

export function listSuccessfulAudits(): CognitiveIdentityAudit[] {
  return identityAudits.filter(
    audit => audit.success
  );
}

export function listFailedAudits(): CognitiveIdentityAudit[] {
  return identityAudits.filter(
    audit => !audit.success
  );
}

export function createAudit(
  action: string,
  actor: string,
  resource: string,
  success: boolean
): CognitiveIdentityAudit {
  return registerAudit({
    id: `identity-audit-${Date.now()}`,
    action,
    actor,
    resource,
    success,
    timestamp: new Date().toISOString(),
  });
}

export function clearAudits(): void {
  identityAudits.length = 0;
}

export function countAudits(): number {
  return identityAudits.length;
}
