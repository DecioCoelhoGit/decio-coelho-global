/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Search oficial da Camada
 * de Contexto Cognitivo.
 */

import {
  ContextRecord,
  ContextSearchQuery,
  ContextSearchResult,
} from "./context.types";

import { contextStore } from "./context.store";

export function searchContext(
  query: ContextSearchQuery
): ContextSearchResult[] {
  const results: ContextSearchResult[] = [];

  for (const record of contextStore.list()) {
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

    if (
      query.location &&
      record.location === query.location
    ) {
      score += 2;
    }

    if (
      query.organization &&
      record.organization === query.organization
    ) {
      score += 2;
    }

    if (query.text) {
      const text = query.text.toLowerCase();

      if (record.name.toLowerCase().includes(text)) {
        score += 4;
      }

      if (
        record.description
          .toLowerCase()
          .includes(text)
      ) {
        score += 4;
      }
    }

    if (score > 0) {
      results.push({ record, score });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

export function findContextById(
  id: string
): ContextRecord | undefined {
  return contextStore.get(id);
}

export function findContextByActor(
  actor: string
): ContextRecord[] {
  return contextStore.findByActor(actor);
}
