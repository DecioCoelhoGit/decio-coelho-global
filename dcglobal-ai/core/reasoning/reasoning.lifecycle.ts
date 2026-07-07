/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Lifecycle oficial da
 * Camada de Raciocínio Cognitivo.
 */

import { reasoningConfig } from "./reasoning.config";

import {
  reasoningRegistry,
  getReasoningRegistry,
} from "./reasoning.registry";

let initialized = false;

let active = false;

let startedAt: string | null = null;

/**
 * Inicializa a Camada Reasoning.
 */
export function initializeReasoning(): boolean {
  if (initialized) {
    return true;
  }

  initialized = true;

  active = reasoningConfig.enabled;

  startedAt = new Date().toISOString();

  return initialized;
}

/**
 * Ativa a Camada Reasoning.
 */
export function activateReasoning(): boolean {
  if (!initialized) {
    initializeReasoning();
  }

  active = true;

  return active;
}

/**
 * Desativa a Camada Reasoning.
 */
export function deactivateReasoning(): boolean {
  active = false;

  return active;
}

/**
 * Reinicia a Camada Reasoning.
 */
export function restartReasoning(): boolean {
  deactivateReasoning();

  initialized = false;

  startedAt = null;

  initializeReasoning();

  return active;
}

/**
 * Verifica se a camada
 * foi inicializada.
 */
export function isReasoningInitialized(): boolean {
  return initialized;
}

/**
 * Verifica se a camada
 * está ativa.
 */
export function isReasoningActive(): boolean {
  return active;
}

/**
 * Retorna o instante de
 * inicialização da camada.
 */
export function getReasoningStartedAt(): string | null {
  return startedAt;
}

/**
 * Retorna o estado oficial
 * da Camada Reasoning.
 */
export function getReasoningState() {
  return {
    initialized,
    active,
    startedAt,
    registry: getReasoningRegistry(),
    config: reasoningConfig,
  };
}

/**
 * Finaliza a Camada Reasoning.
 */
export function shutdownReasoning(): void {
  active = false;

  initialized = false;

  startedAt = null;
}

/**
 * Retorna informações resumidas
 * do Lifecycle Reasoning.
 */
export function getReasoningLifecycleSummary() {
  return {
    id: reasoningRegistry.id,
    name: reasoningRegistry.name,
    version: reasoningRegistry.version,
    initialized,
    active,
    startedAt,
  };
}
