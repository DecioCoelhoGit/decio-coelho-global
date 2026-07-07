/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Bootstrap oficial da
 * Camada de Raciocínio
 * Cognitivo.
 */

import {
  ENABLED,
  ENABLED_STRING,
} from "./reasoning.config";

import {
  reasoningRegistry,
} from "./reasoning.registry";

import {
  initializeReasoning,
} from "./reasoning.lifecycle";

import {
  getReasoningMonitorSnapshot,
} from "./reasoning.monitor";

import {
  checkReasoningHealth,
} from "./reasoning.health";

import {
  createReasoningSnapshot,
} from "./reasoning.snapshot";

export interface ReasoningBootstrap {
  initialized: boolean;
  healthy: boolean;
  registry: typeof reasoningRegistry;
  monitor: ReturnType<
    typeof getReasoningMonitorSnapshot
  >;
  health: ReturnType<
    typeof checkReasoningHealth
  >;
}

let reasoningBootstrap:
  ReasoningBootstrap | null = null;

export function bootstrapReasoning():
  ReasoningBootstrap {
  initializeReasoning();

  const monitor =
    getReasoningMonitorSnapshot();

  const health =
    checkReasoningHealth();

  createReasoningSnapshot();

  reasoningBootstrap = {
    initialized: true,
    healthy:
      health.status === "healthy",
    registry: reasoningRegistry,
    monitor,
    health,
  };

  return reasoningBootstrap;
}

export function getReasoningBootstrap():
  ReasoningBootstrap | null {
  return reasoningBootstrap;
}

export function isReasoningBootstrapped():
  boolean {
  return reasoningBootstrap !== null;
}

export function resetReasoningBootstrap():
  void {
  reasoningBootstrap = null;
}

export function autoBootstrapReasoning():
  ReasoningBootstrap | null {
  if (
    ENABLED === true ||
    ENABLED_STRING === "true"
  ) {
    return bootstrapReasoning();
  }

  return null;
}
