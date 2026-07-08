/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Supervisor oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  runReasoningResilience,
  isReasoningResilient,
} from "./reasoning.resilience";

import {
  observeReasoning,
} from "./reasoning.observer";

import {
  getReasoningRuntimeState,
} from "./reasoning.runtime";

export type ReasoningSupervisorStatus =
  | "operational"
  | "watching"
  | "recovering"
  | "degraded"
  | "failed";

export interface ReasoningSupervisorSnapshot {
  id: string;
  status: ReasoningSupervisorStatus;
  resilient: boolean;
  runtime: ReturnType<
    typeof getReasoningRuntimeState
  >;
  observation: ReturnType<
    typeof observeReasoning
  >;
  supervisedAt: string;
}

const reasoningSupervisorHistory:
  ReasoningSupervisorSnapshot[] = [];

export function superviseReasoning():
  ReasoningSupervisorSnapshot {
  const resilience =
    runReasoningResilience();

  const observation =
    observeReasoning();

  const resilient =
    isReasoningResilient();

  let status: ReasoningSupervisorStatus =
    "operational";

  if (resilience.status === "protected") {
    status = "watching";
  }

  if (resilience.status === "recovered") {
    status = "recovering";
  }

  if (resilience.status === "degraded") {
    status = "degraded";
  }

  if (resilience.status === "failed") {
    status = "failed";
  }

  const snapshot: ReasoningSupervisorSnapshot = {
    id: `reasoning-supervisor-${Date.now()}`,
    status,
    resilient,
    runtime: getReasoningRuntimeState(),
    observation,
    supervisedAt: new Date().toISOString(),
  };

  reasoningSupervisorHistory.push(snapshot);

  return snapshot;
}

export function listReasoningSupervisorHistory():
  ReasoningSupervisorSnapshot[] {
  return [...reasoningSupervisorHistory];
}

export function getLatestReasoningSupervisorSnapshot():
  ReasoningSupervisorSnapshot | undefined {
  return reasoningSupervisorHistory[
    reasoningSupervisorHistory.length - 1
  ];
}

export function clearReasoningSupervisorHistory():
  void {
  reasoningSupervisorHistory.length = 0;
}

export function countReasoningSupervisorSnapshots():
  number {
  return reasoningSupervisorHistory.length;
}

export function isReasoningSupervisorOperational():
  boolean {
  const latest =
    getLatestReasoningSupervisorSnapshot();

  if (!latest) {
    return true;
  }

  return (
    latest.status === "operational" ||
    latest.status === "watching" ||
    latest.status === "recovering"
  );
}
