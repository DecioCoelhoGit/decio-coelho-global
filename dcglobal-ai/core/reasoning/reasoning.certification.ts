/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Certification oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  checkReasoningAssurance,
} from "./reasoning.assurance";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningCertificationStatus =
  | "certified"
  | "conditional"
  | "denied";

export interface ReasoningCertificationResult {
  id: string;
  status: ReasoningCertificationStatus;
  certified: boolean;
  assurance: ReturnType<
    typeof checkReasoningAssurance
  >;
  certificateId: string;
  reason: string;
  issuedAt: string;
}

const reasoningCertificationHistory:
  ReasoningCertificationResult[] = [];

export function certifyReasoning(
  context: ReasoningPolicyContext
): ReasoningCertificationResult {
  const assurance =
    checkReasoningAssurance(context);

  const status: ReasoningCertificationStatus =
    assurance.status === "unsafe"
      ? "denied"
      : assurance.status === "limited"
        ? "conditional"
        : "certified";

  const result: ReasoningCertificationResult = {
    id: `reasoning-certification-${Date.now()}`,
    status,
    certified: status === "certified",
    assurance,
    certificateId: `DCG-REASONING-CERT-${Date.now()}`,
    reason: assurance.reason,
    issuedAt: new Date().toISOString(),
  };

  reasoningCertificationHistory.push(result);

  return result;
}

export function listReasoningCertificationHistory():
  ReasoningCertificationResult[] {
  return [...reasoningCertificationHistory];
}

export function getLatestReasoningCertification():
  ReasoningCertificationResult | undefined {
  return reasoningCertificationHistory[
    reasoningCertificationHistory.length - 1
  ];
}

export function clearReasoningCertificationHistory():
  void {
  reasoningCertificationHistory.length = 0;
}

export function countReasoningCertificationResults():
  number {
  return reasoningCertificationHistory.length;
}

export function isReasoningCertified():
  boolean {
  return (
    getLatestReasoningCertification()
      ?.certified ?? true
  );
}
