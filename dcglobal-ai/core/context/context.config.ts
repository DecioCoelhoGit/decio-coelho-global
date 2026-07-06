/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Configurações oficiais da
 * Camada de Contexto Cognitivo.
 */

export const contextConfig = {
  id: "dcglobalai-context",

  name: "DCGLOBAL.AI™ Cognitive Context",

  version: "1.0.0",

  enabled: true,

  persistence: {
    enabled: true,
    provider: "local",
    autosave: true,
    backup: true,
    compression: true,
  },

  cache: {
    enabled: true,
    maxEntries: 1000,
    ttl: 3000,
    cleanupInterval: 300,
  },

  indexing: {
    enabled: true,
    realtime: true,
    fullRebuild: true,
    rebuildOnStart: true,
  },

  snapshots: {
    enabled: true,
    interval: 600,
    keepHistory: true,
  },

  monitoring: {
    enabled: true,
    metrics: true,
    health: true,
    audit: true,
  },

  performance: {
    enabled: true,
    maxSearchResults: 100,
    optimizedIndexes: true,
    preloadIndexes: true,
  },

  security: {
    enabled: true,
    encryptStorage: true,
    validateAccess: true,
    auditOperations: true,
  },

  integrations: {
    memory: true,
    knowledge: true,
    identity: true,
    governance: true,
    events: true,
    kernel: true,
    agents: true,
    workflows: true,
    intelligence: true,
  },
} as const;

export const CONTEXT_NAME =
  "DCGLOBAL.AI™ Cognitive Context";

export const CONTEXT_ID =
  "dcglobalai-context";

export const CONTEXT_VERSION =
  "1.0.0";
