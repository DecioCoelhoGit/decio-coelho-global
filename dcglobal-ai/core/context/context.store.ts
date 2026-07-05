/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Store oficial da Camada de Consciência Contextual.
 * Responsável por armazenar, atualizar,
 * recuperar e remover registros de contexto.
 */

import {
  ContextRecord,
  ContextScope,
} from "./context.types";

export class ContextStore {
  private readonly records =
    new Map<string, ContextRecord>();

  set(record: ContextRecord): void {
    this.records.set(record.id, record);
  }

  get(id: string): ContextRecord | undefined {
    return this.records.get(id);
  }

  update(
    id: string,
    changes: Partial<ContextRecord>
  ): boolean {
    const record = this.get(id);

    if (!record) {
      return false;
    }

    this.records.set(id, {
      ...record,
      ...changes,
      updatedAt: new Date().toISOString(),
    });

    return true;
  }

  remove(id: string): boolean {
    return this.records.delete(id);
  }

  list(): ContextRecord[] {
    return [...this.records.values()];
  }

  byScope(scope: ContextScope): ContextRecord[] {
    return this.list().filter(
      record => record.scope === scope
    );
  }

  findByKey(key: string): ContextRecord | undefined {
    return this.list().find(
      record => record.key === key
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

export const contextStore =
  new ContextStore();
