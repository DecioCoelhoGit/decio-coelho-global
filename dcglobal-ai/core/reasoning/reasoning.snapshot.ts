/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Snapshot oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  reasoningStore,
} from "./reasoning.store";

import {
  getReasoningMonitorSnapshot,
  ReasoningMonitorSnapshot,
} from "./reasoning.monitor";

import {
  checkReasoningHealth,
  ReasoningHealth,
} from "./reasoning.health";

export interface ReasoningSnapshot {
  timestamp: string;

  records: ReasoningRecord[];

  monitor: ReasoningMonitorSnapshot;

  health: ReasoningHealth;
}

const reasoningSnapshots:
  ReasoningSnapshot[] = [];

export function createReasoningSnapshot():
  ReasoningSnapshot {
  const snapshot: ReasoningSnapshot = {
    timestamp: new Date().toISOString(),

    records: reasoningStore.list(),

    monitor: getReasoningMonitorSnapshot(),

    health: checkReasoningHealth(),
  };

  reasoningSnapshots.push(snapshot);

  return snapshot;
}

export function listReasoningSnapshots():
  ReasoningSnapshot[] {
  return [...reasoningSnapshots];
}

export function getLatestReasoningSnapshot():
  ReasoningSnapshot | undefined {
  return reasoningSnapshots.at(-1);
}

export function clearReasoningSnapshots():
  void {
  reasoningSnapshots.length = 0;
}

export function countReasoningSnapshots():
  number {
  return reasoningSnapshots.length;
}
