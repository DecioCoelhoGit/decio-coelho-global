/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Health oficial da Camada
 * de Contexto Cognitivo.
 */

import {
  getContextMonitorSnapshot,
} from "./context.monitor";

export interface ContextHealth {
  status: "healthy" | "warning" | "critical";
  score: number;
  message: string;
  checkedAt: string;
}

export function checkContextHealth():
  ContextHealth {
  const snapshot = getContextMonitorSnapshot();

  let score = 100;

  let status: ContextHealth["status"] =
    "healthy";

  let message =
    "Context operating normally.";

  if (snapshot.failedAudits > 0) {
    score -= 20;

    status = "warning";

    message =
      "Context audit failures detected.";
  }

  if (snapshot.contexts === 0) {
    score -= 30;

    status = "warning";

    message =
      "No cognitive contexts registered.";
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

export function isContextHealthy(): boolean {
  return checkContextHealth().status === "healthy";
}

export function getContextHealthSummary(): string {
  const health = checkContextHealth();

  return [
    `Context Health: ${health.status}`,
    `Score: ${health.score}`,
    `Message: ${health.message}`,
    `Checked At: ${health.checkedAt}`,
  ].join("\n");
}
