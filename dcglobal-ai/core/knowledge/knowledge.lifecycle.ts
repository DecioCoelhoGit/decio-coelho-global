/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Lifecycle oficial da
 * Camada de Conhecimento Cognitivo.
 */

import {
  knowledgeConfig,
} from "./knowledge.config";

import {
  getKnowledgeRegistry,
} from "./knowledge.registry";

let initialized = false;

let active = false;

let startedAt: string | null = null;

export function initializeKnowledge(): boolean {
  if (initialized) {
    return true;
  }

  initialized = true;

  active = knowledgeConfig.enabled;

  startedAt = new Date().toISOString();

  return initialized;
}

export function activateKnowledge(): boolean {
  if (!initialized) {
    initializeKnowledge();
  }

  active = true;

  return active;
}

export function deactivateKnowledge(): boolean {
  active = false;

  return !active;
}

export function restartKnowledge(): boolean {
  deactivateKnowledge();

  return activateKnowledge();
}

export function isKnowledgeInitialized(): boolean {
  return initialized;
}

export function isKnowledgeActive(): boolean {
  return active;
}

export function getKnowledgeStartTime():
  string | null {
  return startedAt;
}

export function getKnowledgeRuntime() {
  return {
    initialized,
    active,
    startedAt,
    registry: getKnowledgeRegistry(),
    config: knowledgeConfig,
  };
}

export function shutdownKnowledge(): void {
  active = false;
}
