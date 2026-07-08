/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Acceptance Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToReception,
} from "./reasoning.reception-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAcceptanceLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningAcceptanceLinkResult {
  id: string;
  status: ReasoningAcceptanceLinkStatus;
  linked: boolean;
  reception: ReturnType<typeof linkReasoningToReception>;
  acceptanceLinkId: string;
  acceptance: string;
  reason: string;
  linkedAt: string;
}

const reasoningAcceptanceLinkHistory:
  ReasoningAcceptanceLinkResult[] = [];

export function linkReasoningToAcceptance(
  context: ReasoningPolicyContext
): ReasoningAcceptanceLinkResult {
  const reception = linkReasoningToReception(context);

  const status: ReasoningAcceptanceLinkStatus =
    reception.status === "unlinked"
      ? "unlinked"
      : reception.status === "conditional"
        ? "conditional"
        : "linked";

  const acceptance =
    (context.metadata?.acceptance as string | undefined)
    ?? "dcglobal-ai-cognitive-acceptance";

  const result: ReasoningAcceptanceLinkResult = {
    id: `reasoning-acceptance-link-${Date.now()}`,
    status,
    linked: status === "linked",
    reception,
    acceptanceLinkId:
      `DCG-REASONING-ACCEPTANCE-${Date.now()}`,
    acceptance,
    reason: reception.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningAcceptanceLinkHistory.push(result);

  return result;
}

export function listReasoningAcceptanceLinkHistory():
  ReasoningAcceptanceLinkResult[] {
  return [...reasoningAcceptanceLinkHistory];
}

export function getLatestReasoningAcceptanceLink():
  ReasoningAcceptanceLinkResult | undefined {
  return reasoningAcceptanceLinkHistory[
    reasoningAcceptanceLinkHistory.length - 1
  ];
}

export function clearReasoningAcceptanceLinkHistory():
  void {
  reasoningAcceptanceLinkHistory.length = 0;
}

export function countReasoningAcceptanceLinkResults():
  number {
  return reasoningAcceptanceLinkHistory.length;
}

export function isReasoningLinkedToAcceptance():
  boolean {
  return (
    getLatestReasoningAcceptanceLink()
      ?.linked ?? true
  );
}
