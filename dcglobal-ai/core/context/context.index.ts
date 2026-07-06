/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Índice oficial da Camada
 * de Contexto Cognitivo.
 */

import {
  ContextIndex,
  ContextRecord,
} from "./context.types";

import { contextStore } from "./context.store";

const contextIndexes = new Map<string, ContextIndex>();

export function indexContext(
  record: ContextRecord
): ContextIndex {
  const index: ContextIndex = {
    id: record.id,
    recordId: record.id,
    keywords: [
      record.name,
      record.description,
      record.type,
      record.actor,
      record.location,
      record.organization,
    ].filter(Boolean) as string[],
    tags: [],
    score: 0,
    indexedAt: new Date().toISOString(),
  };

  contextIndexes.set(index.id, index);

  return index;
}

export function rebuildContextIndex(): void {
  contextIndexes.clear();

  for (const record of contextStore.list()) {
    indexContext(record);
  }
}

export function getContextIndex(
  id: string
): ContextIndex | undefined {
  return contextIndexes.get(id);
}

export function listContextIndexes(): ContextIndex[] {
  return Array.from(contextIndexes.values());
}

export function removeContextIndex(
  id: string
): boolean {
  return contextIndexes.delete(id);
}

export function clearContextIndexes(): void {
  contextIndexes.clear();
}

export function countContextIndexes(): number {
  return contextIndexes.size;
}
