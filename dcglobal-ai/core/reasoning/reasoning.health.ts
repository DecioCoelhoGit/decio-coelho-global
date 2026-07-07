/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Health oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  getReasoningMonitorSnapshot,
} from "./reasoning.monitor";

export interface ReasoningHealth {
  status: "healthy" | "warning" | "critical";
  score: number;
  message: string;
  checkedAt: string;
}

export function checkReasoningHealth():
  ReasoningHealth {
  const snapshot =
    getReasoningMonitorSnapshot();

  let score = 100;
  let status: ReasoningHealth["status"] =
    "healthy";
  let message =
    "Reasoning operating normally.";

  if (snapshot.failedAudits > 0) {
    score -= 25;
    status = "warning";
    message =
      "Reasoning audit failures detected.";
  }

  if (snapshot.records === 0) {
    score -= 30;
    status = "warning";
    message =
      "No reasoning records registered.";
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

export function isReasoningHealthy(): boolean {
  return checkReasoningHealth().status ===
    "healthy";
}

export function getReasoningHealthSummary():
  string {
  const health = checkReasoningHealth();

  return [
    `Reasoning Health: ${health.status}`,
    `Score: ${health.score}`,
    `Message: ${health.message}`,
    `Checked At: ${health.checkedAt}`,
  ].join("\n");
}
