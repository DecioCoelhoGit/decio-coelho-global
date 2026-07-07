/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Telemetry oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  getReasoningMetrics,
} from "./reasoning.metrics";

import {
  getReasoningRuntimeHealth,
} from "./reasoning.runtime-health";

import {
  countReasoningEvents,
} from "./reasoning.event";

import {
  countReasoningStates,
} from "./reasoning.state";

import {
  countReasoningHandlers,
} from "./reasoning.dispatcher";

import {
  countReasoningScheduled,
} from "./reasoning.scheduler";

export interface ReasoningTelemetrySnapshot {
  id: string;
  source: "reasoning";
  metrics: ReturnType<
    typeof getReasoningMetrics
  >;
  health: ReturnType<
    typeof getReasoningRuntimeHealth
  >;
  counters: {
    states: number;
    events: number;
    handlers: number;
    scheduled: number;
  };
  capturedAt: string;
}

const reasoningTelemetrySnapshots:
  ReasoningTelemetrySnapshot[] = [];

export function captureReasoningTelemetry():
  ReasoningTelemetrySnapshot {
  const snapshot:
    ReasoningTelemetrySnapshot = {
      id: `reasoning-telemetry-${Date.now()}`,
      source: "reasoning",
      metrics: getReasoningMetrics(),
      health: getReasoningRuntimeHealth(),
      counters: {
        states: countReasoningStates(),
        events: countReasoningEvents(),
        handlers: countReasoningHandlers(),
        scheduled: countReasoningScheduled(),
      },
      capturedAt: new Date().toISOString(),
    };

  reasoningTelemetrySnapshots.push(snapshot);

  return snapshot;
}

export function listReasoningTelemetry():
  ReasoningTelemetrySnapshot[] {
  return [...reasoningTelemetrySnapshots];
}

export function getLatestReasoningTelemetry():
  ReasoningTelemetrySnapshot | undefined {
  return reasoningTelemetrySnapshots[
    reasoningTelemetrySnapshots.length - 1
  ];
}

export function findReasoningTelemetry(
  id: string
): ReasoningTelemetrySnapshot | undefined {
  return reasoningTelemetrySnapshots.find(
    snapshot => snapshot.id === id
  );
}

export function clearReasoningTelemetry():
  void {
  reasoningTelemetrySnapshots.length = 0;
}

export function countReasoningTelemetry():
  number {
  return reasoningTelemetrySnapshots.length;
}

export function getReasoningTelemetrySummary():
  Record<string, unknown> {
  const latest =
    getLatestReasoningTelemetry();

  return {
    snapshots: countReasoningTelemetry(),
    latestId: latest?.id,
    status: latest?.health.status,
    ready: latest?.health.ready,
    capturedAt: latest?.capturedAt,
  };
}
