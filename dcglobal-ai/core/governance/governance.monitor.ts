/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Governance Monitor™
 * Responsável pelo monitoramento contínuo
 * da Governança Cognitiva.
 */

import { governanceRuntime } from "./governance.lifecycle";
import { countAudits, listFailedAudits } from "./governance.audit";
import { countRisks, listCriticalRisks } from "./governance.risk";
import { countApprovals, listPendingApprovals } from "./governance.approval";
import { countCompliance, listViolations } from "./governance.compliance";

export interface GovernanceMonitorSnapshot {
  status: string;
  runtimeStatus: string;
  audits: number;
  failedAudits: number;
  risks: number;
  criticalRisks: number;
  approvals: number;
  pendingApprovals: number;
  complianceChecks: number;
  violations: number;
  checkedAt: string;
}

export function getGovernanceMonitorSnapshot(): GovernanceMonitorSnapshot {
  return {
    status:
      governanceRuntime.status === "failed"
        ? "failed"
        : listCriticalRisks().length > 0 ||
            listViolations().length > 0
          ? "degraded"
          : "healthy",

    runtimeStatus: governanceRuntime.status,

    audits: countAudits(),
    failedAudits: listFailedAudits().length,

    risks: countRisks(),
    criticalRisks: listCriticalRisks().length,

    approvals: countApprovals(),
    pendingApprovals: listPendingApprovals().length,

    complianceChecks: countCompliance(),
    violations: listViolations().length,

    checkedAt: new Date().toISOString(),
  };
}

export function isGovernanceHealthy(): boolean {
  return getGovernanceMonitorSnapshot().status === "healthy";
}

export function getGovernanceMonitorSummary(): string {
  const snapshot = getGovernanceMonitorSnapshot();

  return [
    `Governance Status: ${snapshot.status}`,
    `Runtime: ${snapshot.runtimeStatus}`,
    `Audits: ${snapshot.audits}`,
    `Failed Audits: ${snapshot.failedAudits}`,
    `Risks: ${snapshot.risks}`,
    `Critical Risks: ${snapshot.criticalRisks}`,
    `Approvals: ${snapshot.approvals}`,
    `Pending Approvals: ${snapshot.pendingApprovals}`,
    `Compliance Checks: ${snapshot.complianceChecks}`,
    `Violations: ${snapshot.violations}`,
    `Checked At: ${snapshot.checkedAt}`,
  ].join("\n");
}
