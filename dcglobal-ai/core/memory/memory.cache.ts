/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Cache oficial da Camada
 * de Memória Cognitiva.
 */

import {
  MemoryCacheEntry,
  MemoryRecord,
} from "./memory.types";

const memoryCache = new Map<string, MemoryCacheEntry>();

export function cacheMemory(
  record: MemoryRecord,
  ttl: number = 3600
): MemoryCacheEntry {
  const entry: MemoryCacheEntry = {
    key: record.id,
    record,
    expiresAt: Date.now() + ttl * 1000,
  };

  memoryCache.set(entry.key, entry);

  return entry;
}

export function getCachedMemory(
  key: string
): MemoryRecord | undefined {
  const entry = memoryCache.get(key);

  if (!entry) {
    return undefined;
  }

  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key);
    return undefined;
  }

  return entry.record;
}

export function removeCachedMemory(
  key: string
): boolean {
  return memoryCache.delete(key);
}

export function clearMemoryCache(): void {
  memoryCache.clear();
}

export function listCachedMemories(): MemoryCacheEntry[] {
  return Array.from(memoryCache.values());
}

export function cacheExists(
  key: string
): boolean {
  return getCachedMemory(key) !== undefined;
}

export function countCachedMemories(): number {
  return memoryCache.size;
}

export function purgeExpiredCache(): void {
  const now = Date.now();

  for (const [key, entry] of memoryCache.entries()) {
    if (entry.expiresAt <= now) {
      memoryCache.delete(key);
    }
  }
}
