/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Audit oficial da Camada
 * de Contexto Cognitivo.
 */

import { ContextAudit } from "./context.types";

const contextAudits: ContextAudit[] = [];

export function registerContextAudit(
  audit: ContextAudit
): ContextAudit {
  contextAudits.push(audit);
  return audit;
}

export function listContextAudits(): ContextAudit[] {
  return [...contextAudits];
}

export function findContextAudit(
  id: string
): ContextAudit | undefined {
  return contextAudits.find(
    audit => audit.id === id
  );
}

export function listContextAuditsByActor(
  actor: string
): ContextAudit[] {
  return contextAudits.filter(
    audit => audit.actor === actor
  );
}

export function listSuccessfulContextAudits(): ContextAudit[] {
  return contextAudits.filter(
    audit => audit.success
  );
}

export function listFailedContextAudits(): ContextAudit[] {
  return contextAudits.filter(
    audit => !audit.success
  );
}

export function createContextAudit(
  action: string,
  contextId: string,
  actor: string,
  success: boolean,
  metadata: Record<string, unknown> = {}
): ContextAudit {
  const audit: ContextAudit = {
    id: `context-audit-${Date.now()}`,
    action,
    contextId,
    actor,
    success,
    timestamp: new Date().toISOString(),
    metadata,
  };

  contextAudits.push(audit);

  return audit;
}

export function clearContextAudits(): void {
  contextAudits.length = 0;
}

export function countContextAudits(): number {
  return contextAudits.length;
}
