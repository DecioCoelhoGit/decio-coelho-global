/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Compliance Engine™
 *
 * Responsável por validar conformidade,
 * registrar verificações, acompanhar
 * violações e fornecer indicadores
 * institucionais de compliance.
 */

import { GovernanceCompliance } from "./governance.types";

export const governanceCompliance: GovernanceCompliance[] = [];

export function registerCompliance(
  compliance: GovernanceCompliance
): GovernanceCompliance {
  governanceCompliance.push(compliance);
  return compliance;
}

export function listCompliance(): GovernanceCompliance[] {
  return [...governanceCompliance];
}

export function findCompliance(
  id: string
): GovernanceCompliance | undefined {
  return governanceCompliance.find(
    item => item.id === id
  );
}

export function listCompliant(): GovernanceCompliance[] {
  return governanceCompliance.filter(
    item => item.status === "compliant"
  );
}

export function listViolations(): GovernanceCompliance[] {
  return governanceCompliance.filter(
    item => item.status === "violation"
  );
}

export function updateComplianceStatus(
  id: string,
  status: GovernanceCompliance["status"]
): boolean {
  const item = findCompliance(id);

  if (!item) {
    return false;
  }

  item.status = status;
  item.updatedAt = new Date().toISOString();

  return true;
}

export function createCompliance(
  scope: GovernanceCompliance["scope"],
  policy: string,
  actor: string
): GovernanceCompliance {
  return registerCompliance({
    id: `compliance-${Date.now()}`,
    scope,
    policy,
    actor,
    status: "compliant",
    details: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

export function removeCompliance(
  id: string
): boolean {
  const index = governanceCompliance.findIndex(
    item => item.id === id
  );

  if (index === -1) {
    return false;
  }

  governanceCompliance.splice(index, 1);
  return true;
}

export function clearCompliance(): void {
  governanceCompliance.length = 0;
}

export function countCompliance(): number {
  return governanceCompliance.length;
}
