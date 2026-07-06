/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Índice oficial da Camada
 * de Memória Cognitiva.
 */

import {
  MemoryIndex,
  MemoryRecord,
} from "./memory.types";

import { memoryStore } from "./memory.store";

const memoryIndexes = new Map<string, MemoryIndex>();

export function indexMemory(
  record: MemoryRecord
): MemoryIndex {
  const index: MemoryIndex = {
    id: record.id,
    recordId: record.id,
    keywords: [
      ...record.tags,
      record.title,
      record.type,
      record.actor,
      record.source,
    ],
    tags: [...record.tags],
    score: 0,
    indexedAt: new Date().toISOString(),
  };

  memoryIndexes.set(index.id, index);

  return index;
}

export function rebuildMemoryIndex(): void {
  memoryIndexes.clear();

  for (const record of memoryStore.list()) {
    indexMemory(record);
  }
}

export function getMemoryIndex(
  id: string
): MemoryIndex | undefined {
  return memoryIndexes.get(id);
}

export function listMemoryIndexes(): MemoryIndex[] {
  return Array.from(memoryIndexes.values());
}

export function removeMemoryIndex(
  id: string
): boolean {
  return memoryIndexes.delete(id);
}

export function clearMemoryIndexes(): void {
  memoryIndexes.clear();
}

export function countMemoryIndexes(): number {
  return memoryIndexes.size;
}
