/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Signature oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  sealReasoning,
} from "./reasoning.seal";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningSignatureStatus =
  | "signed"
  | "conditional"
  | "unsigned";

export interface ReasoningSignatureResult {
  id: string;
  status: ReasoningSignatureStatus;
  signed: boolean;
  seal: ReturnType<typeof sealReasoning>;
  signatureId: string;
  signer: string;
  reason: string;
  signedAt: string;
}

const reasoningSignatureHistory:
  ReasoningSignatureResult[] = [];

export function signReasoning(
  context: ReasoningPolicyContext
): ReasoningSignatureResult {
  const seal = sealReasoning(context);

  const status: ReasoningSignatureStatus =
    seal.status === "unsealed"
      ? "unsigned"
      : seal.status === "conditional"
        ? "conditional"
        : "signed";

  const signer =
    (context.metadata?.signer as string | undefined)
    ?? "dcglobal-ai-cognitive-reasoning";

  const result: ReasoningSignatureResult = {
    id: `reasoning-signature-${Date.now()}`,
    status,
    signed: status === "signed",
    seal,
    signatureId:
      `DCG-REASONING-SIGN-${Date.now()}`,
    signer,
    reason: seal.reason,
    signedAt: new Date().toISOString(),
  };

  reasoningSignatureHistory.push(result);

  return result;
}

export function listReasoningSignatureHistory():
  ReasoningSignatureResult[] {
  return [...reasoningSignatureHistory];
}

export function getLatestReasoningSignature():
  ReasoningSignatureResult | undefined {
  return reasoningSignatureHistory[
    reasoningSignatureHistory.length - 1
  ];
}

export function clearReasoningSignatureHistory():
  void {
  reasoningSignatureHistory.length = 0;
}

export function countReasoningSignatureResults():
  number {
  return reasoningSignatureHistory.length;
}

export function isReasoningSigned():
  boolean {
  return (
    getLatestReasoningSignature()
      ?.signed ?? true
  );
}
