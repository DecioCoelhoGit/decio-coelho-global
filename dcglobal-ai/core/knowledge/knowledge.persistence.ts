/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Persistence oficial da Camada
 * de Conhecimento Cognitivo.
 */

import { KnowledgeRecord } from "./knowledge.types";

let persistedKnowledge: KnowledgeRecord[] = [];

export function persistKnowledge(
  records: KnowledgeRecord[]
): KnowledgeRecord[] {
  persistedKnowledge = [...records];
  return persistedKnowledge;
}

export function loadPersistedKnowledge(): KnowledgeRecord[] {
  return [...persistedKnowledge];
}

export function appendPersistedKnowledge(
  record: KnowledgeRecord
): KnowledgeRecord {
  persistedKnowledge.push(record);
  return record;
}

export function findPersistedKnowledge(
  id: string
): KnowledgeRecord | undefined {
  return persistedKnowledge.find(
    record => record.id === id
  );
}

export function removePersistedKnowledge(
  id: string
): boolean {
  const index = persistedKnowledge.findIndex(
    record => record.id === id
  );

  if (index === -1) {
    return false;
  }

  persistedKnowledge.splice(index, 1);
  return true;
}

export function clearPersistedKnowledge(): void {
  persistedKnowledge = [];
}

export function countPersistedKnowledge(): number {
  return persistedKnowledge.length;
}
