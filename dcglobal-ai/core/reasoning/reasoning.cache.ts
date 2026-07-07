/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Cache oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
  ReasoningCacheEntry,
} from "./reasoning.types";

const reasoningCache =
  new Map<string, ReasoningCacheEntry>();

export function cacheReasoning(
  record: ReasoningRecord,
  ttl: number = 300
): ReasoningCacheEntry {
  const entry: ReasoningCacheEntry = {
    key: record.id,
    record,
    ttl,
    expiresAt:
      Date.now() + ttl * 1000,
  };

  reasoningCache.set(entry.key, entry);

  return entry;
}

export function getCachedReasoning(
  key: string
): ReasoningRecord | undefined {
  const entry = reasoningCache.get(key);

  if (!entry) {
    return undefined;
  }

  if (Date.now() > entry.expiresAt) {
    reasoningCache.delete(key);
    return undefined;
  }

  return entry.record;
}

export function removeCachedReasoning(
  key: string
): boolean {
  return reasoningCache.delete(key);
}

export function clearReasoningCache(): void {
  reasoningCache.clear();
}

export function listCachedReasoning():
  ReasoningCacheEntry[] {
  return Array.from(reasoningCache.values());
}

export function reasoningCacheExists(
  key: string
): boolean {
  return (
    getCachedReasoning(key) !== undefined
  );
}

export function countCachedReasoning(): number {
  return reasoningCache.size;
}

export function purgeExpiredReasoningCache():
  void {
  const now = Date.now();

  for (const [key, entry]
    of reasoningCache.entries()) {
    if (entry.expiresAt <= now) {
      reasoningCache.delete(key);
    }
  }
}
