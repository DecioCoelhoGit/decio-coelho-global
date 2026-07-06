/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Monitor oficial da Camada
 * de Contexto Cognitivo.
 */

import { contextStore } from "./context.store";
import { countContextIndexes } from "./context.index";
import {
  countContextAudits,
  listFailedContextAudits,
} from "./context.audit";

export interface ContextMonitorSnapshot {
  status: "healthy" | "degraded" | "failed";
  contexts: number;
  activeContexts: number;
  indexes: number;
  audits: number;
  failedAudits: number;
  checkedAt: string;
}

export function getContextMonitorSnapshot():
  ContextMonitorSnapshot {
  const failedAudits = listFailedContextAudits().length;

  const status =
    failedAudits > 0
      ? "degraded"
      : "healthy";

  return {
    status,
    contexts: contextStore.count(),
    activeContexts: contextStore.listActive().length,
    indexes: countContextIndexes(),
    audits: countContextAudits(),
    failedAudits,
    checkedAt: new Date().toISOString(),
  };
}

export function isContextMonitorHealthy(): boolean {
  return getContextMonitorSnapshot().status === "healthy";
}

export function getContextMonitorSummary(): string {
  const snapshot = getContextMonitorSnapshot();

  return [
    `Context Status: ${snapshot.status}`,
    `Contexts: ${snapshot.contexts}`,
    `Active Contexts: ${snapshot.activeContexts}`,
    `Indexes: ${snapshot.indexes}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
