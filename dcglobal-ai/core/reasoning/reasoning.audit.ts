/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Audit oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningAudit,
} from "./reasoning.types";

const reasoningAudits: ReasoningAudit[] = [];

export function registerReasoningAudit(
  audit: ReasoningAudit
): ReasoningAudit {
  reasoningAudits.push(audit);
  return audit;
}

export function listReasoningAudits():
  ReasoningAudit[] {
  return [...reasoningAudits];
}

export function findReasoningAudit(
  id: string
): ReasoningAudit | undefined {
  return reasoningAudits.find(
    audit => audit.id === id
  );
}

export function listReasoningAuditsByActor(
  actor: string
): ReasoningAudit[] {
  return reasoningAudits.filter(
    audit => audit.actor === actor
  );
}

export function listSuccessfulReasoningAudits():
  ReasoningAudit[] {
  return reasoningAudits.filter(
    audit => audit.success
  );
}

export function listFailedReasoningAudits():
  ReasoningAudit[] {
  return reasoningAudits.filter(
    audit => !audit.success
  );
}

export function createReasoningAudit(
  action: string,
  reasoningId: string | undefined,
  actor: string,
  success: boolean,
  metadata: Record<string, unknown> = {}
): ReasoningAudit {
  const audit: ReasoningAudit = {
    id: `reasoning-audit-${Date.now()}`,
    action,
    reasoningId,
    actor,
    success,
    timestamp: new Date().toISOString(),
    metadata,
  };

  reasoningAudits.push(audit);

  return audit;
}

export function clearReasoningAudits(): void {
  reasoningAudits.length = 0;
}

export function countReasoningAudits(): number {
  return reasoningAudits.length;
}
