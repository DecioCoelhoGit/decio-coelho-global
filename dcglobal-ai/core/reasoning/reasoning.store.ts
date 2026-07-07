/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Store oficial da Camada
 * de Raciocínio Cognitivo.
 */

import { ReasoningRecord } from "./reasoning.types";

export class ReasoningStore {
  private records =
    new Map<string, ReasoningRecord>();

  add(record: ReasoningRecord):
    ReasoningRecord {
    this.records.set(record.id, record);
    return record;
  }

  get(id: string):
    ReasoningRecord | undefined {
    return this.records.get(id);
  }

  update(
    id: string,
    changes: Partial<ReasoningRecord>
  ): ReasoningRecord | undefined {
    const current = this.records.get(id);

    if (!current) {
      return undefined;
    }

    const updated: ReasoningRecord = {
      ...current,
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.records.set(id, updated);

    return updated;
  }

  archive(id: string):
    ReasoningRecord | undefined {
    return this.update(id, {
      status: "archived",
    });
  }

  remove(id: string): boolean {
    return this.records.delete(id);
  }

  list(): ReasoningRecord[] {
    return Array.from(this.records.values());
  }

  listActive(): ReasoningRecord[] {
    return this.list().filter(
      record => record.status === "active"
    );
  }

  findByType(
    type: ReasoningRecord["type"]
  ): ReasoningRecord[] {
    return this.list().filter(
      record => record.type === type
    );
  }

  findByStatus(
    status: ReasoningRecord["status"]
  ): ReasoningRecord[] {
    return this.list().filter(
      record => record.status === status
    );
  }

  findByActor(actor: string):
    ReasoningRecord[] {
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

export const reasoningStore =
  new ReasoningStore();
