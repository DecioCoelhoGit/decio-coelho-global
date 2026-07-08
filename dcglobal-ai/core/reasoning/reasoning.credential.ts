/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Credential oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  grantReasoningEntitlement,
} from "./reasoning.entitlement";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCredentialStatus =
  | "issued"
  | "conditional"
  | "denied";

export interface ReasoningCredentialResult {
  id: string;
  status: ReasoningCredentialStatus;
  issued: boolean;
  entitlement: ReturnType<
    typeof grantReasoningEntitlement
  >;
  credentialId: string;
  claims: string[];
  reason: string;
  issuedAt: string;
}

const reasoningCredentialHistory:
  ReasoningCredentialResult[] = [];

export function issueReasoningCredential(
  context: ReasoningPolicyContext
): ReasoningCredentialResult {
  const entitlement =
    grantReasoningEntitlement(context);

  const status: ReasoningCredentialStatus =
    entitlement.status === "not-entitled"
      ? "denied"
      : entitlement.status === "conditional"
        ? "conditional"
        : "issued";

  const claims =
    (context.metadata?.claims as string[] | undefined)
    ?? [
      "reasoning-identity",
      "reasoning-entitlement",
      "reasoning-access-rights",
    ];

  const result: ReasoningCredentialResult = {
    id: `reasoning-credential-${Date.now()}`,
    status,
    issued: status === "issued",
    entitlement,
    credentialId: `DCG-REASONING-CRED-${Date.now()}`,
    claims,
    reason: entitlement.reason,
    issuedAt: new Date().toISOString(),
  };

  reasoningCredentialHistory.push(result);

  return result;
}

export function listReasoningCredentialHistory():
  ReasoningCredentialResult[] {
  return [...reasoningCredentialHistory];
}

export function getLatestReasoningCredential():
  ReasoningCredentialResult | undefined {
  return reasoningCredentialHistory[
    reasoningCredentialHistory.length - 1
  ];
}

export function clearReasoningCredentialHistory():
  void {
  reasoningCredentialHistory.length = 0;
}

export function countReasoningCredentialResults():
  number {
  return reasoningCredentialHistory.length;
}

export function isReasoningCredentialIssued():
  boolean {
  return (
    getLatestReasoningCredential()
      ?.issued ?? true
  );
}
