/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Health Monitor oficial da Governança Cognitiva.
 * Responsável por diagnosticar a saúde
 * executiva da Cognitive Governance™.
 */

import {
  GovernanceHealth,
} from "./governance.types";

import { getGovernanceRuntime } from "./governance.lifecycle";
import { listPolicies } from "./governance.policies";
import { listRules } from "./governance.rules";
import { getGovernanceMonitorSnapshot } from "./governance.monitor";

export function checkGovernanceHealth(): GovernanceHealth {
  const runtime = getGovernanceRuntime();
  const snapshot = getGovernanceMonitorSnapshot();

  const issues: string[] = [];

  if (runtime.status === "failed") {
    issues.push("Governance runtime failed.");
  }

  if (listPolicies().length === 0) {
    issues.push("No governance policies registered.");
  }

  if (listRules().length === 0) {
    issues.push("No governance rules registered.");
  }

  if (snapshot.criticalRisks > 0) {
    issues.push(`${snapshot.criticalRisks} critical risk(s) detected.`);
  }

  if (snapshot.violations > 0) {
    issues.push(`${snapshot.violations} compliance violation(s) detected.`);
  }

  const status =
    runtime.status === "failed"
      ? "failed"
      : issues.length > 0
        ? "degraded"
        : "healthy";

  return {
    status,
    runtimeStatus: runtime.status,
    totalPolicies: listPolicies().length,
    totalRules: listRules().length,
    totalDecisions: runtime.decisions,
    issues,
    checkedAt: new Date().toISOString(),
  };
}

export function isGovernanceHealthOk(): boolean {
  return checkGovernanceHealth().status === "healthy";
}

export function getGovernanceHealthSummary(): string {
  const health = checkGovernanceHealth();

  return [
    `Governance Health: ${health.status}`,
    `Runtime Status: ${health.runtimeStatus}`,
    `Policies: ${health.totalPolicies}`,
    `Rules: ${health.totalRules}`,
    `Decisions: ${health.totalDecisions}`,
    `Issues: ${health.issues.length}`,
  ].join("\n");
}
