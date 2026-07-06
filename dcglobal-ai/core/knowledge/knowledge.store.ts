/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Store oficial da Camada
 * de Conhecimento Cognitivo.
 */

import { KnowledgeRecord } from "./knowledge.types";

export class KnowledgeStore {
  private records = new Map<string, KnowledgeRecord>();

  add(record: KnowledgeRecord): KnowledgeRecord {
    this.records.set(record.id, record);
    return record;
  }

  get(id: string): KnowledgeRecord | undefined {
    return this.records.get(id);
  }

  update(
    id: string,
    changes: Partial<KnowledgeRecord>
  ): KnowledgeRecord | undefined {
    const current = this.records.get(id);

    if (!current) {
      return undefined;
    }

    const updated: KnowledgeRecord = {
      ...current,
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.records.set(id, updated);

    return updated;
  }

  archive(id: string): KnowledgeRecord | undefined {
    return this.update(id, {
      status: "archived",
    });
  }

  remove(id: string): boolean {
    return this.records.delete(id);
  }

  list(): KnowledgeRecord[] {
    return Array.from(this.records.values());
  }

  listActive(): KnowledgeRecord[] {
    return this.list().filter(
      record => record.status === "active"
    );
  }

  findByType(
    type: KnowledgeRecord["type"]
  ): KnowledgeRecord[] {
    return this.list().filter(
      record => record.type === type
    );
  }

  findBySource(source: string): KnowledgeRecord[] {
    return this.list().filter(
      record => record.source === source
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

export const knowledgeStore = new KnowledgeStore();
