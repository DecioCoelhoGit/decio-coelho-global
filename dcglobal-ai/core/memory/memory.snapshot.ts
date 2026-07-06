/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Snapshot oficial da Camada
 * de Memória Cognitiva.
 */

import {
  MemorySnapshot,
  MemoryRecord,
} from "./memory.types";

import { memoryStore } from "./memory.store";

const memorySnapshots: MemorySnapshot[] = [];

export function createMemorySnapshot(): MemorySnapshot {
  const records: MemoryRecord[] = memoryStore.list();

  const snapshot: MemorySnapshot = {
    timestamp: new Date().toISOString(),
    totalRecords: records.length,
    activeRecords: records.filter(
      record => record.status === "active"
    ).length,
    archivedRecords: records.filter(
      record => record.status === "archived"
    ).length,
    indexedRecords: records.length,
    failedRecords: records.filter(
      record => record.status === "failed"
    ).length,
    status: "healthy",
  };

  memorySnapshots.push(snapshot);

  return snapshot;
}

export function listMemorySnapshots(): MemorySnapshot[] {
  return [...memorySnapshots];
}

export function latestMemorySnapshot():
  | MemorySnapshot
  | undefined {
  return memorySnapshots.at(-1);
}

export function clearMemorySnapshots(): void {
  memorySnapshots.length = 0;
}

export function countMemorySnapshots(): number {
  return memorySnapshots.length;
}
