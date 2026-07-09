/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Mission Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToPurpose,
} from "./reasoning.purpose-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningMissionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningMissionLinkResult {
  id: string;
  status: ReasoningMissionLinkStatus;
  linked: boolean;
  purpose: ReturnType<typeof linkReasoningToPurpose>;
  missionLinkId: string;
  mission: string;
  reason: string;
  linkedAt: string;
}

const reasoningMissionLinkHistory:
  ReasoningMissionLinkResult[] = [];

export function linkReasoningToMission(
  context: ReasoningPolicyContext
): ReasoningMissionLinkResult {
  const purpose = linkReasoningToPurpose(context);

  const status: ReasoningMissionLinkStatus =
    purpose.status === "unlinked"
      ? "unlinked"
      : purpose.status === "conditional"
        ? "conditional"
        : "linked";

  const mission =
    (context.metadata?.mission as string | undefined)
    ?? "dcglobal-ai-cognitive-mission";

  const result: ReasoningMissionLinkResult = {
    id: `reasoning-mission-link-${Date.now()}`,
    status,
    linked: status === "linked",
    purpose,
    missionLinkId:
      `DCG-REASONING-MISSION-${Date.now()}`,
    mission,
    reason: purpose.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningMissionLinkHistory.push(result);

  return result;
}

export function listReasoningMissionLinkHistory():
  ReasoningMissionLinkResult[] {
  return [...reasoningMissionLinkHistory];
}

export function getLatestReasoningMissionLink():
  ReasoningMissionLinkResult | undefined {
  return reasoningMissionLinkHistory[
    reasoningMissionLinkHistory.length - 1
  ];
}

export function clearReasoningMissionLinkHistory():
  void {
  reasoningMissionLinkHistory.length = 0;
}

export function countReasoningMissionLinkResults():
  number {
  return reasoningMissionLinkHistory.length;
}

export function isReasoningLinkedToMission():
  boolean {
  return (
    getLatestReasoningMissionLink()
      ?.linked ?? true
  );
}
