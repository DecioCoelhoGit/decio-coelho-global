/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Persistence oficial da Camada
 * de Contexto Cognitivo.
 */

import { ContextRecord } from "./context.types";

let persistedContexts: ContextRecord[] = [];

export function persistContexts(
  records: ContextRecord[]
): ContextRecord[] {
  persistedContexts = [...records];
  return persistedContexts;
}

export function loadPersistedContexts(): ContextRecord[] {
  return [...persistedContexts];
}

export function appendPersistedContext(
  record: ContextRecord
): ContextRecord {
  persistedContexts.push(record);
  return record;
}

export function findPersistedContext(
  id: string
): ContextRecord | undefined {
  return persistedContexts.find(
    record => record.id === id
  );
}

export function removePersistedContext(
  id: string
): boolean {
  const index = persistedContexts.findIndex(
    record => record.id === id
  );

  if (index === -1) {
    return false;
  }

  persistedContexts.splice(index, 1);
  return true;
}

export function clearPersistedContexts(): void {
  persistedContexts = [];
}

export function countPersistedContexts(): number {
  return persistedContexts.length;
}
