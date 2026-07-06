/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Registry oficial da
 * Camada de Contexto Cognitivo.
 */

import {
  CONTEXT_ID,
  CONTEXT_NAME,
  CONTEXT_VERSION,
  contextConfig,
} from "./context.config";

export const contextRegistry = {
  id: CONTEXT_ID,

  name: CONTEXT_NAME,

  version: CONTEXT_VERSION,

  description:
    "Official Cognitive Context Registry.",

  initialized: true,

  createdAt: new Date().toISOString(),

  config: contextConfig,

  modules: [
    "types",
    "config",
    "registry",
    "lifecycle",
    "store",
    "cache",
    "search",
    "index",
    "audit",
    "monitor",
    "health",
    "bootstrap",
  ],

  integrations: [
    "memory",
    "knowledge",
    "identity",
    "governance",
    "events",
    "kernel",
    "agents",
    "workflows",
    "intelligence",
  ],

  capabilities: [
    "context-awareness",
    "context-storage",
    "context-search",
    "context-cache",
    "context-synchronization",
    "context-monitoring",
    "context-health",
    "context-governance",
  ],

  metadata: {
    organization: "DCGLOBAL.AI",
    layer: "Context",
    runtime: "Cognitive Operating System™",
    status: "active",
  },
} as const;

export function getContextRegistry() {
  return contextRegistry;
}
