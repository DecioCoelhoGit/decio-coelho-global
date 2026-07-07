/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Monitor oficial da Camada
 * de Raciocínio Cognitivo.
 */

import { reasoningStore } from "./reasoning.store";
import { countReasoningIndexes } from "./reasoning.index";
import {
  countReasoningAudits,
  listFailedReasoningAudits,
} from "./reasoning.audit";
import { countReasoningTraces } from "./reasoning.trace";

export interface ReasoningMonitorSnapshot {
  status: "healthy" | "degraded" | "failed";
  records: number;
  activeRecords: number;
  indexes: ReturnType<typeof countReasoningIndexes>;
  audits: number;
  failedAudits: number;
  traces: number;
  checkedAt: string;
}

export function getReasoningMonitorSnapshot():
  ReasoningMonitorSnapshot {
  const failedAudits =
    listFailedReasoningAudits().length;

  const status =
    failedAudits > 0
      ? "degraded"
      : "healthy";

  return {
    status,
    records: reasoningStore.count(),
    activeRecords:
      reasoningStore.listActive().length,
    indexes: countReasoningIndexes(),
    audits: countReasoningAudits(),
    failedAudits,
    traces: countReasoningTraces(),
    checkedAt: new Date().toISOString(),
  };
}

export function isReasoningMonitorHealthy():
  boolean {
  return (
    getReasoningMonitorSnapshot().status ===
    "healthy"
  );
}

export function getReasoningMonitorSummary():
  string {
  const snapshot =
    getReasoningMonitorSnapshot();

  return [
    `Reasoning Status: ${snapshot.status}`,
    `Records: ${snapshot.records}`,
    `Active Records: ${snapshot.activeRecords}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Traces: ${snapshot.traces}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
