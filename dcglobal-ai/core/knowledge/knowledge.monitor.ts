/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Monitor oficial da Camada
 * de Conhecimento Cognitivo.
 */

import { knowledgeStore } from "./knowledge.store";
import { countKnowledgeIndexes } from "./knowledge.index";
import {
  countKnowledgeAudits,
  listFailedKnowledgeAudits,
} from "./knowledge.audit";

export interface KnowledgeMonitorSnapshot {
  status: "healthy" | "degraded" | "failed";
  records: number;
  activeRecords: number;
  indexes: number;
  audits: number;
  failedAudits: number;
  checkedAt: string;
}

export function getKnowledgeMonitorSnapshot():
  KnowledgeMonitorSnapshot {
  const failedAudits =
    listFailedKnowledgeAudits().length;

  const status =
    failedAudits > 0
      ? "degraded"
      : "healthy";

  return {
    status,
    records: knowledgeStore.count(),
    activeRecords: knowledgeStore.listActive().length,
    indexes: countKnowledgeIndexes(),
    audits: countKnowledgeAudits(),
    failedAudits,
    checkedAt: new Date().toISOString(),
  };
}

export function isKnowledgeMonitorHealthy():
  boolean {
  return getKnowledgeMonitorSnapshot().status === "healthy";
}

export function getKnowledgeMonitorSummary():
  string {
  const snapshot =
    getKnowledgeMonitorSnapshot();

  return [
    `Knowledge Status: ${snapshot.status}`,
    `Records: ${snapshot.records}`,
    `Active Records: ${snapshot.activeRecords}`,
    `Indexes: ${snapshot.indexes}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
