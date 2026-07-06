/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Lifecycle oficial da
 * Camada de Contexto Cognitivo.
 */

import { getContextRegistry } from "./context.registry";

let initialized = false;
let active = false;

let startedAt: string | null = null;
let stoppedAt: string | null = null;

export function initializeContext(): boolean {
  if (initialized) {
    return true;
  }

  getContextRegistry();

  initialized = true;

  return true;
}

export function activateContext(): boolean {
  if (!initialized) {
    initializeContext();
  }

  active = true;
  startedAt = new Date().toISOString();

  return true;
}

export function deactivateContext(): boolean {
  active = false;
  stoppedAt = new Date().toISOString();

  return true;
}

export function restartContext(): boolean {
  deactivateContext();
  activateContext();

  return true;
}

export function isContextInitialized(): boolean {
  return initialized;
}

export function isContextActive(): boolean {
  return active;
}

export function getContextRuntime() {
  return {
    initialized,
    active,
    startedAt,
    stoppedAt,
    uptime:
      active && startedAt
        ? Date.now() - new Date(startedAt).getTime()
        : 0,
    registry: getContextRegistry(),
  };
}

export function resetContextLifecycle(): void {
  initialized = false;
  active = false;
  startedAt = null;
  stoppedAt = null;
}
