/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Configuração oficial da Camada
 * de Governança Cognitiva.
 */

export const governanceConfig = {
  id: "dcglobal-governance",

  name: "DCGLOBAL.AI Cognitive Governance™",

  version: "1.0.0",

  enabled: true,

  autoStart: true,

  policies: {
    enabled: true,
    strictMode: true,
    defaultVersion: "1.0.0",
  },

  rules: {
    enabled: true,
    evaluateOnRuntime: true,
    failClosed: true,
  },

  audit: {
    enabled: true,
    persist: true,
    includeContext: true,
    includeActor: true,
  },

  risk: {
    enabled: true,
    defaultLevel: "low",
    blockCritical: true,
  },

  approval: {
    enabled: true,
    requireForCritical: true,
    requireForSensitive: true,
  },

  decisionLog: {
    enabled: true,
    persist: true,
    includeReason: true,
    includePolicy: true,
    includeRule: true,
  },

  compliance: {
    enabled: true,
    validatePolicies: true,
    validateRules: true,
    validateAuditTrail: true,
  },

  monitoring: {
    enabled: true,
    metrics: true,
    health: true,
  },

  security: {
    validateActor: true,
    validateScope: true,
    validatePermission: true,
  },

  evolution: {
    versioning: true,
    history: true,
    compatibility: true,
  },
} as const;

/**
 * Nome oficial da camada.
 */
export const GOVERNANCE_NAME =
  "DCGLOBAL.AI Cognitive Governance™";

/**
 * Identificador oficial.
 */
export const GOVERNANCE_ID =
  "dcglobal-governance";

/**
 * Versão oficial.
 */
export const GOVERNANCE_VERSION =
  "1.0.0";
