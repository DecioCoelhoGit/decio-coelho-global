/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Certificate oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  signReasoning,
} from "./reasoning.signature";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCertificateStatus =
  | "certified"
  | "conditional"
  | "uncertified";

export interface ReasoningCertificateResult {
  id: string;
  status: ReasoningCertificateStatus;
  certified: boolean;
  signature: ReturnType<typeof signReasoning>;
  certificateId: string;
  issuer: string;
  reason: string;
  certifiedAt: string;
}

const reasoningCertificateHistory:
  ReasoningCertificateResult[] = [];

export function certifyReasoning(
  context: ReasoningPolicyContext
): ReasoningCertificateResult {
  const signature = signReasoning(context);

  const status: ReasoningCertificateStatus =
    signature.status === "unsigned"
      ? "uncertified"
      : signature.status === "conditional"
        ? "conditional"
        : "certified";

  const issuer =
    (context.metadata?.issuer as string | undefined)
    ?? "dcglobal-ai-cognitive-authority";

  const result: ReasoningCertificateResult = {
    id: `reasoning-certificate-${Date.now()}`,
    status,
    certified: status === "certified",
    signature,
    certificateId:
      `DCG-REASONING-CERT-${Date.now()}`,
    issuer,
    reason: signature.reason,
    certifiedAt: new Date().toISOString(),
  };

  reasoningCertificateHistory.push(result);

  return result;
}

export function listReasoningCertificateHistory():
  ReasoningCertificateResult[] {
  return [...reasoningCertificateHistory];
}

export function getLatestReasoningCertificate():
  ReasoningCertificateResult | undefined {
  return reasoningCertificateHistory[
    reasoningCertificateHistory.length - 1
  ];
}

export function clearReasoningCertificateHistory():
  void {
  reasoningCertificateHistory.length = 0;
}

export function countReasoningCertificateResults():
  number {
  return reasoningCertificateHistory.length;
}

export function isReasoningCertified():
  boolean {
  return (
    getLatestReasoningCertificate()
      ?.certified ?? true
  );
}
