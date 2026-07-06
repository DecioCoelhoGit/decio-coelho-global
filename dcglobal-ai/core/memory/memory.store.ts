/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Store oficial da Camada
 * de Memória Cognitiva.
 */

import { MemoryRecord } from "./memory.types";

export class MemoryStore {
  private records = new Map<string, MemoryRecord>();

  add(record: MemoryRecord): MemoryRecord {
    this.records.set(record.id, record);
    return record;
  }

  get(id: string): MemoryRecord | undefined {
    return this.records.get(id);
  }

  update(
    id: string,
    changes: Partial<MemoryRecord>
  ): MemoryRecord | undefined {
    const current = this.records.get(id);

    if (!current) {
      return undefined;
    }

    const updated: MemoryRecord = {
      ...current,
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.records.set(id, updated);

    return updated;
  }

  archive(id: string): MemoryRecord | undefined {
    return this.update(id, {
      status: "archived",
    });
  }

  remove(id: string): boolean {
    return this.records.delete(id);
  }

  list(): MemoryRecord[] {
    return Array.from(this.records.values());
  }

  listActive(): MemoryRecord[] {
    return this.list().filter(
      record => record.status === "active"
    );
  }

  findByType(
    type: MemoryRecord["type"]
  ): MemoryRecord[] {
    return this.list().filter(
      record => record.type === type
    );
  }

  findByTag(tag: string): MemoryRecord[] {
    return this.list().filter(
      record => record.tags.includes(tag)
    );
  }

  exists(id: string): boolean {
    return this.records.has(id);
  }

  count(): number {
    return this.records.size;
  }

  clear(): void {
    this.records.clear();
  }
}

export const memoryStore = new MemoryStore();
