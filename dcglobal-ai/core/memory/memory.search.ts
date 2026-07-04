/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Search Engine oficial da Memória Cognitiva.
 * Responsável por localizar registros
 * por texto, tags, categoria e contexto.
 */

import {
  MemoryRecord,
  MemoryCategory,
} from "./memory.types";

import { memoryStore } from "./memory.store";

export interface MemorySearchOptions {
  text?: string;
  category?: MemoryCategory;
  tags?: string[];
  limit?: number;
}

export interface MemorySearchResult {
  record: MemoryRecord;
  score: number;
}

export function searchMemory(
  options: MemorySearchOptions
): MemorySearchResult[] {
  const records = memoryStore.list();
  const results: MemorySearchResult[] = [];

  for (const record of records) {
    let score = 0;

    if (options.text) {
      const text = options.text.toLowerCase();

      if (record.title.toLowerCase().includes(text)) {
        score += 3;
      }

      if (
        record.description?.toLowerCase().includes(text)
      ) {
        score += 2;
      }

      const dataText = JSON.stringify(record.data).toLowerCase();

      if (dataText.includes(text)) {
        score += 1;
      }
    }

    if (
      options.category &&
      record.category === options.category
    ) {
      score += 2;
    }

    if (options.tags?.length && record.tags?.length) {
      const matchedTags = options.tags.filter(tag =>
        record.tags?.includes(tag)
      );

      score += matchedTags.length;
    }

    if (score > 0) {
      results.push({
        record,
        score,
      });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, options.limit ?? 20);
}

export function findMemoryById(
  id: string
): MemoryRecord | undefined {
  return memoryStore.get(id);
}

export function findMemoryByCategory(
  category: MemoryCategory
): MemoryRecord[] {
  return memoryStore.byCategory(category);
}
