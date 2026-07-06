/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Health oficial da Camada
 * de Memória Cognitiva.
 */

import {
  getMemoryMonitorSnapshot,
} from "./memory.monitor";

export interface MemoryHealth {
  status: "healthy" | "warning" | "critical";
  score: number;
  message: string;
  checkedAt: string;
}

export function checkMemoryHealth(): MemoryHealth {
  const snapshot = getMemoryMonitorSnapshot();

  let score = 100;
  let status: MemoryHealth["status"] = "healthy";
  let message = "Memory operating normally.";

  if (snapshot.failedAudits > 0) {
    score -= 20;
    status = "warning";
    message = "Memory audit failures detected.";
  }

  if (snapshot.records === 0) {
    score -= 30;
    status = "warning";
    message = "No memory records registered.";
  }

  if (score <= 50) {
    status = "critical";
  }

  return {
    status,
    score,
    message,
    checkedAt: new Date().toISOString(),
  };
}

export function isMemoryHealthy(): boolean {
  return checkMemoryHealth().status === "healthy";
}

export function getMemoryHealthSummary(): string {
  const health = checkMemoryHealth();

  return [
    `Memory Health: ${health.status}`,
    `Score: ${health.score}%`,
    `Message: ${health.message}`,
    `Checked At: ${health.checkedAt}`,
  ].join("\n");
}
