/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Lifecycle oficial da
 * Camada de Memória Cognitiva.
 */

import { MemoryStatus } from "./memory.types";
import { MEMORY_VERSION } from "./memory.config";

export interface MemoryRuntime {
  version: string;
  status: MemoryStatus;
  initialized: boolean;
  activeSessions: number;
  totalRecords: number;
  lastSync?: string;
}

export const memoryRuntime: MemoryRuntime = {
  version: MEMORY_VERSION,
  status: "created",
  initialized: false,
  activeSessions: 0,
  totalRecords: 0,
};

export function initializeMemory(): MemoryRuntime {
  memoryRuntime.status = "active";
  memoryRuntime.initialized = true;
  memoryRuntime.lastSync = new Date().toISOString();

  return memoryRuntime;
}

export function activateMemory(): MemoryRuntime {
  memoryRuntime.status = "active";
  memoryRuntime.lastSync = new Date().toISOString();

  return memoryRuntime;
}

export function archiveMemory(): MemoryRuntime {
  memoryRuntime.status = "archived";
  return memoryRuntime;
}

export function failMemory(): MemoryRuntime {
  memoryRuntime.status = "failed";
  return memoryRuntime;
}

export function restartMemory(): MemoryRuntime {
  memoryRuntime.status = "active";
  memoryRuntime.initialized = true;
  memoryRuntime.lastSync = new Date().toISOString();

  return memoryRuntime;
}

export function getMemoryRuntime(): MemoryRuntime {
  return memoryRuntime;
}

export function isMemoryActive(): boolean {
  return memoryRuntime.status === "active";
}
