/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Bootstrap oficial da
 * Camada de Memória Cognitiva.
 */

import {
  MEMORY_NAME,
  MEMORY_VERSION,
} from "./memory.config";

import { getMemoryRegistry } from "./memory.registry";
import {
  initializeMemory,
  activateMemory,
  getMemoryRuntime,
} from "./memory.lifecycle";

import { checkMemoryHealth } from "./memory.health";
import { getMemoryMonitorSnapshot } from "./memory.monitor";

export interface MemoryBootstrap {
  initialized: boolean;
  name: string;
  version: string;
  registry: ReturnType<typeof getMemoryRegistry>;
  runtime: ReturnType<typeof getMemoryRuntime>;
  monitor: ReturnType<typeof getMemoryMonitorSnapshot>;
  health: ReturnType<typeof checkMemoryHealth>;
  startedAt: string;
}

let memoryBootstrap: MemoryBootstrap | null = null;

export function bootstrapMemory(): MemoryBootstrap {
  initializeMemory();
  activateMemory();

  memoryBootstrap = {
    initialized: true,
    name: MEMORY_NAME,
    version: MEMORY_VERSION,
    registry: getMemoryRegistry(),
    runtime: getMemoryRuntime(),
    monitor: getMemoryMonitorSnapshot(),
    health: checkMemoryHealth(),
    startedAt: new Date().toISOString(),
  };

  return memoryBootstrap;
}

export function getMemoryBootstrap():
  | MemoryBootstrap
  | null {
  return memoryBootstrap;
}

export function isMemoryBootstrapped(): boolean {
  return memoryBootstrap !== null;
}

export function resetMemoryBootstrap(): void {
  memoryBootstrap = null;
}
