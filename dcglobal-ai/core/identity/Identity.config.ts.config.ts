/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Configuração oficial da
 * Camada de Identidade Cognitiva.
 */

export const identityConfig = {
  id: "dcglobal-identity",

  name: "DCGLOBAL.AI Cognitive Identity™",

  version: "1.0.0",

  enabled: true,

  autoStart: true,

  registry: {
    enabled: true,
    autoRegister: true,
  },

  store: {
    enabled: true,
    persistence: true,
    cache: true,
  },

  roles: {
    enabled: true,
    strictMode: true,
    defaultRole: "guest",
  },

  permissions: {
    enabled: true,
    strictMode: true,
    denyByDefault: true,
  },

  authentication: {
    enabled: true,
    requireIdentity: true,
    sessionEnabled: true,
  },

  authorization: {
    enabled: true,
    validateRoles: true,
    validatePermissions: true,
  },

  trust: {
    enabled: true,
    defaultLevel: "low",
    validateLevel: true,
  },

  audit: {
    enabled: true,
    persist: true,
    includeActor: true,
    includeScope: true,
  },

  monitoring: {
    enabled: true,
    metrics: true,
    health: true,
  },

  governance: {
    enabled: true,
    validatePolicies: true,
    validateCompliance: true,
  },

  security: {
    enabled: true,
    zeroTrust: true,
    leastPrivilege: true,
  },
} as const;

export const IDENTITY_NAME =
  "DCGLOBAL.AI Cognitive Identity™";

export const IDENTITY_ID =
  "dcglobal-identity";

export const IDENTITY_VERSION =
  "1.0.0";
