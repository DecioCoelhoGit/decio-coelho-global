/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Configurações oficiais da
 * Camada de Memória Cognitiva.
 */

export const memoryConfig = {

  id: "dcglobalai-memory",

  name: "DCGLOBAL.AI™ Cognitive Memory™",

  version: "1.0.0",

  enabled: true,

  autoStart: true,

  persistence: {
    enabled: true,
    provider: "local",
    autoSave: true,
    backup: true,
    compression: true,
  },

  cache: {
    enabled: true,
    maxEntries: 10000,
    ttl: 3600,
    cleanupInterval: 300,
  },

  indexing: {
    enabled: true,
    realtime: true,
    fullTextSearch: true,
    rebuildOnStart: true,
  },

  snapshots: {
    enabled: true,
    interval: 300,
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
    optimizeQueries: true,
    preloadIndexes: true,
  },

  security: {
    enabled: true,
    encryptStorage: true,
    validateAccess: true,
    auditOperations: true,
  },

} as const;

export const MEMORY_NAME =
  "DCGLOBAL.AI™ Cognitive Memory™";

export const MEMORY_ID =
  "dcglobalai-memory";

export const MEMORY_VERSION =
  "1.0.0";
