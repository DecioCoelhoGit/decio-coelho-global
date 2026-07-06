/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Cache oficial da Camada
 * de Contexto Cognitivo.
 */

import {
  ContextCacheEntry,
  ContextRecord,
} from "./context.types";

const contextCache =
  new Map<string, ContextCacheEntry>();

export function cacheContext(
  record: ContextRecord,
  ttl: number = 300
): ContextCacheEntry {
  const entry: ContextCacheEntry = {
    key: record.id,
    record,
    ttl,
    expiresAt: Date.now() + ttl * 1000,
  };

  contextCache.set(entry.key, entry);

  return entry;
}

export function getCachedContext(
  key: string
): ContextRecord | undefined {
  const entry = contextCache.get(key);

  if (!entry) {
    return undefined;
  }

  if (Date.now() > entry.expiresAt) {
    contextCache.delete(key);
    return undefined;
  }

  return entry.record;
}

export function removeCachedContext(
  key: string
): boolean {
  return contextCache.delete(key);
}

export function clearContextCache(): void {
  contextCache.clear();
}

export function listCachedContexts():
  ContextCacheEntry[] {
  return Array.from(contextCache.values());
}

export function contextCacheExists(
  key: string
): boolean {
  return getCachedContext(key) !== undefined;
}

export function countCachedContexts(): number {
  return contextCache.size;
}

export function purgeExpiredContextCache(): void {
  const now = Date.now();

  for (const [key, entry] of contextCache.entries()) {
    if (entry.expiresAt <= now) {
      contextCache.delete(key);
    }
  }
}
