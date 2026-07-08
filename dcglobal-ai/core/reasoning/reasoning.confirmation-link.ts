/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Confirmation Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToAcceptance,
} from "./reasoning.acceptance-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningConfirmationLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningConfirmationLinkResult {
  id: string;
  status: ReasoningConfirmationLinkStatus;
  linked: boolean;
  acceptance: ReturnType<typeof linkReasoningToAcceptance>;
  confirmationLinkId: string;
  confirmation: string;
  reason: string;
  linkedAt: string;
}

const reasoningConfirmationLinkHistory:
  ReasoningConfirmationLinkResult[] = [];

export function linkReasoningToConfirmation(
  context: ReasoningPolicyContext
): ReasoningConfirmationLinkResult {
  const acceptance = linkReasoningToAcceptance(context);

  const status: ReasoningConfirmationLinkStatus =
    acceptance.status === "unlinked"
      ? "unlinked"
      : acceptance.status === "conditional"
        ? "conditional"
        : "linked";

  const confirmation =
    (context.metadata?.confirmation as string | undefined)
    ?? "dcglobal-ai-cognitive-confirmation";

  const result: ReasoningConfirmationLinkResult = {
    id: `reasoning-confirmation-link-${Date.now()}`,
    status,
    linked: status === "linked",
    acceptance,
    confirmationLinkId:
      `DCG-REASONING-CONFIRMATION-${Date.now()}`,
    confirmation,
    reason: acceptance.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningConfirmationLinkHistory.push(result);

  return result;
}

export function listReasoningConfirmationLinkHistory():
  ReasoningConfirmationLinkResult[] {
  return [...reasoningConfirmationLinkHistory];
}

export function getLatestReasoningConfirmationLink():
  ReasoningConfirmationLinkResult | undefined {
  return reasoningConfirmationLinkHistory[
    reasoningConfirmationLinkHistory.length - 1
  ];
}

export function clearReasoningConfirmationLinkHistory():
  void {
  reasoningConfirmationLinkHistory.length = 0;
}

export function countReasoningConfirmationLinkResults():
  number {
  return reasoningConfirmationLinkHistory.length;
}

export function isReasoningLinkedToConfirmation():
  boolean {
  return (
    getLatestReasoningConfirmationLink()
      ?.linked ?? true
  );
}
