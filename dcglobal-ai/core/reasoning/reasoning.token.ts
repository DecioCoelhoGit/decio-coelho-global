/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Token oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  issueReasoningCredential,
} from "./reasoning.credential";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningTokenStatus =
  | "active"
  | "conditional"
  | "revoked";

export interface ReasoningTokenResult {
  id: string;
  status: ReasoningTokenStatus;
  active: boolean;
  credential: ReturnType<
    typeof issueReasoningCredential
  >;
  tokenId: string;
  claims: string[];
  reason: string;
  issuedAt: string;
  expiresAt?: string;
}

const reasoningTokenHistory:
  ReasoningTokenResult[] = [];

export function issueReasoningToken(
  context: ReasoningPolicyContext
): ReasoningTokenResult {
  const credential =
    issueReasoningCredential(context);

  const status: ReasoningTokenStatus =
    credential.status === "denied"
      ? "revoked"
      : credential.status === "conditional"
        ? "conditional"
        : "active";

  const issuedAt = new Date();

  const expiresAt =
    context.metadata?.expiresAt as string | undefined;

  const claims =
    (context.metadata?.claims as string[] | undefined)
    ?? credential.claims;

  const result: ReasoningTokenResult = {
    id: `reasoning-token-${Date.now()}`,
    status,
    active: status === "active",
    credential,
    tokenId: `DCG-REASONING-TOKEN-${Date.now()}`,
    claims,
    reason: credential.reason,
    issuedAt: issuedAt.toISOString(),
    expiresAt,
  };

  reasoningTokenHistory.push(result);

  return result;
}

export function listReasoningTokenHistory():
  ReasoningTokenResult[] {
  return [...reasoningTokenHistory];
}

export function getLatestReasoningToken():
  ReasoningTokenResult | undefined {
  return reasoningTokenHistory[
    reasoningTokenHistory.length - 1
  ];
}

export function clearReasoningTokenHistory():
  void {
  reasoningTokenHistory.length = 0;
}

export function countReasoningTokenResults():
  number {
  return reasoningTokenHistory.length;
}

export function isReasoningTokenActive():
  boolean {
  return (
    getLatestReasoningToken()
      ?.active ?? true
  );
}
