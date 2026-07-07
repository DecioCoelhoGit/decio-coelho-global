/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Health oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  getKnowledgeMonitorSnapshot,
} from "./knowledge.monitor";

export interface KnowledgeHealth {
  status: "healthy" | "warning" | "critical";
  score: number;
  message: string;
  checkedAt: string;
}

export function checkKnowledgeHealth():
  KnowledgeHealth {
  const snapshot =
    getKnowledgeMonitorSnapshot();

  let score = 100;
  let status: KnowledgeHealth["status"] =
    "healthy";
  let message =
    "Knowledge operating normally.";

  if (snapshot.failedAudits > 0) {
    score -= 20;
    status = "warning";
    message =
      "Knowledge audit failures detected.";
  }

  if (snapshot.records === 0) {
    score -= 30;
    status = "warning";
    message =
      "No knowledge records registered.";
  }

  if (score <= 50) {
    status = "critical";
  }

  return {
    status,
    score: Math.max(0, score),
    message,
    checkedAt: new Date().toISOString(),
  };
}

export function isKnowledgeHealthy(): boolean {
  return checkKnowledgeHealth().status === "healthy";
}

export function getKnowledgeHealthSummary(): string {
  const health = checkKnowledgeHealth();

  return [
    `Knowledge Health: ${health.status}`,
    `Score: ${health.score}`,
    `Message: ${health.message}`,
    `Checked At: ${health.checkedAt}`,
  ].join("\n");
}
