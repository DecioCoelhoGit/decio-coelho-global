/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Configuração oficial da Camada de Memória
 * do Sistema Operacional Cognitivo Vivo.
 */

export const memoryConfig = {
  id: "dcglobal-memory",

  name: "DCGLOBAL.AI Cognitive Memory™",

  version: "1.0.0",

  enabled: true,

  autostart: true,

  /**
   * Memória de trabalho.
   */
  workingMemory: {
    enabled: true,
    maxRecords: 1000,
    maxAgeMinutes: 60,
  },

  /**
   * Memória de longo prazo.
   */
  longTermMemory: {
    enabled: true,
    maxRecords: 100000,
    persistent: true,
  },

  /**
   * Cache cognitivo.
   */
  cache: {
    enabled: true,
    maxEntries: 5000,
    ttlSeconds: 3600,
  },

  /**
   * Indexação.
   */
  indexing: {
    enabled: true,
    realtime: true,
    rebuildOnStartup: false,
  },

  /**
   * Busca.
   */
  search: {
    enabled: true,
    fuzzy: true,
    maxResults: 100,
  },

  /**
   * Snapshots.
   */
  snapshots: {
    enabled: true,
    autoSave: true,
    intervalMinutes: 30,
    keepLast: 50,
  },

  /**
   * Persistência.
   */
  persistence: {
    enabled: true,
    provider: "filesystem",
    compression: true,
    encryption: false,
  },

  /**
   * Segurança.
   */
  security: {
    validateRecords: true,
    validateContext: true,
    checksum: true,
  },

  /**
   * Monitoramento.
   */
  monitoring: {
    enabled: true,
    metrics: true,
    health: true,
    audit: true,
  },

  /**
   * Governança.
   */
  governance: {
    versioning: true,
    compatibility: true,
    history: true,
  },

} as const;

/**
 * Nome oficial.
 */
export const MEMORY_NAME =
  "DCGLOBAL.AI Cognitive Memory™";

/**
 * Identificador.
 */
export const MEMORY_ID =
  "dcglobal-memory";

/**
 * Versão.
 */
export const MEMORY_VERSION =
  "1.0.0";
