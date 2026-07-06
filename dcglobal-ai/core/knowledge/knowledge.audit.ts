/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Audit oficial da Camada
 * de Conhecimento Cognitivo.
 */

import { KnowledgeAudit } from "./knowledge.types";

const knowledgeAudits: KnowledgeAudit[] = [];

export function registerKnowledgeAudit(
  audit: KnowledgeAudit
): KnowledgeAudit {
  knowledgeAudits.push(audit);
  return audit;
}

export function listKnowledgeAudits(): KnowledgeAudit[] {
  return [...knowledgeAudits];
}

export function findKnowledgeAudit(
  id: string
): KnowledgeAudit | undefined {
  return knowledgeAudits.find(
    audit => audit.id === id
  );
}

export function listKnowledgeAuditsByActor(
  actor: string
): KnowledgeAudit[] {
  return knowledgeAudits.filter(
    audit => audit.actor === actor
  );
}

export function listSuccessfulKnowledgeAudits(): KnowledgeAudit[] {
  return knowledgeAudits.filter(
    audit => audit.success
  );
}

export function listFailedKnowledgeAudits(): KnowledgeAudit[] {
  return knowledgeAudits.filter(
    audit => !audit.success
  );
}

export function createKnowledgeAudit(
  action: string,
  knowledgeId: string,
  actor: string,
  success: boolean,
  metadata: Record<string, unknown> = {}
): KnowledgeAudit {
  const audit: KnowledgeAudit = {
    id: `knowledge-audit-${Date.now()}`,
    action,
    knowledgeId,
    actor,
    success,
    timestamp: new Date().toISOString(),
    metadata,
  };

  knowledgeAudits.push(audit);

  return audit;
}

export function clearKnowledgeAudits(): void {
  knowledgeAudits.length = 0;
}

export function countKnowledgeAudits(): number {
  return knowledgeAudits.length;
}
