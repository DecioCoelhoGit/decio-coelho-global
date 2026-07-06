/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Index oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KnowledgeIndex,
  KnowledgeRecord,
} from "./knowledge.types";

import { knowledgeStore } from "./knowledge.store";

const knowledgeIndexes =
  new Map<string, KnowledgeIndex>();

export function indexKnowledge(
  record: KnowledgeRecord
): KnowledgeIndex {
  const index: KnowledgeIndex = {
    id: record.id,
    knowledgeId: record.id,
    keywords: [
      record.title,
      record.description,
      record.type,
      record.source,
      ...record.tags,
      ...record.keywords,
    ].filter(Boolean) as string[],
    score: record.relevance,
  };

  knowledgeIndexes.set(index.id, index);

  return index;
}

export function rebuildKnowledgeIndex(): void {
  knowledgeIndexes.clear();

  for (const record of knowledgeStore.list()) {
    indexKnowledge(record);
  }
}

export function getKnowledgeIndex(
  id: string
): KnowledgeIndex | undefined {
  return knowledgeIndexes.get(id);
}

export function listKnowledgeIndexes():
  KnowledgeIndex[] {
  return Array.from(knowledgeIndexes.values());
}

export function removeKnowledgeIndex(
  id: string
): boolean {
  return knowledgeIndexes.delete(id);
}

export function clearKnowledgeIndexes(): void {
  knowledgeIndexes.clear();
}

export function countKnowledgeIndexes(): number {
  return knowledgeIndexes.size;
}
