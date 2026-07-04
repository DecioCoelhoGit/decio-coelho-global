/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Cache Cognitivo oficial.
 * Responsável por acelerar consultas,
 * controlar TTL e otimizar acesso
 * aos registros de memória.
 */

import { MemoryRecord } from "./memory.types";

interface CacheEntry {
  record: MemoryRecord;
  expiresAt: number;
}

export class MemoryCache {
  private readonly cache =
    new Map<string, CacheEntry>();

  set(
    key: string,
    record: MemoryRecord,
    ttlSeconds = 3600
  ): void {
    this.cache.set(key, {
      record,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  get(key: string): MemoryRecord | undefined {
    const entry = this.cache.get(key);

    if (!entry) {
      return undefined;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.record;
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  count(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return [...this.cache.keys()];
  }

  cleanup(): number {
    let removed = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (Date.now() > entry.expiresAt) {
        this.cache.delete(key);
        removed++;
      }
    }

    return removed;
  }
}

export const memoryCache =
  new MemoryCache();
