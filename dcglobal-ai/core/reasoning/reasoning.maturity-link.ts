/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Maturity Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToPreparedness,
} from "./reasoning.preparedness-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningMaturityLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningMaturityLinkResult {
  id: string;
  status: ReasoningMaturityLinkStatus;
  linked: boolean;
  preparedness: ReturnType<typeof linkReasoningToPreparedness>;
  maturityLinkId: string;
  maturity: string;
  reason: string;
  linkedAt: string;
}

const reasoningMaturityLinkHistory:
  ReasoningMaturityLinkResult[] = [];

export function linkReasoningToMaturity(
  context: ReasoningPolicyContext
): ReasoningMaturityLinkResult {
  const preparedness = linkReasoningToPreparedness(context);

  const status: ReasoningMaturityLinkStatus =
    preparedness.status === "unlinked"
      ? "unlinked"
      : preparedness.status === "conditional"
        ? "conditional"
        : "linked";

  const maturity =
    (context.metadata?.maturity as string | undefined)
    ?? "dcglobal-ai-cognitive-maturity";

  const result: ReasoningMaturityLinkResult = {
    id: `reasoning-maturity-link-${Date.now()}`,
    status,
    linked: status === "linked",
    preparedness,
    maturityLinkId:
      `DCG-REASONING-MATURITY-${Date.now()}`,
    maturity,
    reason: preparedness.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningMaturityLinkHistory.push(result);

  return result;
}

export function listReasoningMaturityLinkHistory():
  ReasoningMaturityLinkResult[] {
  return [...reasoningMaturityLinkHistory];
}

export function getLatestReasoningMaturityLink():
  ReasoningMaturityLinkResult | undefined {
  return reasoningMaturityLinkHistory[
    reasoningMaturityLinkHistory.length - 1
  ];
}

export function clearReasoningMaturityLinkHistory():
  void {
  reasoningMaturityLinkHistory.length = 0;
}

export function countReasoningMaturityLinkResults():
  number {
  return reasoningMaturityLinkHistory.length;
}

export function isReasoningLinkedToMaturity():
  boolean {
  return (
    getLatestReasoningMaturityLink()
      ?.linked ?? true
  );
}
