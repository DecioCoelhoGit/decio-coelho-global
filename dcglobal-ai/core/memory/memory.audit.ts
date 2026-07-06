/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Audit oficial da Camada
 * de Memória Cognitiva.
 */

import {
  MemoryAudit,
} from "./memory.types";

const memoryAudits: MemoryAudit[] = [];

export function registerMemoryAudit(
  audit: MemoryAudit
): MemoryAudit {
  memoryAudits.push(audit);
  return audit;
}

export function listMemoryAudits(): MemoryAudit[] {
  return [...memoryAudits];
}

export function findMemoryAudit(
  id: string
): MemoryAudit | undefined {
  return memoryAudits.find(
    audit => audit.id === id
  );
}

export function listAuditsByActor(
  actor: string
): MemoryAudit[] {
  return memoryAudits.filter(
    audit => audit.actor === actor
  );
}

export function listSuccessfulAudits(): MemoryAudit[] {
  return memoryAudits.filter(
    audit => audit.success
  );
}

export function listFailedAudits(): MemoryAudit[] {
  return memoryAudits.filter(
    audit => !audit.success
  );
}

export function createAudit(
  action: string,
  recordId: string,
  actor: string,
  success: boolean,
  metadata: Record<string, unknown> = {}
): MemoryAudit {
  const audit: MemoryAudit = {
    id: Date.now().toString(),
    action,
    recordId,
    actor,
    success,
    timestamp: new Date().toISOString(),
    metadata,
  };

  memoryAudits.push(audit);

  return audit;
}

export function clearMemoryAudits(): void {
  memoryAudits.length = 0;
}

export function countMemoryAudits(): number {
  return memoryAudits.length;
}
