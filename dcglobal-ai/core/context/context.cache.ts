/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Cache oficial da Camada de Consciência Contextual.
 * Responsável por acelerar consultas,
 * controlar TTL e reduzir acessos ao Store.
 */

import { ContextRecord } from "./context.types";

interface ContextCacheEntry {
  record: ContextRecord;
  expiresAt: number;
}

export class ContextCache {
  private readonly cache =
    new Map<string, ContextCacheEntry>();

  set(
    key: string,
    record: ContextRecord,
    ttlSeconds = 300
  ): void {
    this.cache.set(key, {
      record,
      expiresAt:
        Date.now() + ttlSeconds * 1000,
    });
  }

  get(
    key: string
  ): ContextRecord | undefined {
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

    for (const [key, value] of this.cache) {
      if (Date.now() > value.expiresAt) {
        this.cache.delete(key);
        removed++;
      }
    }

    return removed;
  }
}

export const contextCache =
  new ContextCache();
