/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Observer oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningExecution,
  listReasoningExecutions,
} from "./reasoning.execution";

import {
  captureReasoningTelemetry,
} from "./reasoning.telemetry";

import {
  getReasoningTraceSummary,
} from "./reasoning.trace";

export interface ReasoningObserverSnapshot {
  id: string;
  source: "reasoning-observer";
  executions: ReasoningExecution[];
  telemetry: ReturnType<
    typeof captureReasoningTelemetry
  >;
  traceSummary: ReturnType<
    typeof getReasoningTraceSummary
  >;
  observedAt: string;
}

const reasoningObserverSnapshots:
  ReasoningObserverSnapshot[] = [];

export function observeReasoning():
  ReasoningObserverSnapshot {
  const snapshot: ReasoningObserverSnapshot = {
    id: `reasoning-observer-${Date.now()}`,
    source: "reasoning-observer",
    executions: listReasoningExecutions(),
    telemetry: captureReasoningTelemetry(),
    traceSummary: getReasoningTraceSummary(),
    observedAt: new Date().toISOString(),
  };

  reasoningObserverSnapshots.push(snapshot);

  return snapshot;
}

export function listReasoningObserverSnapshots():
  ReasoningObserverSnapshot[] {
  return [...reasoningObserverSnapshots];
}

export function getLatestReasoningObserverSnapshot():
  ReasoningObserverSnapshot | undefined {
  return reasoningObserverSnapshots[
    reasoningObserverSnapshots.length - 1
  ];
}

export function clearReasoningObserverSnapshots():
  void {
  reasoningObserverSnapshots.length = 0;
}

export function countReasoningObserverSnapshots():
  number {
  return reasoningObserverSnapshots.length;
}

export function getReasoningObserverSummary():
  Record<string, unknown> {
  const latest =
    getLatestReasoningObserverSnapshot();

  return {
    snapshots: countReasoningObserverSnapshots(),
    latestId: latest?.id,
    executions:
      latest?.executions.length ?? 0,
    telemetryId:
      latest?.telemetry.id,
    traceSummary:
      latest?.traceSummary,
    observedAt:
      latest?.observedAt,
  };
}
