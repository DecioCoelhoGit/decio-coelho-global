/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Runtime Health oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  getReasoningRuntimeInfo,
} from "./reasoning.runtime";

import {
  getReasoningLifecycleInfo,
} from "./reasoning.lifecycle";

import {
  countReasoningStates,
} from "./reasoning.state";

import {
  countReasoningEvents,
} from "./reasoning.event";

import {
  countReasoningHandlers,
} from "./reasoning.dispatcher";

import {
  countReasoningScheduled,
} from "./reasoning.scheduler";

export type ReasoningRuntimeHealthStatus =
  | "healthy"
  | "degraded"
  | "unhealthy";

export interface ReasoningRuntimeHealth {
  status: ReasoningRuntimeHealthStatus;
  ready: boolean;
  runtime: ReturnType<
    typeof getReasoningRuntimeInfo
  >;
  lifecycle: ReturnType<
    typeof getReasoningLifecycleInfo
  >;
  metrics: {
    states: number;
    events: number;
    handlers: number;
    scheduled: number;
  };
  checkedAt: string;
}

export function getReasoningRuntimeHealth():
  ReasoningRuntimeHealth {
  const runtime =
    getReasoningRuntimeInfo();

  const lifecycle =
    getReasoningLifecycleInfo();

  const metrics = {
    states: countReasoningStates(),
    events: countReasoningEvents(),
    handlers: countReasoningHandlers(),
    scheduled: countReasoningScheduled(),
  };

  const ready =
    lifecycle.initialized &&
    lifecycle.active;

  const status:
    ReasoningRuntimeHealthStatus =
    ready
      ? "healthy"
      : lifecycle.initialized
        ? "degraded"
        : "unhealthy";

  return {
    status,
    ready,
    runtime,
    lifecycle,
    metrics,
    checkedAt: new Date().toISOString(),
  };
}

export function isReasoningRuntimeHealthy():
  boolean {
  return (
    getReasoningRuntimeHealth().status ===
    "healthy"
  );
}

export function isReasoningRuntimeReady():
  boolean {
  return getReasoningRuntimeHealth().ready;
}
