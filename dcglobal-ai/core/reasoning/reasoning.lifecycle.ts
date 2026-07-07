/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Lifecycle oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  reasoningConfig,
} from "./reasoning.config";

import {
  getReasoningRegistry,
} from "./reasoning.registry";

let initialized = false;
let active = false;
let startedAt: string | null = null;

export function initializeReasoning(): boolean {
  if (initialized) {
    return true;
  }

  initialized = true;
  active = true;
  startedAt = new Date().toISOString();

  return initialized;
}

export function activateReasoning(): boolean {
  if (!initialized) {
    initializeReasoning();
  }

  active = true;
  return active;
}

export function deactivateReasoning(): boolean {
  active = false;
  return active;
}

export function isReasoningInitialized(): boolean {
  return initialized;
}

export function isReasoningActive(): boolean {
  return active;
}

export function getReasoningStartedAt():
  string | null {
  return startedAt;
}

export function resetReasoningLifecycle(): void {
  initialized = false;
  active = false;
  startedAt = null;
}

export function getReasoningRuntime() {
  return {
    initialized,
    active,
    startedAt,
    config: reasoningConfig,
    registry: getReasoningRegistry(),
  };
}
