/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Lifecycle oficial da Camada de Memória.
 * Controla os estados operacionais da
 * memória cognitiva do Sistema Vivo.
 */

import {
  MemoryRuntime,
  MemoryStatus,
} from "./memory.types";

import { memoryConfig } from "./memory.config";

export const memoryRuntime: MemoryRuntime = {
  id: memoryConfig.id,
  version: memoryConfig.version,
  status: "created",
  initializedAt: undefined,
  metrics: {
    totalRecords: 0,
    workingMemory: 0,
    longTermMemory: 0,
    semanticMemory: 0,
    episodicMemory: 0,
    cacheEntries: 0,
    snapshots: 0,
    searches: 0,
    hits: 0,
    misses: 0,
  },
};

export function initializeMemory(): MemoryRuntime {
  memoryRuntime.status = "initializing";
  memoryRuntime.initializedAt = new Date().toISOString();
  return memoryRuntime;
}

export function readyMemory(): MemoryRuntime {
  memoryRuntime.status = "ready";
  return memoryRuntime;
}

export function indexMemory(): MemoryRuntime {
  memoryRuntime.status = "indexing";
  return memoryRuntime;
}

export function learnMemory(): MemoryRuntime {
  memoryRuntime.status = "learning";
  return memoryRuntime;
}

export function updateMemory(): MemoryRuntime {
  memoryRuntime.status = "updating";
  return memoryRuntime;
}

export function snapshotMemory(): MemoryRuntime {
  memoryRuntime.status = "snapshotting";
  return memoryRuntime;
}

export function restoreMemory(): MemoryRuntime {
  memoryRuntime.status = "restoring";
  return memoryRuntime;
}

export function stopMemory(): MemoryRuntime {
  memoryRuntime.status = "stopping";
  memoryRuntime.status = "stopped";
  return memoryRuntime;
}

export function failMemory(): MemoryRuntime {
  memoryRuntime.status = "failed";
  return memoryRuntime;
}

export function getMemoryRuntime(): MemoryRuntime {
  return memoryRuntime;
}

export function isMemoryReady(): boolean {
  return memoryRuntime.status === "ready";
}

export function isMemoryFailed(): boolean {
  return memoryRuntime.status === "failed";
}
