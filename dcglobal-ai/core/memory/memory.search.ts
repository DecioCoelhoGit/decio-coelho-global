/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Search oficial da Camada
 * de Memória Cognitiva.
 */

import {
  MemoryRecord,
  MemorySearchQuery,
  MemorySearchResult,
} from "./memory.types";

import { memoryStore } from "./memory.store";

export function searchMemory(
  query: MemorySearchQuery
): MemorySearchResult[] {
  const results: MemorySearchResult[] = [];

  for (const record of memoryStore.list()) {
    let score = 0;

    if (query.type && record.type === query.type) {
      score += 3;
    }

    if (query.status && record.status === query.status) {
      score += 2;
    }

    if (query.priority && record.priority === query.priority) {
      score += 2;
    }

    if (query.actor && record.actor === query.actor) {
      score += 2;
    }

    if (query.source && record.source === query.source) {
      score += 2;
    }

    if (query.tag && record.tags.includes(query.tag)) {
      score += 3;
    }

    if (query.text) {
      const text = query.text.toLowerCase();

      if (record.title.toLowerCase().includes(text)) {
        score += 4;
      }

      if (record.content.toLowerCase().includes(text)) {
        score += 4;
      }

      if (
        record.tags.some(tag =>
          tag.toLowerCase().includes(text)
        )
      ) {
        score += 2;
      }
    }

    if (score > 0) {
      results.push({ record, score });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

export function findMemoryById(
  id: string
): MemoryRecord | undefined {
  return memoryStore.get(id);
}

export function findMemoryByTag(
  tag: string
): MemoryRecord[] {
  return memoryStore.findByTag(tag);
}
