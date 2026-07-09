/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Benefit Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToValue,
} from "./reasoning.value-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningBenefitLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningBenefitLinkResult {
  id: string;
  status: ReasoningBenefitLinkStatus;
  linked: boolean;
  value: ReturnType<typeof linkReasoningToValue>;
  benefitLinkId: string;
  benefit: string;
  reason: string;
  linkedAt: string;
}

const reasoningBenefitLinkHistory:
  ReasoningBenefitLinkResult[] = [];

export function linkReasoningToBenefit(
  context: ReasoningPolicyContext
): ReasoningBenefitLinkResult {
  const value = linkReasoningToValue(context);

  const status: ReasoningBenefitLinkStatus =
    value.status === "unlinked"
      ? "unlinked"
      : value.status === "conditional"
        ? "conditional"
        : "linked";

  const benefit =
    (context.metadata?.benefit as string | undefined)
    ?? "dcglobal-ai-cognitive-benefit";

  const result: ReasoningBenefitLinkResult = {
    id: `reasoning-benefit-link-${Date.now()}`,
    status,
    linked: status === "linked",
    value,
    benefitLinkId:
      `DCG-REASONING-BENEFIT-${Date.now()}`,
    benefit,
    reason: value.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningBenefitLinkHistory.push(result);

  return result;
}

export function listReasoningBenefitLinkHistory():
  ReasoningBenefitLinkResult[] {
  return [...reasoningBenefitLinkHistory];
}

export function getLatestReasoningBenefitLink():
  ReasoningBenefitLinkResult | undefined {
  return reasoningBenefitLinkHistory[
    reasoningBenefitLinkHistory.length - 1
  ];
}

export function clearReasoningBenefitLinkHistory():
  void {
  reasoningBenefitLinkHistory.length = 0;
}

export function countReasoningBenefitLinkResults():
  number {
  return reasoningBenefitLinkHistory.length;
}

export function isReasoningLinkedToBenefit():
  boolean {
  return (
    getLatestReasoningBenefitLink()
      ?.linked ?? true
  );
}
