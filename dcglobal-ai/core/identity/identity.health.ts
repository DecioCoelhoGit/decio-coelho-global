/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Health oficial da
 * Camada de Identidade Cognitiva.
 */

import {
  getIdentityMonitorSnapshot,
} from "./identity.monitor";

export interface IdentityHealth {
  status: "healthy" | "warning" | "critical";
  score: number;
  message: string;
  checkedAt: string;
}

export function checkIdentityHealth(): IdentityHealth {
  const snapshot = getIdentityMonitorSnapshot();

  let score = 100;
  let status: IdentityHealth["status"] = "healthy";
  let message = "Identity operating normally.";

  if (snapshot.failedAudits > 0) {
    score -= 20;
    status = "warning";
    message = "Audit failures detected.";
  }

  if (snapshot.activeIdentities === 0) {
    score -= 40;
    status = "critical";
    message = "No active identities available.";
  }

  return {
    status,
    score,
    message,
    checkedAt: new Date().toISOString(),
  };
}

export function isIdentityHealthy(): boolean {
  return checkIdentityHealth().status === "healthy";
}

export function getIdentityHealthSummary(): string {
  const health = checkIdentityHealth();

  return [
    `Status: ${health.status}`,
    `Score: ${health.score}%`,
    `Message: ${health.message}`,
    `Checked At: ${health.checkedAt}`,
  ].join("\n");
}
