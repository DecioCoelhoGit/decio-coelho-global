/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Gestão Oficial de Riscos Cognitivos.
 * Responsável por registrar,
 * classificar, monitorar e consultar
 * riscos institucionais.
 */

import { GovernanceRisk } from "./governance.types";

export const governanceRisks: GovernanceRisk[] = [];

export function registerRisk(
  risk: GovernanceRisk
): GovernanceRisk {
  governanceRisks.push(risk);
  return risk;
}

export function listRisks(): GovernanceRisk[] {
  return [...governanceRisks];
}

export function findRisk(
  id: string
): GovernanceRisk | undefined {
  return governanceRisks.find(
    risk => risk.id === id
  );
}

export function listOpenRisks(): GovernanceRisk[] {
  return governanceRisks.filter(
    risk => risk.status === "open"
  );
}

export function listMitigatedRisks(): GovernanceRisk[] {
  return governanceRisks.filter(
    risk => risk.status === "mitigated"
  );
}

export function listCriticalRisks(): GovernanceRisk[] {
  return governanceRisks.filter(
    risk => risk.level === "critical"
  );
}

export function updateRiskStatus(
  id: string,
  status: GovernanceRisk["status"]
): boolean {
  const risk = findRisk(id);

  if (!risk) {
    return false;
  }

  risk.status = status;
  risk.updatedAt = new Date().toISOString();

  return true;
}

export function createRisk(
  title: string,
  level: GovernanceRisk["level"],
  owner: string
): GovernanceRisk {
  return registerRisk({
    id: `risk-${Date.now()}`,
    title,
    description: "",
    level,
    owner,
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export function clearRisks(): void {
  governanceRisks.length = 0;
}

export function countRisks(): number {
  return governanceRisks.length;
}
