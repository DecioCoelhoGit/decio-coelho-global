/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Monitor oficial da Camada
 * de Memória Cognitiva.
 */

import { memoryStore } from "./memory.store";
import { countMemoryIndexes } from "./memory.index";
import { countCachedMemories } from "./memory.cache";
import { countPersistedMemory } from "./memory.persistence";
import { countMemorySnapshots } from "./memory.snapshot";
import {
  countMemoryAudits,
  listFailedAudits,
} from "./memory.audit";

export interface MemoryMonitorSnapshot {
  status: "healthy" | "degraded" | "failed";
  records: number;
  activeRecords: number;
  indexes: number;
  cached: number;
  persisted: number;
  snapshots: number;
  audits: number;
  failedAudits: number;
  checkedAt: string;
}

export function getMemoryMonitorSnapshot(): MemoryMonitorSnapshot {
  const failedAudits = listFailedAudits().length;

  const status =
    failedAudits > 0
      ? "degraded"
      : "healthy";

  return {
    status,
    records: memoryStore.count(),
    activeRecords: memoryStore.listActive().length,
    indexes: countMemoryIndexes(),
    cached: countCachedMemories(),
    persisted: countPersistedMemory(),
    snapshots: countMemorySnapshots(),
    audits: countMemoryAudits(),
    failedAudits,
    checkedAt: new Date().toISOString(),
  };
}

export function isMemoryMonitorHealthy(): boolean {
  return getMemoryMonitorSnapshot().status === "healthy";
}

export function getMemoryMonitorSummary(): string {
  const snapshot = getMemoryMonitorSnapshot();

  return [
    `Memory Status: ${snapshot.status}`,
    `Records: ${snapshot.records}`,
    `Active Records: ${snapshot.activeRecords}`,
    `Indexes: ${snapshot.indexes}`,
    `Cached: ${snapshot.cached}`,
    `Persisted: ${snapshot.persisted}`,
    `Snapshots: ${snapshot.snapshots}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
