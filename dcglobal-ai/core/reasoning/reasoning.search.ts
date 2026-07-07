/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Search oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
  ReasoningSearchQuery,
  ReasoningSearchResult,
} from "./reasoning.types";

import { reasoningStore } from "./reasoning.store";

export function searchReasoning(
  query: ReasoningSearchQuery
): ReasoningSearchResult[] {
  const results: ReasoningSearchResult[] = [];

  for (const record of reasoningStore.list()) {
    let score = 0;

    if (query.type && record.type === query.type) score += 3;
    if (query.status && record.status === query.status) score += 2;
    if (query.priority && record.priority === query.priority) score += 2;
    if (query.actor && record.actor === query.actor) score += 2;
    if (query.source && record.source === query.source) score += 2;

    if (
      query.minConfidence !== undefined &&
      record.confidence >= query.minConfidence
    ) {
      score += 3;
    }

    if (
      query.tags &&
      query.tags.some(tag =>
        record.tags.includes(tag)
      )
    ) {
      score += 3;
    }

    if (query.text) {
      const text = query.text.toLowerCase();

      if (record.title.toLowerCase().includes(text)) score += 4;
      if (record.objective.toLowerCase().includes(text)) score += 4;
    }

    if (score > 0) {
      results.push({ record, score });
    }
  }

  return results.sort(
    (a, b) => b.score - a.score
  );
}

export function findReasoningById(
  id: string
): ReasoningRecord | undefined {
  return reasoningStore.get(id);
}

export function findReasoningByActor(
  actor: string
): ReasoningRecord[] {
  return reasoningStore.findByActor(actor);
}
