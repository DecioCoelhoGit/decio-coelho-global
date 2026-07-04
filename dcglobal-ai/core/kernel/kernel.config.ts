/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Configuração oficial do
 * Núcleo Operacional do
 * Sistema Cognitivo Vivo.
 */

import { KernelConfig } from "./kernel.types";

export const kernelConfig: KernelConfig = {
  id: "dcglobal-kernel",

  name: "DCGLOBAL.AI Cognitive Kernel™",

  version: "1.0.0",

  environment: "development",

  debug: true,

  autoStart: true,

  governanceEnabled: true,

  securityEnabled: true,

  eventBusEnabled: true,
};

/**
 * Configurações avançadas do Kernel.
 */
export const kernelSettings = {

  monitoring: {
    enabled: true,
    interval: 5000,
  },

  logging: {
    enabled: true,
    level: "debug",
  },

  registry: {
    autoRegister: true,
  },

  lifecycle: {
    autoInitialize: true,
    autoShutdown: true,
  },

  memory: {
    enabled: true,
  },

  graph: {
    enabled: true,
  },

  knowledge: {
    enabled: true,
  },

  agents: {
    autoLoad: true,
  },

  engines: {
    autoLoad: true,
  },

  workflows: {
    autoLoad: true,
  },

  analytics: {
    enabled: true,
  },

  dashboard: {
    enabled: true,
  },

  evolution: {
    enabled: true,
  },

  legacy: {
    enabled: true,
  },

} as const;

/**
 * Nome oficial do Kernel.
 */
export const KERNEL_NAME = "DCGLOBAL.AI Cognitive Kernel™";

/**
 * Versão oficial.
 */
export const KERNEL_VERSION = "1.0.0";

/**
 * Identificador único.
 */
export const KERNEL_ID = "dcglobal-kernel";
