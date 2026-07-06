/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Persistence oficial da Camada
 * de Memória Cognitiva.
 */

import { MemoryRecord } from "./memory.types";

let persistedMemory: MemoryRecord[] = [];

export function persistMemory(
  records: MemoryRecord[]
): MemoryRecord[] {
  persistedMemory = [...records];
  return persistedMemory;
}

export function loadPersistedMemory(): MemoryRecord[] {
  return [...persistedMemory];
}

export function appendPersistedMemory(
  record: MemoryRecord
): MemoryRecord {
  persistedMemory.push(record);
  return record;
}

export function findPersistedMemory(
  id: string
): MemoryRecord | undefined {
  return persistedMemory.find(
    record => record.id === id
  );
}

export function removePersistedMemory(
  id: string
): boolean {
  const index = persistedMemory.findIndex(
    record => record.id === id
  );

  if (index === -1) {
    return false;
  }

  persistedMemory.splice(index, 1);
  return true;
}

export function clearPersistedMemory(): void {
  persistedMemory = [];
}

export function countPersistedMemory(): number {
  return persistedMemory.length;
}
