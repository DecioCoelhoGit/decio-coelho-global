/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Bootstrap oficial da
 * Camada de Contexto
 * Cognitivo.
 */

import {
  CONTEXT_NAME,
  CONTEXT_VERSION,
} from "./context.config";

import {
  getContextRegistry,
} from "./context.registry";

import {
  contextStore,
} from "./context.store";

import {
  getContextMonitorSnapshot,
} from "./context.monitor";

import {
  checkContextHealth,
} from "./context.health";

export interface ContextBootstrap {
  initialized: boolean;
  name: string;
  version: string;
  registry: ReturnType<typeof getContextRegistry>;
  runtime: {
    contexts: number;
  };
  monitor: ReturnType<
    typeof getContextMonitorSnapshot
  >;
  health: ReturnType<
    typeof checkContextHealth
  >;
  startedAt: string;
}

let contextBootstrap:
  ContextBootstrap | null = null;

export function bootstrapContext():
  ContextBootstrap {
  if (contextBootstrap) {
    return contextBootstrap;
  }

  contextBootstrap = {
    initialized: true,

    name: CONTEXT_NAME,

    version: CONTEXT_VERSION,

    registry: getContextRegistry(),

    runtime: {
      contexts: contextStore.count(),
    },

    monitor: getContextMonitorSnapshot(),

    health: checkContextHealth(),

    startedAt: new Date().toISOString(),
  };

  return contextBootstrap;
}

export function getContextBootstrap():
  ContextBootstrap | null {
  return contextBootstrap;
}

export function isContextBootstrapped(): boolean {
  return contextBootstrap !== null;
}

export function resetContextBootstrap(): void {
  contextBootstrap = null;
}
