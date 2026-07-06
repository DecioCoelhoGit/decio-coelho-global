/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Store oficial da Camada
 * de Contexto Cognitivo.
 */

import { ContextRecord } from "./context.types";

export class ContextStore {
  private records = new Map<string, ContextRecord>();

  add(record: ContextRecord): ContextRecord {
    this.records.set(record.id, record);
    return record;
  }

  get(id: string): ContextRecord | undefined {
    return this.records.get(id);
  }

  update(
    id: string,
    changes: Partial<ContextRecord>
  ): ContextRecord | undefined {
    const current = this.records.get(id);

    if (!current) {
      return undefined;
    }

    const updated: ContextRecord = {
      ...current,
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.records.set(id, updated);

    return updated;
  }

  archive(id: string): ContextRecord | undefined {
    return this.update(id, {
      status: "archived",
    });
  }

  remove(id: string): boolean {
    return this.records.delete(id);
  }

  list(): ContextRecord[] {
    return Array.from(this.records.values());
  }

  listActive(): ContextRecord[] {
    return this.list().filter(
      record => record.status === "active"
    );
  }

  findByType(
    type: ContextRecord["type"]
  ): ContextRecord[] {
    return this.list().filter(
      record => record.type === type
    );
  }

  findByActor(actor: string): ContextRecord[] {
    return this.list().filter(
      record => record.actor === actor
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

export const contextStore = new ContextStore();
