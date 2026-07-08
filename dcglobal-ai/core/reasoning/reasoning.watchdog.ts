/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Watchdog oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  observeReasoning,
  getReasoningObserverSummary,
} from "./reasoning.observer";

import {
  getReasoningRuntimeHealth,
} from "./reasoning.runtime-health";

export type ReasoningWatchdogStatus =
  | "normal"
  | "warning"
  | "critical";

export interface ReasoningWatchdogSnapshot {
  id: string;
  status: ReasoningWatchdogStatus;
  healthy: boolean;
  observer: ReturnType<
    typeof getReasoningObserverSummary
  >;
  health: ReturnType<
    typeof getReasoningRuntimeHealth
  >;
  checkedAt: string;
}

const reasoningWatchdogSnapshots:
  ReasoningWatchdogSnapshot[] = [];

export function runReasoningWatchdog():
  ReasoningWatchdogSnapshot {
  observeReasoning();

  const health =
    getReasoningRuntimeHealth();

  const observer =
    getReasoningObserverSummary();

  const status:
    ReasoningWatchdogStatus =
    health.status === "healthy"
      ? "normal"
      : health.status === "degraded"
        ? "warning"
        : "critical";

  const snapshot: ReasoningWatchdogSnapshot = {
    id: `reasoning-watchdog-${Date.now()}`,
    status,
    healthy: status === "normal",
    observer,
    health,
    checkedAt: new Date().toISOString(),
  };

  reasoningWatchdogSnapshots.push(snapshot);

  return snapshot;
}

export function listReasoningWatchdogSnapshots():
  ReasoningWatchdogSnapshot[] {
  return [...reasoningWatchdogSnapshots];
}

export function getLatestReasoningWatchdogSnapshot():
  ReasoningWatchdogSnapshot | undefined {
  return reasoningWatchdogSnapshots[
    reasoningWatchdogSnapshots.length - 1
  ];
}

export function clearReasoningWatchdogSnapshots():
  void {
  reasoningWatchdogSnapshots.length = 0;
}

export function countReasoningWatchdogSnapshots():
  number {
  return reasoningWatchdogSnapshots.length;
}

export function isReasoningWatchdogHealthy():
  boolean {
  return (
    getLatestReasoningWatchdogSnapshot()
      ?.healthy ?? false
  );
}
