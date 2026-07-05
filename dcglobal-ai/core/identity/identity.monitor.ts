/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Monitor oficial da Camada
 * de Identidade Cognitiva.
 */

import { identityStore } from "./identity.store";
import {
  countAudits,
  listFailedAudits,
} from "./identity.audit";

export interface IdentityMonitorSnapshot {
  status: "healthy" | "degraded" | "failed";
  identities: number;
  activeIdentities: number;
  audits: number;
  failedAudits: number;
  checkedAt: string;
}

export function getIdentityMonitorSnapshot(): IdentityMonitorSnapshot {
  const identities = identityStore.count();
  const activeIdentities = identityStore.listActive().length;
  const audits = countAudits();
  const failedAudits = listFailedAudits().length;

  const status =
    failedAudits > 0
      ? "degraded"
      : "healthy";

  return {
    status,
    identities,
    activeIdentities,
    audits,
    failedAudits,
    checkedAt: new Date().toISOString(),
  };
}

export function isIdentityMonitorHealthy(): boolean {
  return getIdentityMonitorSnapshot().status === "healthy";
}

export function getIdentityMonitorSummary(): string {
  const snapshot = getIdentityMonitorSnapshot();

  return [
    `Identity Status: ${snapshot.status}`,
    `Identities: ${snapshot.identities}`,
    `Active Identities: ${snapshot.activeIdentities}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
