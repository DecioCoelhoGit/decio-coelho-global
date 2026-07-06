/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Cache oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KnowledgeCacheEntry,
  KnowledgeRecord,
} from "./knowledge.types";

const knowledgeCache =
  new Map<string, KnowledgeCacheEntry>();

export function cacheKnowledge(
  record: KnowledgeRecord,
  ttl: number = 300
): KnowledgeCacheEntry {
  const entry: KnowledgeCacheEntry = {
    key: record.id,
    record,
    ttl,
    expiresAt: Date.now() + ttl * 1000,
  };

  knowledgeCache.set(entry.key, entry);

  return entry;
}

export function getCachedKnowledge(
  key: string
): KnowledgeRecord | undefined {
  const entry = knowledgeCache.get(key);

  if (!entry) {
    return undefined;
  }

  if (Date.now() > entry.expiresAt) {
    knowledgeCache.delete(key);
    return undefined;
  }

  return entry.record;
}

export function removeCachedKnowledge(
  key: string
): boolean {
  return knowledgeCache.delete(key);
}

export function clearKnowledgeCache(): void {
  knowledgeCache.clear();
}

export function listCachedKnowledge():
  KnowledgeCacheEntry[] {
  return Array.from(knowledgeCache.values());
}

export function knowledgeCacheExists(
  key: string
): boolean {
  return getCachedKnowledge(key) !== undefined;
}

export function countCachedKnowledge(): number {
  return knowledgeCache.size;
}

export function purgeExpiredKnowledgeCache(): void {
  const now = Date.now();

  for (const [key, entry] of knowledgeCache.entries()) {
    if (entry.expiresAt <= now) {
      knowledgeCache.delete(key);
    }
  }
}
