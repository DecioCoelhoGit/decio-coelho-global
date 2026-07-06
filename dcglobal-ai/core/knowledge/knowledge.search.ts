/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Search oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KnowledgeRecord,
  KnowledgeSearchQuery,
  KnowledgeSearchResult,
} from "./knowledge.types";

import { knowledgeStore } from "./knowledge.store";

export function searchKnowledge(
  query: KnowledgeSearchQuery
): KnowledgeSearchResult[] {
  const results: KnowledgeSearchResult[] = [];

  for (const record of knowledgeStore.list()) {
    let score = 0;

    if (
      query.type &&
      record.type === query.type
    ) {
      score += 3;
    }

    if (
      query.status &&
      record.status === query.status
    ) {
      score += 2;
    }

    if (
      query.priority &&
      record.priority === query.priority
    ) {
      score += 2;
    }

    if (
      query.source &&
      record.source === query.source
    ) {
      score += 2;
    }

    if (
      query.domain &&
      record.domain === query.domain
    ) {
      score += 2;
    }

    if (
      query.category &&
      record.category === query.category
    ) {
      score += 2;
    }

    if (query.text) {
      const text =
        query.text.toLowerCase();

      if (
        record.title
          .toLowerCase()
          .includes(text)
      ) {
        score += 4;
      }

      if (
        record.content
          .toLowerCase()
          .includes(text)
      ) {
        score += 4;
      }

      if (
        record.summary
          ?.toLowerCase()
          .includes(text)
      ) {
        score += 3;
      }

      if (
        record.tags.some((tag) =>
          tag.toLowerCase().includes(text)
        )
      ) {
        score += 2;
      }
    }

    if (score > 0) {
      results.push({
        record,
        score,
      });
    }
  }

  return results.sort(
    (a, b) => b.score - a.score
  );
}

export function findKnowledgeById(
  id: string
): KnowledgeRecord | undefined {
  return knowledgeStore.get(id);
}

export function findKnowledgeBySource(
  source: string
): KnowledgeRecord[] {
  return knowledgeStore.findBySource(source);
}

export function findKnowledgeByDomain(
  domain: string
): KnowledgeRecord[] {
  return knowledgeStore.findByDomain(domain);
}

export function findKnowledgeByCategory(
  category: string
): KnowledgeRecord[] {
  return knowledgeStore.findByCategory(category);
}

export function findKnowledgeByTag(
  tag: string
): KnowledgeRecord[] {
  return knowledgeStore.findByTag(tag);
}
