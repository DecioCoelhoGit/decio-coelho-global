/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Motor Oficial de Aprovação Cognitiva.
 *
 * Responsável por registrar,
 * aprovar, rejeitar e consultar
 * solicitações institucionais.
 */

import { GovernanceApproval } from "./governance.types";

export const governanceApprovals: GovernanceApproval[] = [];

export function registerApproval(
  approval: GovernanceApproval
): GovernanceApproval {
  governanceApprovals.push(approval);
  return approval;
}

export function listApprovals(): GovernanceApproval[] {
  return [...governanceApprovals];
}

export function findApproval(
  id: string
): GovernanceApproval | undefined {
  return governanceApprovals.find(
    approval => approval.id === id
  );
}

export function listPendingApprovals(): GovernanceApproval[] {
  return governanceApprovals.filter(
    approval => approval.status === "pending"
  );
}

export function listApprovedApprovals(): GovernanceApproval[] {
  return governanceApprovals.filter(
    approval => approval.status === "approved"
  );
}

export function listRejectedApprovals(): GovernanceApproval[] {
  return governanceApprovals.filter(
    approval => approval.status === "rejected"
  );
}

export function approveRequest(
  id: string,
  approver: string
): boolean {
  const approval = findApproval(id);

  if (!approval) {
    return false;
  }

  approval.status = "approved";
  approval.approver = approver;
  approval.updatedAt = new Date().toISOString();

  return true;
}

export function rejectRequest(
  id: string,
  approver: string,
  reason: string
): boolean {
  const approval = findApproval(id);

  if (!approval) {
    return false;
  }

  approval.status = "rejected";
  approval.approver = approver;
  approval.reason = reason;
  approval.updatedAt = new Date().toISOString();

  return true;
}

export function createApproval(
  title: string,
  requester: string,
  scope: GovernanceApproval["scope"]
): GovernanceApproval {
  return registerApproval({
    id: `approval-${Date.now()}`,
    title,
    requester,
    approver: "",
    scope,
    status: "pending",
    reason: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export function clearApprovals(): void {
  governanceApprovals.length = 0;
}

export function countApprovals(): number {
  return governanceApprovals.length;
}
