/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Registry oficial da
 * Camada de Memória Cognitiva.
 */

import {
  MEMORY_ID,
  MEMORY_NAME,
  MEMORY_VERSION,
  memoryConfig,
} from "./memory.config";

export const memoryRegistry = {
  id: MEMORY_ID,

  name: MEMORY_NAME,

  version: MEMORY_VERSION,

  description:
    "Official Cognitive Memory Registry.",

  initialized: true,

  createdAt: new Date().toISOString(),

  config: memoryConfig,

  modules: [
    "types",
    "config",
    "registry",
    "lifecycle",
    "store",
    "search",
    "index",
    "cache",
    "persistence",
    "snapshot",
    "audit",
    "monitor",
    "health",
    "bootstrap",
  ],

  integrations: [
    "kernel",
    "events",
    "identity",
    "context",
    "governance",
    "knowledge",
    "agents",
    "intelligence",
  ],

  capabilities: [
    "memory-storage",
    "memory-search",
    "memory-indexing",
    "memory-cache",
    "memory-persistence",
    "memory-snapshots",
    "memory-audit",
    "memory-monitoring",
  ],

  metadata: {
    organization: "DCGLOBAL.AI",
    layer: "Memory",
    runtime: "Cognitive Operating System™",
    status: "active",
  },
} as const;

export function getMemoryRegistry() {
  return memoryRegistry;
}
